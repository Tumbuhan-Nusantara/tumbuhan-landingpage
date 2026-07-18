"use client";

import { UserDashType } from "@/src/types";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface TeamCardProps {
  member: UserDashType;
}

export default function TeamCard({ member }: TeamCardProps) {
  return (
    <div className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition duration-300">

      {/* <div className="overflow-hidden">

        <Image
          src={member.image}
          alt={member.name}
          width={400}
          height={500}
          className="w-full h-85 object-cover group-hover:scale-105 transition duration-500"
        />

      </div> */}

      <div className="p-6">

        <h2 className="text-xl font-semibold text-[#1A4D2E]">
          {member.first_name} {member.last_name}
        </h2>

        <p className="text-gray-500 mt-1">
        </p>

        <Link
          href="#"
          className="inline-flex items-center gap-2 mt-6 text-[#1A4D2E] font-medium hover:gap-3 transition-all"
        >
          Lihat Profil

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>
  );
}