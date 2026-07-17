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
import { ArrowRight, Search } from "lucide-react";
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
        <div className="absolute inset-0 bg-[url('/image.png')] opacity-10 bg-cover" />

        <div className="container mx-auto px-6 py-24 relative">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-flex px-4 py-1 rounded-full bg-white/10 text-sm">
              Berita
            </span>

            <h1 className="mt-6 text-5xl font-bold">Berita</h1>

            <p className="mt-6 text-white/80 leading-8">
              Ikuti seluruh informasi terbaru mengenai Yayasan Tumbuhan Asli
              Nusantara.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-6 py-12">
        <div className="relative w-full md:max-w-md">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

          <Input
            placeholder="Cari berita..."
            className="pl-11 rounded-full h-12"
          />
        </div>
      </section>

      <section className="container mx-auto px-6 pb-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {news.map((item) => (
            <Card key={item.id} className="group overflow-hidden border-0 rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300">
              <div className="overflow-hidden">
                <Image
                fill
                  src={item.photo_url}
                  alt="foto"
                  className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
                />
              </div>

              <CardContent className="p-6">
                <p className="text-xs uppercase tracking-widest text-[#2B593A]">
                  {formatDateID(item.tanggal_berita)}
                </p>

                <h2 className="mt-3 text-xl font-semibold line-clamp-2 text-[#1A4D2E]">
                  {item.news_name}
                </h2>

                <p className="mt-4 text-muted-foreground leading-7 line-clamp-3">
                  {item.deskripsi}
                </p>

                <Button variant="ghost" className="mt-6 p-0 text-[#1A4D2E]">
                  Baca Selengkapnya
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition" />
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
      <FooterFeat />
    </div>
  );
};

export default BeritaMainFeat;
