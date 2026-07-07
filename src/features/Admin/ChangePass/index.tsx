"use client";

import { useState } from "react";
import { axiosInstance } from "@/lib/axios";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useRouter } from "@/src/i18n/navigation";

const ChangePassword = () => {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChangePassword = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!password || !confirmPassword) {
      return toast.error("Semua field harus diisi");
    }

    if (password !== confirmPassword) {
      return toast.error("Konfirmasi password tidak sesuai");
    }

    try {
      setLoading(true);

      const response = await axiosInstance.get("/api/v1/auth/me");
      const id = response.data.data.id;

      await axiosInstance.patch(`/api/v1/auth/${id}`, {
        password,
      });

     await axiosInstance.post("/api/v1/auth/logout");

    toast.success(
      "Password berhasil diperbarui. Silakan login kembali."
    );

    setTimeout(() => {
      router.replace("/admin/login");
    }, 1500);
    } catch (err) {
      console.error(err);
      toast.error("Gagal mengganti password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <Toaster position="top-center" richColors />

      <Card className="w-full max-w-md p-8 space-y-6">

        <div>
          <h1 className="text-2xl font-bold text-[#1A4D2E]">
            Ganti Password
          </h1>

          <p className="text-sm text-gray-500 mt-1">
            Demi keamanan akun, silakan ubah password bawaan Anda.
          </p>
        </div>

        <form
          onSubmit={handleChangePassword}
          className="space-y-4"
        >
          <div>
            <Label>Password Baru</Label>

            <Input
              type="password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
            />
          </div>

          <div>
            <Label>Konfirmasi Password</Label>

            <Input
              type="password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
            />
          </div>

          <Button
            type="submit"
            disabled={loading}
            className="w-full bg-[#1A4D2E] hover:bg-[#3f8159]"
          >
            {loading ? "Menyimpan..." : "Simpan Password"}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ChangePassword;