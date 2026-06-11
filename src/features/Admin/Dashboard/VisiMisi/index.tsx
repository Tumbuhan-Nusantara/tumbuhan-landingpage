import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
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
import { PencilLine, Trash2 } from "lucide-react";
import { DashMisiItem } from "@/src/constants";
import { Separator } from "@/components/ui/separator";

const DashVisiFeat = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Visi, Misi & Tujuan
      </h1>

      <Card className="bg-[url('/image.png')] bg-cover">
        <h1 className=" text-[#1A4D2E] font-semibold mx-6">
          Kelola informasi Visi, Misi, dan Tujuan
        </h1>
        <Card className="max-w-4xl m-4 ">
          <CardContent className="grid gap-6">
            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Visi</Label>
                <Textarea />
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Misi</Label>
                <Card>
                  <div>
                    {DashMisiItem.map((misi) => (
                      <div key={misi.id}>
                        <div className="flex items-center justify-between mx-2">
                          <p className="w-2xl">{misi.misi}</p>
                          <div className="flex items-center gap-2">
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button className="bg-[#11b653] hover:bg-[#32cc6f]">
                                  <PencilLine />
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
                        <Separator className="my-2" />
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            </div>

            <div className="space-y-4">
              <div className="grid gap-2">
                <Label>Tujuan</Label>
                <Textarea />
              </div>
            </div>

          </CardContent>

          <CardFooter className="justify-end">
            <Button className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer">
              Simpan Perubahan
            </Button>
          </CardFooter>
        </Card>
      </Card>
    </div>
  );
};

export default DashVisiFeat;
