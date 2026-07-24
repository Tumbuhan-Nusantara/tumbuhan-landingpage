"use client";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/src/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/src/components/ui/card";
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
} from "@/src/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/src/components/ui/select";
import { Button } from "@/src/components/ui/button";
import { Trash2 } from "lucide-react";
import { UserDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import { toast } from "sonner";
import { Toaster } from "@/src/components/ui/sonner";
import DashUserSkeleton from "@/src/components/Skeletons/DashUserSk";
import { useTranslations } from "next-intl";

const DashUserRoleFeat = () => {
  const r = useTranslations('dash')
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
      await getUsers();
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getUsers();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <DashUserSkeleton />
      </div>
    );
  }
  return (
   <div className="p-6 space-y-6">
  <Toaster position="top-center" richColors />
{/* "roleTitle": "Manajemen Hak Akses Pengguna",
  "roleDesc": "Kelola hak akses administrator serta peran pengguna pada Dashboard YTAN.",
  "roleFormTitle": "Hak Akses Dashboard",
  "roleFormDesc": "Atur peran pengguna dan kelola akses ke Dashboard YTAN.", */}
  <div>
    <h1 className="text-3xl font-bold text-[#1A4D2E]">
      {r('roleTitle')}
    </h1>

    <p className="mt-2 text-muted-foreground">
     {r('roleDesc')}
    </p>
  </div>

  <Card className="overflow-hidden shadow-sm">
    <CardHeader className="border-b bg-muted/30">
      <CardTitle className="text-xl text-[#1A4D2E]">
        {r('roleFormTitle')}
      </CardTitle>

      <CardDescription>
         {r('roleFormDesc')}
      </CardDescription>
    </CardHeader>

    <CardContent className="p-0">
      {users.length === 0 ? (
        <div className="flex h-40 items-center justify-center text-sm text-muted-foreground">
          No users found.
        </div>
      ) : (
        users.map((user, index) => (
          <div
            key={user.id}
            className={`flex flex-col gap-4 p-5 md:flex-row md:items-center md:justify-between ${
              index !== users.length - 1 ? "border-b" : ""
            }`}
          >
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src="" />

                <AvatarFallback className="bg-[#1A4D2E] text-white">
                  {user.first_name?.[0]}
                  {user.last_name?.[0]}
                </AvatarFallback>
              </Avatar>

              <div>
                <h3 className="font-semibold text-[#1A4D2E]">
                  {user.first_name} {user.last_name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {user.email}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
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
                  <SelectItem value="admin">
                    Administrator
                  </SelectItem>

                  <SelectItem value="user">
                  User
                  </SelectItem>
                </SelectContent>
              </Select>

              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button
                    variant="destructive"
                    size="icon"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </AlertDialogTrigger>

                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle>
                      Delete User?
                    </AlertDialogTitle>

                    <AlertDialogDescription>
                      This action cannot be undone. The selected user will lose
                      access to the dashboard.
                    </AlertDialogDescription>
                  </AlertDialogHeader>

                  <AlertDialogFooter>
                    <AlertDialogCancel>
                      Cancel
                    </AlertDialogCancel>

                    <AlertDialogAction
                      onClick={() => handleDelete(user.id)}
                      className="bg-red-600 hover:bg-red-700"
                    >
                      Delete User
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        ))
      )}
    </CardContent>
  </Card>
</div>
  );
};

export default DashUserRoleFeat;
