"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight, Search } from "lucide-react";

import Nav from "@/src/components/Navbar-2";
import FooterFeat from "@/src/components/Footer";

import { axiosInstance } from "@/src/lib/axios";
import { formatDateID } from "@/src/lib/dateHelper";
import { NewsLandingPageType } from "@/src/types";

import { Input } from "@/src/components/ui/input";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";
import NewsSkeleton from "@/src/components/Skeletons/NewsLpSk";

const BeritaMainFeat = () => {
  const [news, setNews] = useState<NewsLandingPageType[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const b = useTranslations("berita2");

  const getNews = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get("/api/v1/news");

      setNews(response.data.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getNews();
  }, []);

  const filteredNews = useMemo(() => {
    const keyword = search.toLowerCase();

    return news.filter(
      (item) =>
        item.news_name.toLowerCase().includes(keyword) ||
        item.deskripsi.toLowerCase().includes(keyword),
    );
  }, [news, search]);



  return (
    <div className="overflow-x-hidden">

      <section className="relative mt-22 overflow-hidden bg-linear-to-br from-[#1A4D2E] via-[#2B593A] to-[#356E4B]">
        <div className="absolute inset-0 bg-[url('/image.png')] bg-cover opacity-10" />

        <div className="relative container mx-auto px-6 py-24">
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm">
              {b("title")}
            </span>

            <h1 className="mt-6 text-4xl font-bold md:text-5xl">
              {b("title")}
            </h1>

            <p className="mt-6 leading-8 text-white/80">{b("desc")}</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Cari berita..."
            className="h-12 rounded-full pl-11"
          />
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        {loading ? (
          <NewsSkeleton count={3}/>
        ) : filteredNews.length === 0 ? (
          <div className="py-24 text-center">
            <h2 className="text-2xl font-semibold text-[#1A4D2E]">
              Berita tidak ditemukan
            </h2>

            <p className="mt-3 text-muted-foreground">
              Coba gunakan kata kunci lain.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredNews.map((item) => (
              <Card
                key={item.id}
                className="group overflow-hidden rounded-2xl border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-60 overflow-hidden">
                  <Image
                    fill
                    sizes="(max-width:768px)100vw,
                           (max-width:1200px)50vw,
                           33vw"
                    src={item.photo_url}
                    alt={item.news_name}
                    className="object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                <CardContent className="flex h-full flex-col p-6">
                  <p className="text-xs uppercase tracking-widest text-[#2B593A]">
                    {formatDateID(item.tanggal_berita)}
                  </p>

                  <h2 className="mt-3 line-clamp-2 text-xl font-semibold text-[#1A4D2E]">
                    {item.news_name}
                  </h2>

                  <p className="mt-4 line-clamp-3 flex-1 leading-7 text-muted-foreground">
                    {item.deskripsi}
                  </p>

                  <Button
                    asChild
                    variant="ghost"
                    className="mt-6 w-fit p-0 text-[#1A4D2E]"
                  >
                    <Link href={`/berita/${item.id}`}>
                      {b("detail")}
                      <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </section>

    </div>
  );
};

export default BeritaMainFeat;
