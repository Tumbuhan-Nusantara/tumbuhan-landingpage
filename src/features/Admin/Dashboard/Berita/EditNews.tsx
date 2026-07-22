"use client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { NewsDashType, NewsPropsType } from "@/src/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "@/src/components/ui/textarea";

const EditNews = ({ newsId }: NewsPropsType) => {
  const [news, setNews] = useState<NewsDashType | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [editBerita, setEditBerita] = useState(false);
  const [originalNews, setOriginalNews] = useState<NewsDashType | null>(null);

  const router = useRouter();

  useEffect(() => {
    const getNews = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/news/${id}`);
        const result = {
          ...response.data,
          tanggal_berita: response.data.tanggal_berita.split("T")[0],
        };
        setNews(result);
        setOriginalNews(result);
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
      setOriginalNews(news);
      setSelectedPhoto(null);
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

  const isChanged =
    !!news &&
    !!originalNews &&
    (news.news_name !== originalNews.news_name ||
      news.deskripsi !== originalNews.deskripsi ||
      news.tanggal_berita !== originalNews.tanggal_berita ||
      news.tempat !== originalNews.tempat ||
      news.video_link !== originalNews.video_link ||
      selectedPhoto !== null);


  return (
    <div className="p-6 space-y-6">
      <Toaster position="top-center" richColors />

      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">Edit Berita</h1>

        <p className="mt-2 text-muted-foreground">
          Perbarui informasi berita yang ditampilkan pada website.
        </p>
      </div>

      <Card className="max-w-5xl overflow-hidden shadow-lg">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle className="text-xl text-[#1A4D2E]">
            Informasi Berita
          </CardTitle>

          <CardDescription>
            Ubah informasi berita beserta dokumentasi yang akan dipublikasikan.
          </CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>Judul Berita</Label>

              <Input
                name="news_name"
                value={news?.news_name ?? ""}
                onChange={handleChange}
                placeholder="Masukkan judul berita"
              />
            </div>

            <div className="space-y-2">
              <Label>Tanggal Berita</Label>

              <Input
                type="date"
                name="tanggal_berita"
                value={news?.tanggal_berita ?? ""}
                onChange={handleChange}
              />
            </div>

            <div className="space-y-2">
              <Label>Lokasi</Label>

              <Input
                name="tempat"
                value={news?.tempat ?? ""}
                onChange={handleChange}
                placeholder="Masukkan lokasi"
              />
            </div>

            <div className="space-y-2">
              <Label>Link Video</Label>

              <Input
                name="video_link"
                value={news?.video_link ?? ""}
                onChange={handleChange}
                placeholder="https://youtube.com/..."
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Deskripsi</Label>

              <Textarea
                rows={6}
                name="deskripsi"
                value={news?.deskripsi ?? ""}
                onChange={handleChange}
                placeholder="Masukkan isi berita..."
              />
            </div>

            <div className="space-y-3 md:col-span-2">
              <Label>Foto Saat Ini</Label>

              <div className="rounded-xl border bg-muted/20 p-4">
                {news?.photo_url ? (
                  <>
                    <Image
                      src={news.photo_url}
                      alt={news.news_name}
                      width={900}
                      height={600}
                      className="h-72 w-full rounded-lg object-cover"
                      unoptimized
                    />

                    <p className="mt-3 break-all text-xs text-muted-foreground">
                      {news.photo_url.split("/").pop()}
                    </p>
                  </>
                ) : (
                  <div className="flex h-52 items-center justify-center rounded-lg border border-dashed">
                    <p className="text-sm text-muted-foreground">
                      Belum ada foto berita.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>Ganti Foto Berita</Label>

              <Input type="file" accept="image/*" onChange={handleFileChange} />

              <p className="text-xs text-muted-foreground">
                Upload foto baru hanya jika ingin mengganti foto yang saat ini
                digunakan. Format yang didukung: JPG, JPEG, PNG.
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

export default EditNews;
