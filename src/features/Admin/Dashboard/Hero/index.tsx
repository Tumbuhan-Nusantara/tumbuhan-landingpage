import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const DashHeroFeat = () => {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">Beranda</h1>
      <div>
        <Card className="bg-[url('/image.png')] bg-cover">
          <h1 className="mx-6 text-[#1A4D2E] font-semibold">Hero Section <span className="italic text-muted-foreground font-light">*)terdapat di paling atas tepat di bawah logo YTAN</span></h1>
          <Card className="max-w-4xl m-4">
            <CardHeader>
              <CardDescription>
                Kelola konten halaman utama website
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Keterangan</Label>
                  <Textarea />
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-end">
              <Button className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer">Simpan Perubahan</Button>
            </CardFooter>
          </Card>
        </Card>
      </div>
    </div>
  );
};

export default DashHeroFeat;
