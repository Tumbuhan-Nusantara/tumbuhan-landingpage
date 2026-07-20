import { useTranslations } from "next-intl";

const KegiatanRiset = () => {
  const k = useTranslations("kegiatan");
  return (
    <div>
        <h1 className="text-2xl font-bold  text-[#1A4D2E]">{k("riset")}</h1>
        <p className="mt-2 leading-8 text-muted-foreground">{k("descRiset")}</p>
      </div>
  );
};

export default KegiatanRiset;
