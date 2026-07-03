"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";

import { Plus } from "lucide-react";


const DashOurTeamFeat = () => {
  
  return (
    <div className="p-8">
      <Toaster />
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Anggota YTAN
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <div className="flex justify-between items-center mx-6">
          <h1 className=" text-[#1A4D2E] font-semibold">
            Hak Akses Pengguna Dashboard YTAN
          </h1>
          <Button className="flex items-center bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer">
            <Plus />
            Tambah Anggota Tim YTAN
          </Button>
        </div>
        
      </Card>
    </div>
  );
};

export default DashOurTeamFeat;
