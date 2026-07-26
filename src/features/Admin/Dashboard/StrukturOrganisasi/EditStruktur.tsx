import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { axiosInstance } from "@/src/lib/axios";
import { PropsType, StrukturDashType } from "@/src/types";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditStruktur = ({ idCode, onSuccess }: PropsType) => {
  const [editStr, setEditStr] = useState<StrukturDashType | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [originalStr, setOriginalStr] = useState<StrukturDashType | null>(null);

  useEffect(() => {
    const getTeam = async (id: number) => {
      console.log(id)
      try {
        const response = await axiosInstance.get(`/api/v1/struktur/${id}`);
        setEditStr(response.data);
        console.log(response.data, "cek")
      } catch (error) {
        console.error(error);
        toast.error("Gagal mengambil data.");
      }
    };

    getTeam(idCode);
  }, [idCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditStr((prev) => {
      if (!prev) return null;

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setSelectedPhoto(file);
  };

  const handleUpdate = async () => {
    if (!editStr) return;

    try {
      const formData = new FormData();

      formData.append("position", editStr.position);
      formData.append("name", editStr.name);

      if (selectedPhoto) {
        formData.append("photo", selectedPhoto);
      }

      await axiosInstance.patch(`/api/v1/struktur/${editStr.id}`, formData);

      toast.success("Berhasil memperbarui struktur.");

      setSelectedPhoto(null);

      onSuccess();
    } catch (error) {
      console.error(error);
      toast.error("Gagal memperbarui struktur.");
    }
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
      <div className="space-y-2 md:col-span-2">
        <Label>Foto</Label>

        <Input type="file" accept="image/*" onChange={handleFileChange} />

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
