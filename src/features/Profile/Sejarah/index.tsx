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
    <div className="container mx-auto">
      <div className=" grid gap-10">
        <h1
          className="font-bold text-4xl text-[#1A4D2E] mx-4 md:mx-0 lg:mx-0"
          data-aos="fade-up"
          data-aos-duration="900"
        >
          Sejarah
        </h1>
        <div className="grid gap-4 mx-4 md:mx-0 lg:mx-0" data-aos="fade-up" data-aos-duration="900">
          <p className="text-justify">
            Yayasan Tumbuhan Asli Nusantara (YTAN / Indonesian Native Plants
            Foundation) adalah organisasi non-pemerintah yang didirikan pada
            Juni 2023 dengan fokus pada pelestarian tumbuhan dan hutan di
            Indonesia. Terbentuknya Tumbuhan Asli Nusantara berawal dari
            kelompok kecil yang berkomitmen untuk mempublikasikan data dan
            informasi dasar keanekaragaman tumbuhan asli Indonesia dalam
            voluntary project “Digital Flora of Indonesia”{" "}
            <Link
              href="https://www.indonesiaplants.org/"
              target="_blank"
              className="text-blue-500 hover:text-[#1A4D2E] duration-300"
            >
              (https://www.indonesiaplants.org/)
            </Link>
          </p>
          <div className="flex lg:flex-row md:flex-col flex-col gap-4">
            <Image
              src="/profile/sejarah.jpeg"
              alt="Kegiatan YTAN"
              width={400}
              height={300}
              className="rounded-xl shadow-xl w-full h-auto object-cover"
            />
            <p className="text-justify">
              YTAN didirikan dengan tujuan meningkatkan pengelolaan sumber daya
              hutan dan keanekaragaman spesies tumbuhan di Indonesia melalui
              kegiatan penelitian, konservasi, restorasi, dan edukasi. Selama
              hampir tiga tahun, YTAN telah berkolaborasi dalam berbagai proyek
              terkait keanekaragaman tumbuhan asli Indonesia bersama pemerintah,
              sektor swasta, universitas, serta institusi internasional,
              meliputi:
            </p>
          </div>
          <p className="text-justify">
            Keanekaragaman Hayati, pengembangan basis data tumbuhan, penemuan
            spesies baru dan publikasi ilmiah, studi bioprospeksi, penyelamatan
            spesies tumbuhan yang terancam punah, konservasi ex situ, serta
            penilaian daftar merah tumbuhan.
          </p>
          <p className="text-justify">
            Sebab upaya konservasi tumbuhan, penyebarluasan informasi dan
            pendampingan terkait perlindungan tumbuhan asli Indonesia dianggap
            masih sangat kurang perhatian. Berdasarkan hal-hal tersebut maka
            lembaga ini terbentuk. Tumbuhan Asli Nusantara akan membangun
            kerjasama dengan berbagai pihak baik nasional maupun internasional
            untuk secara bersama-sama mengkaji dan melestarikan tumbuhan yang
            ada di Indonesia.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SejarahProfileFeat;
