"use client";
import HeroDashSkeleton from "@/src/components/Skeletons/HeroSk";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Toaster } from "@/src/components/ui/sonner";
import { Textarea } from "@/src/components/ui/textarea";
import { axiosInstance } from "@/src/lib/axios";
import { HeroType } from "@/src/types";
import { Pencil } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DashHeroFeat = () => {
  const [hero, setHero] = useState<HeroType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editHero, setEditHero] = useState(false);
  const [originalHero, setOriginalHero] = useState<HeroType | null>(null);

  const h = useTranslations("dash");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/api/v1/hero");

        setHero(res.data.data[0]);
        setOriginalHero(res.data.data[0]);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <HeroDashSkeleton />
      </div>
    );
  }

  const handleUpdate = async () => {
    if (!hero) return;

    try {
      await axiosInstance.patch(`/api/v1/hero/${hero.id}`, {
        deskripsi_id: hero.deskripsi_id,
        deskripsi_en: hero.deskripsi_en,
      });
      toast.success("Berhasil diperbarui");
      setOriginalHero(hero);
    } catch (err) {
      console.error(err);
    }
  };

  const isChanged =
    hero?.deskripsi_id !== originalHero?.deskripsi_id ||
    hero?.deskripsi_en !== originalHero?.deskripsi_en;
  return (
    <div className="max-w-5xl mx-auto p-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1A4D2E]">{h("beranda")}</h1>

        <p className="mt-2 text-muted-foreground">{h("ket")}</p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="relative overflow-hidden bg-linear-to-r from-[#1A4D2E] via-[#2B593A] to-[#4B8A63] px-8 py-7">
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-white/10 blur-2xl" />

          <div className="absolute bottom-0 left-6 h-20 w-20 rounded-full bg-green-300/20 blur-xl" />

          <div className="relative flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="text-white">
              <h2 className="text-2xl font-semibold">Hero Section</h2>

              <p className="mt-2 text-sm text-green-100">{h("ket")}</p>
            </div>

            {!editHero ? (
              <Button
                onClick={() => setEditHero(true)}
                className="bg-white text-[#1A4D2E] hover:bg-green-50"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Ubah
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleUpdate();
                  setEditHero(false);
                }}
                disabled={!isChanged}
                className="bg-white text-[#1A4D2E] hover:bg-green-50"
              >
                <Pencil className="mr-2 h-4 w-4" />
                Simpan
              </Button>
            )}
          </div>
        </div>

        <CardContent className="space-y-8 p-8">
          <div className="space-y-2">
            <Label className="font-semibold text-[#1A4D2E]">
              {h("keterangan")} (Indonesia)
            </Label>

            <Textarea
              className="min-h-44"
              value={hero?.deskripsi_id || ""}
              onChange={(e) =>
                setHero((prev) =>
                  prev
                    ? {
                        ...prev,
                        deskripsi_id: e.target.value,
                      }
                    : null,
                )
              }
              readOnly={!editHero}
            />
          </div>

          <div className="space-y-2">
            <Label className="font-semibold text-[#1A4D2E]">
              {h("keterangan")} (English)
            </Label>

            <Textarea
              className="min-h-44"
              value={hero?.deskripsi_en || ""}
              onChange={(e) =>
                setHero((prev) =>
                  prev
                    ? {
                        ...prev,
                        deskripsi_en: e.target.value,
                      }
                    : null,
                )
              }
              readOnly={!editHero}
            />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashHeroFeat;
