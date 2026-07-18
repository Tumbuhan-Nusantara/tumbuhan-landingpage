"use client";
import { Button } from "@/src/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/src/components/ui/carousel";
import { axiosInstance } from "@/src/lib/axios";
import { formatDateID } from "@/src/lib/dateHelper";
import { useRouter } from "@/src/i18n/navigation";
import { NewsLandingPageType } from "@/src/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const BeritaFeat = () => {
  const b = useTranslations("berita");
  useLocale();
  const router = useRouter();

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
    <div className="bg-linear-to-l from-[#C7FCDC] to-white">
      <div className="container mx-auto py-12">
        <h1 className="text-[#2B593A] text-2xl md:text-3xl font-semibold text-center">
          {b("title")}
        </h1>
        <div className="flex flex-col items-center px-12 md:px-12 lg:px-12">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full sm:max-w-xs md:max-w-5xl my-8 py-12 sm:basis-1/2 md:basis-1/3"
          >
            <CarouselContent>
              {news.map((item) => (
                <CarouselItem
                  key={item.id}
                  className="basis-full sm:basis-1/2 lg:basis-1/3"
                >
                  <div className="p-2">
                    <div className="overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <Image
                        src={item.photo_url}
                        alt={item.news_name}
                        width={500}
                        height={300}
                        className="h-56 w-full object-cover"
                      />

                      <div className="flex min-h-55 flex-col p-5">
                        <p className="text-sm italic text-[#2B593A]">
                          {formatDateID(item.tanggal_berita)}
                        </p>

                        <h3 className="mt-3 line-clamp-2 text-xl font-semibold text-[#1A4D2E]">
                          {item.news_name}
                        </h3>

                        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">
                          {item.deskripsi}
                        </p>

                        <div className="mt-auto pt-6">
                          <p className="text-sm text-gray-500">
                            Nama Publisher
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
          <div>
            <Button
              onClick={() => router.push(`/berita`)}
              className="bg-[#1A4D2E] text-white py-6 px-10 rounded-full hover:bg-[#2d6e47] cursor-pointer"
            >
              {b("button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaFeat;
