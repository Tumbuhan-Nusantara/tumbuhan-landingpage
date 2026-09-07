"use client";
import { Button } from "@/src/components/ui/button";
import { Card , CardContent} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { TeamPropsType, UserDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import FormSkeleton from "@/src/components/Skeletons/FormSk";

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
    return <FormSkeleton />;
  }

  return (
    <div className="p-6 space-y-6">
  <Toaster position="top-center" richColors />

  <div>
    <h1 className="text-3xl font-bold text-[#1A4D2E]">
      Edit Anggota Tim
    </h1>

    <p className="mt-2 text-muted-foreground">
      Perbarui informasi pengguna Dashboard Yayasan Tumbuhan Asli Nusantara.
    </p>
  </div>

  <Card className="overflow-hidden border-0 shadow-lg">

    <div className="bg-linear-to-r from-[#1A4D2E] via-[#2F6B45] to-[#4F8A5B] px-8 py-6">
      <div className="text-white">
        <h2 className="text-2xl font-semibold">
          Informasi Anggota
        </h2>

        <p className="mt-2 text-sm text-green-100">
          Perbarui informasi pengguna yang memiliki akses ke dashboard.
        </p>
      </div>
    </div>

    <CardContent className="bg-white p-8">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <div className="space-y-2">
          <Label>Username</Label>
          <Input
            name="username"
            type="text"
            className="text-sm"
            value={team?.username ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label>Email</Label>
          <Input
            name="email"
            type="email"
            className="text-sm"
            value={team?.email ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label>Nama Depan</Label>
          <Input
            name="first_name"
            type="text"
            className="text-sm"
            value={team?.first_name ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2">
          <Label>Nama Belakang</Label>
          <Input
            name="last_name"
            type="text"
            className="text-sm"
            value={team?.last_name ?? ""}
            onChange={handleChange}
          />
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label>Nomor Handphone</Label>
          <Input
            name="phone_number"
            type="tel"
            className="text-sm"
            value={team?.phone_number ?? ""}
            onChange={handleChange}
          />
        </div>

      </div>

      <div className="flex justify-end gap-3 mt-10">

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
          className="bg-[#1A4D2E] hover:bg-[#2B6B45] min-w-44 cursor-pointer"
        >
          {saving ? "Menyimpan..." : "Simpan Perubahan"}
        </Button>

      </div>

    </CardContent>
  </Card>
</div>
  );
};

export default EditTeam;
