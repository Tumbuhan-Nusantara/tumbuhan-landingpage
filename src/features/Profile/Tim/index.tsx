"use client";

import TeamCard from "@/components/CardPeople";
import { Input } from "@/components/ui/input";
import { axiosInstance } from "@/lib/axios";
import { StrukturDashType } from "@/src/types";
import Aos from "aos";
import { Search } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function TeamPage() {
  const [search, setSearch] = useState("");
  const [members, setMembers] = useState<StrukturDashType[]>([]);

  const getUsers = async () => {
    try {
      const res = await axiosInstance.get(`/api/v1/auth`);
      setMembers(res.data.data);
      console.log("liat struktur", res.data.data);
    } catch (error) {
      throw error;
    }
  };

  const filteredMembers = useMemo(() => {
    return members.filter((item) =>
      (item.name ?? "").toLowerCase().includes(search.toLowerCase()),
    );
  }, [members, search]);

  useEffect(() => {
    Aos.init();
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUsers();
  }, []);

  return (
    <div>
      <section>
        <div 
          className=" text-center mb-14"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1A4D2E]">
            Anggota YTAN
          </h1>
          <div className="w-24 h-1 bg-[#2B593A] rounded-full mx-auto mt-4" />

          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Bertemu dengan tim Yayasan Tumbuhan Asli Nusantara yang
            berkontribusi dalam penelitian, konservasi, restorasi, dan edukasi
            tumbuhan asli Indonesia.
          </p>
        </div>
      </section>

      <section className="container mx-auto py-16 px-6">
        <div className="max-w-md mx-auto relative mb-14">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />

          <Input
            placeholder="Cari anggota tim..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-11 h-12 rounded-full shadow-sm"
          />
        </div>

        {filteredMembers.length === 0 ? (
          <div className="text-center py-32">
            <h2 className="text-2xl font-semibold text-[#1A4D2E]">
              Data tidak ditemukan
            </h2>

            <p className="text-muted-foreground mt-2">
              Coba gunakan kata kunci lain.
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
