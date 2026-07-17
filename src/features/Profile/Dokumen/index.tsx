"use client";

import Nav from "@/components/Navbar-2";
import FooterFeat from "@/components/Footer";

import { useMemo, useState } from "react";

import { Search, ExternalLink, File } from "lucide-react";

import Image from "next/image";
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

import { formatDateID } from "@/lib/dateHelper";

const documents = [
  {
    id: 1,
    document_name: "Laporan Tahunan Yayasan 2025",
    summary:
      "Laporan kegiatan, pencapaian, serta perkembangan Yayasan Tumbuhan Asli Nusantara selama tahun 2025.",
    drive_url: "#",
    created_at: "2026-01-10",
  },
  {
    id: 2,
    document_name: "Proposal Konservasi Flora Sulawesi",
    summary:
      "Proposal kegiatan konservasi tumbuhan endemik Sulawesi bersama berbagai mitra penelitian.",
    drive_url: "#",
    created_at: "2026-02-18",
  },
  {
    id: 3,
    document_name: "Laporan Ekspedisi Lore Lindu",
    summary:
      "Dokumentasi penelitian lapangan dan eksplorasi flora di Taman Nasional Lore Lindu.",
    drive_url: "#",
    created_at: "2026-03-08",
  },
  {
    id: 4,
    document_name: "Panduan Identifikasi Tumbuhan",
    summary:
      "Panduan identifikasi tumbuhan asli Indonesia untuk kegiatan edukasi dan penelitian.",
    drive_url: "#",
    created_at: "2026-04-21",
  },
  {
    id: 5,
    document_name: "Laporan Keuangan Semester I",
    summary:
      "Laporan keuangan Yayasan Tumbuhan Asli Nusantara Semester I Tahun 2026.",
    drive_url: "#",
    created_at: "2026-06-30",
  },
];

export default function DokumenPage() {
  const [search, setSearch] = useState("");

  const filteredDocuments = useMemo(() => {
    return documents.filter(
      (item) =>
        item.document_name.toLowerCase().includes(search.toLowerCase()) ||
        item.summary.toLowerCase().includes(search.toLowerCase()),
    );
  }, [search]);

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

                <TableHead className="w-40">Tanggal</TableHead>

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
                      {doc.document_name}
                    </TableCell>

                    <TableCell className="text-muted-foreground">
                      {doc.summary}
                    </TableCell>

                    <TableCell>{formatDateID(doc.created_at)}</TableCell>

                    <TableCell>
                      <div className="flex justify-center">
                        <Button
                          asChild
                          className="bg-[#1A4D2E] hover:bg-[#2B593A]"
                        >
                          <Link href={doc.drive_url} target="_blank">
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
                      {doc.document_name}
                    </h2>

                    <p className="text-sm text-muted-foreground mt-2">
                      {doc.summary}
                    </p>

                    <p className="text-xs mt-3 text-gray-500">
                      {formatDateID(doc.created_at)}
                    </p>
                  </div>
                </div>

                <Button
                  asChild
                  className="w-full mt-6 bg-[#1A4D2E] hover:bg-[#2B593A]"
                >
                  <Link href={doc.drive_url} target="_blank">
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
