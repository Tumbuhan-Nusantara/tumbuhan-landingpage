import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { axiosInstance } from "@/src/lib/axios";
import { CreateStrukturDashType } from "@/src/types";
import { useState } from "react";
import { toast } from "sonner";

interface Props {
  onSuccess: () => void;
}

const CreateStruktur = ({ onSuccess }: Props) => {
  const [add, setAdd] = useState<CreateStrukturDashType>({
    position: "",
    name: "",
  });

  const createNew = async () => {
    try {
      await axiosInstance.post("/api/v1/struktur/create", add);
      toast.success("Berhasil");

      setAdd({
        position: "",
        name: "",
      });
      onSuccess();
    } catch (error) {
      console.error(error);
      toast.error("Gagal menambah posisi");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setAdd((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const isFormValid = add.position.trim() !== "" && add.name.trim() !== "";
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label>Posisi</Label>
        <Input
          className="text-sm"
          name="position"
          type="text"
          value={add.position}
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-2">
        <Label>Nama</Label>
        <Input
          className="text-sm"
          name="name"
          type="text"
          value={add.name}
          onChange={handleChange}
        />
      </div>
      <Button
        onClick={createNew}
        disabled={!isFormValid}
        size="sm"
        className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer mt-6"
      >
        Simpan Perubahan
      </Button>
    </div>
  );
};

export default CreateStruktur;
