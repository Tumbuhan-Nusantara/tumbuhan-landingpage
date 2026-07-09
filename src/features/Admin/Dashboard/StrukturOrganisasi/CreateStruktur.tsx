import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { axiosInstance } from "@/lib/axios";
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
  console.log("cek add", add)

  const createNew = async () => {
    try {
      await axiosInstance.post("/api/v1/struktur/create", add);
      toast.success("Berhasil");

      setAdd({
        position: "",
        name: "",
      });
      onSuccess()
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
        size="sm"
        className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer mt-6"
      >
        Simpan Perubahan
      </Button>
    </div>
  );
};

export default CreateStruktur;
