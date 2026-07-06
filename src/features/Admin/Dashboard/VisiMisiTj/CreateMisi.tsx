import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/sonner";
import { axiosInstance } from "@/lib/axios";
import React, { useState } from "react";
import { toast } from "sonner";

const CreateMisi = () => {
  const [misi, setMisi] = useState({
    content: "",
  });

  const createMisi = async () => {
    if (!misi.content.trim()) {
      toast.error("Field tidak boleh kosong");
      return;
    }
    try {
      await axiosInstance.post("/api/v1/missions/create", misi);

      toast.success("Misi berhasil dibuat");

      setMisi({
        content: "",
      });
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
    <div>
      <Toaster position="top-center" richColors />
      <div className="grid gap-2">
        <Label>Misi</Label>
        <Input
          type="text"
          name="content"
          id="content"
          autoComplete="content"
          value={misi.content}
          onChange={handleChange}
          required
        />
        <Button
          onClick={createMisi}
          size="sm"
          className="bg-[#1A4D2E] hover:bg-[#3f8159 cursor-pointer"
        >
          Buat
        </Button>
      </div>
    </div>
  );
};

export default CreateMisi;
