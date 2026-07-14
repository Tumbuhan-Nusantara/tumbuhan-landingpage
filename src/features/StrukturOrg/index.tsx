"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useEffect, useMemo, useState } from "react";
import { StrukturDashType } from "@/src/types";
import { axiosInstance } from "@/lib/axios";

export default function StrukturPage() {
  const [struktur, setStruktur] = useState<StrukturDashType[]>([]);
  const getStruktur = async () => {
    try {
      const res = await axiosInstance.get(`/api/v1/struktur`);
      setStruktur(res.data.data);
      console.log("liat struktur", res.data.data);
    } catch (error) {
      throw error;
    }
  };

  const groupedStruktur = useMemo(() => {
    return struktur.reduce(
      (acc, item) => {
        if (!acc[item.position]) {
          acc[item.position] = [];
        }

        acc[item.position].push(item);

        return acc;
      },
      {} as Record<string, StrukturDashType[]>,
    );
  }, [struktur]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getStruktur();
  }, []);
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <h1 className="text-4xl font-bold text-[#1A4D2E]">
          Struktur Organisasi
        </h1>

        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          Tim Yayasan Tumbuhan Asli Nusantara yang bersama-sama berkontribusi
          dalam penelitian, konservasi, restorasi, dan edukasi tumbuhan asli
          Indonesia.
        </p>
      </div>

      <div className="space-y-14">
        {Object.entries(groupedStruktur).map(([position, members]) => (
          <section key={position}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-0.5 not-only:flex-1 bg-[#d8e8df]" />

              <h2 className="text-2xl font-bold text-[#1A4D2E] whitespace-nowrap">
                {position}
              </h2>

              <div className="h-0.5 flex-1 bg-[#d8e8df]" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {members.map((member) => (
                <Card
                  key={member.id}
                  className="group border border-[#dfe9e3] rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <CardContent className="flex flex-col items-center py-8">
                    <Avatar className="h-24 w-24 ring-4 ring-[#eef7f1]">
                      <AvatarImage src="/default-user.png" />

                      <AvatarFallback className="bg-[#1A4D2E] text-white text-xl">
                        {member.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("") || "?"}
                      </AvatarFallback>
                    </Avatar>

                    <h3 className="mt-5 text-lg font-semibold text-[#1A4D2E] text-center">
                      {member.name}
                    </h3>

                    <Badge
                      variant="secondary"
                      className="mt-3 rounded-full bg-[#eef7f1] text-[#1A4D2E]"
                    >
                      {member.position}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
