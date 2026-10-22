"use client";

const MemberBiography = () => {
  return (
    <section className="bg-white">
      <div className="container mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-16 lg:grid-cols-[2fr_1fr]">

          {/* Biography */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B593A]">
              Biography
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1A4D2E]">
              Tentang Peneliti
            </h2>

            <div className="mt-8 space-y-6 leading-8 text-muted-foreground">

              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Sed non risus. Suspendisse lectus tortor, dignissim sit
                amet, adipiscing nec, ultricies sed, dolor.
              </p>

              <p>
                Penelitian yang dilakukan berfokus pada konservasi flora
                Indonesia, eksplorasi spesies endemik, restorasi hutan,
                serta pengembangan basis data keanekaragaman hayati.
              </p>

              <p>
                Aktif mengikuti penelitian lapangan, publikasi ilmiah,
                dan kolaborasi bersama berbagai institusi nasional maupun
                internasional.
              </p>

            </div>

          </div>

          {/* Expertise */}

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2B593A]">
              Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold text-[#1A4D2E]">
              Bidang Keahlian
            </h2>

            <div className="mt-8 flex flex-wrap gap-3">

              <span className="rounded-full bg-[#EAF4ED] px-5 py-2 text-sm font-medium text-[#1A4D2E]">
                Plant Taxonomy
              </span>

              <span className="rounded-full bg-[#EAF4ED] px-5 py-2 text-sm font-medium text-[#1A4D2E]">
                Biodiversity
              </span>

              <span className="rounded-full bg-[#EAF4ED] px-5 py-2 text-sm font-medium text-[#1A4D2E]">
                Conservation
              </span>

              <span className="rounded-full bg-[#EAF4ED] px-5 py-2 text-sm font-medium text-[#1A4D2E]">
                Restoration
              </span>

              <span className="rounded-full bg-[#EAF4ED] px-5 py-2 text-sm font-medium text-[#1A4D2E]">
                Tropical Forest
              </span>

              <span className="rounded-full bg-[#EAF4ED] px-5 py-2 text-sm font-medium text-[#1A4D2E]">
                Wallacea
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MemberBiography;