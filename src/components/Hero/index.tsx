import { Button } from "@/components/ui/button";
import React from "react";

const Hero = () => {
  return (
    <div className="h-screen overflow-hidden flex flex-col justify-center">
      <div className="container mx-auto">
        <div className="flex flex-col gap-8 px-8 md:px-12 lg:px-30">
          <div className="w-full md:w-full lg:w-2xl">
            <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl text-[#2B593A] tracking-wider">
              Kenali dan lestarikan tumbuhan kita!
            </h1>
          </div>
          <div className="w-full md:w-full lg:w-xl">
            <p className="text-sm md:text-lg lg:text-lg">
              <span className="font-bold text-[#2B593A]">
                Yayasan Tumbuhan Asli Nusantara Foundation
              </span>{" "}
              memiliki cita-cita untuk menjadi salah satu lembaga terdepan dalam
              mempelajari dan melestarikan keragaman hayati tumbuhan di
              Indonesia
            </p>
          </div>
          <div>
            <Button className="bg-[#2B593A] py-4 px-10 rounded-full">
              Tentang Kami
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
