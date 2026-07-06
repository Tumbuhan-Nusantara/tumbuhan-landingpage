"use client";
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
import { Button } from "@/components/ui/button";
import { Toaster } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import { MisiDashType, PropsType } from "@/src/types";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";


const DeleteMisi = ({ idCode, onSuccess }: PropsType) => {
  const [misi, setMisi] = useState<MisiDashType | null>(null);
  useEffect(() => {
    const getMisi = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/missions/${id}`);
        const person = response.data;
        setMisi(person);
      } catch (error) {
        throw error;
      }
    };
    getMisi(idCode);
  }, [idCode]);

  const handleDelete = async () => {
    if (!misi) return;
    try {
      await axiosInstance.delete(`/api/v1/missions/${misi.id}`);

      toast.warning("Misi berhasil dihapus");

      onSuccess();
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <Toaster position="top-center" richColors />
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <Button size="icon" variant="destructive">
            <Trash2 className="h-4 w-4" />
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
              onClick={handleDelete}
              className="bg-red-700 hover:bg-red-500"
            >
              Hapus
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
};

export default DeleteMisi;