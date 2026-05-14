import BeritaFeat from "@/src/features/Beranda/Berita";
import BotaniFeat from "@/src/features/Beranda/Botani";
import DampakFeat from "@/src/features/Beranda/Dampak";
import FooterFeat from "@/src/components/Footer";
import HomeFeat from "@/src/features/Beranda/Home";
import KontakFeat from "@/src/features/Beranda/Kontak";

const page = () => {
  return (
    <>
      <HomeFeat />
      <DampakFeat />
      <BotaniFeat/>
      <BeritaFeat/>
      <KontakFeat/>
      <FooterFeat/>
    </>
  );
};

export default page;
