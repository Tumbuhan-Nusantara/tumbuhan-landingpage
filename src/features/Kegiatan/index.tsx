// import Nav from "@/src/components/Navbar-2";
// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
// } from "@/src/components/ui/tabs";
// import PublikasiFeat from "./Publikasi";
// import KegiatanRiset from "./RisetEksplorasi";
// import KegiatanEdukasi from "./Edukasi";
// import KegiatanKonservasi from "./Konservasi";
// import FooterFeat from "@/src/components/Footer";

// const KegiatanFeat = () => {
//   return (
//     <div>
//       <Nav />

//       <section className="relative mt-22 overflow-hidden bg-linear-to-br from-[#1A4D2E] via-[#2B593A] to-[#356E4B]">
//         <div className="absolute inset-0 opacity-10 bg-[url('/image.png')] bg-cover" />

//         <div className="relative container mx-auto px-6 py-20 md:py-28">
//           <div className="max-w-3xl mx-auto text-center text-white">
//             <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
//               Kegiatan Yayasan
//             </span>

//             <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
//               Kegiatan YTAN
//             </h1>

//             <p className="mt-6 text-white/90 leading-8 text-base md:text-lg">
//               Bertumbuh Bersama untuk Alam Indonesia. Beragam kegiatan,
//               penelitian, edukasi, dan eksplorasi yang dilakukan YTAN sebagai
//               bentuk kontribusi nyata dalam pelestarian serta pengembangan
//               pengetahuan tumbuhan Indonesia.
//             </p>
//           </div>
//         </div>
//       </section>
//       <section className="container mx-auto px-5 md:px-8 lg:px-16 py-12">
//         <Tabs defaultValue="Publikasi Ilmiah">
//           <div className="flex justify-center mb-10">
//             <TabsList
//               className="
//           flex
//           w-full
//           max-w-5xl
//           overflow-x-auto
//           rounded-2xl
//           bg-[#F4F7F5]
//           p-2
//           gap-2
//           scrollbar-hide
//         "
//             >
//               <TabsTrigger
//                 value="Publikasi Ilmiah"
//                 className="whitespace-nowrap rounded-xl px-5"
//               >
//                 Publikasi Ilmiah
//               </TabsTrigger>

//               <TabsTrigger
//                 value="Riset dan Eksplorasi"
//                 className="whitespace-nowrap rounded-xl px-5"
//               >
//                 Riset & Eksplorasi
//               </TabsTrigger>

//               <TabsTrigger
//                 value="Edukasi"
//                 className="whitespace-nowrap rounded-xl px-5"
//               >
//                 Edukasi
//               </TabsTrigger>

//               <TabsTrigger
//                 value="Konservasi dan Restorasi"
//                 className="whitespace-nowrap rounded-xl px-5"
//               >
//                 Konservasi
//               </TabsTrigger>
//             </TabsList>
//           </div>

//           <TabsContent value="Publikasi Ilmiah">
//             <PublikasiFeat />
//           </TabsContent>

//           <TabsContent value="Riset dan Eksplorasi">
//             <KegiatanRiset />
//           </TabsContent>

//           <TabsContent value="Konservasi dan Restorasi">
//             <KegiatanKonservasi />
//           </TabsContent>

//           <TabsContent value="Edukasi">
//             <KegiatanEdukasi />
//           </TabsContent>
//         </Tabs>
//       </section>
//       <FooterFeat />
//     </div>
//   );
// };

// export default KegiatanFeat;

import Nav from "@/src/components/Navbar-2";
import FooterFeat from "@/src/components/Footer";

import PublikasiFeat from "./Publikasi";
import KegiatanRiset from "./RisetEksplorasi";
import KegiatanEdukasi from "./Edukasi";
import KegiatanKonservasi from "./Konservasi";

import StickyNavigation from "@/src/components/StickyNavKegiatan/StickyNavigation";
import { useTranslations } from "next-intl";

const KegiatanFeat = () => {
  const k = useTranslations("kegiatan");
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
