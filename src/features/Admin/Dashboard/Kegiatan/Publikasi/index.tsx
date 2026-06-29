"use client";
import { columns } from "@/components/TableArticle/columns";
import { DataTable } from "@/components/TableArticle/data-table";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { axiosInstance } from "@/lib/axios";
import { CreateArticleDashType } from "@/src/types";
import { useEffect, useState } from "react";

const DashPublikasiFeat = () => {
  const [formData, setFormData] = useState<CreateArticleDashType>({
    judul: "",
    doi: "",
    tahun: null,
    volume: "",
    link: "",
  });
  const [articles, setArticles] = useState<CreateArticleDashType[]>([]);

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
      setFormData({
        judul: "",
        doi: "",
        tahun: null,
        volume: "",
        link: "",
      });
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

  useEffect(() => {
    const getDataArticle = async () => {
      try {
        const response = await axiosInstance.get(`/api/v1/articles`);
        const data = response.data.data;
        setArticles(data);
        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    getDataArticle();
  }, []);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Publikasi Ilmiah
      </h1>
      <div>
        <Card className="bg-[url('/image.png')] bg-cover">
          <h1 className="mx-6 text-[#1A4D2E] font-semibold">
            Tambah Publikasi Ilmiah Terbaru
          </h1>
          <Card className="max-w-4xl mx-4">
            <CardContent className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Judul Artikel</Label>
                  <Input
                    type="text"
                    name="judul"
                    id="judul"
                    autoComplete="judul"
                    value={formData.judul}
                    onChange={handleChange}
                    placeholder="Judul Artikel"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Penulis</Label>
                  <Input
                    type="text"
                    name="doi"
                    id="doi"
                    autoComplete="doi"
                    value={formData.doi}
                    onChange={handleChange}
                    placeholder="*)Contoh penulisan (Nama, Nama, Nama, dst)"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Tahun</Label>
                  <Input
                    type="number"
                    name="tahun"
                    id="tahun"
                    value={formData.tahun ?? ""}
                    onChange={handleChange}
                    placeholder="Tahun"
                    required
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>DOI/ Link Artikel</Label>
                  <Input
                    type="text"
                    name="link"
                    id="link"
                    autoComplete="link"
                    value={formData.link}
                    onChange={handleChange}
                    placeholder="DOI/ Link Artikel"
                    required
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Nama Jurnal dan Volume</Label>
                  <Input
                    type="text"
                    name="volume"
                    id="volume"
                    autoComplete="volume"
                    value={formData.volume}
                    onChange={handleChange}
                    placeholder="*)Contoh penulisan (Tropical Conservation Science. 2026:
                      art. 19)"
                    required
                  />
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-end">
              <Button
                onClick={createArticle}
                className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer"
              >
                Tambah Artikel
              </Button>
            </CardFooter>
          </Card>
          <div className="max-w-4xl my-4">
            <h1 className="mx-6 text-[#1A4D2E] font-semibold">
            Kelola Publikasi Ilmiah Terbaru
          </h1>
            <DataTable columns={columns} data={articles} />
          </div>
        </Card>
      </div>
    </div>
  );
};

export default DashPublikasiFeat;
