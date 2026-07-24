"use client";
import { DataTable } from "@/src/components/Data Table/data-table";
import { columns } from "@/src/components/Data Table/newscolumns";
import FormSkeleton from "@/src/components/Skeletons/FormSk";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { axiosInstance } from "@/src/lib/axios";
import { CreateNewsDashType, NewsDashType } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const BeritaDashboard = () => {
  const b = useTranslations('dash')
  const [news, setNews] = useState<NewsDashType[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const getNews = async () => {
    setLoading(true);
    try {
      const resp = await axiosInstance.get(`/api/v1/news`);
      const result = resp.data.data;

      setNews(result);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
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

  if (loading) {
    return (
      <div className="p-8">
        <FormSkeleton />
      </div>
    );
  }
  return (
    <div className="p-6 space-y-6">

      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">{b('berita')}</h1>

        <p className="mt-2 text-muted-foreground">
         {b('beritaDesc')}
        </p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2B6B45] to-[#4F8A5B] px-8 py-6">
          <h2 className="text-2xl font-semibold text-white">{b('beritaForm')}</h2>

          <p className="mt-2 text-sm text-green-100">
            {b('beritaFormTitle')}
          </p>
        </div>

        <CardContent className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>{b('berForm1')}</Label>

              <Input
                name="news_name"
                value={formData.news_name}
                onChange={handleChange}
                placeholder="Masukkan judul berita"
              />
            </div>

            <div className="space-y-2">
              <Label>{b('berForm2')}</Label>

              <Input
                type="date"
                name="tanggal_berita"
                value={formData.tanggal_berita ?? ""}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>{b('berForm3')}</Label>

              <Input
                name="tempat"
                value={formData.tempat}
                onChange={handleChange}
                placeholder="Masukkan lokasi berita"
              />
            </div>

            <div className="space-y-2">
              <Label>{b('berForm4')})</Label>

              <Input
                name="video_link"
                value={formData.video_link}
                onChange={handleChange}
                placeholder="https://youtube.com/..."
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>{b('berForm5')}</Label>

              <Textarea
                rows={6}
                name="deskripsi"
                value={formData.deskripsi}
                onChange={handleChange}
                placeholder="Masukkan isi berita..."
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>{b('berForm6')}</Label>

              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />

              <p className="text-xs text-muted-foreground">
                Format yang didukung: JPG, JPEG, PNG.
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-end border-t bg-muted/30 px-8 py-4">
          <Button
            onClick={createNews}
            className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
          >
            {b('beritaButton')}
          </Button>
        </CardFooter>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#1A4D2E]">{b('beritaList')}</CardTitle>

          <CardDescription>
            {b('beritaListDesc')}
          </CardDescription>
        </CardHeader>

        <CardContent>
          <DataTable columns={columns(getNews)} data={news} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BeritaDashboard;
