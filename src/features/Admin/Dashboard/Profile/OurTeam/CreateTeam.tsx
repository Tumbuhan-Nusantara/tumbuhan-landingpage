"use client";
import CreateEditSkeleton from "@/components/Skeletons/CreateEditSk";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { CreateUserDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const CreateTeam = () => {
  const [createTeam, setCreateTeam] = useState<CreateUserDashType>({
    username: "",
    email: "",
    first_name: "",
    last_name: "",
    phone_number: "",
    role: "user",
  });
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createData = async () => {
    try {
      await axiosInstance.post("/api/v1/auth/register", createTeam);

      toast.success("User berhasil dibuat");

      setCreateTeam({
        username: "",
        email: "",
        first_name: "",
        last_name: "",
        phone_number: "",
        role: "user",
      });

      router.push(`/admin/dashboard/our-team`)
    } catch (err) {
      console.error(err);
      toast.error("Gagal membuat user");
    }
  };
  useEffect(() => {
  const timer = setTimeout(() => {
    setLoading(false);
  }, 1000);

  return () => clearTimeout(timer);
}, []);

if (loading) {
  return <CreateEditSkeleton />;
}

  return (
    <div className="p-8">
      <Toaster position="top-center" richColors />

      <Card className="p-8">
        <div className="space-y-4">
          <div className="grid gap-2">
            <Label>Username</Label>
            <Input
              name="username"
              value={createTeam.username}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label>Nama Depan</Label>
            <Input
              name="first_name"
              value={createTeam.first_name}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label>Nama Belakang</Label>
            <Input
              name="last_name"
              value={createTeam.last_name}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              type="email"
              name="email"
              value={createTeam.email}
              onChange={handleChange}
            />
          </div>

          <div className="grid gap-2">
            <Label>No. Handphone</Label>
            <Input
              type="number"
              name="phone_number"
              value={createTeam.phone_number}
              onChange={handleChange}
            />
          </div>
        </div>

        <Button
          onClick={createData}
          className="bg-[#1A4D2E] hover:bg-[#3f8159] mt-6"
        >
          Tambah User
        </Button>
      </Card>
    </div>
  );
};

export default CreateTeam;
