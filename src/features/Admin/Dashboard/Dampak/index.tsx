"use client";

import { Plus } from "lucide-react";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Toaster } from "sonner";
import { useRouter } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";
import { columns } from "@/src/components/Data Table/dampakcolumns";
import { axiosInstance } from "@/src/lib/axios";
import { useEffect, useState } from "react";
import { DampakLandingPageType } from "@/src/types";
import { DataTable } from "@/src/components/Data Table/data-table";

export default function DashDampak() {
  const router = useRouter();
  const h = useTranslations("dash");
  const [dam, setDam] = useState<DampakLandingPageType[]>([])

  const getDampaks = async () => {
    try {
      const resp = await axiosInstance.get(`/api/v1/dampak`);
      const result = resp.data.data;
      console.log(result)

      setDam(result);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } catch (error) {
      throw error;
    }
  };

 useEffect(()=> {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  getDampaks()
 }, [])

  return (
    <div className="px-8 space-y-6">
      <Toaster position="top-center" richColors />

      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">{h("titleDampak")}</h1>

        <p className="mt-2 text-muted-foreground">{h("descriptionDampak")}</p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2F6B45] to-[#4F8A5B] px-8 py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="text-white">
              <h2 className="text-2xl font-semibold">{h("cardTitleDampak")}</h2>

              <p className="mt-2 text-sm text-green-100">
                {h("cardDescriptionDampak")}
              </p>
            </div>

            <Button
              onClick={() => router.push("/admin/dashboard/dampak/create")}
              className="bg-white text-[#1A4D2E] hover:bg-green-50"
            >
              <Plus className="mr-2 h-4 w-4" />
              {h("buttonDampak")}
            </Button>
          </div>
        </div>

        <CardContent className="bg-white p-6">
          <DataTable columns={columns(getDampaks)} data={dam} />
        </CardContent>
      </Card>
    </div>
  );
}
