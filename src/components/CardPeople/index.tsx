"use client";

import { Link } from "@/src/i18n/navigation";
import { TeamMember } from "@/src/types";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";

interface TeamCardProps {
  member: TeamMember;
}

export default function TeamCard({ member }: TeamCardProps) {
  const t = useTranslations('dash')
  return (
    <div className="group rounded-2xl overflow-hidden border bg-white shadow-sm hover:shadow-xl transition duration-300">

      <div className="overflow-hidden">

        <Image
          src={member.photo_url ?? ""}
          alt={member.full_name}
          width={400}
          height={500}
          className="w-full h-85 object-cover group-hover:scale-105 transition duration-500"
          unoptimized
        />

      </div>

      <div className="p-6">

        <h2 className="text-xl font-semibold text-[#1A4D2E]">
          {member.full_name}
        </h2>

        <p className="text-gray-500 mt-1">
        </p>

        <Link
          href={`/profile/tim-ytan/${member.id}`}
          className="inline-flex items-center gap-2 mt-6 text-[#1A4D2E] font-medium hover:gap-3 transition-all"
        >
          {t('openProfile')}

          <ArrowRight size={18} />

        </Link>

      </div>

    </div>
  );
}