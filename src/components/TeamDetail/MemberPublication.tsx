"use client";

import { ArrowUpRight, Calendar } from "lucide-react";

const publications = [
  {
    id: 1,
    year: "2025",
    journal: "Biodiversitas",
    title:
      "Diversity and Conservation Status of Native Plant Species in Central Sulawesi",
  },
  {
    id: 2,
    year: "2024",
    journal: "Reinwardtia",
    title:
      "Taxonomic Revision of Several Endemic Species from Wallacea Region",
  },
  {
    id: 3,
    year: "2023",
    journal: "Journal of Tropical Biology",
    title:
      "Forest Restoration and Native Plant Recovery in Indonesia",
  },
];

const MemberPublication = () => {
  return (
    <section className="bg-[#F8FAF9]">
      <div className="container mx-auto max-w-7xl px-6 py-20">

        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B593A]">
            Publications
          </p>

          <h2 className="mt-3 text-3xl font-bold text-[#1A4D2E]">
            Publikasi Ilmiah
          </h2>

          <p className="mt-4 max-w-3xl text-muted-foreground">
            Daftar publikasi ilmiah yang diterbitkan maupun melibatkan
            anggota Yayasan Tumbuhan Asli Nusantara.
          </p>

        </div>

        <div className="space-y-5">

          {publications.map((item) => (

            <div
              key={item.id}
              className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
            >

              <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

                <div>

                  <div className="flex items-center gap-2 text-sm text-[#2B593A]">

                    <Calendar className="h-4 w-4" />

                    {item.year}

                    <span>•</span>

                    {item.journal}

                  </div>

                  <h3 className="mt-3 text-xl font-semibold text-[#1A4D2E] leading-8">

                    {item.title}

                  </h3>

                </div>

                <button className="flex items-center gap-2 rounded-full border px-5 py-3 text-sm transition hover:bg-[#1A4D2E] hover:text-white">

                  View Publication

                  <ArrowUpRight className="h-4 w-4" />

                </button>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default MemberPublication;