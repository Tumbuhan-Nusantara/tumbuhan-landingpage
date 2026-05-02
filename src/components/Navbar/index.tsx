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

const Navbar = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {LandingMenu.map((item) => (
          <NavigationMenuItem key={item.id}>
            {item.items ? (
              <>
                <NavigationMenuTrigger className="text-[#2B593A] font-semibold">
                  {item.title}
                </NavigationMenuTrigger>

                <NavigationMenuContent className="flex flex-col w-100 gap-2 md:w-125 md:flex-cols-2 lg:w-72">
                  {item.items.map((sub) => (
                    <div key={sub.id}>
                      <Link
                        href="#"
                        className="leading-none font-medium w-full block"
                      >
                        {sub.sub}
                      </Link>
                    </div>
                  ))}
                </NavigationMenuContent>
              </>
            ) : (
              <NavigationMenuLink asChild>
                <Link href="/docs" className="text-[#2B593A] font-semibold">
                  {item.title}
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
