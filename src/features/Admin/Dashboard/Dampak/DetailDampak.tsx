"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { DampakLandingPageType, DampakPropsType } from "@/src/types";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

export default function DetailDampak({
  dampakId,
}: DampakPropsType) {
  const [loading, setLoading] = useState(true);

  const [impact, setImpact] =
    useState<DampakLandingPageType | null>(null);

  const d = useTranslations('dash')

  useEffect(() => {
    const getDetail = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/dampak/${dampakId}`
        );

        setImpact(response.data);
      } catch (err: any) {
        toast.error(
          err?.response?.data?.message ??
            "Gagal mengambil detail dampak"
        );
      } finally {
        setLoading(false);
      }
    };

    getDetail();
  }, [dampakId]);

  if (loading) {
    return (
      <div className="py-10 text-center">
        Loading...
      </div>
    );
  }

  if (!impact) {
    return (
      <div className="py-10 text-center">
        {d('noData')}
      </div>
    );
  }

  return (
    <div className="space-y-5">

      <div>
        <Label>{d('impactIndonesia')}</Label>

        <p className="mt-2 rounded-md border p-3">
          {impact.keterangan_id}
        </p>
      </div>

      <div>
        <Label>{d('impactEnglish')}</Label>

        <p className="mt-2 rounded-md border p-3">
          {impact.keterangan_en}
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-5">

        <div>
          <Label>{d('total')}</Label>

          <p className="mt-2 rounded-md border p-3">
            {impact.total}
          </p>
        </div>

        <div>
          <Label>{d('since')}</Label>

          <p className="mt-2 rounded-md border p-3">
            {impact.sejak}
          </p>
        </div>

      </div>

    </div>
  );
}