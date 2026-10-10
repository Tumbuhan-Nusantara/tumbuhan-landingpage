"use client";
import DashboardSkeleton from "@/src/components/Skeletons/DashboardSk";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { axiosInstance } from "@/src/lib/axios";
import { DashMainMenu } from "@/src/constants";
import { UserDashType } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const DashboardFeat = () => {
  const dash = useTranslations("dashmain");
  const [loading, setLoading] = useState<boolean>(true);
  const [users, setUsers] = useState<UserDashType[]>([]);
  const [showAllUsers, setShowAllUsers] = useState<boolean>(false);
  const displayedUsers = showAllUsers ? users : users.slice(0, 3);
  const [me, setMe] = useState<UserDashType | null>(null);

  const [totalNews, setTotalNews] = useState(0);
  const [totalActivities, setTotalActivities] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);
  const getTotalData = async () => {
    try {
      const [newsRes, activityRes, usersRes] = await Promise.all([
        axiosInstance.get("/api/v1/news"),
        axiosInstance.get("/api/v1/activities"),
        axiosInstance.get("/api/v1/auth"),
      ]);

      setTotalNews(newsRes.data.data.length);
      console.log(newsRes.data.data.length);
      setTotalActivities(activityRes.data.data.length);
      console.log(activityRes.data.data.length);
      setTotalUsers(usersRes.data.data.length);
      console.log(usersRes.data.data.length);
    } catch (error) {
      console.error("Gagal mengambil total data:", error);
    }
  };

  const getUsers = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/auth/`);
      const people = response.data.data;

      setUsers(people);
    } catch (error) {
      throw error;
    }
  };

  const getMe = async () => {
    try {
      const res = await axiosInstance.get(`/api/v1/auth/me`);
      const result = res.data.data;

      setMe(result);
      console.log("halo", result);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      getUsers();
      getMe();
      getTotalData();
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <DashboardSkeleton />;
  }
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        {dash("dashboardTitle")}
      </h1>
      <p className="font-black text-xl text-[#1A4D2E] px-2">
        {dash("welcome")} {me?.first_name} {me?.last_name}
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {DashMainMenu.map((item) => (
          <Card
            key={item.id}
            className="min-h-32 bg-[url('/image.png')] bg-cover bg-center p-5"
          >
            <div className="flex h-full flex-col justify-between gap-4">
              <div className="flex items-center justify-between gap-3">
                <h1 className="text-sm font-medium text-[#1A4D2E]">
                  {dash(item.title)}
                </h1>

                <div className="shrink-0 rounded-lg bg-[#dcf4e4] p-2">
                  <item.logo className="h-5 w-5 text-[#1A4D2E]" />
                </div>
              </div>

              <p className="text-3xl font-bold text-[#1A4D2E]">
                {item.id === 1
                  ? totalUsers
                  : item.id === 2
                    ? totalActivities
                    : totalNews}
              </p>
            </div>
          </Card>
        ))}
      </div>
      <Card className="bg-[url('/image.png')] bg-cover">
        <h1 className="mx-6 text-[#1A4D2E] font-semibold">
          {dash("userListTitle")}
        </h1>
        {displayedUsers.map((user) => (
          <Card key={user.id} className="mx-6">
            <div className="flex items-center mx-4 gap-4">
              <Avatar className="h-12 w-12 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="tes user"
                />
                <AvatarFallback className="rounded-lg">
                  {user.first_name?.[0]}
                  {user.last_name?.[0]}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[#1A4D2E]">
                  {user.first_name} {user.last_name}
                </p>
                <p className="text-muted-foreground">{user.role}</p>
              </div>
            </div>
          </Card>
        ))}
        {users.length > 3 && !showAllUsers ? (
          <div className="flex justify-center my-4">
            <Button
              variant="outline"
              onClick={() => setShowAllUsers(true)}
              className="border-[#1A4D2E] text-[#1A4D2E]"
              size="sm"
            >
              {dash("showMore")}
            </Button>
          </div>
        ) : (
          <div className="flex justify-center my-4">
            <Button
              variant="outline"
              onClick={() => setShowAllUsers(false)}
              className="border-[#1A4D2E] text-[#1A4D2E]"
              size="sm"
            >
              {dash("showLess")}
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default DashboardFeat;
