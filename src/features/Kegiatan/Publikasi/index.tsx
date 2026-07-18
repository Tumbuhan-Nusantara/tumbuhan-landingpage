"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Articles } from "@/src/constants";
import Image from "next/image";
import { Link } from "@/src/i18n/navigation";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const PublikasiFeat = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div>
      <div className=" h-full overflow-hidden">
        <div className="container mx-auto">
          <div className="text-black flex flex-col gap-2  py-2 mx-8">
            <h1 className="text-2xl font-bold  text-[#1A4D2E]">
              Publikasi Ilmiah
            </h1>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <div className="container mx-auto">
          <h1 className="text-muted-foreground font-bold text-[25px] ml-14 md:ml-24 lg:ml-30 my-2">
            2026
          </h1>
          {Articles.filter((item) => item.year === 2026).map((item) => (
            <div className="grid gap-8" key={item.year}>
              {item.items.slice(0, 1).map((article, index) => (
                <Card
                  key={article.id}
                  className="mx-14 md:mx-24 lg:mx-30"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 150}
                >
                  <CardHeader className="flex items-start gap-4">
                    <Image
                      src="/artikel/newspaper.png"
                      alt="artikel"
                      width={20}
                      height={20}
                    />
                    <h1 className="text-[#1A4D2E] font-bold text-[20px]">
                      {article.title}
                    </h1>
                  </CardHeader>
                  <CardContent className="ml-8">
                    <p className="text-muted-foreground">{article.desc}</p>
                    <Link
                      href={article.src}
                      target="_blank"
                      className="text-[#1A4D2E] italic font-light"
                    >
                      Full Text
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
          <div className="flex justify-center">
            <Button className="bg-[#1A4D2E] text-white p-6 rounded-full my-8">
              Tampilkan Semua Artikel 2026
            </Button>
          </div>
        </div>
        <div className="container mx-auto">
          <h1 className="text-muted-foreground font-bold text-[25px] ml-14 md:ml-24 lg:ml-30 my-2">
            2025
          </h1>
          {Articles.filter((item) => item.year === 2025).map((item) => (
            <div className="grid gap-8" key={item.year}>
              {item.items.slice(0, 1).map((article, index) => (
                <Card
                  key={article.id}
                  className="mx-14 md:mx-24 lg:mx-30"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 150}
                >
                  <CardHeader className="flex items-start gap-4">
                    <Image
                      src="/artikel/newspaper.png"
                      alt="artikel"
                      width={20}
                      height={20}
                    />
                    <h1 className="text-[#1A4D2E] font-bold text-[20px]">
                      {article.title}
                    </h1>
                  </CardHeader>
                  <CardContent className="ml-8">
                    <p className="text-muted-foreground">{article.desc}</p>
                    <Link
                      href={article.src}
                      target="_blank"
                      className="text-[#1A4D2E] italic font-light"
                    >
                      Full Text
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
          <div className="flex justify-center">
            <Button className="bg-[#1A4D2E] text-white p-6 rounded-full my-8">
              Tampilkan Semua Artikel 2025
            </Button>
          </div>
        </div>
        <div className="container mx-auto">
          <h1 className="text-muted-foreground font-bold text-[25px] ml-14 md:ml-24 lg:ml-30 my-2">
            2024
          </h1>
          {Articles.filter((item) => item.year === 2024).map((item) => (
            <div className="grid gap-8" key={item.year}>
              {item.items.slice(0, 1).map((article, index) => (
                <Card
                  key={article.id}
                  className="mx-14 md:mx-24 lg:mx-30"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 150}
                >
                  <CardHeader className="flex items-start gap-4">
                    <Image
                      src="/artikel/newspaper.png"
                      alt="artikel"
                      width={20}
                      height={20}
                    />
                    <h1 className="text-[#1A4D2E] font-bold text-[20px]">
                      {article.title}
                    </h1>
                  </CardHeader>
                  <CardContent className="ml-8">
                    <p className="text-muted-foreground">{article.desc}</p>
                    <Link
                      href={article.src}
                      target="_blank"
                      className="text-[#1A4D2E] italic font-light"
                    >
                      Full Text
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
          <div className="flex justify-center">
            <Button className="bg-[#1A4D2E] text-white p-6 rounded-full my-8">
              <Link href="/publikasi/2024">Tampilkan Semua Artikel 2024</Link>
            </Button>
          </div>
        </div>
        <div className="container mx-auto">
          <h1 className="text-muted-foreground font-bold text-[25px] ml-14 md:ml-24 lg:ml-30 my-2">
            2023
          </h1>
          {Articles.filter((item) => item.year === 2023).map((item) => (
            <div className="grid gap-8" key={item.year}>
              {item.items.slice(0, 1).map((article, index) => (
                <Card
                  key={article.id}
                  className="mx-14 md:mx-24 lg:mx-30"
                  data-aos="fade-up"
                  data-aos-duration="800"
                  data-aos-delay={index * 150}
                >
                  <CardHeader className="flex items-start gap-4">
                    <Image
                      src="/artikel/newspaper.png"
                      alt="artikel"
                      width={20}
                      height={20}
                    />
                    <h1 className="text-[#1A4D2E] font-bold text-[20px]">
                      {article.title}
                    </h1>
                  </CardHeader>
                  <CardContent className="ml-8">
                    <p className="text-muted-foreground">{article.desc}</p>
                    <Link
                      href={article.src}
                      target="_blank"
                      className="text-[#1A4D2E] italic font-light"
                    >
                      Full Text
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          ))}
          <div className="flex justify-center">
            <Button className="bg-[#1A4D2E] text-white p-6 rounded-full my-8">
              <Link href="/publikasi/2023">Tampilkan Semua Artikel 2023</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublikasiFeat;
