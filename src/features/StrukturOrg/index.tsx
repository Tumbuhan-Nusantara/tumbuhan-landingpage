"use client";

import { Card, CardContent } from "@/src/components/ui/card";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { useEffect, useMemo, useState } from "react";
import { StrukturDashType } from "@/src/types";
import { axiosInstance } from "@/src/lib/axios";
import Image from "next/image";

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

  const getMembers = (position: string) => groupedStruktur[position] || [];

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getStruktur();
  }, []);
  return (
    <section className="bg-[#F8FBF8] py-20">
      <div className="container mx-auto px-5">
        <div className="mx-auto mb-20 max-w-3xl text-center">
          <h1 className="text-4xl font-bold text-[#1A4D2E]">
            Struktur Organisasi
          </h1>

          <p className="mt-5 text-muted-foreground leading-7">
            Tim Yayasan Tumbuhan Asli Nusantara yang bersama-sama berkontribusi
            dalam penelitian, konservasi, restorasi, dan edukasi tumbuhan asli
            Indonesia.
          </p>
        </div>

        <div className="space-y-16">
          {Object.entries(groupedStruktur).map(([position, members]) => (
            <section key={position}>
              <div className="mb-8 flex items-center gap-5">
                <div className="h-10 w-2 rounded-full bg-[#1A4D2E]" />

                <div className="mb-10 flex flex-col items-center">
                  <h2 className="text-3xl font-bold text-[#1A4D2E]">
                    {position}
                  </h2>

                  <p className="mt-2 text-sm text-muted-foreground">
                    {members.length} Anggota
                  </p>

                  <div className="mt-4 h-1 w-20 rounded-full bg-[#1A4D2E]" />
                </div>

                <div className="h-px flex-1 bg-[#D9E7DD]" />
              </div>

              <div className="flex flex-wrap justify-center gap-8">
                {members.map((member) => (
                  <MemberCard key={member.id} member={member} />
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}

const MemberCard = ({ member }: { member: StrukturDashType }) => (
  <Card className="group w-[280px] overflow-hidden rounded-3xl border-0 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
    <CardContent className="p-0">
      <div className="relative h-28">
        <Image
          src="/image.png"
          alt="cover"
          width={500}
          height={120}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#1A4D2E]/40" />
      </div>

      <div className="-mt-14 flex flex-col items-center px-6 pb-8">
        <Avatar className="h-28 w-28 border-4 border-white shadow-xl">
          {member.photo ? (
            <AvatarImage
              src={member.photo}
              alt={member.name}
              className="object-cover"
            />
          ) : (
            <AvatarFallback className="bg-[#1A4D2E] text-xl text-white">
              {member.name
                ?.split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          )}
        </Avatar>
        <h3 className="mt-5 text-center text-xl font-semibold text-[#1A4D2E]">
          {member.name}
        </h3>

        <div className="mt-3 rounded-full bg-[#EEF7F1] px-5 py-2 text-sm font-medium text-[#1A4D2E]">
          {member.position}
        </div>
      </div>
    </CardContent>
  </Card>
);
