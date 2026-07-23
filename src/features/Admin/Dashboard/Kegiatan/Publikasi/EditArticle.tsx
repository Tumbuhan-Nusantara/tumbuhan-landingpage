"use client";
import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { ArticleDashType, PropsType } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditArticle = ({ idCode, onSuccess }: PropsType) => {
  const p = useTranslations("dash");
  const [art, setArt] = useState<ArticleDashType | null>(null);
  const [originalArt, setOriginalArt] = useState<ArticleDashType | null>(null);

  useEffect(() => {
    const getArticle = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/articles/${id}`);
        const article = response.data;
        setArt(article);
        setOriginalArt(article);
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

  const isChanged =
    art &&
    originalArt &&
    (art.judul !== originalArt.judul ||
      art.doi !== originalArt.doi ||
      art.tahun !== originalArt.tahun ||
      art.volume !== originalArt.volume ||
      art.link !== originalArt.link);
  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="judul">{p("publikasiForm1")}</Label>
        <Input
          id="judul"
          name="judul"
          value={art?.judul ?? ""}
          onChange={handleChange}
          placeholder="Masukkan judul artikel"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="doi">{p("publikasiForm2")}</Label>
        <Input
          id="doi"
          name="doi"
          value={art?.doi ?? ""}
          onChange={handleChange}
          placeholder="Contoh: John Doe, Jane Doe"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="tahun">{p("publikasiForm3")}</Label>
          <Input
            id="tahun"
            name="tahun"
            type="number"
            value={art?.tahun ?? ""}
            onChange={handleChange}
            placeholder="2026"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="volume">{p("publikasiForm4")}</Label>
          <Input
            id="volume"
            name="volume"
            value={art?.volume ?? ""}
            onChange={handleChange}
            placeholder="Journal, Vol. 19"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="link">DOI / Link Artikel</Label>
        <Input
          id="link"
          name="link"
          value={art?.link ?? ""}
          onChange={handleChange}
          placeholder="https://doi.org/..."
        />
      </div>

      <div className="flex justify-end pt-2 border-t">
        <Button
          onClick={handleUpdate}
          disabled={!isChanged}
          className="bg-[#1A4D2E] hover:bg-[#2B6B45] disabled:cursor-not-allowed disabled:opacity-50"
        >
          Simpan Perubahan
        </Button>
      </div>
    </div>
  );
};

export default EditArticle;
