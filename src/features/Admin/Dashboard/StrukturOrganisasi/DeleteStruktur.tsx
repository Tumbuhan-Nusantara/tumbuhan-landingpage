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
} from "@/src/components/ui/alert-dialog";
import { Button } from "@/src/components/ui/button";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { PropsType, StrukturDashType } from "@/src/types";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DeleteStruktur = ({ idCode, onSuccess }: PropsType) => {
  const [struktur, setStruktur] = useState<StrukturDashType | null>(null);
  useEffect(() => {
    const getStruktur = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/struktur/${id}`);
        const person = response.data;
        setStruktur(person);
      } catch (error) {
        throw error;
      }
    };
    getStruktur(idCode);
  }, [idCode]);

  const handleDelete = async () => {
    if (!struktur) return;
    try {
      await axiosInstance.delete(`/api/v1/struktur/${struktur.id}`);

      toast.warning("Struktur berhasil dihapus");

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

export default DeleteStruktur;
