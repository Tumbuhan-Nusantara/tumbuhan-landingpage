import { Separator } from "@/components/ui/separator";
import { Contacts } from "@/src/constants";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const FooterFeat = () => {
  const k = useTranslations("navbar");
  useLocale();
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
              Yayasan Tumbuhan Asli Nusantara berkomitmen dalam pelestarian
              tumbuhan asli Indonesia melalui penelitian, edukasi, dan aksi
              konservasi bersama masyarakat.
            </p>
          </div>

          <div className="space-y-5 lg:justify-self-end">
            <h3 className="text-lg font-semibold">{k("contact")}</h3>

            <div className="space-y-3 text-sm text-white/80 leading-6">
              <p>📧 tumbuhanasli@gmail.com</p>

              <p className="max-w-sm">
                📍 BTN Kopri Blok C1 No.96, Kawatuna, Mantikulore, Kota Palu,
                Sulawesi Tengah
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-12">
          {Contacts.map((logo) => (
            <button
              key={logo.id}
              className="h-12 w-12 rounded-full bg-white/10 hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center"
            >
              <Image src={logo.icon} alt={logo.alt} width={20} height={20} />
            </button>
          ))}
        </div>

        <Separator className="my-8 bg-white/20" />

        <p className="text-center text-sm text-white/60">
          © 2026 Yayasan Tumbuhan Asli Nusantara • All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default FooterFeat;
