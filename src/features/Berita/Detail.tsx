"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

import Nav from "@/src/components/Navbar-2";
import FooterFeat from "@/src/components/Footer";

import { axiosInstance } from "@/src/lib/axios";
import { formatDateID } from "@/src/lib/dateHelper";
import { NewsLandingPageType } from "@/src/types";
import NewsLpSkeleton from "@/src/components/Skeletons/DetailNewsLpSk";
const DetailNewsLandingPage = () => {
   const { id } = useParams();
   console.log(id)

  const [news, setNews] = useState<NewsLandingPageType | null>(null);
  const [loading, setLoading] = useState(true);

  const getDetailNews = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get(
        `/api/v1/news/${id}`
      );
      console.log(response.data)
      setNews(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      getDetailNews();
    }
  }, [id]);

  if (loading) {
    return (
      <NewsLpSkeleton/>
    );
  }

  if (!news) {
    return (
      <>

        <section className="container mx-auto py-32 text-center">
          <h1 className="text-3xl font-bold">
            Berita tidak ditemukan
          </h1>

          <Link
            href="/berita"
            className="mt-6 inline-block text-[#1A4D2E]"
          >
            ← Kembali ke Berita
          </Link>
        </section>

      </>
    );
  }

  return (
    <>

      <section className="container mx-auto max-w-5xl px-6 py-16">

        <Link
          href="/berita"
          className="mb-8 inline-flex items-center gap-2 text-[#1A4D2E] hover:underline"
        >
          <ArrowLeft size={18} />
          Kembali ke Berita
        </Link>

        <h1 className="mt-6 text-4xl font-bold leading-tight text-[#1A4D2E]">
          {news.news_name}
        </h1>

        <div className="mt-5 flex items-center gap-2 text-muted-foreground">
          <CalendarDays size={18} />

          {formatDateID(news.tanggal_berita)}
        </div>

        <div className="relative mt-10 h-125 overflow-hidden rounded-2xl shadow-lg">
          <Image
            src={news.photo_url}
            alt={news.news_name}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>

        <article className="prose prose-lg mt-12 max-w-none leading-9 text-justify">
          {news.deskripsi}
        </article>

      </section>

    </>
  );
}

export default DetailNewsLandingPage