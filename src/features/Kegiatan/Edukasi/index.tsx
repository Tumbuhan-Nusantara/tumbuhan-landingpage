"use client";

import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { useTranslations } from "next-intl";

const edukasiItems = ["ed1", "ed2", "ed3"];

const KegiatanEdukasi = () => {
  const e = useTranslations("kegiatan");
  const k = useTranslations("kedukasi.items");

  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div>
          <h2 className="text-2xl font-bold text-[#1A4D2E]">{e("edu")}</h2>

          <p className="mt-2 leading-8 text-muted-foreground">{e("descEdu")}</p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {edukasiItems.map((item, index) => (
            <Card
              key={item}
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={index * 150}
              className="overflow-hidden rounded-2xl border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="flex h-52 items-center justify-center bg-[#F4FBF6] text-sm text-muted-foreground">
                Image Coming Soon
              </div>

              <CardHeader className="space-y-4">
                <Badge className="w-fit bg-[#1A4D2E]">{k(`${item}.cat`)}</Badge>

                <CardTitle className="text-2xl font-bold leading-snug text-[#1A4D2E]">
                  {k(`${item}.title`)}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="leading-7 text-muted-foreground">
                  {k(`${item}.desc`)}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KegiatanEdukasi;
