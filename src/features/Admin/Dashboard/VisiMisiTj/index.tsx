"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Pencil, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { MisiDashType, TujuanDashType, VisiDashType } from "@/src/types";
import { axiosInstance } from "@/src/lib/axios";
import { toast } from "sonner";
import { Toaster } from "@/src/components/ui/sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/src/components/ui/dialog";
import CreateMisi from "./CreateMisi";
import { Separator } from "@/src/components/ui/separator";
import DeleteMisi from "./DeleteMisi";
import DashVisiMisiSkeleton from "@/src/components/Skeletons/DashVisiMisiSk";

const DashVisiMisiTjFeat = () => {
  const [visi, setVisi] = useState<VisiDashType | null>(null);
  const [misi, setMisi] = useState<MisiDashType[]>([]);
  const [tujuan, setTujuan] = useState<TujuanDashType | null>(null);
  const [edit, setEdit] = useState<number | null>(null);
  const [editVisi, setEditVisi] = useState(false);
  const [editTujuan, setEditTujuan] = useState(false);
  const [originalVisi, setOriginalVisi] = useState("");
  const [originalTujuan, setOriginalTujuan] = useState("");
  const [loading, setLoading] = useState(true);

  const getVission = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/vission`);
      const result = response.data.data[0];
      setVisi(result);
      setOriginalVisi(result.visi);
    } catch (error) {
      console.log(error);
    }
  };

  const getMission = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/missions`);
      const result = response.data.data;
      setMisi(result);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  const getTujuan = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/goal`);
      const result = response.data.data[0];
      setTujuan(result);
      setOriginalTujuan(result.goal);
    } catch (error) {
      console.log(error);
    }
  };

  const getData = async () => {
    try {
      setLoading(true);

      await Promise.all([getVission(), getMission(), getTujuan()]);
      await new Promise((resolve) => setTimeout(resolve, 1000));
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateTujuan = async () => {
    if (!tujuan) return;

    try {
      await axiosInstance.put(`/api/v1/goal/${tujuan.id}`, {
        goal: tujuan.goal,
      });
      toast.success("Tujuan berhasil diperbarui");
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateVisi = async () => {
    if (!visi) return;

    try {
      await axiosInstance.put(`/api/v1/vission/${visi.id}`, {
        visi: visi.visi,
      });
      toast.success("Visi berhasil diperbarui");
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateMisi = async (item: MisiDashType) => {
    try {
      const response = await axiosInstance.put(`/api/v1/missions/${item.id}`, {
        content: item.content,
      });
      console.log(response.data);
      toast.success("Misi berhasil diperbarui");
    } catch (err) {
      console.error(err);
    }
  };

  const handleChangeMisi = (id: number, value: string) => {
    setMisi((prev) =>
      prev.map((item) => (item.id === id ? { ...item, content: value } : item)),
    );
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <Toaster position="top-center" richColors />
        <DashVisiMisiSkeleton />
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Visi, Misi & Tujuan
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <h1 className=" text-[#1A4D2E] font-semibold mx-6">
          Kelola informasi Visi, Misi, dan Tujuan
        </h1>
        <Card className="mx-2 my-4 md:mx-4 max-w-4xl">
          <CardContent className="grid gap-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Visi</Label>
                {!editVisi ? (
                  <Textarea
                    value={visi?.visi}
                    onChange={(e) =>
                      setVisi((prev) =>
                        prev
                          ? {
                              ...prev,
                              visi: e.target.value,
                            }
                          : null,
                      )
                    }
                    readOnly
                  />
                ) : (
                  <Textarea
                    value={visi?.visi}
                    onChange={(e) =>
                      setVisi((prev) =>
                        prev
                          ? {
                              ...prev,
                              visi: e.target.value,
                            }
                          : null,
                      )
                    }
                  />
                )}
              </div>

              {!editVisi ? (
                <Button
                  onClick={() => setEditVisi(true)}
                  className="bg-[#1A4D2E] duration-200 hover:bg-[#3f8159] cursor-pointer"
                  size="sm"
                >
                  <Pencil /> Ubah Visi
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleUpdateVisi();
                    setEditVisi(false);
                  }}
                  disabled={visi?.visi === originalVisi}
                  className="bg-[#1A4D2E] duration-200 hover:bg-[#3f8159] cursor-pointer"
                  size="sm"
                >
                  <Pencil /> Simpan Perubahan Visi
                </Button>
              )}
            </div>
            <Separator className="px-8" />

            <div className="space-y-8">
              <div className="grid gap-2">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <Label>Misi</Label>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        className="bg-[#1A4D2E] duration-200 hover:bg-[#3f8159] cursor-pointer"
                        size="sm"
                      >
                        <Plus /> Tambah Misi
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle className="text-gray-500 text-md">
                          Tambah Misi
                        </DialogTitle>
                        <DialogDescription asChild>
                          <div aria-describedby="Tambah Misi">
                            <CreateMisi
                              onSuccess={() => {
                                getMission();
                              }}
                            />
                          </div>
                        </DialogDescription>
                      </DialogHeader>
                    </DialogContent>
                  </Dialog>
                </div>

                <div>
                  {misi.map((misi) => (
                    <div key={misi.id}>
                      <div className="flex flex-col gap-2 my-4 md:flex-row md:justify-between">
                        {edit !== misi.id ? (
                          <Textarea
                            value={misi.content}
                            className="w-full md:flex-1"
                            onChange={(e) =>
                              handleChangeMisi(misi.id, e.target.value)
                            }
                            readOnly
                          />
                        ) : (
                          <Textarea
                            value={misi.content}
                            className="w-full md:flex-1"
                            onChange={(e) =>
                              handleChangeMisi(misi.id, e.target.value)
                            }
                          />
                        )}

                        <div className="flex justify-end md:justify-start gap-2">
                          {edit !== misi.id ? (
                            <Button
                              onClick={() => setEdit(misi.id)}
                              size="icon"
                              variant="secondary"
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button
                              onClick={() => {
                                handleUpdateMisi(misi);
                                setEdit(null);
                              }}
                              size="sm"
                              variant="secondary"
                            >
                              Simpan Perubahan
                            </Button>
                          )}

                          <div>
                            <DeleteMisi
                              idCode={misi.id}
                              onSuccess={getMission}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <Separator className="px-8" />

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Tujuan</Label>
                <Textarea
                  value={tujuan?.goal}
                  onChange={(e) =>
                    setTujuan((prev) =>
                      prev
                        ? {
                            ...prev,
                            goal: e.target.value,
                          }
                        : null,
                    )
                  }
                  readOnly={!editTujuan}
                />
              </div>
              <div className="flex justify-end md:justify-start gap-2">
                {!editTujuan ? (
                  <Button
                    onClick={() => setEditTujuan(true)}
                    size="icon"
                    variant="secondary"
                  >
                    <Pencil className="h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleUpdateTujuan();
                      setEditTujuan(false);
                    }}
                    disabled={tujuan?.goal === originalTujuan}
                    size="sm"
                    className="bg-[#1A4D2E] duration-200 hover:bg-[#3f8159] cursor-pointer"
                  >
                    Simpan Perubahan
                  </Button>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      </Card>
    </div>
  );
};

export default DashVisiMisiTjFeat;
