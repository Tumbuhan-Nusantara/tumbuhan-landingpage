'use client'
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

const Hero = () => {
  const h = useTranslations("hero")
  useLocale()
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 px-8 md:px-12 lg:px-30">
          <div className="w-full md:w-full lg:w-2xl">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B593A] tracking-wider">
              {h('title')}
            </h1>
          </div>
          <div className="w-full md:w-full lg:w-xl">
            <p className="text-sm md:text-lg lg:text-lg">
              <span className="font-bold text-[#2B593A]">
                Yayasan Tumbuhan Asli Nusantara Foundation
              </span>{" "}
              {h('desc')}
            </p>
          </div>
          <div>
            <Button className="bg-[#2B593A] py-4 px-10 rounded-full">
              {h('about')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
