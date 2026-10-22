"use client";

import { SocmedType } from "@/src/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Eye, Pencil } from "lucide-react";
import { useRouter } from "@/src/i18n/navigation";
import DeleteDampak from "@/src/features/Admin/Dashboard/Dampak/DeleteDampak";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import EditSocmed from "@/src/features/Admin/Dashboard/Socmed/EditSocmed";
import DetailSocmed from "@/src/features/Admin/Dashboard/Socmed/DetailSocmed";

export const columns = (
  onSuccess: () => void,
): ColumnDef<SocmedType>[] => [
  {
    accessorKey: "name",
    header: () => (
      <div className="text-left">Nama Sosial Media</div>
    ),
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("name")}</div>
    ),
  },
  {
    accessorKey: "url",
    header: () => <div className="text-left">URL</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("url")}</div>
    ),
  },
  {
    accessorKey: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const socmed = row.original;
      return (
        <div className="flex justify-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="outline">
                <Eye className="h-4 w-4" />
              </Button>
            </DialogTrigger>

            <DialogContent className="max-w-2xl">
              <DialogHeader>
                <DialogTitle className="text-md text-gray-500">
                  Detail Socmed
                </DialogTitle>

                <DialogDescription asChild>
                  <div>
                    <DetailSocmed socmedId={row.original.id} />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

            <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="secondary">
                <Pencil className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-gray-500 text-md">
                  {/* {p('PublikasiEdit')} */}
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Artikel">
                    <EditSocmed idCode={socmed.id} onSuccess={onSuccess} />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
      );
    },
  },
];
