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
      console.log("cek hero", Hero);
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
    <div className="relative flex min-h-screen items-center overflow-hidden bg-linear-to-br from-[#F7FBF8] via-white to-[#EEF7F1]">

  <div className="absolute -top-32 -right-20 h-96 w-96 rounded-full bg-green-100 blur-3xl opacity-60" />

  <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-[#2B593A]/10 blur-3xl" />

  <div className="container relative mx-auto px-6 lg:px-20">

    <div className="max-w-3xl">

      <div
        className="mb-6 inline-flex rounded-full border border-[#2B593A]/20 bg-[#2B593A]/5 px-5 py-2"
        data-aos="fade-down"
      >
        <span className="text-sm font-medium text-[#2B593A]">
          Yayasan Tumbuhan Asli Nusantara
        </span>
      </div>

      <h1
        className="text-4xl font-bold leading-tight text-[#1A4D2E] md:text-5xl lg:text-6xl"
        data-aos="fade-up"
      >
        {getTranslation(locale, hero?.beranda_id, hero?.beranda_en)}
      </h1>

      <p
        className="mt-8 max-w-2xl text-base leading-8 text-muted-foreground md:text-lg"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <span className="font-semibold text-[#2B593A]">
          Yayasan Tumbuhan Asli Nusantara Foundation
        </span>{" "}
        {getTranslation(
          locale,
          hero?.deskripsi_id,
          hero?.deskripsi_en
        )}
      </p>

      <div
        className="mt-10 flex flex-wrap gap-4"
        data-aos="fade-up"
        data-aos-delay="250"
      >
        <Button
          onClick={() => router.push("/profile/sejarah")}
          className="rounded-full bg-[#2B593A] px-8 py-6 text-base shadow-lg transition hover:bg-[#214A31]"
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
