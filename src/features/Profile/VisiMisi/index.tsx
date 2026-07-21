"use client";
import { axiosInstance } from "@/src/lib/axios";
import { GoalType, MisiType, VisiLandingPageType } from "@/src/types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";
import { getTranslation } from "@/src/lib/translation";
import { Leaf } from "lucide-react";

const VisiMisiFeat = () => {
  const v = useTranslations("visimisi");
  const locale = useLocale();
  const DefaultIcon = Leaf;

  const [visi, setVisi] = useState<VisiLandingPageType | null>(null);
  const [misi, setMisi] = useState<MisiType[]>([]);
  const [goal, setGoal] = useState<GoalType | null>(null);

  const fetchData = async () => {
    try {
      const [visiRes, misiRes, goalRes] = await Promise.all([
        axiosInstance.get("/api/v1/vission"),
        axiosInstance.get("/api/v1/missions"),
        axiosInstance.get("/api/v1/goal"),
      ]);

      setVisi(visiRes.data.data[0] ?? null);
      setMisi(misiRes.data.data ?? []);
      setGoal(goalRes.data.data[0] ?? null);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    Aos.init();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchData();
  }, []);
  return (
    <div className="container mx-auto px-5 md:px-8 lg:px-20 py-16">
      <div
        className="text-center mb-16"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A4D2E]">
          {v("title")}
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
            {v("visi")}
          </span>

          <p className="mt-6 text-justify leading-8 text-[#486451]">
            {getTranslation(locale, visi?.visi_id, visi?.visi_en)}
          </p>
        </div>
      </section>

      <section className="mt-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#1A4D2E]">{v("misi")}</h2>

          <p className="text-muted-foreground mt-2">{v("misidesc")}</p>
        </div>

        <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {misi.map((misi, index) => (
            <div
              key={misi.id}
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white rounded-3xl p-8 shadow-md hover:shadow-xl transition-all duration-300 text-center group"
            >
              <div className="flex justify-center mb-6">
                <div className="rounded-2xl bg-[#EDF8F1] p-4 group-hover:scale-110 transition">
                  {/* <Image
                    src={misi.src}
                    alt={misi.desc}
                    width={60}
                    height={60}
                  /> */}
                  <DefaultIcon />
                </div>
              </div>

              <p className="text-[#486451] leading-7">
                {getTranslation(locale, misi?.content_id, misi?.content_en)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-24" data-aos="fade-up" data-aos-duration="900">
        <div className="bg-linear-to-r from-[#F5FBF7] to-[#EEF8F2] rounded-3xl p-8 md:p-12 border border-[#D9EEDF]">
          <h2 className="text-3xl font-bold text-[#1A4D2E] mb-6">
            {v("tujuan")}
          </h2>

          <p className="leading-8 text-[#486451] text-justify">
            {getTranslation(locale, goal?.goal_id, goal?.goal_en)}
          </p>
        </div>
      </section>
    </div>
  );
};

export default VisiMisiFeat;
