"use client";
import HeroDashSkeleton from "@/components/Skeletons/HeroSk";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { Textarea } from "@/components/ui/textarea";
import { axiosInstance } from "@/lib/axios";
import { HeroType } from "@/src/types";
import { Pencil } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DashHeroFeat = () => {
  const [hero, setHero] = useState<HeroType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [editHero, setEditHero] = useState(false);
  const [originalHero, setOriginalHero] = useState("");

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        const res = await axiosInstance.get("/api/v1/hero");

        setHero(res.data.data[0]);
        await new Promise((resolve) => setTimeout(resolve, 1000));
        setLoading(false);

        console.log("helo hero", res.data.data[0]);
        setOriginalHero(res.data.data[0].deskripsi);
      } catch (err) {
        console.error(err);
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
        deskripsi: hero.deskripsi,
      });
      toast.success("Berhasil diperbarui");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div className="p-8">
        <Toaster position="top-center" richColors />

      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">Beranda</h1>
      <div>
        <Card className="bg-[url('/image.png')] bg-cover">
          <h1 className="mx-6 text-[#1A4D2E] font-semibold">
            Hero Section{" "}
            <span className="italic text-muted-foreground font-light">
              *)terdapat di paling atas tepat di bawah logo YTAN
            </span>
          </h1>
          <Card className="max-w-4xl m-4">
            <CardHeader>
              <CardDescription>
                Kelola konten halaman utama website
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Keterangan</Label>
                  <Textarea
                    value={hero?.deskripsi || ""}
                    onChange={(e) =>
                      setHero((prev) =>
                        prev
                          ? {
                              ...prev,
                              deskripsi: e.target.value,
                            }
                          : null,
                      )
                    }
                    readOnly={!editHero}
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-end">
              {!editHero ? (
                <Button
                  onClick={() => setEditHero(true)}
                  className="bg-[#1A4D2E] duration-200 hover:bg-[#3f8159] cursor-pointer"
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
                  disabled={hero?.deskripsi === originalHero}
                  className="bg-[#1A4D2E] duration-200 hover:bg-[#3f8159] cursor-pointer"
                  size="sm"
                >
                  <Pencil /> Simpan Perubahan
                </Button>
              )}
            </CardFooter>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default DashHeroFeat;
