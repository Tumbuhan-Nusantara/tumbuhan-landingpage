/* eslint-disable react-hooks/static-components */
"use client";
import { ReactNode, useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { NewsDashType } from "@/src/types";
import Image from "next/image";
import { Separator } from "@/src/components/ui/separator";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
import { formatDateID } from "@/src/lib/dateHelper";
import { useTranslations } from "next-intl";

const DetailNews = ({ newsId }: { newsId: number }) => {
  const b = useTranslations('dash')
  const [news, setNews] = useState<NewsDashType | null>(null);

  useEffect(() => {
    const getNewsbyId = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/news/${id}`);
        const newsNew = response.data;
        setNews(newsNew);
      } catch (error) {
        throw error;
      }
    };
    getNewsbyId(newsId);
  }, [newsId]);

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
        <CardTitle className="text-xl text-[#1A4D2E]">{b('berDetail')}</CardTitle>

        <CardDescription>
          {b('berDetailDesc')}
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            <h3 className="font-semibold text-[#1A4D2E]">{b('berDokumentasi')}</h3>

            <div className="overflow-hidden rounded-xl border bg-muted/20">
              {news?.photo_url ? (
                <>
                  <Image
                    src={news.photo_url}
                    alt={news.news_name}
                    width={900}
                    height={600}
                    unoptimized
                    className="aspect-video w-full object-cover"
                  />

                  <div className="border-t bg-background p-3">
                    <p className="truncate text-xs text-muted-foreground">
                      {news.photo_url.split("/").pop()}
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
            <h3 className="font-semibold text-[#1A4D2E]">{b('berInfo')}</h3>

            <DetailItem label={b('berForm1')} value={news?.news_name} />

            <Separator />

            <DetailItem label={b('berForm5')} value={news?.deskripsi} />

            <Separator />

            <DetailItem
              label={b('berForm2')}
              value={
                news?.tanggal_berita ? formatDateID(news.tanggal_berita) : "-"
              }
            />

            <Separator />

            <DetailItem label={b('berForm3')} value={news?.tempat} />

            <Separator />

            <DetailItem
              label={b('berForm4')}
              value={
                news?.video_link ? (
                  <a
                    href={news.video_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1A4D2E] underline underline-offset-4 hover:text-[#2B6B45]"
                  >
                    {news.video_link}
                  </a>
                ) : (
                  "-"
                )
              }
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DetailNews;
