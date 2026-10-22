"use client";

import { MessageCircleHeart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";

const KontakFeat = () => {
  const k = useTranslations("contact");
  useLocale();
  return (
    <div className="container mx-auto my-12">
      <div className="grid gap-12 justify-center">
        <div className="grid gap-2 text-center">
          <h1 className="font-bold sm:text-md md:text-2xl text-[#2B593A]">
            {k("title")}
          </h1>
          <p className="text-muted-foreground sm:text-sm md:text-lg">
            {k("desc")}
          </p>
        </div>
        <div className="flex items-center gap-2 justify-center hover:text-gray-600">
          <Link href="#">{k("button")}</Link>
          <MessageCircleHeart size={20} />
        </div>
      </div>
    </div>
  );
};

export default KontakFeat;
