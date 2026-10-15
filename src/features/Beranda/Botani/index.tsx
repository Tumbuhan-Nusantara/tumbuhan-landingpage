"use client";
import { Button } from "@/src/components/ui/button";
import { useRouter } from "@/src/i18n/navigation";
import { axiosInstance } from "@/src/lib/axios";
import { getTranslation } from "@/src/lib/translation";
import { BotaniType } from "@/src/types";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const BotaniFeat = () => {
  const [botani, setBotani] = useState<BotaniType[]>([])
  const b = useTranslations("botani");
  const locale = useLocale();

  const getBotaniData = async () => {
    try {
      const response = await axiosInstance.get('/api/v1/thumbnail')
      const result = response.data.data
      setBotani(result)
      console.log(result)
    } catch (error) {
      throw error
    }
  }


  const router = useRouter();

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getBotaniData()
  }, [])
  return (
    <div className="overflow-hidden">
      <section className="container mx-auto px-6 md:px-10 lg:px-20 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 items-center gap-12 lg:gap-20">
          <div
            className="relative order-2 lg:order-1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <Image
              src="/botani/botani.jpeg"
              alt="Botani Untuk Semua"
              width={700}
              height={700}
              className="rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -bottom-6 -right-6 h-36 w-36 rounded-full bg-[#CBEAD7]/60 blur-3xl" />
          </div>

          <div
            className="flex flex-col justify-center gap-8 order-1 lg:order-2"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A4D2E] leading-tight">
              {b("title")}
            </h1>

            <div className="space-y-5 text-[#355C46] leading-8">
              <p>
                <span className="font-bold text-[#1A4D2E]">YTAN </span>
                {b("desc")}
              </p>

              <p>{b("desc-2")}</p>
            </div>

            <div>
              <Button
                onClick={() => router.push("/profile/visi-misi")}
                className="rounded-full px-10 py-6 bg-[#1A4D2E] hover:bg-[#2F6A46] shadow-lg"
              >
                {b("button")}
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="relative bg-linear-to-b from-[#F8FCF9] to-[#EEF7F2] py-20">
        <div className="container mx-auto space-y-20">
          {botani.map((item, index) => (
            <div
              key={item.id}
              className={`grid lg:grid-cols-2 items-center gap-10 px-6 md:px-12 lg:px-20 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="relative"
                data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
              >
                <div className="rounded-3xl bg-white p-8 shadow-xl">
                  <Image
                    src={item.photo_url}
                    alt={getTranslation(locale, item?.title_in , item?.title_en)}
                    width={450}
                    height={300}
                    className="mx-auto object-contain"
                    unoptimized
                  />
                </div>

                <div className="absolute -z-10 top-6 left-6 h-full w-full rounded-3xl bg-[#D8F0E1]" />
              </div>

              <div
                className="space-y-5"
                data-aos={index % 2 === 0 ? "fade-left" : "fade-right"}
              >
                <span className="inline-flex rounded-full bg-[#D8F0E1] px-4 py-1 text-sm font-medium text-[#2B593A]">
                  Program
                </span>

                <h2 className="text-3xl md:text-4xl font-bold text-[#1A4D2E]">
                  {getTranslation(locale, item?.title_in , item?.title_en)}
                </h2>

                <p className="text-[#355C46] leading-8">
                  {getTranslation(locale, item?.descript_in , item?.descript_en)}
                </p>

                <Button
                  onClick={() => router.push(`/kegiatan`)}
                  variant="outline"
                  className="rounded-full border-[#2B593A] text-[#2B593A] hover:bg-[#2B593A] hover:text-white"
                >
                  Pelajari Selengkapnya
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default BotaniFeat;
