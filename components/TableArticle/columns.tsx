"use client"

import { CreateArticleDashType } from "@/src/types"
import { ColumnDef } from "@tanstack/react-table"

export const columns: ColumnDef<CreateArticleDashType>[] = [
  {
    accessorKey: "judul",
    header: "Judul",
  },
  {
    accessorKey: "doi",
    header: "Penulis",
  },
  {
    accessorKey: "tahun",
    header: "Tahun",
  },
  {
    accessorKey: "link",
    header: "DOI/ Link Artikel",
  },
  {
    accessorKey: "volume",
    header: "Nama Jurnal / Volume",
  },
]