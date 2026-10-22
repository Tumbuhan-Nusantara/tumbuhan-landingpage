"use client";

import { useState } from "react";
import { useRouter } from "@/src/i18n/navigation";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { toast, Toaster } from "sonner";
import { useTranslations } from "next-intl";
import { axiosInstance } from "@/src/lib/axios";

export default function CreateDampakFeat() {
  const router = useRouter();
  const h = useTranslations("dash");

  const [impact, setImpact] = useState({
    keterangan_id: "",
    keterangan_en: "",
    total: "",
    sejak: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setImpact((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormValid =
    impact.keterangan_id &&
    impact.keterangan_en &&
    impact.total &&
    impact.sejak;

  const createImpact = async () => {
    try {
      setLoading(true);

      await axiosInstance.post("/api/v1/dampak/create", {
        ...impact,
        total: Number(impact.total),
      });

      toast.success("Data dampak berhasil ditambahkan");
      router.push("/admin/dashboard/dampak");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Terjadi kesalahan");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-8 space-y-6">
      <Toaster position="top-center" richColors />

      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">
          {h("createImpact")}
        </h1>

        <p className="text-muted-foreground mt-1">{h("createImpactDesc")}</p>
      </div>

      <Card className="max-w-4xl border shadow-sm overflow-hidden">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2F6B45] to-[#4F8A5B] px-8 py-6">
          <div className="text-white">
            <h2 className="text-xl font-semibold">{h("createImpactCard")}</h2>

            <p className="mt-2 text-sm text-green-100">
              {h("createImpactCardDesc")}
            </p>
          </div>
        </div>

        <div className="p-8 space-y-6">
          <div className="grid grid-cols-1 gap-5">
            <div className="grid gap-2">
              <Label>{h("impactIndonesia")}</Label>

              <Input
                name="keterangan_id"
                value={impact.keterangan_id}
                onChange={handleChange}
                placeholder="Spesies Terdokumentasi"
              />
            </div>

            <div className="grid gap-2">
              <Label>{h("impactEnglish")}</Label>

              <Input
                name="keterangan_en"
                value={impact.keterangan_en}
                onChange={handleChange}
                placeholder="Documented Species"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="grid gap-2">
                <Label>{h("total")}</Label>

                <Input
                  type="number"
                  name="total"
                  value={impact.total}
                  onChange={handleChange}
                  placeholder="23212"
                />
              </div>

              <div className="grid gap-2">
                <Label>{h("since")}</Label>

                <Input
                  name="sejak"
                  value={impact.sejak}
                  onChange={handleChange}
                  placeholder="(Est. 2023)"
                />
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.back()}
            >
              {h("cancel")}
            </Button>

            <Button
              onClick={createImpact}
              disabled={!isFormValid || loading}
              className="bg-[#1A4D2E] hover:bg-[#2F6B45]"
            >
              {loading ? "Menyimpan..." : "Simpan Dampak"}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
