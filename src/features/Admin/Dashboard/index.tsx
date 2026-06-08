import { Card } from "@/components/ui/card";
import { DashMainMenu } from "@/src/constants";
import { useTranslations } from "next-intl";

const DashboardFeat = () => {
  const dash = useTranslations("dashmain");
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-[#1A4D2E] mb-6">
        Halaman Dashboard
      </h1>
      <Card
        className=" bg-[url('/image.png')]
      bg-cover"
      >
        <p className="font-semibold text-xl text-[#1A4D2E] px-2">
          Selamat datang, Muty
        </p>
      </Card>
      <div className="flex justify-between my-4">
        {DashMainMenu.map((item) => (
          <Card key={item.id} className="w-100 h-30">
            <div className="flex justify-between mx-2">
              <h1>{dash(item.title)}</h1>
              <div className="p-1 bg-[#dcf4e4] rounded-lg">
                <item.logo className="text-[#1A4D2E]"/>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardFeat;
