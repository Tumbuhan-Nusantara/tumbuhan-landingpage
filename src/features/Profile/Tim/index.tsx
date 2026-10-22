"use client";

import TeamCard from "@/src/components/CardPeople";
import { Input } from "@/src/components/ui/input";
import { axiosInstance } from "@/src/lib/axios";
import { TeamMember } from "@/src/types";
import Aos from "aos";
import { Search } from "lucide-react";
import { useTranslations } from "next-intl";
import { useEffect, useMemo, useState } from "react";

export default function TeamPage() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState<TeamMember[]>([]);

  const t = useTranslations("dash");

  useEffect(() => {
    Aos.init();

    const getUsers = async () => {
      try {
        const res = await axiosInstance.get("/api/v1/team");
        const data: TeamMember[] = res.data.data;

        if (!Array.isArray(data)) {
          console.error("Format data tim dari API tidak valid.");
          return;
        }

        setMembers(data);
      } catch (error) {
        console.error("Gagal mengambil data tim:", error);
      }
    };

    getUsers();
  }, []);

  const filteredMembers = useMemo(() => {
    return members.filter((item) =>
      (item.full_name ?? "").toLowerCase().includes(search.toLowerCase())
    );
  }, [members, search]);

  return (
    <div>
      <section className="pt-20">
        <div
          className="mb-8 text-center"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h1 className="text-4xl font-bold text-[#1A4D2E] md:text-5xl">
            {t("titleTeam")}
          </h1>

          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-[#2B593A]" />

          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            {t("descriptionTeam")}
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6">
        <div className="relative mx-auto mb-14 max-w-md">
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />

          <Input
            placeholder={t("search")}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-12 rounded-full pl-11 shadow-sm"
          />
        </div>

        {filteredMembers.length === 0 ? (
          <div className="py-32 text-center">
            <h2 className="text-2xl font-semibold text-[#1A4D2E]">
              {t("notFound")}
            </h2>

            <p className="mt-2 text-muted-foreground">
              {t("notFoundDescription")}
            </p>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}