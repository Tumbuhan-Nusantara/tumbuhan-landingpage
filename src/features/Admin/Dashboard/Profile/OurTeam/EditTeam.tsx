"use client";
import CreateEditSkeleton from "@/src/components/Skeletons/CreateEditSk";
import { Button } from "@/src/components/ui/button";
import { Card } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { TeamPropsType, UserDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditTeam = ({ teamId }: TeamPropsType) => {
  const [team, setTeam] = useState<UserDashType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [saving, setSaving] = useState(false);
  const [originalTeam, setOriginalTeam] = useState<UserDashType | null>(null);

  const router = useRouter();

  useEffect(() => {
    const getTeam = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/auth/${id}`);
        setTeam({
          ...response.data,
        });
        setOriginalTeam(response.data);
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

      toast.success("Data tim berhasil diperbarui");
      setSaving(true);

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

  const isChanged =
    team?.username !== originalTeam?.username ||
    team?.first_name !== originalTeam?.first_name ||
    team?.last_name !== originalTeam?.last_name ||
    team?.email !== originalTeam?.email ||
    team?.phone_number !== originalTeam?.phone_number;

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
        <h1 className="text-3xl font-bold text-[#1A4D2E]">Edit Anggota Tim</h1>

        <p className="text-muted-foreground mt-1">
          Perbarui informasi pengguna dashboard Yayasan Tumbuhan Asli Nusantara.
        </p>
      </div>
      <Card className="max-w-3xl p-8 shadow-sm border">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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

        <div className="flex justify-end gap-3 mt-8">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.back()}
            disabled={saving}
            className="cursor-pointer"
          >
            Batal
          </Button>

          <Button
            type="button"
            onClick={handleUpdate}
            disabled={!isChanged || saving}
            className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer min-w-40"
          >
            {saving ? "Menyimpan..." : "Simpan Perubahan"}
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default EditTeam;
