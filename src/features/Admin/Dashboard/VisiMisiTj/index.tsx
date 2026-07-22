"use client";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { Pencil, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import { MisiType, TujuanType, VisiType } from "@/src/types";
import { axiosInstance } from "@/src/lib/axios";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogDescription,
} from "@/src/components/ui/dialog";
import CreateMisi from "./CreateMisi";
import DeleteMisi from "./DeleteMisi";
import DashVisiMisiSkeleton from "@/src/components/Skeletons/DashVisiMisiSk";

const DashVisiMisiTjFeat = () => {
  const [visi, setVisi] = useState<VisiType | null>(null);
  const [misi, setMisi] = useState<MisiType[]>([]);
  const [tujuan, setTujuan] = useState<TujuanType | null>(null);
  const [edit, setEdit] = useState<number | null>(null);
  const [editVisi, setEditVisi] = useState(false);
  const [editTujuan, setEditTujuan] = useState(false);
  const [originalVisi, setOriginalVisi] = useState({
    visi_id: "",
    visi_en: "",
  });
  const [editMisi, setEditMisi] = useState({
    content_id: "",
    content_en: "",
  });
  const [originalTujuan, setOriginalTujuan] = useState({
    goal_id: "",
    goal_en: "",
  });
  const [loading, setLoading] = useState(true);

  const getVission = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/vission`);
      const result = response.data.data[0];
      setVisi(result);
      console.log(result);
      setOriginalVisi({
        visi_id: response.data.data[0].visi_id,
        visi_en: response.data.data[0].visi_en,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const isVisiChanged =
    visi?.visi_id !== originalVisi.visi_id ||
    visi?.visi_en !== originalVisi.visi_en;

  const isMissionChanged = (item: MisiType) =>
    item.content_id !== editMisi.content_id ||
    item.content_en !== editMisi.content_en;

  const isGoalChanged =
    tujuan?.goal_id !== originalTujuan.goal_id ||
    tujuan?.goal_en !== originalTujuan.goal_en;

  const getMission = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/missions`);
      const result = response.data.data;
      setMisi(result);
      console.log("misi", result);
    } catch (error) {
      console.log(error);
    }
  };

  const getTujuan = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/goal`);
      const result = response.data.data[0];
      setTujuan(result);
      setOriginalTujuan({
        goal_id: result.goal_id,
        goal_en: result.goal_en,
      });
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
      await axiosInstance.patch(`/api/v1/goal/${tujuan.id}`, {
        goal_id: tujuan.goal_id,
        goal_en: tujuan.goal_en,
      });
      toast.success("Tujuan berhasil diperbarui");
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateVisi = async () => {
    if (!visi) return;

    try {
      await axiosInstance.patch(`/api/v1/vission/${visi.id}`, {
        visi_id: visi.visi_id,
        visi_en: visi.visi_en,
      });
      toast.success("Visi berhasil diperbarui");
    } catch (err) {
      console.error(err);
    }
  };

  const handleUpdateMisi = async (id: number) => {
    try {
      await axiosInstance.patch(`/api/v1/missions/${id}`, editMisi);

      setMisi((prev) =>
        prev.map((item) =>
          item.id === id
            ? {
                ...item,
                ...editMisi,
              }
            : item,
        ),
      );

      toast.success("Misi berhasil diperbarui");
      setEdit(null);
    } catch (err) {
      console.error(err);
      toast.error("Gagal memperbarui misi");
    }
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <DashVisiMisiSkeleton />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">
          Visi, Misi & Tujuan
        </h1>

        <p className="mt-2 text-muted-foreground">
          Kelola informasi visi, misi, dan tujuan Yayasan Tumbuhan Asli
          Nusantara.
        </p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2F6B45] to-[#4F8A5B] px-8 py-6">
          <h2 className="text-2xl font-semibold text-white">
            Informasi Organisasi
          </h2>

          <p className="mt-2 text-green-100 text-sm">
            Perbarui visi, misi, dan tujuan yang ditampilkan pada website.
          </p>
        </div>

        <CardContent className="space-y-8 p-8">
          <Card className="shadow-sm border">
            <CardHeader className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#1A4D2E]">Visi</h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Pernyataan visi organisasi yang ditampilkan pada website.
                </p>
              </div>

              {!editVisi ? (
                <Button
                  onClick={() => setEditVisi(true)}
                  variant="outline"
                  className="border-[#1A4D2E] text-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Ubah Visi
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleUpdateVisi();
                    setEditVisi(false);
                  }}
                  disabled={!isVisiChanged}
                  className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Simpan Perubahan
                </Button>
              )}
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label>Bahasa Indonesia</Label>

                <Textarea
                  value={visi?.visi_id || ""}
                  onChange={(e) =>
                    setVisi((prev) =>
                      prev
                        ? {
                            ...prev,
                            visi_id: e.target.value,
                          }
                        : null,
                    )
                  }
                  readOnly={!editVisi}
                  className="min-h-40 resize-none"
                />
              </div>
            </CardContent>
            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label>Bahasa Inggris</Label>

                <Textarea
                  value={visi?.visi_en || ""}
                  onChange={(e) =>
                    setVisi((prev) =>
                      prev
                        ? {
                            ...prev,
                            visi_en: e.target.value,
                          }
                        : null,
                    )
                  }
                  readOnly={!editVisi}
                  className="min-h-40 resize-none"
                />
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-sm border">
            <CardHeader className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#1A4D2E]">Misi</h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Daftar misi organisasi yang ditampilkan pada website.
                </p>
              </div>

              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-[#1A4D2E] hover:bg-[#2B6B45]">
                    <Plus className="mr-2 h-4 w-4" />
                    Tambah Misi
                  </Button>
                </DialogTrigger>

               
                <DialogContent className="sm:max-w-lg">
                  <DialogHeader>
                    <DialogTitle>Tambah Misi</DialogTitle>
                    <DialogDescription>
                      Tambahkan misi organisasi dalam Bahasa Indonesia dan
                      Bahasa Inggris.
                    </DialogDescription>
                  </DialogHeader>
                  <CreateMisi
                    onSuccess={() => {
                      getMission();
                    }}
                  />
                </DialogContent>
              </Dialog>
            </CardHeader>

            <CardContent className="space-y-5">
              {misi.map((misi) => (
                <Card key={misi.id} className="border bg-muted/20">
                  <CardContent className="pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <Label className="font-semibold">Misi</Label>

                        <div className="flex gap-2">
                          {edit !== misi.id ? (
                            <Button
                              size="icon"
                              variant="outline"
                              onClick={() => {
                                setEdit(misi.id);
                                setEditMisi({
                                  content_id: misi.content_id,
                                  content_en: misi.content_en,
                                });
                              }}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                          ) : (
                            <Button
                              size="sm"
                              disabled={!isMissionChanged(misi)}
                              className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
                              onClick={() => handleUpdateMisi(misi.id)}
                            >
                              Simpan
                            </Button>
                          )}

                          <DeleteMisi idCode={misi.id} onSuccess={getMission} />
                        </div>
                      </div>

                      <Textarea
                        value={
                          edit === misi.id
                            ? editMisi.content_id
                            : misi.content_id
                        }
                        readOnly={edit !== misi.id}
                        onChange={(e) =>
                          setEditMisi((prev) => ({
                            ...prev,
                            content_id: e.target.value,
                          }))
                        }
                        className="min-h-32 resize-none bg-white"
                      />
                      <Textarea
                        value={
                          edit === misi.id
                            ? editMisi.content_en
                            : misi.content_en
                        }
                        readOnly={edit !== misi.id}
                        onChange={(e) =>
                          setEditMisi((prev) => ({
                            ...prev,
                            content_en: e.target.value,
                          }))
                        }
                        className="min-h-32 resize-none bg-white"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>

          <Card className="shadow-sm border">
            <CardHeader className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <h3 className="text-xl font-semibold text-[#1A4D2E]">Tujuan</h3>

                <p className="text-sm text-muted-foreground mt-1">
                  Tujuan organisasi yang ditampilkan pada website.
                </p>
              </div>

              {!editTujuan ? (
                <Button
                  onClick={() => setEditTujuan(true)}
                  variant="outline"
                  className="border-[#1A4D2E] text-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Ubah Tujuan
                </Button>
              ) : (
                <Button
                  onClick={() => {
                    handleUpdateTujuan();
                    setEditTujuan(false);
                  }}
                  disabled={!isGoalChanged}
                  className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
                >
                  <Pencil className="mr-2 h-4 w-4" />
                  Simpan Perubahan
                </Button>
              )}
            </CardHeader>

            <CardContent className="space-y-6">
              <div className="grid gap-2">
                <Label>Bahasa Indonesia</Label>

                <Textarea
                  value={tujuan?.goal_id || ""}
                  onChange={(e) =>
                    setTujuan((prev) =>
                      prev
                        ? {
                            ...prev,
                            goal_id: e.target.value,
                          }
                        : null,
                    )
                  }
                  readOnly={!editTujuan}
                  className="min-h-48 resize-none"
                />
              </div>
              <div className="grid gap-2">
                <Label>English</Label>

                <Textarea
                  value={tujuan?.goal_en || ""}
                  onChange={(e) =>
                    setTujuan((prev) =>
                      prev
                        ? {
                            ...prev,
                            goal_en: e.target.value,
                          }
                        : null,
                    )
                  }
                  readOnly={!editTujuan}
                  className="min-h-48 resize-none"
                />
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default DashVisiMisiTjFeat;
