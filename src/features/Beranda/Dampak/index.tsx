"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { axiosInstance } from "@/src/lib/axios";
import { getTranslation } from "@/src/lib/translation";
import { DampakLandingPageType } from "@/src/types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import CountUp from "react-countup";

const DampakFeat = () => {
  const locale = useLocale();
  const d = useTranslations("dampak");

  const [dampak, setDampak] = useState<DampakLandingPageType[]>([]);
  const getDampak = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/dampak`);
      setDampak(response.data.data);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    Aos.init();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getDampak();
  }, []);
  return (
    <div className="bg-linear-to-l from-[#C7FCDC] to-white">
      <div className="container mx-auto">
        <div className="flex flex-col items-center px-8 md:px-6 lg:px-96 gap-2">
          <h1 className="text-[#2B593A] text-4xl font-semibold text-center">
            {d("title")}
          </h1>
          <p className="text-center">
            <span className="font-bold text-[#2B593A]">YTAN</span> {d("desc")}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 px-8 md:px-10 lg:px-24 gap-4 py-12 justify-items-center sm:justify-items-stretch">
          {dampak.map((item, index) => (
            <Card
              key={item.id}
              className="w-full max-w-sm shadow-xl py-8 hover:scale-100 transition duration-300 hover:shadow-[#b9fad3]"
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-delay={index * 150}
            >
              <CardHeader>
                <CardTitle className="font-medium text-xl text-[#2B593A] text-center">
                  {getTranslation(
                    locale,
                    item?.keterangan_id,
                    item?.keterangan_en,
                  )}
                </CardTitle>
                <CardDescription className="text-center">
                  {item.sejak}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <h1 className="font-bold text-4xl text-[#2B593A] text-center">
                  <CountUp end={Number(item.total)} duration={5} />
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
