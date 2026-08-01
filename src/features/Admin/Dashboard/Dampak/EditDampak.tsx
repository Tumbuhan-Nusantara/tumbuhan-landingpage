"use client";

import { useEffect, useState } from "react";
import { useRouter } from "@/src/i18n/navigation";
import { axiosInstance } from "@/src/lib/axios";
import { toast, Toaster } from "sonner";
import { useTranslations } from "next-intl";

import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";

import { DampakLandingPageType, DampakPropsType } from "@/src/types";

export default function EditDampakFeat({ dampakId }: DampakPropsType) {
  const h = useTranslations("dash");
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [fetchLoading, setFetchLoading] = useState(true);

  const [impact, setImpact] = useState<DampakLandingPageType>({
    id: 0,
    keterangan_id: "",
    keterangan_en: "",
    total: "",
    sejak: "",
  });
  const [originalImpact, setOriginalImpact] =useState<DampakLandingPageType | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImpact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getImpact = async (id: number) => {
    try {
      const response = await axiosInstance.get(`/api/v1/dampak/${id}`);

      console.log(response.data);
      setImpact(response.data);
      setOriginalImpact(response.data);
    } catch (err: any) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ?? "Gagal mengambil data dampak",
      );
    } finally {
      setFetchLoading(false);
    }
  };

  const isChanged =
  impact.keterangan_id !== originalImpact?.keterangan_id ||
  impact.keterangan_en !== originalImpact?.keterangan_en ||
  impact.total !== originalImpact?.total ||
  impact.sejak !== originalImpact?.sejak;

  useEffect(() => {
    if (dampakId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      getImpact(dampakId);
    }
  }, [dampakId]);

  const updateImpact = async () => {
    try {
      setLoading(true);

      await axiosInstance.patch(`/api/v1/dampak/${dampakId}`, {
        keterangan_id: impact.keterangan_id,
        keterangan_en: impact.keterangan_en,
        total: impact.total,
        sejak: impact.sejak,
      });

      toast.success("Data dampak berhasil diperbarui");

      router.push("/admin/dashboard/dampak");
    } catch (err: any) {
      console.error(err);

      toast.error(
        err?.response?.data?.message ?? "Gagal memperbarui data dampak",
      );
    } finally {
      setLoading(false);
    }
  };

  if (fetchLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-8 space-y-6">
      <Toaster position="top-center" richColors />

      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">{h("editImpact")}</h1>

        <p className="mt-1 text-muted-foreground">{h("editImpactDesc")}</p>
      </div>

      <Card className="max-w-4xl overflow-hidden shadow-sm">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2F6B45] to-[#4F8A5B] px-8 py-6">
          <div className="text-white">
            <h2 className="text-xl font-semibold">{h("editImpactCard")}</h2>

            <p className="mt-2 text-sm text-green-100">
              {h("editImpactCardDesc")}
            </p>
          </div>
        </div>

        <div className="space-y-6 p-8">
          <div className="grid gap-2">
            <Label>{h("impactIndonesia")}</Label>

            <Input
              name="keterangan_id"
              value={impact.keterangan_id}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label>{h("impactEnglish")}</Label>

            <Input
              name="keterangan_en"
              value={impact.keterangan_en}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            <div className="grid gap-2">
              <Label>{h("total")}</Label>

              <Input
                type="number"
                name="total"
                value={impact.total}
                onChange={handleChange}
              />
            </div>

            <div className="grid gap-2">
              <Label>{h("since")}</Label>

              <Input
                name="sejak"
                value={impact.sejak}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button variant="outline" onClick={() => router.back()}>
              {h("cancel")}
            </Button>

            <Button
              disabled={!isChanged}
              onClick={updateImpact}
              className="bg-[#1A4D2E] hover:bg-[#2F6B45]"
            >
              {loading ? "Menyimpan..." : h("saveChanges")}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
