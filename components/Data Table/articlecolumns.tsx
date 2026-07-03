"use client";

import { ArticleDashType } from "@/src/types";
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
import DetailArticle from "@/src/features/Admin/Dashboard/Kegiatan/Publikasi/DetailArticle";
import EditArticle from "@/src/features/Admin/Dashboard/Kegiatan/Publikasi/EditArticle";
import DeleteArticle from "@/src/features/Admin/Dashboard/Kegiatan/Publikasi/DeleteArticle";

export const columns = (
  onSuccess: () => void,
): ColumnDef<ArticleDashType>[] => [
  {
    accessorKey: "judul",
    header: () => <div className="text-left">Judul</div>,
    cell: ({ row }) => (
      <div className="text-left ">{row.getValue("judul")}</div>
    ),
  },
  {
    accessorKey: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const article = row.original;
      return (
        <div className="flex justify-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="icon" variant="outline">
                <Eye className="h-4 w-4" />
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="text-gray-500 text-md">
                  Detail Artikel
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Artikel">
                    <DetailArticle articleId={article.id} />
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
                  Ubah Artikel
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Artikel">
                    <EditArticle idCode={article.id} onSuccess={onSuccess} />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div>
            <DeleteArticle idCode={article.id} onSuccess={onSuccess} />
          </div>
        </div>
      );
    },
  },
];
