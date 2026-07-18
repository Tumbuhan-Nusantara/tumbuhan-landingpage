"use client";

import { StrukturDashType } from "@/src/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Eye, Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EditStruktur from "@/src/features/Admin/Dashboard/StrukturOrganisasi/EditStruktur";
import DeleteStruktur from "@/src/features/Admin/Dashboard/StrukturOrganisasi/DeleteStruktur";


export const columns = (
  onSuccess: () => void,
): ColumnDef<StrukturDashType>[] => [
  {
    accessorKey: "position",
    header: () => <div className="text-left">Posisi</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("position")}</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Nama</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const struktur = row.original;
      return (
        <div className="flex justify-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="secondary">
                <Pencil className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-gray-500 text-md">
                  Edit Struktur
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Artikel">
                    <EditStruktur idCode={struktur.id} onSuccess={onSuccess}/>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div>
            <DeleteStruktur idCode={struktur.id} onSuccess={onSuccess} />
          </div>
        </div>
      );
    },
  },
];
