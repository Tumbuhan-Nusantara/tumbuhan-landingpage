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
import { ActivityDashType, PropsType } from "@/src/types";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DeleteActivity = ({ idCode, onSuccess }: PropsType) => {
  const [act, setAct] = useState<ActivityDashType | null>(null);
  useEffect(() => {
    const getActivity = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/activities/${id}`);
        const activity = response.data;
        setAct(activity);
      } catch (error) {
        throw error;
      }
    };
    getActivity(idCode);
  }, [idCode]);

  const handleDelete = async () => {
    if (!act) return;
    try {
      await axiosInstance.delete(`/api/v1/activities/${act.id}`);

      toast.warning("Kegiatan berhasil dihapus");

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

export default DeleteActivity;
