"use client";
import { columns } from "@/components/Data Table/activitycolumns";
import { DataTable } from "@/components/Data Table/data-table";
import FormSkeleton from "@/components/Skeletons/FormSk";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
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
import { Textarea } from "@/components/ui/textarea";
import { axiosInstance } from "@/lib/axios";
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
  const [loading, setLoading] = useState<boolean>(true)


  const [activity, setActivity] = useState<ActivityDashType[]>([]);
  const getActivities = async () => {
    setLoading(true)
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
      console.log("cek tipe kegiatan", result);
    } catch (err) {
      console.error("apa error aktivitas", err);
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

      const response = await axiosInstance.post(
        "/api/v1/activities/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
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
    <div className="p-8">
      <Toaster position="top-center" richColors />
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">Kegiatan</h1>
      <div>
        <Card className="bg-[url('/image.png')] bg-cover">
          <h1 className="mx-6 text-[#1A4D2E] font-semibold">
            Tambah Kegiatan Terbaru
          </h1>
          <Card className="max-w-4xl mx-4">
            <CardContent className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="grid gap-2">
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
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Nama Aktivitas</Label>
                  <Input
                    type="text"
                    name="activity_name"
                    id="activity_name"
                    autoComplete="activity_name"
                    value={formData.activity_name}
                    onChange={handleChange}
                    placeholder="Nama Aktivitas"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Deskripsi</Label>
                  <Textarea
                    name="deskripsi"
                    id="deskripsi"
                    autoComplete="deskripsi"
                    value={formData.deskripsi}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Tanggal Kegiatan</Label>
                  <Input
                    type="date"
                    name="tanggal_kegiatan"
                    id="tanggal_kegiatan"
                    value={formData.tanggal_kegiatan ?? ""}
                    onChange={handleChange}
                    placeholder="Tahun"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Tempat</Label>
                  <Input
                    name="tempat"
                    value={formData.tempat}
                    onChange={handleChange}
                    placeholder="Tempat kegiatan"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Upload Dokumentasi (1 Foto)</Label>
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-end">
              <Button
                onClick={createActivity}
                className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer"
              >
                Tambah Kegiatan
              </Button>
            </CardFooter>
          </Card>
          <div className="max-w-4xl my-4">
            <h1 className="mx-6 text-[#1A4D2E] font-semibold">
              Kelola Kegiatan YTAN Terbaru
            </h1>
            <DataTable columns={columns(getActivities)} data={activity} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashKegiatanFeat;
