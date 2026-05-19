import Nav from "@/src/components/Navbar-2";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PublikasiFeat from "./Publikasi";
import KegiatanRiset from "./RisetEksplorasi";
import KegiatanEdukasi from "./Edukasi";
import KegiatanKonservasi from "./Konservasi";

const KegiatanFeat = () => {
  return (
    <div>
      <Nav />
      <div className="bg-[#1A4D2E] h-full overflow-hidden mt-22">
        <div className="container mx-auto">
          <div className="text-white flex flex-col gap-6 items-center py-10">
            <div>
              <p className="font-light">Kegiatan</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold">Kegiatan YTAN</h1>
            </div>
            <div className="text-center">
              <h3 className="font-semibold">
                Bertumbuh Bersama untuk Alam Indonesia
              </h3>
              <p className="font-light ">
                Beragam kegiatan, penelitian, edukasi, dan eksplorasi yang
                dilakukan YTAN sebagai bentuk kontribusi nyata dalam pelestarian
                serta pengembangan pengetahuan tumbuhan Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Tabs defaultValue="Publikasi Ilmiah">
          <TabsList className="m-6">
            <TabsTrigger value="Publikasi Ilmiah">Publikasi Ilmiah</TabsTrigger>
            <TabsTrigger value="Riset dan Eksplorasi">
              Riset dan Eksplorasi
            </TabsTrigger>
            <TabsTrigger value="Edukasi">Edukasi</TabsTrigger>
            <TabsTrigger value="Konservasi dan Restorasi">
              Konservasi dan Restorasi
            </TabsTrigger>
          </TabsList>
          <TabsContent value="Publikasi Ilmiah">
            <PublikasiFeat />
          </TabsContent>
          <TabsContent value="Riset dan Eksplorasi">
            <KegiatanRiset />
          </TabsContent>
          <TabsContent value="Konservasi dan Restorasi">
           <KegiatanKonservasi/>
          </TabsContent>
          <TabsContent value="Edukasi">
            <KegiatanEdukasi />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default KegiatanFeat;
