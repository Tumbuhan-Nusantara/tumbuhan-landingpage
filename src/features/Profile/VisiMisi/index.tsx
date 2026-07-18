"use client";
import { axiosInstance } from "@/src/lib/axios";
import { VisiMisiItem } from "@/src/constants";
import { VisiLandingPageType } from "@/src/types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const VisiMisiFeat = () => {
  const v = useTranslations("visimisi");
  useLocale();

  const [visi, setVisi] = useState<VisiLandingPageType | null>(null);
  const getVisi = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/vission`);
      setVisi(response.data.data[0]);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    Aos.init();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getVisi();
  }, []);
  return (
    <div className="container mx-auto px-5 md:px-8 lg:px-20 py-16">
      <div
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A4D2E]">
          Visi, Misi & Tujuan
        </h1>

        <div className="w-24 h-1 bg-[#2B593A] rounded-full mx-auto mt-4" />
      </div>

      <section className="grid lg:grid-cols-2 gap-12 items-center">
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className="relative"
        >
          <Image
            src="/profile/visimisi/visimisi.jpg"
            alt="Visi Misi"
            width={650}
            height={650}
            className="rounded-3xl shadow-xl object-cover"
          />

          <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-[#CBEAD7] blur-3xl -z-10" />
        </div>

        <div
          className="bg-white rounded-3xl shadow-lg p-8 md:p-10"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <span className="inline-flex rounded-full bg-[#D8F0E1] px-4 py-1 text-sm font-semibold text-[#2B593A]">
            VISI KAMI
          </span>

          <p className="mt-6 text-justify leading-8 text-[#486451]">
            {visi?.visi}
          </p>
        </div>
      </section>

      <section className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A4D2E]">Misi Kami</h2>

          <p className="text-muted-foreground mt-2">
            Langkah nyata yang kami lakukan untuk mewujudkan visi organisasi.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {VisiMisiItem.map((misi, index) => (
            <div
              key={misi.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-6">
                <div className="rounded-2xl bg-[#EDF8F1] p-4 group-hover:scale-110 transition">
                  <Image
                    src={misi.src}
                    alt={misi.desc}
                    width={60}
                    height={60}
                  />
                </div>
              </div>

              <p className="text-[#486451] leading-7">{v(misi.desc)}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24" data-aos="fade-up" data-aos-duration="900">
        <div className="bg-linear-to-r from-[#F5FBF7] to-[#EEF8F2] rounded-3xl p-8 md:p-12 border border-[#D9EEDF]">
          <h2 className="text-3xl font-bold text-[#1A4D2E] mb-6">Tujuan</h2>

          <p className="leading-8 text-[#486451] text-justify">{v("tujuan")}</p>
        </div>
      </section>
    </div>
  );
};

export default VisiMisiFeat;
