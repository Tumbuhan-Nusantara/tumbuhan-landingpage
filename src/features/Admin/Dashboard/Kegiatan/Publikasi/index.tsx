"use client";
import { columns } from "@/src/components/Data Table/articlecolumns";
import { DataTable } from "@/src/components/Data Table/data-table";
import FormSkeleton from "@/src/components/Skeletons/FormSk";
import { Button } from "@/src/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { axiosInstance } from "@/src/lib/axios";
import { ArticleDashType, CreateArticleDashType } from "@/src/types";
import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const DashPublikasiFeat = () => {
  const p = useTranslations("dash");
  const [formData, setFormData] = useState<CreateArticleDashType>({
    judul: "",
    doi: "",
    tahun: null,
    volume: "",
    link: "",
  });
  const [articles, setArticles] = useState<ArticleDashType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const createArticle = async () => {
    try {
      const response = await axiosInstance.post(
        "/api/v1/articles/create",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      );
      const result = response.data;
      setFormData(result);
      console.log("hasil post article", result);

      toast.success("Berhasil ditambahkan");

      setFormData({
        judul: "",
        doi: "",
        tahun: null,
        volume: "",
        link: "",
      });
      await getDataArticle();
    } catch (error) {
      throw error;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "tahun" ? (value === "" ? null : Number(value)) : value,
    }));
  };

  const getDataArticle = async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(`/api/v1/articles`);
      const data = response.data.data;
      setArticles(data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getDataArticle();
  }, []);

  if (loading) {
    return (
      <div className="p-8">
        <FormSkeleton />
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-[#1A4D2E]">{p("publikasi")}</h1>
        <p className="mt-2 text-muted-foreground">{p("publikasidesc")}</p>
      </div>

      <Card className="overflow-hidden border-0 shadow-lg">
        <div className="bg-linear-to-r from-[#1A4D2E] via-[#2B6B45] to-[#4F8A5B] px-8 py-6">
          <h2 className="text-2xl font-semibold text-white">
            {p("publikasiForm")}
          </h2>
          <p className="mt-2 text-sm text-green-100">
            {p("publikasiFormDesc")}
          </p>
        </div>
        <CardContent className="p-8">
          <div className="grid gap-6">
            <div className="grid gap-2">
              <Label>{p('publikasiForm1')}</Label>
              <Input
                name="judul"
                value={formData.judul}
                onChange={handleChange}
                placeholder="Masukkan judul artikel"
              />
            </div>

            <div className="grid gap-2">
              <Label>{p('publikasiForm2')}</Label>
              <Input
                name="doi"
                value={formData.doi}
                onChange={handleChange}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="grid gap-2">
                <Label>{p('publikasiForm3')}</Label>
                <Input
                  type="number"
                  name="tahun"
                  value={formData.tahun ?? ""}
                  onChange={handleChange}
                  placeholder="2026"
                />
              </div>

              <div className="grid gap-2">
                <Label>DOI / Link Artikel</Label>
                <Input
                  name="link"
                  value={formData.link}
                  onChange={handleChange}
                  placeholder="https://doi.org/..."
                />
              </div>
            </div>

            <div className="grid gap-2">
              <Label>{p('publikasiForm4')}</Label>
              <Input
                name="volume"
                value={formData.volume}
                onChange={handleChange}
                placeholder="Tropical Conservation Science, Vol. 19 (2026)"
              />
            </div>
          </div>
        </CardContent>

        <CardFooter className="justify-end border-t bg-muted/30 px-8 py-4">
          <Button
            onClick={createArticle}
            className="bg-[#1A4D2E] hover:bg-[#2B6B45]"
          >
            {p('publikasiButton')}
          </Button>
        </CardFooter>
      </Card>

      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-[#1A4D2E]">{p("publikasiList")}</CardTitle>
          <CardDescription>{p("publikasiListDesc")}</CardDescription>
        </CardHeader>

        <CardContent>
          <DataTable columns={columns(getDataArticle, p)} data={articles} />
        </CardContent>
      </Card>
    </div>
  );
};

export default DashPublikasiFeat;
