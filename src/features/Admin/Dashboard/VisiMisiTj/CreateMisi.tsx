import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import React, { useState } from "react";
import { toast } from "sonner";

interface Props {
  onSuccess: () => void;
}

const CreateMisi = ({ onSuccess }: Props) => {
  const [misi, setMisi] = useState({
    content_id: "",
    content_en: "",
  });

  const createMisi = async () => {
    if (!misi.content_id.trim()) {
      toast.error("Field tidak boleh kosong");
      return;
    }
    if (!misi.content_en.trim()) {
      toast.error("Field tidak boleh kosong");
      return;
    }
    try {
      await axiosInstance.post("/api/v1/missions/create", misi);

      toast.success("Misi berhasil dibuat");

      setMisi({
        content_id: "",
        content_en: "",
      });
      onSuccess();
    } catch (err) {
      console.error(err);
      toast.error("Gagal menambah misi");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setMisi((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="space-y-5">

      <div className="space-y-2">
        <Label htmlFor="content_id">Misi (Bahasa Indonesia)</Label>
        <Input
          id="content_id"
          name="content_id"
          value={misi.content_id}
          onChange={handleChange}
          placeholder="Masukkan misi dalam Bahasa Indonesia"
          autoComplete="off"
          required
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="content_en">Mission (English)</Label>
        <Input
          id="content_en"
          name="content_en"
          value={misi.content_en}
          onChange={handleChange}
          placeholder="Enter mission in English"
          autoComplete="off"
          required
        />
      </div>

      <div className="flex justify-end pt-2">
        <Button
          onClick={createMisi}
          className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
        >
          Buat Misi
        </Button>
      </div>
    </div>
  );
};

export default CreateMisi;
