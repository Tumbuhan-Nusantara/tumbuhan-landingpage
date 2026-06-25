import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { DashMainMenu } from "@/src/constants";
import { useTranslations } from "next-intl";

const DashboardFeat = () => {
  const dash = useTranslations("dashmain");
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">
        Halaman Dashboard
      </h1>
      <p className="font-black text-xl text-[#1A4D2E] px-2">
        Selamat datang, Muty
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 my-4">
        {DashMainMenu.map((item) => (
          <Card key={item.id} className="h-30 bg-[url('/image.png')] bg-cover">
            <div className="flex justify-between mx-6">
              <h1 className="text-[#1A4D2E]">{dash(item.title)}</h1>
              <div className="p-1 bg-[#dcf4e4] rounded-lg">
                <item.logo className="text-[#1A4D2E]" />
              </div>
            </div>
          </Card>
        ))}
      </div>
      <Card className="bg-[url('/image.png')] bg-cover">
        <h1 className="mx-6 text-[#1A4D2E] font-semibold">Daftar Pengguna Dashboard YTAN</h1>
        <Card className="mx-6">
          <div className="flex items-center mx-4 gap-4">
            <Avatar className="h-12 w-12 rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="tes user" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[#1A4D2E]">Tjoet Muty</p>
              <p className="text-muted-foreground">Anggota</p>
            </div>
          </div>
        </Card>

        <Card className="mx-6">
          <div className="flex items-center mx-4 gap-4">
            <Avatar className="h-12 w-12 rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="tes user" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[#1A4D2E]">Tjoet Muty</p>
              <p className="text-muted-foreground">Anggota</p>
            </div>
          </div>
        </Card>

        <Card className="mx-6">
          <div className="flex items-center mx-4 gap-4">
            <Avatar className="h-12 w-12 rounded-lg">
              <AvatarImage src="https://github.com/shadcn.png" alt="tes user" />
              <AvatarFallback className="rounded-lg">CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-[#1A4D2E]">Tjoet Muty</p>
              <p className="text-muted-foreground">Anggota</p>
            </div>
          </div>
        </Card>
      </Card>
    </div>
  );
};

export default DashboardFeat;