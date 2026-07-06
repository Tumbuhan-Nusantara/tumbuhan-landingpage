"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
} from "@/components/ui/alert-dialog";
import { Pencil, PencilLine, Plus, Trash2 } from "lucide-react";
import { DashMisiItem } from "@/src/constants";
import { Separator } from "@/components/ui/separator";
import { useEffect, useState } from "react";
import { VisiType } from "@/src/types";
import { axiosInstance } from "@/lib/axios";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

const DashVisiFeat = () => {
  const [visi, setVisi] = useState<VisiType | null>(null);
  const getVisi = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/vission`);
      setVisi(response.data.data[0]);
    } catch (error) {
      console.log(error);
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

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getVisi();
  }, []);

  return (
    <div className="p-8">
      <Toaster position="top-center" richColors />
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Visi, Misi & Tujuan
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <h1 className=" text-[#1A4D2E] font-semibold mx-6">
          Kelola informasi Visi, Misi, dan Tujuan
        </h1>
        <Card className="max-w-4xl m-4 ">
          <CardContent className="grid gap-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Visi</Label>
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
              </div>
              <Button onClick={handleUpdateVisi} variant="secondary" >
                Simpan Perubahan Visi <Pencil className="h-4 w-4" />
              </Button>
            </div>

            <div className="space-y-4">
              <div className="grid gap-2">
                <div className="flex justify-between items-center">
                  <Label>Misi</Label>
                  <Button className="flex items-center bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer">
                    <Plus />
                    Tambah Misi
                  </Button>
                </div>

                <Card>
                  <div>
                    {DashMisiItem.map((misi) => (
                      <div key={misi.id}>
                        <div className="flex items-center justify-between mx-2">
                          <p className="w-2xl">{misi.misi}</p>
                          <div className="flex items-center gap-2">
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button size="icon" variant="secondary">
                                  <Pencil className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle className="text-red-700">
                                    Apakah Anda yakin?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Tindakan ini tidak dapat dibatalkan.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Batal</AlertDialogCancel>
                                  <AlertDialogAction
                                    // onClick={() => onDelete(userId)}
                                    className="bg-red-700 hover:bg-red-500"
                                  >
                                    Hapus
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button className="bg-red-700 hover:bg-red-500">
                                  <Trash2 />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent>
                                <AlertDialogHeader>
                                  <AlertDialogTitle className="text-red-700">
                                    Apakah Anda yakin?
                                  </AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Tindakan ini tidak dapat dibatalkan.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Batal</AlertDialogCancel>
                                  <AlertDialogAction
                                    // onClick={() => onDelete(userId)}
                                    className="bg-red-700 hover:bg-red-500"
                                  >
                                    Hapus
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </div>
                        </div>
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Tujuan</Label>
                <Textarea />
              </div>
            </div>
          </CardContent>

          <CardFooter className="justify-end">
            <Button className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer">
              Simpan Perubahan
            </Button>
          </CardFooter>
        </Card>
      </Card>
    </div>
  );
};

export default DashVisiFeat;
