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
} from "@/src/components/ui/dropdown-menu";
import { useLocale, useTranslations } from "use-intl";
import { Link } from "@/src/i18n/navigation";

const Nav = () => {
  const t = useTranslations("navbar");
  useLocale();

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 md:px-12 lg:px-30 py-2 fixed top-0 left-0 w-full z-50 bg-linear-to-l from-[#C7FCDC] to-white border-b border-solid border-[#D9D9D9]">
      <div className="flex items-center gap-2 sm:gap-3 min-w-0">
        <Image
          src="/logo-ytan.png"
          width={70}
          height={70}
          alt="Logo of YTAN"
          loading="eager"
          className="w-10 h-10 sm:w-12 sm:h-12 md:w-17.5 md:h-17.5 shrink-0"
        />
        <h1 className="text-xs sm:text-sm md:text-base font-light text-[#2B593A] tracking-wide sm:tracking-widest">
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
                      <DropdownMenuItem
                        key={sub.id}
                        className="transition duration-300 cursor-pointer"
                      >
                        <Link href={sub.path ?? "#"}>{t(sub.sub)}</Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuGroup>
                ) : (
                  <DropdownMenuItem
                    key={item.id}
                    asChild
                    className="cursor-pointer rounded-md focus:bg-[#dcf4e4]"
                  >
                    <Link href={item.path ?? "#"} className="w-full px-3 py-2">
                      {t(item.title)}
                    </Link>
                  </DropdownMenuItem>
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
