import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Hero from "@/src/components/Hero";
import Image from "next/image";
import { Menu } from "lucide-react";
import Navbar from "@/src/components/Navbar";
import { LandingMenu } from "@/src/constants";

const HomePage = () => {
  return (
    <div className="bg-linear-to-l from-[#C7FCDC] to-white ">
      <div className="container mx-auto">
        <div className="flex items-center justify-between px-8 md:px-12 lg:px-30 py-2 fixed top-2 left-0 w-full z-50 ">
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
          <Navbar />
          <DropdownMenu>
            <DropdownMenuTrigger asChild >
              <Menu className="block md:hidden"/>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 z-50 bg-white">
              {LandingMenu.map((item) => (
                <div key={item.id}>
                  {item.items ? (
                    <DropdownMenuGroup>
                      <DropdownMenuLabel>{item.title}</DropdownMenuLabel>

                      {item.items.map((sub) => (
                        <DropdownMenuItem key={sub.id}>
                          {sub.sub}
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  ) : (
                    <DropdownMenuItem>{item.title}</DropdownMenuItem>
                  )}

                  <DropdownMenuSeparator />
                </div>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
        <Hero />
      </div>
    </div>
  );
};

export default HomePage;
