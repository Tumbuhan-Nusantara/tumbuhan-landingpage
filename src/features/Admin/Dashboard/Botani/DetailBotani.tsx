/* eslint-disable react-hooks/static-components */
"use client";
import { ReactNode, useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { BotaniType } from "@/src/types";
import Image from "next/image";
import { Separator } from "@/src/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { useTranslations } from "next-intl";

const DetailBotani = ({ botaniId }: { botaniId: number }) => {
  const b = useTranslations('dash')
  const [botani, setBotani] = useState<BotaniType | null>(null);

  useEffect(() => {
    const getBotanibyId = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/thumbnail/${id}`);
        const botaniDetail = response.data;
        setBotani(botaniDetail);
      } catch (error) {
        throw error;
      }
    };
    getBotanibyId(botaniId);
  }, [botaniId]);

  const DetailItem = ({
    label,
    value,
  }: {
    label: string;
    value?: ReactNode;
  }) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-[#1A4D2E]">{label}</p>
      <p className="text-sm text-muted-foreground whitespace-pre-line wrap-break-word">
        {value || "-"}
      </p>
    </div>
  );
  return (
    <Card className="overflow-hidden shadow-sm mx-12">
      <CardHeader className="border-b bg-muted/30">
        <CardTitle className="text-xl text-[#1A4D2E]">{b('botaniDetailTitle')}</CardTitle>

        <CardDescription>
          {b('botaniDetailDescription')}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-semibold text-[#1A4D2E]">{b('kegForm5')}</h3>

            <div className="overflow-hidden rounded-xl border bg-muted/20">
              {botani?.photo_url ? (
                <>
                  <Image
                    src={botani.photo_url}
                    alt={botani.title_in}
                    width={900}
                    height={600}
                    unoptimized
                    className="aspect-video w-full object-cover"
                  />

                  <div className="border-t bg-background p-3">
                    <p className="truncate text-xs text-muted-foreground">
                      {botani.photo_url.split("/").pop()}
                    </p>
                  </div>
                </>
              ) : (
                <div className="flex aspect-video items-center justify-center border border-dashed">
                  <p className="text-sm text-muted-foreground">
                    No news image available.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-5">
            <h3 className="font-semibold text-[#1A4D2E]">{b('botaniDetail')}</h3>

            <DetailItem label={b('title_in')} value={botani?.title_in} />
            <DetailItem label={b('title_en')} value={botani?.title_en} />

            <Separator />

            <DetailItem label={b('descript_in')} value={botani?.descript_in} />
            <DetailItem label={b('descript_en')} value={botani?.descript_en} />

          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailBotani;