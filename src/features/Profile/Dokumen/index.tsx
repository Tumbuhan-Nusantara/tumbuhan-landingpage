"use client";

import Nav from "@/components/Navbar-2";
import FooterFeat from "@/components/Footer";

import { useEffect, useMemo, useState } from "react";

import { Search, ExternalLink, File } from "lucide-react";

import Link from "next/link";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { DokumenLandingPageType } from "@/src/types";
import { axiosInstance } from "@/lib/axios";


export default function DokumenPage() {
  const [search, setSearch] = useState("");
  const [doc, setDoc] = useState<DokumenLandingPageType[]>([])

  const getDoc = async() => {
    try {
      const response = await axiosInstance.get(`/api/v1/dokumen`)
      setDoc(response.data.data)
      console.log(response.data.data, "cek")
    } catch (error) {
      throw error
    }
  }

  const filteredDocuments = useMemo(() => {
    return doc.filter(
      (item) =>
        item.name_doc.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase()),
    );
  }, [doc, search]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getDoc()
  },[])

  return (
    <>
        <div className="container mx-auto px-6 pt-20 text-center text-white">
          <div
            className="text-center"
            data-aos="fade-up"
            data-aos-duration="900"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A4D2E]">
              Dokumen
            </h1>

            <div className="w-24 h-1 bg-[#2B593A] rounded-full mx-auto mt-4" />
          </div>
        </div>

      <section className="container mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row gap-5 justify-between mb-10">
          <div className="relative w-full md:max-w-md">
            <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />

            <Input
              className="rounded-full pl-11 h-12"
              placeholder="Cari dokumen..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <p className="self-center text-muted-foreground">
            {filteredDocuments.length} Dokumen
          </p>
        </div>

        <div className="hidden lg:block overflow-hidden rounded-xl border shadow-sm">
          <Table>
            <TableHeader className="bg-[#F5F8F6]">
              <TableRow>
                <TableHead className="w-24">File</TableHead>

                <TableHead>Nama Dokumen</TableHead>

                <TableHead>Ringkasan</TableHead>


                <TableHead className="text-center w-48">Aksi</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {filteredDocuments.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-20">
                    Tidak ada dokumen ditemukan.
                  </TableCell>
                </TableRow>
              ) : (
                filteredDocuments.map((doc) => (
                  <TableRow key={doc.id}>
                    <TableCell>
                      <File />
                    </TableCell>

                    <TableCell className="font-medium">
                      {doc.name_doc}
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      {doc.summary}
                    </TableCell>


                    <TableCell>
                      <div className="flex justify-center">
                        <Button
                          asChild
                          className="bg-[#1A4D2E] hover:bg-[#2B593A]"
                        >
                          <Link href={doc.link} target="_blank">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Buka Dokumen
                          </Link>
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </div>

        {/* MOBILE */}

        <div className="space-y-6 lg:hidden">
          {filteredDocuments.map((doc) => (
            <Card key={doc.id}>
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <File />

                  <div className="flex-1">
                    <h2 className="font-semibold text-[#1A4D2E]">
                      {doc.name_doc}
                    </h2>

                    <p className="text-sm text-muted-foreground mt-2">
                      {doc.summary}
                    </p>

                    
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full mt-6 bg-[#1A4D2E] hover:bg-[#2B593A]"
                >
                  <Link href={doc.link} target="_blank">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Buka Dokumen
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </>
  );
}
