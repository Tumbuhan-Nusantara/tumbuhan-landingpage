"use client";
import { DataTable } from "@/components/Data Table/data-table";
import { columns } from "@/components/Data Table/usercolumns";
import OurTeamSkeleton from "@/components/Skeletons/OurTeamSk";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { UserDashType } from "@/src/types";

import { Plus } from "lucide-react";
import { useEffect, useState } from "react";

const DashOurTeamFeat = () => {
  const [users, setUsers] = useState<UserDashType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get("/api/v1/auth");

      setUsers(response.data.data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUsers();
  }, []);
  const router = useRouter()

  if (loading) {
    return (
      <div className="p-8">
        <OurTeamSkeleton />
      </div>
    );
  }
  return (
    <div className="p-8">
      <Toaster />
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Anggota YTAN
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <div className="flex justify-between items-center mx-6">
          <h1 className=" text-[#1A4D2E] font-semibold">
            Pengguna Dashboard YTAN
          </h1>
          <Button
            onClick={() =>
              router.push(`/admin/dashboard/our-team/create`)
            }
            className="flex items-center bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer"
          >
            <Plus />
            Tambah Anggota Tim YTAN
          </Button>
        </div>
        <div>
          <DataTable columns={columns(getUsers)} data={users} />
        </div>
      </Card>
    </div>
  );
};

export default DashOurTeamFeat;
