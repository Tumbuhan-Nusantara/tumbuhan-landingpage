"use client";
import { Button } from "@/components/ui/button";
import { CarouselType } from "@/src/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const BotaniFeat = () => {
  const b = useTranslations("botani");
  const c = useTranslations("cards");

  useLocale();
  console.log("LOCALE:", useLocale());

  const dataCarousel: CarouselType[] = [
    { key: "card1", image: "/botani/Penelitian.jpg" },
    { key: "card2", image: "/botani/Konservasi.jpg" },
    { key: "card3", image: "/botani/Berita.jpg" },
  ];
  return (
    <div className="container mx-auto">
      <div className="grid md:grid-cols-1 lg:grid-cols-2 px-8 md:px-12 lg:px-25 py-12 md:py-20 lg:my-18 gap-10 md:gap-20 lg:gap-8">
        <Image
          height={600}
          width={600}
          src="/botani/botani.jpeg"
          alt="Botani Untuk Semua"
        />
        <div className="flex flex-col gap-12">
          <h1 className="text-[#2B593A] text-3xl font-semibold">
            {b("title")}
          </h1>
          <div className="flex flex-col gap-6">
            <p className="text-[#2B593A]">
              <span className="font-bold text-[#2B593A]">YTAN </span>
              {b("desc")}
            </p>
            <p className="text-[#2B593A]">{b("desc-2")}</p>
          </div>
          <div>
            <Button className="bg-[#1A4D2E] text-white py-6 px-10 rounded-full hover:bg-[#2d6e47] cursor-pointer">
              {b("button")}
            </Button>
          </div>
        </div>
      </div>
      <div className="bg-[#F1F1F1] py-20 flex flex-col gap-12">
        {dataCarousel.map((item) => (
          <div
            key={item.key}
            className="flex flex-col md:flex-row items-center justify-center px-6 md:px-12 lg:px-24"
          >
            <div className="bg-white w-full md:w-[45%] h-80 md:h-80 flex justify-center items-center">
              <Image
                width={300}
                height={100}
                alt={item.key}
                src={item.image}
                className="object-contain"
              />
            </div>
            <div className="bg-white w-full md:w-[50%] mt-6 md:mt-0 md:-ml-12 p-6 md:p-8 shadow-lg text-center md:text-left">
              <h1 className="text-[#1A4D2E] font-bold text-2xl md:text-3xl">
                {c(`${item.key}.title`)}
              </h1>
              <p className="text-[#1A4D2E] mt-2">{c(`${item.key}.desc`)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotaniFeat;
