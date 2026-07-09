"use client";

import { ActivityDashType, NewsDashType } from "@/src/types";
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
import { useRouter } from "@/src/i18n/navigation";
import DetailActivity from "@/src/features/Admin/Dashboard/Kegiatan/RisetKonservasiEdukasi/DetailActivity";
import EditActivity from "@/src/features/Admin/Dashboard/Kegiatan/RisetKonservasiEdukasi/EditActivity";
import DeleteActivity from "@/src/features/Admin/Dashboard/Kegiatan/RisetKonservasiEdukasi/DeleteActivity";
import { act } from "react";

export const columns = (
  onSuccess: () => void,
): ColumnDef<ActivityDashType>[] => [
  {
    accessorKey: "nama_tipe",
    header: () => <div className="text-left">Jenis Kegiatan</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("nama_tipe")}</div>
    ),
  },
  {
    accessorKey: "activity_name",
    header: () => <div className="text-left">Nama Kegiatan</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("activity_name")}</div>
    ),
  },
  {
    accessorKey: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const activities = row.original;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <div className="flex justify-center gap-2">
          {/* <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="outline">
                <Eye className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-gray-500 text-md">
                  Detail Aktivitas
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Aktivitas">
                    <DetailActivity actId={activities.id} />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog> */}

          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              router.push(`/admin/dashboard/kegiatan/detail/${row.original.id}`)
            }
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="secondary"
            onClick={() =>
              router.push(`/admin/dashboard/kegiatan/edit/${row.original.id}`)
            }
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <DeleteActivity idCode={activities.id} onSuccess={onSuccess} />
        </div>
      );
    },
  },
];
