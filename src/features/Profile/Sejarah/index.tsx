"use client";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useTranslations } from "next-intl";
import { SejarahFocus } from "@/src/constants";

const SejarahProfileFeat = () => {
  const s = useTranslations("sejarah");
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto px-5 md:px-8 lg:px-20 py-16">
      <div
        className="text-center mb-14"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A4D2E]">
          {s("title")}
        </h1>

        <div className="w-24 h-1 bg-[#2B593A] rounded-full mx-auto mt-4" />
      </div>

      <div
        className="bg-white rounded-3xl shadow-lg overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/profile/sejarah.jpeg"
              alt="Kegiatan Yayasan Tumbuhan Asli Nusantara"
              width={700}
              height={900}
              className="w-full h-full object-cover min-h-87.5"
            />
          </div>

          <div className="p-8 md:p-10 lg:p-12 space-y-6">
            <p className="text-[#486451] leading-8 text-justify">
              {s("content1")}
            </p>

            <p className="text-[#486451] leading-8 text-justify">
              {s("content2")}
              <span className="font-semibold">
                {" "}
                Digital Flora of Indonesia{" "}
              </span>
              <Link
                href="https://www.indonesiaplants.org/"
                target="_blank"
                className="text-[#2B593A] font-semibold underline underline-offset-4 hover:text-green-700"
              >
                indonesiaplants.org
              </Link>
            </p>

            <p className="text-[#486451] leading-8 text-justify">
              {s("content3")}
            </p>
          </div>
        </div>

        <div className="border-t bg-[#FAFCFB] p-8 md:p-10 lg:p-12 space-y-6">
          <h2 className="text-2xl font-semibold text-[#1A4D2E]">
            {s("titlefocusAreas")}
          </h2>

          <p className="text-[#486451] leading-8 text-justify">
            {s("content4")}
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            {SejarahFocus.map((item) => (
              <div className="flex items-center gap-2 rounded-xl bg-[#F4FBF6] p-5" key={item.id}>
                <item.logo className="h-5 w-5 text-[#2B593A]" />

                <span className="font-medium">
                  {s(`focusAreas.${item.title}`)}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[#486451] leading-8 text-justify">
            {s("content5")}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SejarahProfileFeat;
