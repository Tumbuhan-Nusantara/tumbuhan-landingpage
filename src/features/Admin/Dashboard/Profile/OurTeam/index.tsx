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
import { axiosInstance } from "@/lib/axios";
import { UserDashType } from "@/src/types";
import { Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DashOurTeamFeat = () => {
  const [users, setUsers] = useState<UserDashType[]>([]);

  const getUsers = async () => {
    try {
      const response = await axiosInstance.get("/api/v1/auth");

      setUsers(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  const handleRoleChange = async (id: number, role: "admin" | "user") => {
    try {
      await axiosInstance.patch(`/api/v1/auth/${id}`, {
        role,
      });

      setUsers((prev) =>
        prev.map((user) =>
          user.id === id
            ? {
                ...user,
                role,
              }
            : user,
        ),
      );

      toast.success("Role berhasil diperbarui");
    } catch (error) {
      console.error(error);
      toast.error("Gagal mengubah role");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUsers();
  }, []);
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
        <Card className="mx-6">
          <div className="divide-y">
            {users.map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between px-4 py-4"
              >
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback>
                      {user.first_name?.[0]}
                      {user.last_name?.[0]}
                    </AvatarFallback>
                  </Avatar>

                  <div>
                    <p className="font-medium text-[#1A4D2E]">
                      {user.first_name} {user.last_name}
                    </p>

                    <p className="text-sm text-muted-foreground">
                      {user.email}
                    </p>
                  </div>
                </div>

                <Select
                  value={user.role}
                  onValueChange={(value: "admin" | "user") =>
                    handleRoleChange(user.id, value)
                  }
                >
                  <SelectTrigger className="w-36">
                    <SelectValue />
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="admin">ADMIN</SelectItem>
                    <SelectItem value="user">USER</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            ))}
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default DashOurTeamFeat;
