"use client";
import CreateEditSkeleton from "@/components/Skeletons/CreateEditSk";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { TeamPropsType, UserDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditTeam = ({ teamId }: TeamPropsType) => {
  const [team, setTeam] = useState<UserDashType | null>(null);
  const [loading, setLoading] = useState<boolean>(true)

  const router = useRouter();

  useEffect(() => {
    const getTeam = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/auth/${id}`);
        setTeam({
          ...response.data,
        });
      } catch (error) {
        throw error;
      }
    };
    getTeam(teamId);
  }, [teamId]);

  const handleUpdate = async () => {
    if (!team) return;

    try {

      await axiosInstance.patch(`/api/v1/auth/${team.id}`, {
        username: team.username,
        email: team.email,
        first_name: team.first_name,
        last_name: team.last_name,
        phone_number: team.phone_number,
      });

      toast.success("Data Tim berhasil diperbarui");
      router.push("/admin/dashboard/our-team");
    } catch (err) {
      console.error(err);
      toast.error("Gagal memperbarui user");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setTeam((prev) => {
      if (!prev) return null;

      return {
        ...prev,
        [name]: value,
      };
    });
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
              className="text-sm"
              name="username"
              type="text"
              value={team?.username ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Nama Depan</Label>
            <Input
              className="text-sm"
              name="first_name"
              type="text"
              value={team?.first_name ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Nama Belakang</Label>
            <Input
              className="text-sm"
              name="last_name"
              type="text"
              value={team?.last_name ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>Email</Label>
            <Input
              className="text-sm"
              name="email"
              type="email"
              value={team?.email ?? ""}
              onChange={handleChange}
            />
          </div>
          <div className="grid gap-2">
            <Label>No. Handphone</Label>
            <Input
              className="text-sm"
              name="phone_number"
              type="number"
              value={team?.phone_number ?? ""}
              onChange={handleChange}
            />
          </div>
          </div>

        <Button
          onClick={handleUpdate}
          className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer mt-6"
        >
          Simpan Perubahan
        </Button>
      </Card>
    </div>
  );
};

export default EditTeam;
