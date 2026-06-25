import { Card, CardContent, CardHeader } from "@/components/ui/card";
import FooterFeat from "@/components/Footer";
import Nav from "@/components/Navbar-2";
import { Articles } from "@/src/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Article24Feat = () => {
  return (
    <div>
      <Nav />
      <div className="bg-[#1A4D2E] h-full overflow-hidden mt-22">
        <div className="container mx-auto">
          <div className="text-white flex flex-col gap-6 items-center py-10">
            <div>
              <p className="font-light">Kegiatan</p>
            </div>
            <div>
              <h1 className="text-5xl font-bold">Publikasi Ilmiah</h1>
            </div>
            <div className="text-center">
              <h3 className="font-semibold">
                Bertumbuh Bersama untuk Alam Indonesia
              </h3>
              <p className="font-light">
                Temukan berbagai artikel, penelitian, dan aktivitas terbaru dari
                YTAN.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="my-12">
        <div className="container mx-auto">
          <h1 className="text-[#1A4D2E] font-bold text-[25px] ml-14 md:ml-24 lg:ml-30 my-2">
            2024
          </h1>
          {Articles.filter((item) => item.year === 2024).map((item) => (
            <div className="grid gap-8" key={item.year}>
              {item.items.map((article) => (
                <Card key={article.id} className="mx-14 md:mx-24 lg:mx-30">
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
        </div>
      </div>
      <FooterFeat />
    </div>
  );
};

export default Article24Feat;
