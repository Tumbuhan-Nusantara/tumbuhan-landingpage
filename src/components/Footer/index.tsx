import { Separator } from "@/components/ui/separator";
import { Contacts } from "@/src/constants";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

const FooterFeat = () => {
  const k = useTranslations("navbar");
  useLocale();
  return (
    <div>
      <div className="bg-[#2B593A] px-6 md:px-12 lg:px-20 py-12">
        <div className="flex flex-col md:flex-row lg:flex-row justify-center lg:justify-between">
          <Image
            src="/footer/ytan.png"
            alt="logo ytan"
            width={300}
            height={300}
          />
          <div className="flex flex-col gap-4">
            <h1 className="text-white font-semibold"> {k("contact")}</h1>
            <div className="flex flex-col gap-2">
              <p className="text-sm text-gray-200">tumbuhanasli@gmail.com</p>
              <p className="text-sm text-gray-200">
                BTN Kopri Blok C1 No 96, Kawatuna, Mantikulore, Palu
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap lg:justify-center gap-4 my-8">
          {Contacts.map((logo) => (
            <div
              key={logo.id}
              className="border-[#2B593A] border-2 rounded-full  p-3 md:p-4 bg-white duration-500 transition hover:bg-[#c7f7da] cursor-pointer"
            >
              <Image width={20} height={20} src={logo.icon} alt={logo.alt} />
            </div>
          ))}
        </div>
        <Separator className="mt-10 bg-white/20" />
        <div className="flex lg:justify-center items-center">
          <p className=" font-light  text-xs md:text-sm text-gray-200 mt-6">
            © 2026 Yayasan Tumbuhan Asli Nusantara • v1.0.0
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterFeat;
