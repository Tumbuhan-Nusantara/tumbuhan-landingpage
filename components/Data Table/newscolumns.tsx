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
import { useParams } from "next/navigation";
import { useRouter } from "@/src/i18n/navigation";

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
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const params = useParams();
      const locale = params.locale;
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
                  Detail Berita
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Artikel">
                    <DetailNews newsId={news.id} />
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <Button
            size="icon"
            variant="secondary"
            onClick={() =>
              router.push(
                `/admin/dashboard/berita/edit/${row.original.id}`,
              )
            }
          >
            <Pencil className="h-4 w-4" />
          </Button>

          <div>
            {/* <DeleteArticle articleId={article.id} onSuccess={onSuccess} /> */}
          </div>
        </div>
      );
    },
  },
];
