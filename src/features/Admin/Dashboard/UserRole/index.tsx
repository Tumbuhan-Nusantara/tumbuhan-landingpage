"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import { UserDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const DashUserRoleFeat = () => {
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

  const handleDelete = async (id: number) => {
    if (!users) return;
    try {
      await axiosInstance.delete(`/api/v1/auth/${id}`);

      toast.warning("Pengguna berhasil dihapus");
      await getUsers()
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUsers();
  }, []);
  return (
    <div className="p-8">
      <Toaster/>
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Akses Pengguna Admin YTAN
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <h1 className="mx-6 text-[#1A4D2E] font-semibold">
          Hak Akses Pengguna Dashboard YTAN
        </h1>

        <Card className="mx-6">
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
                <div className="flex items-center gap-2">
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
                  <AlertDialog>
                    <AlertDialogTrigger asChild>
                      <Button className="bg-red-700 hover:bg-red-500">
                        <Trash2 />
                      </Button>
                    </AlertDialogTrigger>
                    <AlertDialogContent>
                      <AlertDialogHeader>
                        <AlertDialogTitle className="text-red-700">
                          Apakah Anda yakin?
                        </AlertDialogTitle>
                        <AlertDialogDescription>
                          Tindakan ini tidak dapat dibatalkan.
                        </AlertDialogDescription>
                      </AlertDialogHeader>
                      <AlertDialogFooter>
                        <AlertDialogCancel>Batal</AlertDialogCancel>
                        <AlertDialogAction
                          onClick={() => handleDelete(user.id)}
                          className="bg-red-700 hover:bg-red-500"
                        >
                          Hapus
                        </AlertDialogAction>
                      </AlertDialogFooter>
                    </AlertDialogContent>
                  </AlertDialog>
                </div>
              </div>
            ))}
        </Card>
      </Card>
    </div>
  );
};

export default DashUserRoleFeat;
