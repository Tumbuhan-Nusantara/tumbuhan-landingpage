"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowLeft,
  Mail,
  GraduationCap,
  BookOpen,
  Calendar,
  GitBranchPlus,
} from "lucide-react";

import { Badge } from "@/src/components/ui/badge";
import { Separator } from "@/src/components/ui/separator";

import { axiosInstance } from "@/src/lib/axios";
import { useParams } from "next/navigation";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion";
import { Link } from "@/src/i18n/navigation";
import { useTranslations } from "next-intl";

type TeamMember = {
  id: number;
  full_name: string;
  degree?: string;
  position_id?: string;
  position_en?: string;
  short_desc_id?: string;
  short_desc_en?: string;
  biography_id?: string;
  biography_en?: string;
  university?: string;
  email?: string;
  linkedin?: string;
  orcid?: string;
  expertise?: string;
  joined_year?: number;
  photo_url?: string;
};

export default function DetailBerandaFeat() {
  const { id } = useParams();
  const t = useTranslations("dash");

  const [member, setMember] = useState<TeamMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const getMember = async () => {
      try {
        setLoading(true);

        const response = await axiosInstance.get(`/api/v1/team/${id}`);
        console.log(id);
        setMember(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Gagal mengambil detail anggota:", error);
      } finally {
        setLoading(false);
      }
    };

    getMember();
  }, [id]);
  if (!member) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#FAFCFB]">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#1A4D2E]">{t("notFound")}</h1>

          <Link
            href="/profile/our-team"
            className="mt-4 inline-flex items-center gap-2 text-[#1A4D2E] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToTeam")}
          </Link>
        </div>
      </main>
    );
  }

  const expertise =
    member.expertise
      ?.split(",")
      .map((item) => item.trim())
      .filter(Boolean) ?? [];

  return (
    <main className="min-h-screen bg-[#FAFCFB]">
      <section className="border-b bg-white">
        <div className="container mx-auto max-w-7xl px-6 py-16">
          <Link
            href="/profile/tim-ytan"
            className="inline-flex items-center gap-2 text-sm font-medium text-[#1A4D2E] hover:underline"
          >
            <ArrowLeft className="h-4 w-4" />
            {t("backToTeamPage")}
          </Link>

          <div className="mt-12 grid gap-10 lg:grid-cols-[330px_1fr]">
            <div>
              <div className="relative mx-auto h-80 w-80 overflow-hidden rounded-full bg-[#F4FBF6]">
                {member.photo_url ? (
                  <Image
                    src={member.photo_url}
                    alt={member.full_name}
                    fill
                    className="rounded-full object-cover"
                    sizes="320px"
                    unoptimized
                  />
                ) : (
                  <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
                    No Image
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <p className="font-semibold tracking-wide text-[#1A4D2E]">
                Yayasan Tumbuhan Asli Nusantara
              </p>

              <h1 className="mt-3 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                {member.full_name}
              </h1>

              <p className="mt-4 text-xl text-muted-foreground">
                posisi {member.position_id}
              </p>

              {member.short_desc_id && (
                <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground">
                  short desc {member.short_desc_id}
                </p>
              )}

              <Separator className="my-8" />

              <div className="grid gap-5 sm:grid-cols-2">
                {member.email && (
                  <div className="flex gap-3">
                    <Mail className="mt-1 h-5 w-5 shrink-0 text-[#1A4D2E]" />

                    <div className="min-w-0">
                      <p className="text-sm font-semibold">Email</p>

                      <a
                        href={`mailto:${member.email}`}
                        className="break-all text-sm text-muted-foreground hover:text-[#1A4D2E] hover:underline"
                      >
                        {member.email}
                      </a>
                    </div>
                  </div>
                )}

                {member.university && (
                  <div className="flex gap-3">
                    <GraduationCap className="mt-1 h-5 w-5 shrink-0 text-[#1A4D2E]" />

                    <div>
                      <p className="text-sm font-semibold">{t("university")}</p>

                      <p className="text-sm text-muted-foreground">
                        {member.university}
                      </p>
                    </div>
                  </div>
                )}

                {member.linkedin && (
                  <div className="flex gap-3">
                    <GitBranchPlus className="mt-1 h-5 w-5 shrink-0 text-[#1A4D2E]" />

                    <div>
                      <p className="text-sm font-semibold">LinkedIn</p>

                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-muted-foreground hover:text-[#1A4D2E] hover:underline"
                      >
                        {t("openProfile")}
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto max-w-5xl px-6 py-12 pb-20">
        <Accordion type="single" collapsible className="space-y-4">
          <AccordionItem
            value="biography"
            className=" border bg-white px-6 shadow-sm"
          >
            <AccordionTrigger className="py-6 text-xl font-semibold text-[#1A4D2E] hover:no-underline">
              <div className="flex items-center gap-3">
                <BookOpen className="h-5 w-5" />
                {t("about")}
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-7">
              {member.biography_id ? (
                <p className="whitespace-pre-line text-base leading-8 text-muted-foreground">
                  {member.biography_id}
                </p>
              ) : (
                <p className="text-muted-foreground">
                  {t('bio')}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="expertise"
            className=" border bg-white px-6 shadow-sm"
          >
            <AccordionTrigger className="py-6 text-xl font-semibold text-[#1A4D2E] hover:no-underline">
              <div className="flex items-center gap-3">
                <GitBranchPlus className="h-5 w-5" />
                {t("expertise")}
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-7">
              {expertise.length > 0 ? (
                <div className="flex flex-wrap gap-3">
                  {expertise.map((item) => (
                    <Badge
                      key={item}
                      className="rounded-full bg-[#1A4D2E] px-5 py-2 text-sm font-medium hover:bg-[#2F6B45]"
                    >
                      {item}
                    </Badge>
                  ))}
                </div>
              ) : (
                <p className="text-muted-foreground">
                  {t('bioEx')}
                </p>
              )}
            </AccordionContent>
          </AccordionItem>

          <AccordionItem
            value="information"
            className=" border bg-white px-6 shadow-sm"
          >
            <AccordionTrigger className="py-6 text-xl font-semibold text-[#1A4D2E] hover:no-underline">
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5" />
                {t("information")}
              </div>
            </AccordionTrigger>

            <AccordionContent className="pb-7">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("position")}
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {member.position_id || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("institution")}
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    Yayasan Tumbuhan Asli Nusantara
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">
                    {t("university")}
                  </p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {member.university || "-"}
                  </p>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground">{t("joined")}</p>

                  <p className="mt-1 font-semibold text-gray-900">
                    {member.joined_year || "-"}
                  </p>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </section>
    </main>
  );
}
