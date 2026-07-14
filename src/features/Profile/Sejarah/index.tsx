"use client";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import "aos/dist/aos.css";
import { useEffect } from "react";

const SejarahProfileFeat = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="container mx-auto px-5 md:px-8 lg:px-20 py-16">
      <div
        className="text-center mb-14"
        data-aos="fade-up"
        data-aos-duration="900"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#1A4D2E]">
          Sejarah
        </h1>

        <div className="w-24 h-1 bg-[#2B593A] rounded-full mx-auto mt-4" />
      </div>

      <div
        className="bg-white rounded-3xl shadow-lg overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="grid lg:grid-cols-2">
          <div className="relative">
            <Image
              src="/profile/sejarah.jpeg"
              alt="Kegiatan Yayasan Tumbuhan Asli Nusantara"
              width={700}
              height={900}
              className="w-full h-full object-cover min-h-87.5"
            />
          </div>

          <div className="p-8 md:p-10 lg:p-12 space-y-6">
            <p className="text-[#486451] leading-8 text-justify">
              Yayasan Tumbuhan Asli Nusantara (YTAN / Indonesian Native Plants
              Foundation) adalah organisasi non-pemerintah yang didirikan pada
              Juni 2023 dengan fokus pada pelestarian tumbuhan dan hutan di
              Indonesia.
            </p>

            <p className="text-[#486451] leading-8 text-justify">
              Terbentuknya Tumbuhan Asli Nusantara berawal dari kelompok kecil
              yang berkomitmen untuk mempublikasikan data dan informasi dasar
              keanekaragaman tumbuhan asli Indonesia melalui voluntary project
              <span className="font-semibold">
                {" "}
                Digital Flora of Indonesia{" "}
              </span>
              <Link
                href="https://www.indonesiaplants.org/"
                target="_blank"
                className="text-[#2B593A] font-semibold underline underline-offset-4 hover:text-green-700"
              >
                indonesiaplants.org
              </Link>
            </p>

            <p className="text-[#486451] leading-8 text-justify">
              YTAN didirikan untuk meningkatkan pengelolaan sumber daya hutan
              dan keanekaragaman spesies tumbuhan melalui kegiatan penelitian,
              konservasi, restorasi, dan edukasi.
            </p>
          </div>
        </div>

        <div className="border-t bg-[#FAFCFB] p-8 md:p-10 lg:p-12 space-y-6">
          <h2 className="text-2xl font-semibold text-[#1A4D2E]">
            Fokus Kegiatan
          </h2>

          <p className="text-[#486451] leading-8 text-justify">
            Selama hampir tiga tahun, YTAN telah berkolaborasi dengan
            pemerintah, sektor swasta, universitas, serta institusi
            internasional dalam berbagai proyek terkait keanekaragaman tumbuhan
            asli Indonesia.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            <div className="rounded-xl bg-[#F4FBF6] p-5">
              🌿 Keanekaragaman Hayati
            </div>

            <div className="rounded-xl bg-[#F4FBF6] p-5">
              📚 Basis Data Tumbuhan
            </div>

            <div className="rounded-xl bg-[#F4FBF6] p-5">
              🔬 Penemuan Spesies Baru & Publikasi
            </div>

            <div className="rounded-xl bg-[#F4FBF6] p-5">
              🧬 Studi Bioprospeksi
            </div>

            <div className="rounded-xl bg-[#F4FBF6] p-5">
              🌱 Konservasi Ex Situ
            </div>

            <div className="rounded-xl bg-[#F4FBF6] p-5">
              📖 Penilaian Daftar Merah Tumbuhan
            </div>
          </div>

          <p className="text-[#486451] leading-8 text-justify">
            Melalui berbagai kolaborasi tersebut, YTAN berkomitmen membangun
            kerja sama dengan berbagai pihak, baik nasional maupun
            internasional, untuk mengkaji, melestarikan, dan menjaga
            keberlanjutan tumbuhan asli Indonesia bagi generasi mendatang.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SejarahProfileFeat;
