"use client";

import { ArticleCard } from "@/src/components/ArticleCard";
import { Button } from "@/src/components/ui/button";
import { Link } from "@/src/i18n/navigation";
import { axiosInstance } from "@/src/lib/axios";
import { ArticleGroup, ArticleType } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

interface ApiArticle {
  id: number;
  judul: string;
  doi: string;
  tahun: number;
  link: string;
}

const PublikasiFeat = () => {
  const k = useTranslations("kegiatan");
  const [articles, setArticles] = useState<ArticleGroup[]>([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const response = await axiosInstance.get("/api/v1/articles");
        const data: ApiArticle[] = response.data.data;

        if (!Array.isArray(data)) {
          console.error("Format data artikel dari API tidak valid.");
          return;
        }

        const grouped = data.reduce<ArticleGroup[]>((acc, item) => {
          const existing = acc.find(
            (group) => group.year === item.tahun
          );

          const article: ArticleType = {
            id: item.id,
            title: item.judul,
            desc: item.doi,
            src: "/artikel/newspaper.png",
            link: item.link,
          };

          if (existing) {
            existing.items.push(article);
          } else {
            acc.push({
              year: item.tahun,
              items: [article],
            });
          }

          return acc;
        }, []);

        grouped.sort((a, b) => b.year - a.year);
        setArticles(grouped);
      } catch (error) {
        console.error("Gagal mengambil data publikasi:", error);
      }
    };

    getArticles();
  }, []);

  return (
    <section className="space-y-16">
      <div>
        <h2 className="text-2xl font-bold text-[#1A4D2E]">
          {k("publikasi")}
        </h2>

        <p className="mt-2 text-muted-foreground">
          {k("descPublikasi")}
        </p>
      </div>

      {articles.map((group) => (
        <section key={group.year} className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#1A4D2E]">
              {group.year}
            </h3>

            <Button asChild variant="outline">
              <Link href={`/publikasi/${group.year}`}>
                {k("allArticles")}
              </Link>
            </Button>
          </div>

          <div className="grid gap-6">
            {group.items.slice(0, 1).map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
};

export default PublikasiFeat;