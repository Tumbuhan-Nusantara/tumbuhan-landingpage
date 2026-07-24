/* eslint-disable react-hooks/static-components */
"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { ActivityDashType } from "@/src/types";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Separator } from "@/src/components/ui/separator";
import { formatDateID } from "@/src/lib/dateHelper";
import { useTranslations } from "next-intl";

const DetailActivity = ({ actId }: { actId: number }) => {
  const d = useTranslations('dash')
  const [act, setAct] = useState<ActivityDashType | null>(null);

  useEffect(() => {
    const getActivity = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/activities/${id}`);
        const activity = response.data;
        setAct(activity);
      } catch (error) {
        throw error;
      }
    };
    getActivity(actId);
  }, [actId]);

  const DetailItem = ({
    label,
    value,
  }: {
    label: string;
    value?: string | number | null;
  }) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-[#1A4D2E]">{label}</p>
      <p className="text-sm text-muted-foreground wrap-break-word">
        {value || "-"}
      </p>
    </div>
  );
  return (
    <Card className="overflow-hidden shadow-lg mx-12">
      <CardHeader className="border-b bg-muted/30">
        <CardTitle className="text-xl text-[#1A4D2E]">
         {d('kegDetail')}
        </CardTitle>

        <CardDescription>
          {d('kegDetailDesc')}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-semibold text-[#1A4D2E]">{d('kegForm5')}</h3>

            <div className="overflow-hidden rounded-xl border bg-muted/20">
              {act?.photo_url ? (
                <Image
                  src={act.photo_url}
                  alt={act.activity_name}
                  width={900}
                  height={600}
                  unoptimized
                  className="h-80 w-full object-cover"
                />
              ) : (
                <div className="flex h-80 items-center justify-center border border-dashed">
                  <p className="text-sm text-muted-foreground">
                    {d('noKeg')}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-semibold text-[#1A4D2E]">{d('additionalKeg')}</h3>

            <div className="grid gap-5">
              <DetailItem label={d('kegForm1')} value={act?.nama_tipe} />

              <Separator />

              <DetailItem label={d('kegForm2')} value={act?.activity_name} />

              <Separator />

              <DetailItem
                label={d('kegForm6')}
                value={
                  act?.tanggal_kegiatan
                    ? formatDateID(act.tanggal_kegiatan)
                    : "-"
                }
              />

              <Separator />

              <DetailItem label={d('kegForm3')} value={act?.tempat} />

              <Separator />

              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-[#1A4D2E]">
                  {d('kegForm4')}
                </h4>

                <div className="rounded-lg bg-muted/30 p-4">
                  <p className="whitespace-pre-wrap text-sm leading-7 text-muted-foreground">
                    {act?.deskripsi || "-"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailActivity;
