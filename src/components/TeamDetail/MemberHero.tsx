"use client";

import Image from "next/image";
import { Mail, Globe, GraduationCap } from "lucide-react";

const MemberHero = () => {
  return (
    <section className="border-b bg-[#F8FAF9]">
      <div className="container mx-auto max-w-7xl px-6 py-16">

        <div className="grid items-center gap-12 lg:grid-cols-[320px_1fr]">


          <div className="flex justify-center">

            <div className="overflow-hidden rounded-3xl border bg-white shadow-xl">

              <Image
                src="/our-team/profile.jpg"
                alt="Member"
                width={320}
                height={420}
                className="h-105 w-[320px] object-cover"
              />

            </div>

          </div>

          {/* Information */}

          <div>

            <p className="text-sm font-medium uppercase tracking-[0.25em] text-[#2B593A]">
              Yayasan Tumbuhan Asli Nusantara
            </p>

            <h1 className="mt-3 text-5xl font-bold text-[#1A4D2E]">
              Dr. Nama Lengkap
            </h1>

            <p className="mt-4 text-xl text-muted-foreground">
              Plant Taxonomist • Researcher
            </p>

            <p className="mt-8 max-w-3xl leading-8 text-muted-foreground">
              Peneliti yang berfokus pada taksonomi tumbuhan,
              konservasi flora Indonesia,
              serta eksplorasi keanekaragaman hayati
              di kawasan Wallacea dan Nusantara.
            </p>

            {/* Contact */}

            <div className="mt-10 grid gap-4 sm:grid-cols-2">

              <div className="flex items-center gap-3">

                <Mail className="h-5 w-5 text-[#2B593A]" />

                <span className="text-sm">
                  nama@email.com
                </span>

              </div>

              <div className="flex items-center gap-3">

                <GraduationCap className="h-5 w-5 text-[#2B593A]" />

                <span className="text-sm">
                  Universitas Tadulako
                </span>

              </div>

            </div>

            {/* Social */}

            <div className="mt-8 flex flex-wrap gap-3">

              <button className="rounded-full border px-4 py-2 text-sm transition hover:border-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white">
                <Globe className="mr-2 inline h-4 w-4" />
                LinkedIn
              </button>

              <button className="rounded-full border px-4 py-2 text-sm transition hover:border-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white">
                <Globe className="mr-2 inline h-4 w-4" />
                ORCID
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MemberHero;