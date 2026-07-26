import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Button } from "@/src/components/ui/button";
import { axiosInstance } from "@/src/lib/axios";
import { CreateStrukturDashType } from "@/src/types";
import { useRef, useState } from "react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";

interface Props {
  onSuccess: () => void;
}

const CreateStruktur = ({ onSuccess }: Props) => {
  const s = useTranslations("dash");

  //  const [formData, setFormData] = useState<CreateNewsDashType>({
  //     news_name: "",
  //     deskripsi: "",
  //     tanggal_berita: "",
  //     tempat: "",
  //     photo_url: null,
  //     video_link: "",
  //   });
  //   const createNews = async () => {
  //     try {
  //       const data = new FormData();

  //       data.append("news_name", formData.news_name);
  //       data.append("deskripsi", formData.deskripsi);
  //       data.append("tanggal_berita", formData.tanggal_berita);
  //       data.append("tempat", formData.tempat);
  //       data.append("video_link", formData.video_link);

  //       if (formData.photo_url) {
  //         data.append("photo_url", formData.photo_url);
  //       }

  //       const response = await axiosInstance.post("/api/v1/news/create", data, {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //         },
  //       });
  //       await getNews();

  //       toast.success("Berhasil ditambahkan");

  //       setFormData({
  //         news_name: "",
  //         deskripsi: "",
  //         tanggal_berita: "",
  //         tempat: "",
  //         photo_url: null,
  //         video_link: "",
  //       });
  //       if (fileInputRef.current) {
  //         fileInputRef.current.value = "";
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   const handleChange = (
  //     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  //   ) => {
  //     const { name, value } = e.target;

  //     setFormData((prev) => ({
  //       ...prev,
  //       [name]: value,
  //     }));
  //   };

  //   const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     const file = e.target.files?.[0];

  //     if (!file) return;

  //     setFormData((prev) => ({
  //       ...prev,
  //       photo_url: file,
  //     }));
  //   };
  const [add, setAdd] = useState<CreateStrukturDashType>({
    position: "",
    name: "",
    photo: null,
  });
  const fileInputRef = useRef<HTMLInputElement>(null);

  const createNew = async () => {
    try {
      const data = new FormData();

      data.append("position", add.position);
      data.append("name", add.name);
      if (add.photo) {
        data.append("photo", add.photo);
      }

      await axiosInstance.post("/api/v1/struktur/create", data);
      toast.success("Berhasil");

      setAdd({
        position: "",
        name: "",
        photo: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
      onSuccess();
    } catch (error) {
      console.error(error);
      toast.error("Gagal menambah posisi");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setAdd((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setAdd((prev) => ({
      ...prev,
      photo: file,
    }));
  };

  const isFormValid =
    add.position.trim() !== "" && add.name.trim() !== "" && add.photo !== null;
  return (
    <div className="space-y-4">
      <div className="grid gap-2">
        <Label>{s("strukturPosisi")}</Label>
        <Input
          className="text-sm"
          name="position"
          type="text"
          value={add.position}
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-2">
        <Label>{s("strukturNama")}</Label>
        <Input
          className="text-sm"
          name="name"
          type="text"
          value={add.name}
          onChange={handleChange}
        />
      </div>
      <div className="grid gap-2">
        <Label>Photo</Label>
        <Input
          ref={fileInputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
        />

        <p className="text-xs text-muted-foreground">
          Format yang didukung: JPG, JPEG, PNG.
        </p>
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
