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
import { useTranslations } from "next-intl";

const StrukturOrgDash = () => {
  const s = useTranslations("dash");
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
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">{s("struktur")}</h1>
        <p className="mt-2 text-muted-foreground">{s("strukturDesc")}</p>
      </div>
      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2F6B45] to-[#4F8A5B] px-8 py-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold text-white">
                {s("strukturTitle")}
              </h2>
              <p className="mt-2 text-sm text-green-100">
                {s("strukturDesc2")}
              </p>
            </div>

            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-white text-[#1A4D2E] hover:bg-green-50">
                  <Plus className="mr-2 h-4 w-4" />
                  {s("strukturButton")}
                </Button>
              </DialogTrigger>
      
              <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                  <DialogTitle>{s("strukturButton")}</DialogTitle>
                  <DialogDescription>
                    {s("strukturButtonDesc")}
                  </DialogDescription>
                </DialogHeader>

                <CreateStruktur onSuccess={getData} />
              </DialogContent>
            </Dialog>
          </div>
        </div>

        <CardContent className="p-8">
          <Card className="shadow-sm border">
            <CardContent className="p-6">
              <DataTable columns={columns(getData)} data={struktur} />
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default StrukturOrgDash;
