
"use client";

import { Button } from "@/src/components/ui/button";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { axiosInstance } from "@/src/lib/axios";
import { PropsType, SocmedType } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const EditSocmed = ({ idCode, onSuccess }: PropsType) => {
  const p = useTranslations("dash");

  const [soc, setSoc] = useState<SocmedType | null>(null);
  const [originalSocmed, setOriginalSocmed] =
    useState<SocmedType | null>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const getSocmed = async () => {
      setLoading(true);

      try {
        const response = await axiosInstance.get(
          `/api/v1/socmed/${idCode}`
        );

        const media: SocmedType = response.data.data;

        setSoc(media);
        setOriginalSocmed(media);
      } catch (error) {
        console.error(error);
        toast.error("Gagal mengambil data media sosial");
      } finally {
        setLoading(false);
      }
    };

    getSocmed();
  }, [idCode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setSoc((prev) => {
      if (!prev) return prev;

      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const isChanged =
    !!soc &&
    !!originalSocmed &&
    (soc.name !== originalSocmed.name ||
      soc.url !== originalSocmed.url);

  const handleUpdate = async () => {
    if (!soc || !isChanged) return;

    setSaving(true);

    try {
      await axiosInstance.patch(`/api/v1/socmed/${soc.id}`, {
        name: soc.name,
        url: soc.url,
      });

      setOriginalSocmed({ ...soc });

      toast.success("Data berhasil diperbarui");
      onSuccess();
    } catch (error) {
      console.error(error);
      toast.error("Gagal memperbarui data");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return <div className="py-6 text-center">Memuat data...</div>;
  }

  if (!soc) {
    return (
      <div className="py-6 text-center text-gray-500">
        Data media sosial tidak ditemukan.
      </div>
    );
  }

  return (
    <div className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="name">{p("socmedForm1")}</Label>
        <Input
          id="name"
          name="name"
          value={soc.name ?? ""}
          onChange={handleChange}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="url">{p("socmedForm2")}</Label>
        <Input
          id="url"
          name="url"
          value={soc.url ?? ""}
          onChange={handleChange}
        />
      </div>

      <div className="flex justify-end border-t pt-2">
        <Button
          onClick={handleUpdate}
          disabled={!isChanged || saving}
          className="bg-[#1A4D2E] hover:bg-[#2B6B45] disabled:cursor-not-allowed disabled:opacity-50"
        >
          {saving ? "Menyimpan..." : p("saveChanges")}
        </Button>
      </div>
    </div>
  );
};

export default EditSocmed;