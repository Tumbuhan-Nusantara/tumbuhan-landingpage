"use client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { ArticleDashType, PropsType } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditArticle = ({ idCode, onSuccess }: PropsType) => {
  const [art, setArt] = useState<ArticleDashType | null>(null);
  useEffect(() => {
    const getArticle = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/articles/${id}`);
        const article = response.data;
        setArt(article);
      } catch (error) {
        throw error;
      }
    };
    getArticle(idCode);
  }, [idCode]);

  const handleUpdate = async () => {
    if (!art) return;
    try {
      await axiosInstance.patch(`/api/v1/articles/${art.id}`, {
        judul: art.judul,
        doi: art.doi,
        tahun: art.tahun,
        volume: art.volume,
        link: art.link,
      });
      toast.success("Artikel berhasil diperbarui");

      onSuccess();
    } catch (err) {
      console.error(err);
    }
  };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setArt((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [name]: name === "tahun" ? Number(value) : value,
      };
    });
  };
  return (
    <div>
      <Toaster position="top-center" richColors />
      <div className="space-y-4">
        <div className="grid gap-2">
          <Label>Judul</Label>
          <Input
            className="text-sm"
            name="judul"
            type="text"
            value={art?.judul ?? ""}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label>Penulis</Label>
          <Input
            className="text-sm"
            name="doi"
            type="text"
            value={art?.doi ?? ""}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label>Tahun</Label>
          <Input
            className="text-sm"
            name="tahun"
            type="number"
            value={art?.tahun ?? ""}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label>Volume</Label>
          <Input
            className="text-sm"
            name="volume"
            type="text"
            value={art?.volume ?? ""}
            onChange={handleChange}
          />
        </div>
        <div className="grid gap-2">
          <Label>Link</Label>
          <Input
            className="text-sm"
            name="link"
            type="text"
            value={art?.link ?? ""}
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
    </div>
  );
};

export default EditArticle;
