"use client";
import { DataTable } from "@/src/components/Data Table/data-table";
import { columns } from "@/src/components/Data Table/strukturcolumns";
import StructureSkeleton from "@/src/components/Skeletons/StructureSk";
import { Card, CardContent } from "@/src/components/ui/card";
import { Button } from "@/src/components/ui/button";
import { axiosInstance } from "@/src/lib/axios";
import { StrukturDashType } from "@/src/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/src/components/ui/dialog";
import CreateStruktur from "./CreateStruktur";

const StrukturOrgDash = () => {
  const [struktur, setStruktur] = useState<StrukturDashType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/v1/struktur`);
      const result = response.data.data;

      setStruktur(result);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getData();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <StructureSkeleton />
      </div>
    );
  }
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Struktur Organisasi
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <div className="flex items-center justify-between mx-6">
          <h1 className=" text-[#1A4D2E] font-semibold ">
            Kelola informasi Struktur Organisasi
          </h1>
          <Dialog>
            <DialogTrigger asChild>
              <Button
                className="flex items-center bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer"
                size="sm"
              >
                <Plus />
                Tambah Kategori Posisi
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-gray-500 text-md">
                  Tambah Kategori Posisi
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Artikel">
                    <CreateStruktur onSuccess={getData} />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>

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
