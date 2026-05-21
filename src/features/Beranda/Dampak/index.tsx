"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import { useEffect } from "react";

const DampakFeat = () => {
  const t = useTranslations("dampak");
  useLocale();
  console.log("LOCALE:", useLocale());

  const dataCard = [
    { key: "terdata" },
    { key: "baru" },
    { key: "penelitian" },
    { key: "edukasi" },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="bg-linear-to-l from-[#C7FCDC] to-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center px-8 md:px-6 lg:px-96 gap-2">
          <h1 className="text-[#2B593A] text-4xl font-semibold text-center">
            {t("title")}
          </h1>
          <p className="text-center">
            <span className="font-bold text-[#2B593A]">YTAN</span> {t("desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 md:px-10 lg:px-24 gap-4 py-12 justify-items-center sm:justify-items-stretch">
          {dataCard.map((item, index) => (
            <Card
              key={item.key}
              className="w-full max-w-sm shadow-xl py-8 hover:scale-100 transition duration-300 hover:shadow-[#b9fad3]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <CardHeader>
                <CardTitle className="font-medium text-xl text-[#2B593A] text-center">
                  {t(item.key)}
                </CardTitle>
                <CardDescription className="text-center">
                  (Est. 2023)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h1 className="font-bold text-4xl text-[#2B593A] text-center">
                  22
                </h1>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DampakFeat;
