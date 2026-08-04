"use client";

import { ArticleCard } from "@/src/components/ArticleCard";
import { Button } from "@/src/components/ui/button";
import { Articles } from "@/src/constants";
import { Link } from "@/src/i18n/navigation";
import { axiosInstance } from "@/src/lib/axios";
import { ArticleGroup } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const PublikasiFeat = () => {
  const k = useTranslations("kegiatan");

  const [articles, setArticles] = useState<ArticleGroup[]>([]);
  const getArticles = async () => {
  try {
    const response = await axiosInstance.get("/api/v1/articles");

    const data = response.data.data;

    const grouped = data.reduce((acc: ArticleGroup[], item: any) => {
      const existing = acc.find((group) => group.year === item.tahun);

      const article = {
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
    console.error(error);
  }
};
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getArticles()
  }, [])
  return (
    <section className="space-y-16">
      <div>
        <h2 className="text-2xl font-bold text-[#1A4D2E]">{k("publikasi")}</h2>

        <p className="mt-2 text-muted-foreground">{k("descPublikasi")}</p>
      </div>

      {articles.map((group) => (
        <section key={group.year} className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-[#1A4D2E]">{group.year}</h3>

            <Button asChild variant="outline">
              <Link href={`/publikasi/${group.year}`}>Semua Artikel</Link>
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
