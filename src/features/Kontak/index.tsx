import { Contacts } from "@/src/constants";
import Image from "next/image";

const KontakFeat = () => {
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center gap-8 mt-20 mb-6">
        {Contacts.map((logo) => (
          <div
            key={logo.id}
            className="border-[#2B593A] border-2 rounded-full p-4 bg-white duration-500 transition hover:bg-[#c7f7da] cursor-pointer"
          >
            <Image width={35} height={35} src={logo.icon} alt={logo.alt} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default KontakFeat;
