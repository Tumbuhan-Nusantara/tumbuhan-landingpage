"use client";
import { columns } from "@/src/components/Data Table/botanicolumns";
import { DataTable } from "@/src/components/Data Table/data-table";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { Textarea } from "@/src/components/ui/textarea";
import { axiosInstance } from "@/src/lib/axios";
import { BotaniType, CreateBotaniType } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { toast } from "sonner";

const BotaniDashFeat = () => {
  const b = useTranslations("dash");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [botani, setBotani] = useState<BotaniType[]>([]);
  const getBotaniData = async () => {
    try {
      const resp = await axiosInstance.get(`/api/v1/thumbnail`);
      const result = resp.data.data;

      setBotani(result);
    } catch (error) {
      throw error;
    }
  };
  const [formData, setFormData] = useState<CreateBotaniType>({
    title_in: "",
    title_en: "",
    descript_in: "",
    descript_en: "",
    photo_url: null,
  });
  const createBotani = async () => {
    try {
      const data = new FormData();

      data.append("title_in", formData.title_in);
      data.append("title_en", formData.title_en);
      data.append("descript_in", formData.descript_in);
      data.append("descript_en", formData.descript_en);

      if (formData.photo_url) {
        data.append("photo_url", formData.photo_url);
      }

      const response = await axiosInstance.post(
        "/api/v1/thumbnail/create",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        },
      );
      await getBotaniData();

      toast.success("Berhasil ditambahkan");

      setFormData({
        title_in: "",
        title_en: "",
        descript_in: "",
        descript_en: "",
        photo_url: null,
      });
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setFormData((prev) => ({
      ...prev,
      photo_url: file,
    }));
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getBotaniData()
  }, [])
  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">
          {b("titleBotani")}
        </h1>

        <p className="mt-2 text-muted-foreground">{b("descriptionBotani")}</p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2B6B45] to-[#4F8A5B] px-8 py-6">
          <h2 className="text-2xl font-semibold text-white">
            {b("addTitleBotani")}
          </h2>

          <p className="mt-2 text-sm text-green-100">
            {b("addDescriptionBotani")}
          </p>
        </div>

        <CardContent className="p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-2">
              <Label>{b("title_in")}</Label>

              <Input
                name="title_in"
                value={formData.title_in}
                onChange={handleChange}
                placeholder={b("titlePlaceholder")}
              />
            </div>

            <div className="space-y-2">
              <Label>{b("title_en")}</Label>

              <Input
                name="title_en"
                value={formData.title_en ?? ""}
                onChange={handleChange}
                placeholder={b("titleEnPlaceholder")}
              />
            </div>


            <div className="space-y-2 md:col-span-2">
              <Label>{b("descript_in")}</Label>

              <Textarea
                rows={6}
                name="descript_in"
                value={formData.descript_in}
                onChange={handleChange}
                placeholder={b("descriptionPlaceholder")}
              />
            </div>
            <div className="space-y-2 md:col-span-2">
              <Label>{b("descript_en")}</Label>

              <Textarea
                rows={6}
                name="descript_en"
                value={formData.descript_en}
                onChange={handleChange}
                placeholder={b("descriptionEnPlaceholder")}
              />
            </div>

            <div className="space-y-2 md:col-span-2">
              <Label>{b("photo_url")}</Label>

              <Input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
              />

              <p className="text-xs text-muted-foreground">
                {b("supportedImageFormats")}
              </p>
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-end border-t bg-muted/30 px-8 py-4">
          <Button
            onClick={createBotani}
            className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
          >
            {b("submit")}
          </Button>
        </CardFooter>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#1A4D2E]">{b("listTitleBotani")}</CardTitle>

          <CardDescription>{b("listDescriptionBotani")}</CardDescription>
        </CardHeader>

        <CardContent>
          <DataTable columns={columns(getBotaniData)} data={botani} />
        </CardContent>
      </Card>
    </div>
  );
};

export default BotaniDashFeat;
