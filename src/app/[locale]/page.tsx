import BeritaFeat from "@/src/features/Berita";
import BotaniFeat from "@/src/features/Botani";
import DampakFeat from "@/src/features/Dampak";
import HomeFeat from "@/src/features/Home";

const page = () => {
  return (
    <>
      <HomeFeat />
      <DampakFeat />
      <BotaniFeat/>
      <BeritaFeat/>
    </>
  );
};

export default page;
