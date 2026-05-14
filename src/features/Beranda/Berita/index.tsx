"use client";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const BeritaFeat = () => {
  const b = useTranslations("berita");
  useLocale();
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
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="w-full h-115 hover:scale-100 bg-white">
                      <Image
                        width={400}
                        height={100}
                        src="/botani/Berita.jpg"
                        alt="Berita"
                      />
                      <div className="grid gap-10 m-2">
                        <div className="grid gap-4">
                          <p className="italic text-[#2B593A] text-sm font-light">
                            tanggal publish berita
                          </p>
                          <p className=" text-xl font-light">Judul Berita</p>
                        </div>
                        <p className="font-extralight text-sm">Nama Publisher</p>
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
            <Button className="bg-[#1A4D2E] text-white py-6 px-10 rounded-full hover:bg-[#2d6e47] cursor-pointer">{b('button')}</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeritaFeat;
