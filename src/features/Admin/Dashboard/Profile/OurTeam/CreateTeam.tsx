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
  const [loading, setLoading] = useState<boolean>(true);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setCreateTeam((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const createData = async () => {
    setLoading(true);
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
      setLoading(false);
      router.push(`/admin/dashboard/our-team`);
    } catch (err) {
      console.error(err);
      toast.error("Gagal membuat user");
    }
  };

  const isFormValid =
    createTeam.username.trim() !== "" &&
    createTeam.first_name.trim() !== "" &&
    createTeam.last_name.trim() !== "" &&
    createTeam.email.trim() !== "" &&
    createTeam.phone_number.trim() !== "";
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
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-[#1A4D2E]">
          Tambah Anggota Tim
        </h1>

        <p className="text-muted-foreground mt-1">
          Tambahkan pengguna dashboard Yayasan Tumbuhan Asli Nusantara.
        </p>
      </div>

      <Card className="max-w-3xl p-8 shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="grid gap-2">
            <Label>Username</Label>
            <Input
              name="username"
              value={createTeam.username}
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
          disabled={!isFormValid || loading}
          className="bg-[#1A4D2E] hover:bg-[#3f8159] mt-6"
        >
          Tambah User
        </Button>
      </Card>
    </div>
  );
};

export default CreateTeam;
