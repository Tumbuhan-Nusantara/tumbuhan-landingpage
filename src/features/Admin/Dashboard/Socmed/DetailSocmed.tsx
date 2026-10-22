
"use client";

import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { SocmedType } from "@/src/types";
import { useTranslations } from "next-intl";

const DetailSocmed = ({ socmedId }: { socmedId: number }) => {
  const d = useTranslations("dash");
  const [socmed, setSocmed] = useState<SocmedType | null>(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axiosInstance.get(
          `/api/v1/socmed/${socmedId}`
        );

        setSocmed(response.data.data);
      } catch (error) {
        console.error("Gagal mengambil data media sosial:", error);
      }
    };

    getData();
  }, [socmedId]);

  return (
    <div className="w-full min-w-0 space-y-5">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="min-w-0 rounded-lg border bg-muted/30 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            {d("socmedForm1")}
          </p>
          <p className="mt-1 wrap-break-word text-base font-semibold text-foreground">
            {socmed?.name || "-"}
          </p>
        </div>

        <div className="min-w-0 rounded-lg border bg-muted/30 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            {d("socmedForm2")}
          </p>
          <p className="mt-1 break-all text-sm text-foreground sm:text-base">
            {socmed?.url || "-"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default DetailSocmed;