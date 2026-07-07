"use client";
import CreateEditSkeleton from "@/components/Skeletons/CreateEditSk";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import {
  ActivityDashType,
  ActivityPropsType,
  TypesDashType,
} from "@/src/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditActivity = ({ activityId }: ActivityPropsType) => {
  const [act, setAct] = useState<ActivityDashType | null>(null);
  const [types, setTypes] = useState<TypesDashType[]>([]);

  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter();

  const getTypes = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/activity-types");

      setTypes(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getActivity = async (id: number) => {
    console.log(id);
    try {
      const response = await axiosInstance.get(`/api/v1/activities/${id}`);
      setAct({
        ...response.data,
        tanggal_kegiatan: response.data.tanggal_kegiatan.split("T")[0],
      });
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getTypes();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getActivity(activityId);
  }, [activityId]);

  const handleUpdate = async () => {
    if (!act) return;

    try {
      const formData = new FormData();

      formData.append("activity_name", act.activity_name);
      formData.append("deskripsi", act.deskripsi);
      formData.append("tanggal_kegiatan", act.tanggal_kegiatan);
      formData.append("tempat", act.tempat);

      if (act.tipe_kegiatan_id === null) {
        toast.error("Silakan pilih tipe kegiatan");
        return;
      }

      formData.append("tipe_kegiatan_id", act.tipe_kegiatan_id.toString());

      if (selectedPhoto) {
        formData.append("photo_url", selectedPhoto);
      }

      await axiosInstance.patch(`/api/v1/activities/${act.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Kegiatan berhasil diperbarui");
      router.push("/admin/dashboard/berita");
    } catch (err) {
      console.error(err);
      toast.error("Gagal memperbarui kegiatan");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    if (!act) return;

    setAct({
      ...act,
      [name]: value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedPhoto(file);
  };

  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <CreateEditSkeleton />;
}
  return (
    <div className="p-8">
      <Toaster position="top-center" richColors />
      <Card className="p-8">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label>Jenis Kegiatan</Label>
            <Select
              value={act?.tipe_kegiatan_id?.toString()}
              onValueChange={(value) =>
                setAct((prev) =>
                  prev
                    ? {
                        ...prev,
                        tipe_kegiatan_id: Number(value),
                      }
                    : null,
                )
              }
            >
              <SelectTrigger>
                <SelectValue placeholder="Pilih tipe kegiatan" />
              </SelectTrigger>

              <SelectContent>
                {types.map((item) => (
                  <SelectItem key={item.id} value={item.id.toString()}>
                    {item.nama_tipe}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label>Kegiatan</Label>
            <Input
              className="text-sm"
              name="activity_name"
              type="text"
              value={act?.activity_name ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Deskripsi</Label>
            <Input
              className="text-sm"
              name="deskripsi"
              type="text"
              value={act?.deskripsi ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Tanggal Kegiatan</Label>
            <Input
              type="date"
              className="text-sm"
              name="tanggal_kegiatan"
              value={act?.tanggal_kegiatan ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Lokasi</Label>
            <Input
              className="text-sm"
              name="tempat"
              type="text"
              value={act?.tempat ?? ""}
              onChange={handleChange}
            />
          </div>
          <Label>Foto Saat Ini</Label>

          {act?.photo_url && (
            <div className="space-y-2">
              <Image
                src={act.photo_url}
                alt={act.activity_name}
                width={300}
                height={200}
                className="rounded-lg border object-cover"
                unoptimized
              />

              <p className="text-xs text-gray-500">
                {act.photo_url.split("/").pop()}
              </p>
            </div>
          )}

          <div className="grid gap-2">
            <Label>Edit Foto Kegiatan</Label>
            <Input
              name="photo_url"
              type="file"
              accept="image/*"
              onChange={handleFileChange}
            />
          </div>
        </div>

        <Button
          onClick={handleUpdate}
          className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer mt-6"
        >
          Simpan Perubahan
        </Button>
      </Card>
    </div>
  );
};

export default EditActivity;
