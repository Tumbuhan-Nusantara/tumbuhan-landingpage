import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";

const DashUserRoleFeat = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Akses Pengguna Admin YTAN
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <h1 className="mx-6 text-[#1A4D2E] font-semibold">
          Hak Akses Pengguna Dashboard YTAN
        </h1>

        <Card className="mx-6">
          <div className="flex justify-between mx-6 items-center">
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="tes user"
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div>
                <p className="text-[#1A4D2E]">Tjoet Muty</p>
                <p className="text-muted-foreground">Anggota</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Select defaultValue="admin">
                <SelectTrigger className="ml-auto w-27.5">
                  <SelectValue placeholder="Pilih" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ADMIN">SUPER ADMIN</SelectItem>
                  <SelectItem value="USER">ADMIN</SelectItem>
                </SelectContent>
              </Select>
              <AlertDialog>
                <AlertDialogTrigger asChild>
                  <Button className="bg-red-700 hover:bg-red-500">
                    <Trash2 />
                  </Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                  <AlertDialogHeader>
                    <AlertDialogTitle className="text-red-700">
                      Apakah Anda yakin?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                      Tindakan ini tidak dapat dibatalkan.
                    </AlertDialogDescription>
                  </AlertDialogHeader>
                  <AlertDialogFooter>
                    <AlertDialogCancel>Batal</AlertDialogCancel>
                    <AlertDialogAction
                      // onClick={() => onDelete(userId)}
                      className="bg-red-700 hover:bg-red-500"
                    >
                      Hapus
                    </AlertDialogAction>
                  </AlertDialogFooter>
                </AlertDialogContent>
              </AlertDialog>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default DashUserRoleFeat;
