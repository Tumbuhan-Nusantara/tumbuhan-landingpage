'use client'
import { Card } from "@/components/ui/card";
import { SejarahItem } from "@/src/constants";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const SideProfile = () => {
  useEffect(() => {
    Aos.init()
  }, [])
  return (
    <div>
      <Card className="w-90 md:w-100 lg:w-100 h-max shadow-xl" data-aos="fade-up" data-aos-duration="900">
        <div className="mx-6 grid gap-4">
          <h1 className="font-bold text-xl text-[#1A4D2E]">Tentang Kami</h1>
          <div className="grid gap-2">
            {SejarahItem.map((item) => (
              <div key={item.id} className="flex items-center gap-2">
                <div className="rounded-full border-black border border-solid p-2">
                  <item.src size={20} className="text-[#1A4D2E]" />
                </div>
                <h1>{item.title}</h1>
              </div>
            ))}
          </div>
        </div>
      </Card>
      
    </div>
  );
};

export default SideProfile;
