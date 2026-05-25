"use client";
import { VisiMisiItem } from "@/src/constants";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect } from "react";

const VisiMisiFeat = () => {
  const v = useTranslations("visimisi");
  useLocale();

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto">
      <div className="lg:px-0 md:px-0 px-4">
      <h1
        className="font-bold text-3xl md:text-4xl text-[#1A4D2E] mx-4 md:mx-0 lg:mx-0"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        Visi Misi dan Tujuan
      </h1>
      <div className="flex flex-col lg:flex-row mt-12 gap-8 ">
        <div
          className="w-full lg:w-125 shrink-0"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <Image
            src="/profile/visimisi/visimisi.jpg"
            alt="visi-misi"
            width={500}
            height={500}
            className="w-full
        h-auto
        rounded-2xl
        object-cover"
          />
        </div>

        <div className="flex flex-col gap-2 ">
          <h1 className="text-[#1A4D2E] font-semibold tracking-wider">
            VISI KAMI
          </h1>
          <p className="text-muted-foreground text-justify">
            Menjadi organisasi terdepan dalam meningkatkan pengelolaan sumber
            daya hutan dan keanekaragaman tumbuhan di Indonesia melalui
            penelitian, konservasi, restorasi, dan edukasi.
          </p>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex justify-center">
          <h1 className="text-[#1A4D2E] font-semibold tracking-wider">
            MISI KAMI
          </h1>
        </div>
        <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10">
          {VisiMisiItem.map((misi, index) => (
            <div
              key={misi.id}
              className="flex flex-col items-center w-3/4 gap-4"
              data-aos="fade-up"
              data-aos-delay={index * 150}
              data-aos-duration="900"
            >
              <Image
                src={misi.src}
                alt="Visi Misi"
                width={70}
                height={70}
                className="
        rounded-2xl
        object-cover shadow-[#1A4D2E] shadow-2xl p-2"
              />
              <p className="text-muted-foreground text-center">
                {v(misi.desc)}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20" data-aos="fade-up" data-aos-duration="900">
        <h1 className="text-[#1A4D2E] font-semibold tracking-wider">TUJUAN</h1>
        <p className="text-muted-foreground mt-2 leading-relaxed text-justify">
          {v("tujuan")}
        </p>
      </div>
      </div>
    </div>
  );
};

export default VisiMisiFeat;
