"use client";
import { Input } from "@/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import { axiosInstance } from "@/lib/axios";
import { formatDateID } from "@/lib/dateHelper";
import { NewsLandingPageType } from "@/src/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Nav from "@/components/Navbar-2";
import FooterFeat from "@/components/Footer";

const BeritaMainFeat = () => {
  const [news, setNews] = useState<NewsLandingPageType[]>([]);
  const getNews = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/news`);
      setNews(response.data.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getNews();
  }, []);
  return (
    <div>
      <Nav />

      <section className="relative mt-22 overflow-hidden bg-linear-to-br from-[#1A4D2E] via-[#2B593A] to-[#356E4B]">
        <div className="absolute inset-0 opacity-10 bg-[url('/image.png')] bg-cover" />

        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
              Berita
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Berita YTAN
            </h1>

            <p className="mt-6 text-white/90 leading-8 text-base md:text-lg">
              Ikuti berbagai informasi terbaru mengenai penelitian, konservasi,
              edukasi, publikasi, serta kegiatan Yayasan Tumbuhan Asli
              Nusantara.
            </p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
          <Input
            placeholder="Cari berita..."
            className="max-w-md rounded-full"
          />

          <p className="text-sm text-muted-foreground">Menampilkan 12 berita</p>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card
              key={item.id}
              className="overflow-hidden border-0 shadow-md hover:shadow-2xl transition duration-300 group"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.photo_url}
                  alt={item.news_name}
                  width={600}
                  height={350}
                  className="w-full h-60 object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              <CardContent className="p-6">
                <p className="text-sm text-[#2B593A] mb-3">
                  {formatDateID(item.tanggal_berita)}
                </p>

                <h2 className="text-xl font-semibold line-clamp-2 text-[#1A4D2E]">
                  {item.news_name}
                </h2>

                <p className="text-muted-foreground mt-4 line-clamp-3">
                  {item.deskripsi}
                </p>

                <Button
                  variant="link"
                  className="px-0 mt-5 text-[#1A4D2E] group"
                >
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4 transition group-hover:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>


        <div className="mt-16 flex justify-center">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#" isActive>
                  1
                </PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#">2</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationLink href="#">3</PaginationLink>
              </PaginationItem>

              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
      <FooterFeat/>
    </div>
  );
};

export default BeritaMainFeat;
