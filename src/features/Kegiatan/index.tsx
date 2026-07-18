import Nav from "@/src/components/Navbar-2";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/src/components/ui/tabs";
import PublikasiFeat from "./Publikasi";
import KegiatanRiset from "./RisetEksplorasi";
import KegiatanEdukasi from "./Edukasi";
import KegiatanKonservasi from "./Konservasi";
import FooterFeat from "@/src/components/Footer";

const KegiatanFeat = () => {
  return (
    <div>
      <Nav />

      <section className="relative mt-22 overflow-hidden bg-linear-to-br from-[#1A4D2E] via-[#2B593A] to-[#356E4B]">
        <div className="absolute inset-0 opacity-10 bg-[url('/image.png')] bg-cover" />

        <div className="relative container mx-auto px-6 py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center text-white">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-1 text-sm tracking-wide">
              Kegiatan Yayasan
            </span>

            <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Kegiatan YTAN
            </h1>

            <p className="mt-6 text-white/90 leading-8 text-base md:text-lg">
              Bertumbuh Bersama untuk Alam Indonesia. Beragam kegiatan,
              penelitian, edukasi, dan eksplorasi yang dilakukan YTAN sebagai
              bentuk kontribusi nyata dalam pelestarian serta pengembangan
              pengetahuan tumbuhan Indonesia.
            </p>
          </div>
        </div>
      </section>
      <section className="container mx-auto px-5 md:px-8 lg:px-16 py-12">
        <Tabs defaultValue="Publikasi Ilmiah">
          <div className="flex justify-center mb-10">
            <TabsList
              className="
          flex
          w-full
          max-w-5xl
          overflow-x-auto
          rounded-2xl
          bg-[#F4F7F5]
          p-2
          gap-2
          scrollbar-hide
        "
            >
              <TabsTrigger
                value="Publikasi Ilmiah"
                className="whitespace-nowrap rounded-xl px-5"
              >
                Publikasi Ilmiah
              </TabsTrigger>

              <TabsTrigger
                value="Riset dan Eksplorasi"
                className="whitespace-nowrap rounded-xl px-5"
              >
                Riset & Eksplorasi
              </TabsTrigger>

              <TabsTrigger
                value="Edukasi"
                className="whitespace-nowrap rounded-xl px-5"
              >
                Edukasi
              </TabsTrigger>

              <TabsTrigger
                value="Konservasi dan Restorasi"
                className="whitespace-nowrap rounded-xl px-5"
              >
                Konservasi
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="Publikasi Ilmiah">
            <PublikasiFeat />
          </TabsContent>

          <TabsContent value="Riset dan Eksplorasi">
            <KegiatanRiset />
          </TabsContent>

          <TabsContent value="Konservasi dan Restorasi">
            <KegiatanKonservasi />
          </TabsContent>

          <TabsContent value="Edukasi">
            <KegiatanEdukasi />
          </TabsContent>
        </Tabs>
      </section>
      <FooterFeat />
    </div>
  );
};

export default KegiatanFeat;
