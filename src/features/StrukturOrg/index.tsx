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

  const getMembers = (position: string) => groupedStruktur[position] || [];

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
        <div className="flex flex-wrap justify-center gap-8">
          {[...getMembers("Pembina"), ...getMembers("Pengawas")].map(
            (member) => (
              <MemberCard key={member.id} member={member} />
            ),
          )}
        </div>

        <div className="flex justify-center">
          {getMembers("Advisor").map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        {/* Ketua */}
        <div className="flex justify-center">
          {getMembers("Ketua").map((member) => (
            <MemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Kolom Sekretaris */}
          <div className="flex flex-col items-center gap-6">
            {getMembers("Sekretaris").map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}

            {getMembers("Personalia").map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Kolom Manager Program */}
          <div className="flex flex-col items-center gap-6">
            {getMembers("Manager Program").map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}

            {getMembers("Dep. Sains & Konservasi").map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}

            {getMembers("Dep. Komunikasi & Publikasi").map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>

          {/* Kolom Bendahara */}
          <div className="flex flex-col items-center gap-6">
            {getMembers("Bendahara").map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}

            {getMembers("Fundraising").map((member) => (
              <MemberCard key={member.id} member={member} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const MemberCard = ({ member }: { member: StrukturDashType }) => (
  <Card className="w-full max-w-xs border border-[#dfe9e3] rounded-2xl shadow-sm hover:shadow-lg transition-all">
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

      <Badge className="mt-3 bg-[#eef7f1] text-[#1A4D2E]">
        {member.position}
      </Badge>
    </CardContent>
  </Card>
);
