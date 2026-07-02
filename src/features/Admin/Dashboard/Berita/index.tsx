"use client";
import { DataTable } from "@/components/Data Table/data-table";
import { columns } from "@/components/Data Table/newscolumns";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { axiosInstance } from "@/lib/axios";
import { CreateNewsDashType, NewsDashType } from "@/src/types";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const BeritaDashboard = () => {
  const [news, setNews] = useState<NewsDashType[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const getNews = async () => {
    try {
      const resp = await axiosInstance.get(`/api/v1/news`);
      const result = resp.data.data;

      setNews(result);
      console.log(result);
    } catch (error) {
      throw error;
    }
  };

  const [formData, setFormData] = useState<CreateNewsDashType>({
    news_name: "",
    deskripsi: "",
    tanggal_berita: "",
    tempat: "",
    photo_url: null,
    video_link: "",
  });
  const createNews = async () => {
    try {
      const data = new FormData();

      data.append("news_name", formData.news_name);
      data.append("deskripsi", formData.deskripsi);
      data.append("tanggal_berita", formData.tanggal_berita);
      data.append("tempat", formData.tempat);
      data.append("video_link", formData.video_link);

      if (formData.photo_url) {
        data.append("photo_url", formData.photo_url);
      }

      const response = await axiosInstance.post("/api/v1/news/create", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      await getNews();

      toast.success("Berhasil ditambahkan");

      setFormData({
        news_name: "",
        deskripsi: "",
        tanggal_berita: "",
        tempat: "",
        photo_url: null,
        video_link: "",
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
    getNews();
  }, []);
  return (
    <div className="p-8">
      <Toaster position="top-center" richColors />
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">Berita</h1>
      <div>
        <Card className="bg-[url('/image.png')] bg-cover">
          <h1 className="mx-6 text-[#1A4D2E] font-semibold">
            Tambah Berita Terbaru
          </h1>
          <Card className="max-w-4xl mx-4">
            <CardContent className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Judul Berita</Label>
                  <Input
                    type="text"
                    name="news_name"
                    id="news_name"
                    autoComplete="news_name"
                    value={formData.news_name}
                    onChange={handleChange}
                    placeholder="Judul Berita"
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
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Tanggal Berita</Label>
                  <Input
                    type="date"
                    name="tanggal_berita"
                    id="tanggal_berita"
                    value={formData.tanggal_berita ?? ""}
                    onChange={handleChange}
                    placeholder="Tanggal Berita"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Lokasi</Label>
                  <Input
                    type="text"
                    name="tempat"
                    id="tempat"
                    autoComplete="tempat"
                    value={formData.tempat}
                    onChange={handleChange}
                    placeholder="Lokasi"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Upload Foto Berita</Label>
                  <Input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Link Video</Label>
                  <Input
                    type="text"
                    name="video_link"
                    id="video_link"
                    autoComplete="video_link"
                    value={formData.video_link}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-end">
              <Button
                onClick={createNews}
                className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer"
              >
                Tambah Berita
              </Button>
            </CardFooter>
          </Card>
          <div className="max-w-4xl my-4">
            <h1 className="mx-6 text-[#1A4D2E] font-semibold">
              Kelola Berita Terbaru
            </h1>
            <DataTable columns={columns(getNews)} data={news} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default BeritaDashboard;
