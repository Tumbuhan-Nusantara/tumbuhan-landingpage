"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { DampakLandingPageType, DampakPropsType } from "@/src/types";
import { Label } from "@/src/components/ui/label";
import { Separator } from "@/src/components/ui/separator";
import { toast } from "sonner";

export default function DetailDampak({
  dampakId,
}: DampakPropsType) {
  const [loading, setLoading] = useState(true);

  const [impact, setImpact] =
    useState<DampakLandingPageType | null>(null);

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
        Data tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="space-y-5">

      <div>
        <Label>Keterangan (Indonesia)</Label>

        <p className="mt-2 rounded-md border p-3">
          {impact.keterangan_id}
        </p>
      </div>

      <div>
        <Label>Keterangan (English)</Label>

        <p className="mt-2 rounded-md border p-3">
          {impact.keterangan_en}
        </p>
      </div>

      <Separator />

      <div className="grid grid-cols-2 gap-5">

        <div>
          <Label>Total</Label>

          <p className="mt-2 rounded-md border p-3">
            {impact.total}
          </p>
        </div>

        <div>
          <Label>Sejak</Label>

          <p className="mt-2 rounded-md border p-3">
            {impact.sejak}
          </p>
        </div>

      </div>

    </div>
  );
}