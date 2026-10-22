"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { UserDashType } from "@/src/types";
import { useTranslations } from "next-intl";

const DetailTeam = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<UserDashType | null>(null);
  const d = useTranslations('dash')

  useEffect(() => {
    const getUser = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/auth/${id}`);
        const person = response.data;
        setUser(person);
      } catch (error) {
        throw error;
      }
    };
    getUser(userId);
  }, [userId]);
  return (
    <div className="grid gap-4">
      <h1>@{user?.username}</h1>
      <div>
        <h1 className="text-black">{d('ProfileFName')}</h1>
        <p>{user?.first_name}</p>
      </div>
      <div>
        <h1 className="text-black">{d('ProfileLName')}</h1>
        <p>{user?.last_name}</p>
      </div>
      <div>
        <h1 className="text-black">Email</h1>
        <p>{user?.email}</p>
      </div>
      <div>
        <h1 className="text-black">{d('ProfilePhoneNum')}</h1>
        <p>{user?.phone_number}</p>
      </div>
      <div>
        <h1 className="text-black">{d('ProfileAccess')}</h1>
        <p>{user?.role}</p>
      </div>
    </div>
  );
};

export default DetailTeam;
