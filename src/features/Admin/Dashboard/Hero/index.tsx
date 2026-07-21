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

  const h = useTranslations('dash')

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
        <Toaster position="top-center" richColors />
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
      <Toaster position="top-center" richColors />

      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">{h('beranda')}</h1>
      <div>
        <Card className="overflow-hidden">
          <CardHeader className="border-b bg-[#F8FAF9]">
            <h2 className="text-lg font-semibold text-[#1A4D2E]">
              Hero Section
            </h2>

            <p className="text-sm text-muted-foreground">
              {h('ket')}
            </p>
          </CardHeader>

          <CardContent>
            <div className="space-y-8">
              <div className="grid gap-2">
                <Label>{h('keterangan')} (Indonesia)</Label>
                <Textarea
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
                  className="min-h-45"
                />
              </div>
              <div className="grid gap-2">
                <Label>{h('keterangan')} (English)</Label>
                <Textarea
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
                  className="min-h-45"
                />
              </div>
            </div>
          </CardContent>

          <CardFooter className="border-t bg-muted/20 justify-end gap-2">
            {!editHero ? (
              <Button
                onClick={() => setEditHero(true)}
                variant="outline"
                className="border-[#1A4D2E] text-[#1A4D2E]"
                size="sm"
              >
                <Pencil /> Ubah
              </Button>
            ) : (
              <Button
                onClick={() => {
                  handleUpdate();
                  setEditHero(false);
                }}
                disabled={!isChanged}
                className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
                size="sm"
              >
                <Pencil /> Simpan Perubahan
              </Button>
            )}
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default DashHeroFeat;
