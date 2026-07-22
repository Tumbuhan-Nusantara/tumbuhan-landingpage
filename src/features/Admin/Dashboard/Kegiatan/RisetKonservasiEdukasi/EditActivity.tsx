"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import {
  ActivityDashType,
  ActivityPropsType,
  TypesDashType,
} from "@/src/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "@/src/components/ui/textarea";
import FormSkeleton from "@/src/components/Skeletons/FormSk";

const EditActivity = ({ activityId }: ActivityPropsType) => {
  const [act, setAct] = useState<ActivityDashType | null>(null);
  const [types, setTypes] = useState<TypesDashType[]>([]);
  const [originalAct, setOriginalAct] = useState<ActivityDashType | null>(null);

  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

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
      const activity = {
        ...response.data,
        tanggal_kegiatan: response.data.tanggal_kegiatan.split("T")[0],
      };
      setAct(activity);
      setOriginalAct(activity);
    } catch (error) {
      throw error;
    }
  };

  const isChanged =
    act &&
    originalAct &&
    (act.activity_name !== originalAct.activity_name ||
      act.deskripsi !== originalAct.deskripsi ||
      act.tanggal_kegiatan !== originalAct.tanggal_kegiatan ||
      act.tempat !== originalAct.tempat ||
      act.tipe_kegiatan_id !== originalAct.tipe_kegiatan_id ||
      selectedPhoto !== null);
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
      router.push("/admin/dashboard/kegiatan");
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
    return <FormSkeleton />;
  }
  return (
    <div className="p-6 space-y-6">
      <Toaster position="top-center" richColors />

      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">Edit Kegiatan</h1>

        <p className="mt-2 text-muted-foreground">
          Perbarui informasi kegiatan Yayasan Tumbuhan Asli Nusantara.
        </p>
      </div>

      <Card className="max-w-5xl overflow-hidden shadow-lg">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle className="text-xl text-[#1A4D2E]">
            Informasi Kegiatan
          </CardTitle>

          <CardDescription>
            Perbarui informasi kegiatan beserta dokumentasi yang akan
            ditampilkan pada website.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
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

            <div className="space-y-2">
              <Label>Nama Kegiatan</Label>

              <Input
                name="activity_name"
                value={act?.activity_name ?? ""}
                onChange={handleChange}
                placeholder="Masukkan nama kegiatan"
              />
            </div>

            <div className="space-y-2">
              <Label>Tanggal Kegiatan</Label>

              <Input
                type="date"
                name="tanggal_kegiatan"
                value={act?.tanggal_kegiatan ?? ""}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Lokasi</Label>

              <Input
                name="tempat"
                value={act?.tempat ?? ""}
                onChange={handleChange}
                placeholder="Masukkan lokasi kegiatan"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Deskripsi</Label>

              <Textarea
                name="deskripsi"
                rows={5}
                value={act?.deskripsi ?? ""}
                onChange={handleChange}
                placeholder="Masukkan deskripsi kegiatan..."
              />
            </div>

            <div className="space-y-3 md:col-span-2">
              <Label>Dokumentasi Saat Ini</Label>

              <div className="rounded-xl border bg-muted/20 p-4">
                {act?.photo_url ? (
                  <>
                    <Image
                      src={act.photo_url}
                      alt={act.activity_name}
                      width={900}
                      height={600}
                      className="h-72 w-full rounded-lg object-cover"
                      unoptimized
                    />

                    <p className="mt-3 text-xs text-muted-foreground break-all">
                      {act.photo_url.split("/").pop()}
                    </p>
                  </>
                ) : (
                  <div className="flex h-52 items-center justify-center rounded-lg border border-dashed">
                    <p className="text-sm text-muted-foreground">
                      Belum ada dokumentasi yang diunggah.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Ganti Dokumentasi</Label>

              <Input type="file" accept="image/*" onChange={handleFileChange} />

              <p className="text-xs text-muted-foreground">
                Upload foto baru hanya jika ingin mengganti dokumentasi
                kegiatan. Format yang didukung: JPG, JPEG, PNG.
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-3 border-t bg-muted/30 px-8 py-5">
          <Button variant="outline" onClick={() => router.back()}>
            Batal
          </Button>

          <Button
            onClick={handleUpdate}
            disabled={!isChanged}
            className="bg-[#1A4D2E] hover:bg-[#2B6B45] disabled:cursor-not-allowed disabled:opacity-50"
          >
            Simpan Perubahan
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EditActivity;
