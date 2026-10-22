"use client";

import { NewsDashType } from "@/src/types";
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
import DetailNews from "@/src/features/Admin/Dashboard/Berita/DetailNews";
import { useRouter } from "@/src/i18n/navigation";
import DeleteNews from "@/src/features/Admin/Dashboard/Berita/DeleteNews";

export const columns = (onSuccess: () => void): ColumnDef<NewsDashType>[] => [
  {
    accessorKey: "news_name",
    header: () => <div className="text-left">Judul</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("news_name")}</div>
    ),
  },
  {
    accessorKey: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const news = row.original;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <div className="flex justify-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              router.push(`/admin/dashboard/berita/detail/${row.original.id}`)
            }
          >
            <Eye className="h-4 w-4" />
          </Button>

          <Button
            size="icon"
            variant="secondary"
            onClick={() =>
              router.push(`/admin/dashboard/berita/edit/${row.original.id}`)
            }
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <div>
            <DeleteNews idCode={news.id} onSuccess={onSuccess} />
          </div>
        </div>
      );
    },
  },
];
