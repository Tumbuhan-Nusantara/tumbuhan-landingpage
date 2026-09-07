"use client";
import { axiosInstance } from "@/src/lib/axios";
import { ActivityDashType } from "@/src/types";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";
import { Badge } from "@/src/components/ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import Image from "next/image";
import { getTranslation } from "@/src/lib/translation";

const KegiatanKonservasi = () => {
  const k = useTranslations("kegiatan");
  const locale = useLocale();
  const [act, setAct] = useState<ActivityDashType[]>([]);

  const getActs = async () => {
    try {
      const res = await axiosInstance.get(`/api/v1/activities`);
      const result = res.data.data;

      console.log(result);
      setAct(result);
    } catch (error) {
      throw error;
    }
  };

  const researchActivities = useMemo(() => {
    return act.filter((item) => item.tipe_kegiatan_id === 3);
  }, [act]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getActs();
  }, []);
  return (
    <section className="py-12">
      <div className="container mx-auto max-w-7xl px-4">
        <div>
          <h1 className="text-2xl font-bold  text-[#1A4D2E]">{k("konserv")}</h1>
          <p className="mt-2 leading-8 text-muted-foreground">{k("descK")}</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {researchActivities.length > 0 ? (
            researchActivities.map((item, index) => (
              <Card
                key={item.id}
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay={index * 150}
                className="overflow-hidden rounded-2xl border-0 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={item.photo_url}
                    alt={item.activity_name}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <CardHeader className="space-y-4">
                  <Badge className="w-fit bg-[#1A4D2E]">{item.nama_tipe}</Badge>

                  <CardTitle className="line-clamp-2 text-2xl font-bold leading-snug text-[#1A4D2E]">
                    {item.activity_name}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="line-clamp-4 leading-7 text-muted-foreground">
                    {getTranslation(
                      locale,
                      item.deskripsi_id,
                      item.deskripsi_en,
                    )}
                  </p>
                </CardContent>
              </Card>
            ))
          ) : (
            <div className="col-span-full flex flex-col items-center justify-center py-16 text-center">
              <h3 className="text-xl font-semibold text-[#1A4D2E]">
                {k("titleNotification")}
              </h3>
              <p className="mt-2 text-muted-foreground">
                {k("description")}
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default KegiatanKonservasi;
