import BeritaFeat from "@/src/features/Berita";
import BotaniFeat from "@/src/features/Botani";
import DampakFeat from "@/src/features/Dampak";
import FooterFeat from "@/src/features/Footer";
import HomeFeat from "@/src/features/Home";
import KontakFeat from "@/src/features/Kontak";

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
