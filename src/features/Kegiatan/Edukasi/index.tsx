"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FooterFeat from "@/src/components/Footer";
import { useLocale, useTranslations } from "next-intl";

const KegiatanEdukasi = () => {
  const e = useTranslations("edukasi");

  const k = useTranslations("kedukasi.items");
  const edukasiItems = ["ed1", "ed2", "ed3"];
  useLocale();
  return (
    <div>
      <div className="container mx-auto">
        <div className="text-black flex flex-col gap-2 py-2 mx-8 ">
          <h1 className="text-2xl font-bold text-[#1A4D2E]">{e("title")}</h1>
          <p>{e("desc")}</p>
        </div>
        <div className="flex  flex-col md:flex-row mx-8 md:mx-16 lg:mx-20 gap-2 md:gap-8 lg:gap-8 justify-center">
          {edukasiItems.map((item) => (
            <Card key={item} className="w-90 md:w-200 my-2 md:-my-8 lg:my-10">
              <CardHeader>
                GAMBAR (coming soon)
                <Badge className="bg-[#1A4D2E]">{k(`${item}.cat`)}</Badge>
                <CardTitle className="text-2xl font-bold  text-[#1A4D2E]">{k(`${item}.title`)}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{k(`${item}.desc`)}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <FooterFeat/>
    </div>
  );
};

export default KegiatanEdukasi;
