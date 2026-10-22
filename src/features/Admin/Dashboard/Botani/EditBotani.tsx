"use client";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { BotaniPropsType, BotaniType } from "@/src/types";
import Image from "next/image";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Textarea } from "@/src/components/ui/textarea";
import { useTranslations } from "next-intl";

const EditBotani = ({ botaniId }: BotaniPropsType) => {
  const b = useTranslations("dash");
  const [botani, setBotani] = useState<BotaniType | null>(null);
  const [selectedPhoto, setSelectedPhoto] = useState<File | null>(null);
  const [original, setOriginal] = useState<BotaniType | null>(null);

  const router = useRouter();

  useEffect(() => {
    console.log("botani:", botaniId);

  if (!botaniId) {
    console.error("ID botani tidak tersedia");
    return;
  }
    const getBotani = async (id: number) => {
      try {
        const response = await axiosInstance.get(`/api/v1/thumbnail/${id}`);
        const result = response.data;

        setBotani(result);
        setOriginal(result);
      } catch (error) {
        console.error("Gagal mengambil data botani:", error);
        toast.error("Gagal mengambil data botani");
      }
    };

    getBotani(botaniId);
  }, [botaniId]);

  const handleUpdate = async () => {
    if (!botani) return;

    try {
      const formData = new FormData();

      formData.append("title_in", botani.title_in);
      formData.append("title_en", botani.title_en);
      formData.append("descript_in", botani.descript_in);
      formData.append("descript_en", botani.descript_en);

      if (selectedPhoto) {
        formData.append("photo_url", selectedPhoto);
      }

      await axiosInstance.patch(`/api/v1/thumbnail/${botani.id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setOriginal(botani);
      setSelectedPhoto(null);
      toast.success("Berita berhasil diperbarui");
      router.push("/admin/dashboard/botani");
    } catch (err) {
      console.error(err);
      toast.error("Gagal memperbarui berita");
    }
  };
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setBotani((prev) => {
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

  const isChanged =
    !!botani &&
    !!original &&
    (botani.title_in !== original.title_in ||
      botani.title_en !== original.title_en ||
      botani.descript_in !== original.descript_in ||
      botani.descript_en !== original.descript_en ||
      selectedPhoto !== null);

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">
          {b("editBotaniTitle")}
        </h1>

        <p className="mt-2 text-muted-foreground">
          {b("editBotaniDescription")}
        </p>
      </div>

      <Card className="max-w-5xl overflow-hidden shadow-lg">
        <CardHeader className="border-b bg-muted/30">
          <CardTitle className="text-xl text-[#1A4D2E]">
            {b("editBotaniInfoTitle")}
          </CardTitle>

          <CardDescription>{b("editBotaniInfoDescription")}</CardDescription>
        </CardHeader>

        <CardContent className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>{b("title_in")}</Label>

              <Input
                name="title_in"
                value={botani?.title_in ?? ""}
                onChange={handleChange}
                placeholder={b("titlePlaceholder")}
              />
            </div>
            <div className="space-y-2">
              <Label>{b("title_en")}</Label>

              <Input
                name="title_en"
                value={botani?.title_en ?? ""}
                onChange={handleChange}
                placeholder={b("titleEnPlaceholder")}
              />
            </div>
            <div className="space-y-2">
              <Label>{b("descript_in")}</Label>

              <Textarea
                name="descript_in"
                value={botani?.descript_in ?? ""}
                onChange={handleChange}
                placeholder={b("descriptionPlaceholder")}
              />
            </div>
            <div className="space-y-2">
              <Label>{b("descript_en")}</Label>

              <Textarea
                name="descript_en"
                value={botani?.descript_en ?? ""}
                onChange={handleChange}
                placeholder={b("descriptionEnPlaceholder")}
              />
            </div>
            <div className="space-y-3 md:col-span-2">
              <Label>{b("photo_url")}</Label>

              <div className="rounded-xl border bg-muted/20 p-4">
                {botani?.photo_url ? (
                  <>
                    <Image
                      src={botani.photo_url}
                      alt={botani.title_in}
                      width={900}
                      height={600}
                      className="h-72 w-full rounded-lg object-cover"
                      unoptimized
                    />

                    <p className="mt-3 break-all text-xs text-muted-foreground">
                      {botani.photo_url.split("/").pop()}
                    </p>
                  </>
                ) : (
                  <div className="flex h-52 items-center justify-center rounded-lg border border-dashed">
                    <p className="text-sm text-muted-foreground">
                      Belum ada foto.
                    </p>
                  </div>
                )}
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>{b("changeBotaniPhoto")}</Label>

              <Input type="file" accept="image/*" onChange={handleFileChange} />

              <p className="text-xs text-muted-foreground">
                {b("changeBotaniPhotoDescription")}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="flex justify-end gap-3 border-t bg-muted/30 px-8 py-5">
          <Button variant="outline" onClick={() => router.back()}>
            {b("buttonNo")}
          </Button>

          <Button
            onClick={handleUpdate}
            disabled={!isChanged}
            className="bg-[#1A4D2E] hover:bg-[#2B6B45] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {b("buttonYes")}
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default EditBotani;
