"use client";
import { DataTable } from "@/src/components/Data Table/data-table";
import { columns } from "@/src/components/Data Table/usercolumns";
import OurTeamSkeleton from "@/src/components/Skeletons/OurTeamSk";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardDescription,
  CardTitle,
} from "@/src/components/ui/card";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { UserDashType } from "@/src/types";

import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

const DashOurTeamFeat = () => {
  const [users, setUsers] = useState<UserDashType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const p = useTranslations("dash");

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
  const router = useRouter();

  if (loading) {
    return (
      <div className="p-8">
        <OurTeamSkeleton />
      </div>
    );
  }
  return (
    <div className="p-6 space-y-6">
      <Toaster />

      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">
          {p("profileTitle")}
        </h1>

        <p className="mt-2 text-muted-foreground">{p("profileDesc")}</p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2F6B45] to-[#4F8A5B] px-8 py-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
            <div className="text-white">
              <h2 className="text-2xl font-semibold">{p("profileTitle")}</h2>

              <p className="mt-2 text-sm text-green-100">{p("profileDesc")}</p>
            </div>

            <Button
              onClick={() => router.push("/admin/dashboard/our-team/create")}
              className="bg-white text-[#1A4D2E] hover:bg-green-50"
            >
              <Plus className="mr-2 h-4 w-4" />
              {p("profileButton")}
            </Button>
          </div>
        </div>

        <CardContent className="bg-white p-0">
          <DataTable columns={columns(getUsers)} data={users} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashOurTeamFeat;
