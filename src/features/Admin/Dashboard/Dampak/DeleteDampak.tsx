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
import {  DampakLandingPageType, PropsType } from "@/src/types";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DeleteDampak = ({ idCode, onSuccess }: PropsType) => {
  const [dam, setDam] = useState<DampakLandingPageType | null>(null);
  useEffect(() => {
    const getDampak = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/dampak/${id}`);
        const dampak = response.data;
        setDam(dampak);
      } catch (error) {
        throw error;
      }
    };
    getDampak(idCode);
  }, [idCode]);

  const handleDelete = async () => {
    if (!dam) return;
    try {
      await axiosInstance.delete(`/api/v1/dampak/${dam.id}`);

      toast.warning("Data berhasil dihapus");

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

export default DeleteDampak;
