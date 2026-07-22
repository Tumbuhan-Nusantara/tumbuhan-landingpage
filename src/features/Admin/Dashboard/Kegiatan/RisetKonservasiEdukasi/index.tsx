"use client";
import { columns } from "@/src/components/Data Table/activitycolumns";
import { DataTable } from "@/src/components/Data Table/data-table";
import FormSkeleton from "@/src/components/Skeletons/FormSk";
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
import { Textarea } from "@/src/components/ui/textarea";
import { axiosInstance } from "@/src/lib/axios";
import { ActivityDashType, TypesDashType } from "@/src/types";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const DashKegiatanFeat = () => {
  const [formData, setFormData] = useState({
    activity_name: "",
    deskripsi: "",
    tanggal_kegiatan: "",
    tempat: "",
    photo_url: null as File | null,
    tipe_kegiatan_id: undefined as number | undefined,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const [activity, setActivity] = useState<ActivityDashType[]>([]);
  const getActivities = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/v1/activities`);
      const result = response.data.data;
      setActivity(result);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    } catch (err) {
      console.error("apa error kegiatan", err);
      throw err;
    }
  };

  const [types, setTypes] = useState<TypesDashType[]>([]);
  const getTypes = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/activity-types`);
      const result = response.data.data;
      setTypes(result);
    } catch (err) {
      throw err;
    }
  };

  const createActivity = async () => {
    try {
      const data = new FormData();

      data.append("activity_name", formData.activity_name);
      data.append("deskripsi", formData.deskripsi);
      data.append("tanggal_kegiatan", formData.tanggal_kegiatan);
      data.append("tempat", formData.tempat);
      data.append(
        "tipe_kegiatan_id",
        formData.tipe_kegiatan_id?.toString() ?? "",
      );

      if (formData.photo_url) {
        data.append("photo_url", formData.photo_url);
      }

      await axiosInstance.post("/api/v1/activities/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await getActivities();

      toast.success("Berhasil ditambahkan");

      setFormData({
        activity_name: "",
        deskripsi: "",
        tanggal_kegiatan: "",
        tempat: "",
        photo_url: null,
        tipe_kegiatan_id: undefined,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      photo_url: file,
    }));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getActivities();
    getTypes();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <FormSkeleton />
      </div>
    );
  }
  return (
    <div className="p-6 space-y-6">
      <Toaster position="top-center" richColors />

      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">Kegiatan</h1>
        <p className="mt-2 text-muted-foreground">
          Kelola informasi kegiatan yang akan ditampilkan pada website.
        </p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2B6B45] to-[#4F8A5B] px-8 py-6">
          <h2 className="text-2xl font-semibold text-white">Tambah Kegiatan</h2>
          <p className="mt-2 text-sm text-green-100">
            Lengkapi informasi kegiatan beserta dokumentasinya.
          </p>
        </div>

        <CardContent className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Tipe Kegiatan</Label>
              <Select
                value={formData.tipe_kegiatan_id?.toString()}
                onValueChange={(value) =>
                  setFormData((prev) => ({
                    ...prev,
                    tipe_kegiatan_id: Number(value),
                  }))
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
              <Label>Nama Aktivitas</Label>
              <Input
                name="activity_name"
                value={formData.activity_name}
                onChange={handleChange}
                placeholder="Masukkan nama kegiatan"
              />
            </div>

            <div className="space-y-2">
              <Label>Tanggal Kegiatan</Label>
              <Input
                type="date"
                name="tanggal_kegiatan"
                value={formData.tanggal_kegiatan ?? ""}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Tempat</Label>
              <Input
                name="tempat"
                value={formData.tempat}
                onChange={handleChange}
                placeholder="Masukkan lokasi kegiatan"
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Deskripsi</Label>
              <Textarea
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                rows={5}
                placeholder="Masukkan deskripsi kegiatan..."
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Dokumentasi</Label>

              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />

              <p className="text-xs text-muted-foreground">
                Format: JPG, JPEG, PNG. Maksimal 1 foto.
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-end border-t bg-muted/30 px-8 py-4">
          <Button
            onClick={createActivity}
            className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
          >
            Tambah Kegiatan
          </Button>
        </CardFooter>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#1A4D2E]">Daftar Kegiatan</CardTitle>
          <CardDescription>
            Kelola seluruh kegiatan yang telah ditambahkan.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <DataTable columns={columns(getActivities)} data={activity} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashKegiatanFeat;
