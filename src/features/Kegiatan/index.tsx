import Nav from "@/src/components/Navbar-2";
import FooterFeat from "@/src/components/Footer";

import PublikasiFeat from "./Publikasi";
import KegiatanRiset from "./RisetEksplorasi";
import KegiatanEdukasi from "./Edukasi";
import KegiatanKonservasi from "./Konservasi";

import StickyNavigation from "@/src/components/StickyNavKegiatan/StickyNavigation";
import { useLocale, useTranslations } from "next-intl";

const KegiatanFeat = () => {
  const k = useTranslations("kegiatan");
const locale = useLocale();

console.log("KegiatanFeat locale:", locale);
  console.log("KegiatanFeat title:", k("title"));
  console.log("KegiatanFeat desc:", k("desc"));
  return (
    <>
      <Nav />
      <section className="relative mt-22 overflow-hidden bg-linear-to-br from-[#1A4D2E] via-[#2B593A] to-[#356E4B]">
        <div className="absolute inset-0 bg-[url('/image.png')] bg-cover opacity-10" />

        <div className="relative container mx-auto px-6 py-24">
          <div className="mx-auto max-w-3xl text-center text-white">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm">
              {k("title")}
            </span>

            <h1 className="mt-6 text-4xl font-bold md:text-5xl">
              {k("title")}
            </h1>

            <p className="mt-6 leading-8 text-white/80">{k("desc")}</p>
          </div>
        </div>
      </section> 
      <StickyNavigation />

      <main className="overflow-x-hidden">
        <section
          id="publikasi"
          className="scroll-mt-32 border-b bg-white py-16 md:py-20 lg:py-24"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <PublikasiFeat />
          </div>
        </section>

        <section
          id="riset"
          className="scroll-mt-32 border-b bg-[#FAFCFB] py-16 md:py-20 lg:py-24"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <KegiatanRiset />
          </div>
        </section>

        <section
          id="edukasi"
          className="scroll-mt-32 border-b bg-white py-16 md:py-20 lg:py-24"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <KegiatanEdukasi />
          </div>
        </section>

        <section
          id="konservasi"
          className="scroll-mt-32 bg-[#FAFCFB] py-16 md:py-20 lg:py-24"
        >
          <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <KegiatanKonservasi />
          </div>
        </section>
      </main>

      <FooterFeat />
    </>
  );
};

export default KegiatanFeat;
