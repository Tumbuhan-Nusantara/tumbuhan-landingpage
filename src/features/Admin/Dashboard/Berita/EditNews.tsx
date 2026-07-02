"use client";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { NewsDashType, NewsPropsType } from "@/src/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditNews = ({ newsId }: NewsPropsType) => {
  const [news, setNews] = useState<NewsDashType | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);

  const router = useRouter();

  useEffect(() => {
    const getNews = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/news/${id}`);
        setNews({
          ...response.data,
          tanggal_berita: response.data.tanggal_berita.split("T")[0],
        });
      } catch (error) {
        throw error;
      }
    };
    getNews(newsId);
  }, [newsId]);

  const handleUpdate = async () => {
    if (!news) return;

    try {
      const formData = new FormData();

      formData.append("news_name", news.news_name);
      formData.append("deskripsi", news.deskripsi);
      formData.append("tanggal_berita", news.tanggal_berita);
      console.log(news.tanggal_berita);
      console.log(typeof news.tanggal_berita);
      formData.append("tempat", news.tempat);
      formData.append("video_link", news.video_link);

      if (selectedPhoto) {
        formData.append("photo_url", selectedPhoto);
      }

      await axiosInstance.patch(`/api/v1/news/${news.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Berita berhasil diperbarui");
      router.push("/admin/dashboard/berita");
    } catch (err) {
      console.error(err);
      toast.error("Gagal memperbarui berita");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setNews((prev) => {
      if (!prev) return null;

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setSelectedPhoto(file);
  };
  return (
    <div className="p-8">
      <Toaster position="top-center" richColors />
      <Card className="p-8">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label>Judul Berita</Label>
            <Input
              className="text-sm"
              name="news_name"
              type="text"
              value={news?.news_name ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Deskripsi</Label>
            <Input
              className="text-sm"
              name="deskripsi"
              type="text"
              value={news?.deskripsi ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Tanggal Berita</Label>
            <Input
              type="date"
              className="text-sm"
              name="tanggal_berita"
              value={news?.tanggal_berita ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Lokasi</Label>
            <Input
              className="text-sm"
              name="tempat"
              type="text"
              value={news?.tempat ?? ""}
              onChange={handleChange}
            />
          </div>
          <Label>Foto Saat Ini</Label>

          {news?.photo_url && (
            <div>
              <Image
                src={news.photo_url}
                alt={news.news_name}
                width={300}
                height={200}
                className="w-64 rounded-lg border object-cover"
                unoptimized
              />
              <p className="text-xs text-gray-500">
                {news?.photo_url.split("/").pop()}
              </p>
            </div>
          )}

          <div className="grid gap-2">
            <Label>Edit Foto Berita</Label>
            <Input
              name="photo_url"
              type="file"
              accept="image/*"
              value=""
              onChange={handleFileChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Link Video</Label>
            <Input
              className="text-sm"
              name="video_link"
              type="text"
              value={news?.video_link ?? ""}
              onChange={handleChange}
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

export default EditNews;
