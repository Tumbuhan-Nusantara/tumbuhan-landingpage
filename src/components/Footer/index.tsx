"use client";
import { Separator } from "@/src/components/ui/separator";
import { Contacts } from "@/src/constants";
import { axiosInstance } from "@/src/lib/axios";
import { SocmedType } from "@/src/types";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useState } from "react";

const FooterFeat = () => {
  const f = useTranslations("footer");
  const [socmed, setSocmed] = useState<SocmedType[]>([]);
  const getSocmed = async () => {
    try {
      const resp = await axiosInstance.get(`/api/v1/socmed`);
      const result = resp.data.data;
      console.log("tes", result);
      setSocmed(result);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getSocmed();
  }, []);
  return (
    <div className="bg-[#2B593A] text-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-5">
            <Image
              src="/footer/ytan.png"
              alt="Logo YTAN"
              width={220}
              height={220}
            />

            <p className="max-w-md text-sm leading-7 text-white/80">
              {f("description")}
            </p>
          </div>

          <div className="space-y-5 lg:justify-self-end">
            <h3 className="text-lg font-semibold">{f("contactUs")}</h3>

            <div className="space-y-3 text-sm text-white/80 leading-6">
              <p>📧 tumbuhanasli@gmail.com</p>

              <p className="max-w-sm">📍 {f("address")}</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex justify-center gap-4">
          {socmed.map((item) => (
            <a
              key={item.id}
              href={item.url ?? "#"}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={item.name}
              className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:scale-105 hover:bg-white"
            >
              <Image
                src={
                  item.name.toLowerCase() === "instagram"
                    ? "/contacts/instagram.png"
                    : item.name.toLowerCase() === "facebook"
                      ? "/contacts/facebook.png"
                      : item.name.toLowerCase() === "x"
                        ? "/contacts/twitter.png"
                        : item.name.toLowerCase() === "linkedin"
                          ? "/contacts/linkedin.png"
                          : "/contacts/email.png"
                }
                alt={item.name}
                width={20}
                height={20}
              />
            </a>
          ))}
        </div>

        <Separator className="my-8 bg-white/20" />

        <p className="text-center text-sm text-white/60">{f("copyright")}</p>
      </div>
    </div>
  );
};

export default FooterFeat;
