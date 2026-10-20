"use client";
import  { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { SocmedType } from "@/src/types";
import { useTranslations } from "next-intl";

const DetailSocmed = ({ socmedId }: { socmedId: number }) => {
  const d = useTranslations('dash')
  const [socmed, setSocmed] = useState<SocmedType>({});

  useEffect(() => {
    const getData = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/socmed/${id}`);
        const s = response.data.data;
        setSocmed(s);
      } catch (error) {
        throw error;
      }
    };
    getData(socmedId);
  }, [socmedId]);
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            {d('socmedForm1')}
          </p>
          <p className="mt-1 text-base font-semibold text-foreground">
            {socmed.name}
          </p>
        </div>

        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm font-medium text-muted-foreground">{d('socmedForm2')}</p>
          <p className="mt-1 text-base text-foreground">{socmed.url}</p>
        </div>
    </div>
    </div>
  );
};

export default DetailSocmed;