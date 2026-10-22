"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, CalendarDays } from "lucide-react";

import { axiosInstance } from "@/src/lib/axios";
import { formatDateID } from "@/src/lib/dateHelper";
import { NewsLandingPageType } from "@/src/types";
import NewsLpSkeleton from "@/src/components/Skeletons/DetailNewsLpSk";
const DetailNewsLandingPage = () => {
  const { id } = useParams();
  console.log(id);

  const [news, setNews] = useState<NewsLandingPageType | null>(null);
  const [loading, setLoading] = useState(true);

  const getDetailNews = async () => {
    try {
      setLoading(true);

      const response = await axiosInstance.get(`/api/v1/news/${id}`);
      console.log(response.data);
      setNews(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getYoutubeEmbedUrl = (url: string) => {
  try {
    const parsedUrl = new URL(url);

    if (parsedUrl.hostname === "www.youtube.com") {
      const videoId = parsedUrl.searchParams.get("v");

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    if (parsedUrl.hostname === "youtu.be") {
      const videoId = parsedUrl.pathname.substring(1);

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    }

    if (parsedUrl.hostname === "www.youtube.com") {
      if (parsedUrl.pathname.startsWith("/embed/")) {
        return url;
      }
    }

    return null;
  } catch {
    return null;
  }
};


  useEffect(() => {
    if (id) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      getDetailNews();
    }
  }, [id]);

  if (loading) {
    return <NewsLpSkeleton />;
  }

  if (!news) {
    return (
      <>
        <section className="container mx-auto py-32 text-center">
          <h1 className="text-3xl font-bold">Berita tidak ditemukan</h1>

          <Link href="/berita" className="mt-6 inline-block text-[#1A4D2E]">
            ← Kembali ke Berita
          </Link>
        </section>
      </>
    );
  }
  
const youtubeEmbedUrl = news.video_link
  ? getYoutubeEmbedUrl(news.video_link)
  : null;

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

        {youtubeEmbedUrl && (
          <section className="mt-10">
            <div className="mb-4 flex items-center gap-2">
              <video className="h-5 w-5 text-[#1A4D2E]" />

              <h2 className="text-xl font-semibold text-[#1A4D2E]">
                Video
              </h2>
            </div>

            <div className="overflow-hidden rounded-2xl border bg-black shadow-lg">
              {youtubeEmbedUrl ? (
                <iframe
                  src={youtubeEmbedUrl}
                  title={`Video ${news.news_name}`}
                  className="aspect-video w-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="flex aspect-video items-center justify-center px-6 text-center text-sm text-white/70">
                  Video tidak dapat ditampilkan.
                </div>
              )}
            </div>
          </section>
        )}

        <article
          className=" prose
    prose-lg
    mt-12
    max-w-none
    leading-9
    text-justify
    whitespace-pre-wrap
    break-all
    overflow-hidden"
        >
          {news.deskripsi}
        </article>
      </section>
    </>
  );
};

export default DetailNewsLandingPage;
