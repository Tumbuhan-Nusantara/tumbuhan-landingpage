import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { LandingMenu } from "@/src/constants";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("navbar");
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {LandingMenu.map((item) => (
          <NavigationMenuItem key={item.id}>
            {item.items ? (
              <>
                <NavigationMenuTrigger className="text-[#2B593A] font-semibold">
                  {t(item.title)}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="flex flex-col w-100 gap-2 md:w-125 md:flex-cols-2 lg:w-72">
                  {item.items.map((sub) => (
                    <div key={sub.id}>
                      <Link
                        href={sub.path || "#"}
                        className="leading-none text-muted-foreground hover:text-[#2B593A] text-sm w-full block rounded-md bg-white hover:bg-[#C7FCDC] transition duration-500 p-2"
                      >
                        {t(sub.sub)}
                      </Link>
                    </div>
                  ))}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href="/docs" className="text-[#2B593A] font-semibold">
                  {t(item.title)}
                </Link>
              </NavigationMenuLink>
            )}
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default Navbar;
