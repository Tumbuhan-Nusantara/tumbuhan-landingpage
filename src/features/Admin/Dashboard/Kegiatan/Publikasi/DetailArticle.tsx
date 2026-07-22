"use client";
import  { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { CreateArticleDashType } from "@/src/types";

const DetailArticle = ({ articleId }: { articleId: number }) => {
  const [article, setArticle] = useState<CreateArticleDashType>({});

  useEffect(() => {
    const getArticle = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/articles/${id}`);
        const art = response.data;
        setArticle(art);
      } catch (error) {
        throw error;
      }
    };
    getArticle(articleId);
  }, [articleId]);
  return (
    <div className="space-y-5">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            Judul Artikel
          </p>
          <p className="mt-1 text-base font-semibold text-foreground">
            {article.judul}
          </p>
        </div>

        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm font-medium text-muted-foreground">Penulis</p>
          <p className="mt-1 text-base text-foreground">{article.doi}</p>
        </div>

        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            Tahun Publikasi
          </p>
          <p className="mt-1 text-base text-foreground">{article.tahun}</p>
        </div>

        <div className="rounded-lg border bg-muted/30 p-4">
          <p className="text-sm font-medium text-muted-foreground">
            Jurnal & Volume
          </p>
          <p className="mt-1 text-base text-foreground">{article.volume}</p>
        </div>
      </div>

      <div className="rounded-lg border bg-muted/30 p-4">
        <p className="text-sm font-medium text-muted-foreground">
          DOI / Link Artikel
        </p>

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-1 block break-all text-[#1A4D2E] hover:underline"
        >
          {article.link}
        </a>
      </div>
    </div>
  );
};

export default DetailArticle;
