"use client";
import { Button } from "@/src/components/ui/button";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { HeroType } from "@/src/types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { getTranslation } from "@/src/lib/translation";

const Hero = () => {
  const h = useTranslations("hero");
  const locale = useLocale();
  const router = useRouter();

  const [hero, setHero] = useState<HeroType | null>(null);
  const getHero = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/hero`);
      const Hero = response.data.data[0];

      setHero(Hero);
    } catch (error) {
      throw error;
    }
  };
  useEffect(() => {
    Aos.init();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getHero();
  }, []);
  return (
    <div className="relative flex min-h-screen items-center overflow-hidden bg-[url('/hero_ytan.jpg')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-[#1A4D2E]/70" />

      <div className="container relative mx-auto px-6 lg:px-20">
        <div className="max-w-3xl text-white">
          <div
            className="mb-6 inline-flex rounded-full border border-white/30 bg-white/10 px-5 py-2"
            data-aos="fade-down"
          >
            <span className="text-sm font-medium">
              Yayasan Tumbuhan Asli Nusantara
            </span>
          </div>

          <h1
            className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
            data-aos="fade-up"
          >
            {getTranslation(locale, hero?.beranda_id, hero?.beranda_en)}
          </h1>

          <p
            className="mt-8 max-w-2xl text-base leading-8 text-white/80 md:text-lg"
            data-aos="fade-up"
            data-aos-delay="150"
          >
            <span className="font-semibold text-white">
              Yayasan Tumbuhan Asli Nusantara Foundation
            </span>{" "}
            {getTranslation(locale, hero?.deskripsi_id, hero?.deskripsi_en)}
          </p>

          <div
            className="mt-10 flex flex-wrap gap-4"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <Button
              onClick={() => router.push("/profile/sejarah")}
              className="rounded-full bg-white px-8 py-6 text-base text-[#2B593A] shadow-lg transition hover:bg-white/90"
            >
              {h("about")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
