"use client";
import { DataTable } from "@/components/Data Table/data-table";
import { columns } from "@/components/Data Table/strukturcolumns";
import { Card, CardContent } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import { StrukturDashType } from "@/src/types";
import { useEffect, useState } from "react";

const StrukturOrgDash = () => {
  const [struktur, setStruktur] = useState<StrukturDashType[]>([]);
  const getData = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/struktur`);
      const result = response.data.data;

      setStruktur(result);
      console.log("cek isinya", result);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData();
  }, []);
  return (
    <div className="p-8">
      <Toaster position="top-center" richColors />
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Struktur Organisasi
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <h1 className=" text-[#1A4D2E] font-semibold mx-6">
          Kelola informasi Struktur Organisasi
        </h1>
        <Card className="mx-2 my-4 md:mx-4 max-w-4xl">
          <CardContent className="grid gap-6">
            <DataTable columns={columns(getData)} data={struktur} />
          </CardContent>
        </Card>
      </Card>
    </div>
  );
};

export default StrukturOrgDash;
