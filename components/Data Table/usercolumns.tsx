"use client";
import { ArticleDashType, UserDashType } from "@/src/types";
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
import DetailTeam from "@/src/features/Admin/Dashboard/Profile/OurTeam/DetailTeam";


export const columns = (
  onSuccess: () => void,
): ColumnDef<UserDashType>[] => [
  {
    accessorKey: "first_name",
    header: () => <div className="text-left">Nama</div>,
    cell: ({ row }) => {
    const user = row.original;

    return (
      <div className="text-left">
        {`${user.first_name ?? ""} ${user.last_name ?? ""}`.trim()}
      </div>
    );
  },
  },
  {
    accessorKey: "aksi",
    header: () => <div className="text-center">Aksi</div>,
    cell: ({ row }) => {
      const user = row.original;
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
                  Detail Pengguna
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Artikel">
                    <DetailTeam userId={user.id} />
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
                  Edit Data Pengguna
                </DialogTitle>
                <DialogDescription asChild>
                  <div aria-describedby="Detail Artikel">
                    {/* <EditArticle idCode={article.id} onSuccess={onSuccess} /> */}
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>

          <div>
            {/* <DeleteArticle idCode={article.id} onSuccess={onSuccess} /> */}
          </div>
        </div>
      );
    },
  },
];
