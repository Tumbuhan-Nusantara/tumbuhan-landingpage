"use client";

import { DampakLandingPageType } from "@/src/types";
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
import DetailDampak from "@/src/features/Admin/Dashboard/Dampak/DetailDampak";

export const columns = (
  onSuccess: () => void,
): ColumnDef<DampakLandingPageType>[] => [
  {
    accessorKey: "keterangan_id",
    header: () => (
      <div className="text-left">Keterangan (Bahasa Indonesia)</div>
    ),
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("keterangan_id")}</div>
    ),
  },
  {
    accessorKey: "keterangan_en",
    header: () => <div className="text-left">Keterangan (English)</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("keterangan_en")}</div>
    ),
  },
  {
    accessorKey: "total",
    header: () => <div className="text-left">Total</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("total")}</div>
    ),
  },
  {
    accessorKey: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const dampak = row.original;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
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
                  Detail Dampak
                </DialogTitle>

                <DialogDescription asChild>
                  <div>
                    <DetailDampak dampakId={row.original.id} />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button
            size="icon"
            variant="secondary"
            onClick={() =>
              router.push(`/admin/dashboard/dampak/edit/${row.original.id}`)
            }
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <div>
            <DeleteDampak idCode={dampak.id} onSuccess={onSuccess} />
          </div>
        </div>
      );
    },
  },
];
