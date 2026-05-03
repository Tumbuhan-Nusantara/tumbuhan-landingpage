"use client";
import { useRouter } from "@/src/i18n/navigation";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Switcher() {
  const router = useRouter();
  const locale = useLocale();

  const switchLocale = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    router.replace("/", { locale: nextLocale });
  };

  return (
    <div className="flex gap-2">
      <Button onClick={switchLocale} className="bg-white border-[#2B593A] text-black hover:bg-[#e9fff2] transition duration-500 cursor-pointer">{locale === "id" ? '🇬🇧 EN' : '🇮🇩 ID'}</Button>
    </div>
  );
}
