"use client";

import { BotaniType } from "@/src/types";
import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { Eye, Pencil } from "lucide-react";
import { useRouter } from "@/src/i18n/navigation";
import DeleteBotani from "@/src/features/Admin/Dashboard/Botani/DeleteBotani";

export const columns = (onSuccess: () => void): ColumnDef<BotaniType>[] => [
  {
    accessorKey: "title_in",
    header: () => <div className="text-left">Nama</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("title_in")}</div>
    ),
  },
  {
    accessorKey: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const botani = row.original;
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const router = useRouter();
      return (
        <div className="flex justify-center gap-2">
          <Button
            size="icon"
            variant="outline"
            onClick={() =>
              router.push(`/admin/dashboard/botani/detail/${row.original.id}`)
            }
          >
            <Eye className="h-4 w-4" />
          </Button>
          <Button
            size="icon"
            variant="secondary"
            onClick={() =>
              router.push(`/admin/dashboard/botani/edit/${row.original.id}`)
            }
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <div>
            <DeleteBotani idCode={botani.id} onSuccess={onSuccess} />
          </div>
        </div>
      );
    },
  },
];
