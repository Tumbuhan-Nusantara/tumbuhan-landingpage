"use client"
import { Separator } from "@/components/ui/separator";
import { Contacts } from "@/src/constants";
import { MessageCircleHeart } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const KontakFeat = () => {
  const k = useTranslations("contact");
    useLocale();
  return (
    <div className="container mx-auto my-12">
      <div className="grid gap-12 justify-center">
        <div className="grid gap-2 text-center">
          <h1 className="font-bold text-2xl text-[#2B593A]">
            {k('title')}
          </h1>
          <p className="text-muted-foreground">
            {k('desc')}
          </p>
        </div>
        <div className="flex items-center gap-2 justify-center hover:text-gray-600">
          <Link href="#" >{k('button')}</Link>
          <MessageCircleHeart size={20}  />
        </div>
      </div>
      <Separator className="my-12"/>
      <div className="flex justify-center items-center gap-6 my-12">
        {Contacts.map((logo) => (
          <div
            key={logo.id}
            className="border-[#2B593A] border-2 rounded-full p-4 bg-white duration-500 transition hover:bg-[#c7f7da] cursor-pointer"
          >
            <Image width={20} height={20} src={logo.icon} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KontakFeat;
