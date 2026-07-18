'use client'
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { HeroLandingPageType } from "@/src/types";
import Aos from "aos";
import 'aos/dist/aos.css';
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const Hero = () => {
  const h = useTranslations("hero")
  useLocale()

  const router = useRouter()

  const [hero, setHero] = useState<HeroLandingPageType| null>(null)
  const getHero = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/hero`)
      const Hero = response.data.data[0]

      setHero(Hero)
      console.log("cek hero", Hero)
    } catch (error) {
      throw error
    }
  }
  useEffect(() => {
    Aos.init()
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getHero()
  }, [])
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 px-8 md:px-12 lg:px-30">
          <div className="w-full md:w-full lg:w-2xl">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B593A] tracking-wider" data-aos="fade-up" data-aos-duration="2000">
              {hero?.beranda}
            </h1>
          </div>
          <div className="w-full md:w-full lg:w-xl">
            <p className="text-sm md:text-lg lg:text-lg" data-aos="fade-up" data-aos-duration="2000">
              <span className="font-bold text-[#2B593A]">
                Yayasan Tumbuhan Asli Nusantara Foundation
              </span>{" "}
              {hero?.deskripsi}
            </p>
          </div>
          <div>
            <Button onClick={() => router.push("/profile/sejarah")} className="bg-[#2B593A] py-4 px-10 rounded-full" data-aos="fade-left" data-aos-duration="1000">
              {h('about')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
