"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { CreateUserDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import FormSkeleton from "@/src/components/Skeletons/FormSk";
import axios from "axios";

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
  const c = useTranslations("dash");

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
      console.error("ERROR:", err);

      let message = "Terjadi kesalahan pada server.";
      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || err.message || message;
      } else if (err instanceof Error) {
        message = err.message;
      }
      switch (message) {
        case "email is existed":
          toast.error(c("emailExisted"), {
            description: c("emailExistedDescription"),
          });
          break;

        case "username is existed":
          toast.error(c("usernameExisted"), {
            description: c("usernameExistedDescription"),
          });
          break;

        case "email is not valid":
          toast.error(c("emailNotValid"), {
            description: c("emailNotValidDescription"),
          });
          break;


        default:
          toast.error(c("createFailed"), {
            description: message,
          });
      }
    } finally {
      setLoading(false);
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


  return (
    <>
      <Toaster position="top-center" richColors />
      {loading ? (
        <FormSkeleton />
      ) : (
        <div className="p-6 space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-[#1A4D2E]">
              {c("createProfile")}
            </h1>

            <p className="mt-2 text-muted-foreground">
              {c("createProfileDesc")}
            </p>
          </div>

          <Card className="overflow-hidden border-0 shadow-lg">
            <div className="bg-linear-to-r from-[#1A4D2E] via-[#2F6B45] to-[#4F8A5B] px-8 py-6">
              <div className="text-white">
                <h2 className="text-2xl font-semibold">
                  {c("createProfileDes1")}
                </h2>

                <p className="mt-2 text-sm text-green-100">
                  {c("createProfileDes2")}
                </p>
              </div>
            </div>

            <CardContent className="bg-white p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label>Username</Label>
                  <Input
                    name="username"
                    placeholder="Masukkan username"
                    value={createTeam.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="contoh@email.com"
                    value={createTeam.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Nama Depan</Label>
                  <Input
                    name="first_name"
                    placeholder="Nama depan"
                    value={createTeam.first_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label>Nama Belakang</Label>
                  <Input
                    name="last_name"
                    placeholder="Nama belakang"
                    value={createTeam.last_name}
                    onChange={handleChange}
                  />
                </div>

                <div className="space-y-2 md:col-span-2">
                  <Label>Nomor Handphone</Label>
                  <Input
                    type="tel"
                    name="phone_number"
                    placeholder="08xxxxxxxxxx"
                    value={createTeam.phone_number}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="mt-10 flex justify-end gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => router.back()}
                >
                  Batal
                </Button>

                <Button
                  onClick={createData}
                  disabled={!isFormValid || loading}
                  className="bg-[#1A4D2E] hover:bg-[#2B6B45] min-w-40"
                >
                  {loading ? "Menyimpan..." : "Tambah Anggota"}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default CreateTeam;
