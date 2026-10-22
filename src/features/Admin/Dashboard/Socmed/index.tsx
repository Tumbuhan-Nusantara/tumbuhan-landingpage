"use client";
import { DataTable } from "@/src/components/Data Table/data-table";
import { columns } from "@/src/components/Data Table/socmedcolumns";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
} from "@/src/components/ui/card";
import { axiosInstance } from "@/src/lib/axios";
import { SocmedType } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const SocmedDashAdmin = () => {
  const b = useTranslations("dash");
  const [socialMedia, setSocialMedia] = useState<SocmedType[]>([]);
  const getSocmed = async () => {
    try {
      const resp = await axiosInstance.get(`/api/v1/socmed`);
      const result = resp.data.data;
      setSocialMedia(result);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSocmed();
  }, []);
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">
          {b("socmedTitle")}
        </h1>

        <p className="mt-2 text-muted-foreground">{b("socmedDescription")}</p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2B6B45] to-[#4F8A5B] px-8 py-6">
          <h2 className="text-2xl font-semibold text-white">
            {b("socmedListTitle")}
          </h2>

          <p className="mt-2 text-sm text-green-100">
            {b("socmedListDescription")}
          </p>
        </div>

        <CardContent>
          <DataTable columns={columns(getSocmed)} data={socialMedia} />
        </CardContent>
      </Card>
    </div>
  );
};

export default SocmedDashAdmin;
