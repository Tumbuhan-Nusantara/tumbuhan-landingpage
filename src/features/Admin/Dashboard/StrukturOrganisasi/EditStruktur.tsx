import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { axiosInstance } from "@/src/lib/axios";
import { PropsType, StrukturDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditStruktur = ({ idCode, onSuccess }: PropsType) => {
  const [editStr, setEditStr] = useState<StrukturDashType | null>(null);
  useEffect(() => {
    const getTeam = async (id: number) => {
      console.log(id);
      try {
        const response = await axiosInstance.get(`/api/v1/struktur/${id}`);
        setEditStr({
          ...response.data,
        });
      } catch (error) {
        throw error;
      }
    };
    getTeam(idCode);
  }, [idCode]);

  const handleUpdate = async () => {
    if (!editStr) return;

    try {
      await axiosInstance.put(`/api/v1/struktur/${editStr.id}`, {
        position: editStr.position,
        name: editStr.name,
      });

      toast.success("Data Struktur berhasil diperbarui");
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Gagal memperbarui struktur");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setEditStr((prev) => {
      if (!prev) return null;

      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label>Posisi</Label>
        <Input
          className="text-sm"
          name="position"
          type="text"
          value={editStr?.position ?? ""}
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-2">
        <Label>Nama</Label>
        <Input
          className="text-sm"
          name="name"
          type="text"
          value={editStr?.name ?? ""}
          onChange={handleChange}
        />
      </div>
      <Button
        onClick={handleUpdate}
        size="sm"
        className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer mt-6"
      >
        Simpan Perubahan
      </Button>
    </div>
  );
};

export default EditStruktur;
