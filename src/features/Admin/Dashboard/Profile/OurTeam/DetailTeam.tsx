"use client";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { UserDashType } from "@/src/types";

const DetailTeam = ({ userId }: { userId: number }) => {
  const [user, setUser] = useState<UserDashType | null>(null);

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
        <h1 className="text-black">Nama Depan</h1>
        <p>{user?.first_name}</p>
      </div>
      <div>
        <h1 className="text-black">Nama Belakang</h1>
        <p>{user?.last_name}</p>
      </div>
      <div>
        <h1 className="text-black">Email</h1>
        <p>{user?.email}</p>
      </div>
      <div>
        <h1 className="text-black">No. Handphone</h1>
        <p>{user?.phone_number}</p>
      </div>
      <div>
        <h1 className="text-black">Hak Akses</h1>
        <p>{user?.role}</p>
      </div>
    </div>
  );
};

export default DetailTeam;
