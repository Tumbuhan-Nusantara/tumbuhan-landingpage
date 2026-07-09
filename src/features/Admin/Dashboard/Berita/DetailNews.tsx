/* eslint-disable react-hooks/static-components */
"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import {  NewsDashType } from "@/src/types";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import { Card } from "@/components/ui/card";

const DetailNews = ({ newsId }: { newsId: number }) => {
  const [news, setNews] = useState<NewsDashType | null>(null)

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
    value?: string | number | null;
  }) => (
    <div className="space-y-1">
      <p className="text-sm font-medium text-[#1A4D2E]">{label}</p>
      <p className="text-sm text-muted-foreground whitespace-pre-line wrap-break-word">
        {value || "-"}
      </p>
    </div>
  );
  return (
    <Card className="p-6 m-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

        <div>
          <h2 className="font-semibold text-[#1A4D2E] mb-4">
            Foto Berita
          </h2>

          {news?.photo_url ? (
            <Image
              src={news.photo_url}
              alt={news.news_name}
              width={700}
              height={450}
              className="aspect-video w-full rounded-xl border object-cover"
              unoptimized
            />
          ) : (
            <div className="aspect-video rounded-xl border border-dashed flex items-center justify-center text-muted-foreground text-sm">
              Tidak ada gambar
            </div>
          )}
        </div>

        <div>
          <h2 className="font-semibold text-[#1A4D2E] mb-4">
            Informasi Berita
          </h2>

          <div className="space-y-5">

            <DetailItem
              label="Judul Berita"
              value={news?.news_name}
            />

            <Separator />

            <DetailItem
              label="Isi Berita"
              value={news?.deskripsi}
            />

            <Separator />

            <DetailItem
              label="Tanggal Publikasi"
              value={news?.tanggal_berita}
            />

            <Separator />

            <DetailItem
              label="Tanggal Publikasi"
              value={news?.tempat}
            />

          </div>
        </div>

      </div>
    </Card>
  );
};

export default DetailNews;
