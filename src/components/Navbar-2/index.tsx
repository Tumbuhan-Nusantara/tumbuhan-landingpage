"use client";
import Switcher from "@/src/components/Switcher";
import Image from "next/image";
import { Menu } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import { LandingMenu } from "@/src/constants";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "use-intl";

const Nav = () => {
  const t = useTranslations("navbar");
  useLocale();

  return (
    <div className="flex items-center justify-between px-8 md:px-12 lg:px-30 py-2 fixed top-0 left-0 w-full z-50 bg-linear-to-l from-[#C7FCDC] to-white border-b-[#D9D9D9] border border-solid">
      <div className="flex items-center gap-4">
        <Image
          src="/logo-ytan.png"
          width={70}
          height={70}
          alt="Logo of YTAN"
          loading="eager"
        />
        <h1 className="font-light text-[#2B593A] tracking-widest">
          Tumbuhan Asli Nusantara
        </h1>
      </div>
      <div className="flex items-center gap-2">
        <Navbar />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Menu className="block md:hidden" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 z-50 bg-white">
            {LandingMenu.map((item) => (
              <div key={item.id}>
                {item.items ? (
                  <DropdownMenuGroup>
                    <DropdownMenuLabel>{t(item.title)}</DropdownMenuLabel>
                    {item.items.map((sub) => (
                      <DropdownMenuItem key={sub.id}>
                        {t(sub.sub)}
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                ) : (
                  <DropdownMenuItem>{t(item.title)}</DropdownMenuItem>
                )}

                <DropdownMenuSeparator />
              </div>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <Switcher />
      </div>
    </div>

  );
};

export default Nav;
