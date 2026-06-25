import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const DashPublikasiFeat = () => {
  return (
     <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6 px-2">Publikasi Ilmiah</h1>
      <div>
        <Card className="bg-[url('/image.png')] bg-cover">
          <h1 className="mx-6 text-[#1A4D2E] font-semibold">Kelola Publikasi Ilmiah Terbaru</h1>
          <Card className="max-w-4xl m-4">
            <CardContent className="flex flex-col gap-6">
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Judul Artikel</Label>
                  <Input />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Penulis <span className="text-muted-foreground italic">*)Contoh penulisan (Nama, Nama, Nama, dst)</span></Label>
                  <Input />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>DOI/ Link Artikel</Label>
                  <Input />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Tahun</Label>
                  <Input />
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid gap-2">
                  <Label>Nama Jurnal dan Volume <span className="text-muted-foreground italic">*)Contoh penulisan (Tropical Conservation Science. 2026: art. 19)</span></Label>
                  <Input />
                </div>
              </div>
            </CardContent>

            <CardFooter className="justify-end">
              <Button className="bg-[#1A4D2E] hover:bg-[#3f8159] cursor-pointer">Tambah Artikel</Button>
            </CardFooter>
          </Card>
        </Card>
      </div>
    </div>
  )
}

export default DashPublikasiFeat