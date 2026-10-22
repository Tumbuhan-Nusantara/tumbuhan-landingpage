"use client";

import { useEffect, useMemo, useState } from "react";
import { useParams } from "next/navigation";

import { ArrowLeft, Search } from "lucide-react";

import { Link } from "@/src/i18n/navigation";
import Nav from "@/src/components/Navbar-2";
import FooterFeat from "@/src/components/Footer";
import { Input } from "@/src/components/ui/input";
import { ArticleCard } from "@/src/components/ArticleCard";
import { axiosInstance } from "@/src/lib/axios";
import { ArticleGroup } from "@/src/types";
import { useTranslations } from "next-intl";

const DetailPublikasiLpFeat = () => {
  const k = useTranslations("kegiatan");

  const { year } = useParams();

  const [search, setSearch] = useState("");

  const [publication, setPublication] =
    useState<ArticleGroup | null>(null);

  const [loading, setLoading] = useState(true);

  const getArticles = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/articles");

      const data = response.data.data;

      const grouped = data.reduce((acc: ArticleGroup[], item: any) => {
        const existing = acc.find(
          (group) => group.year === item.tahun
        );

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

      const currentYear = grouped.find(
        (g) => g.year === Number(year)
      );

      setPublication(currentYear ?? null);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getArticles();
  }, []);

  const filteredArticles = useMemo(() => {
    if (!publication) return [];

    return publication.items.filter(
      (item) =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase())
    );
  }, [publication, search]);

  return (
    <>
      <Nav />

      <main className="min-h-screen bg-[#FAFCFB]">
        <section className="border-b bg-white">
          <div className="container mx-auto max-w-6xl px-6 py-14">
            <Link
              href="/kegiatan#publikasi"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-[#1A4D2E]"
            >
              <ArrowLeft className="h-4 w-4" />
              {k("buttonBack")}
            </Link>

            <h1 className="mt-8 text-4xl font-bold text-[#1A4D2E]">
              {k("publikasi")}
            </h1>

            <p className="mt-3 text-lg text-muted-foreground">
              {year}
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-muted-foreground">
              {k("descPublikasiDetail")} {year}
            </p>

            {publication && (
              <div className="mt-8 rounded-xl bg-[#F4FBF6] px-5 py-4">
                <span className="font-semibold text-[#1A4D2E]">
                  {publication.items.length}
                </span>{" "}
                Publikasi
              </div>
            )}
          </div>
        </section>

        <section className="container mx-auto max-w-6xl px-6 py-10">
          <div className="relative mb-10 max-w-lg">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

            <Input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Cari publikasi..."
              className="h-12 rounded-full pl-11"
            />
          </div>

          {loading ? (
            <div className="py-20 text-center">
              Loading...
            </div>
          ) : !publication ? (
            <div className="rounded-2xl border bg-white py-20 text-center">
              <h2 className="text-2xl font-semibold text-[#1A4D2E]">
                Publikasi tidak ditemukan
              </h2>

              <p className="mt-3 text-muted-foreground">
                Belum ada publikasi pada tahun {year}.
              </p>
            </div>
          ) : filteredArticles.length === 0 ? (
            <div className="rounded-2xl border bg-white py-20 text-center">
              <h2 className="text-2xl font-semibold text-[#1A4D2E]">
                Tidak ada hasil pencarian
              </h2>

              <p className="mt-3 text-muted-foreground">
                Coba gunakan kata kunci lain.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {filteredArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  article={article}
                />
              ))}
            </div>
          )}
        </section>
      </main>

      <FooterFeat />
    </>
  );
};

export default DetailPublikasiLpFeat;