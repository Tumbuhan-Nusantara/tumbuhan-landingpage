import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/src/components/ui/collapsible";
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/src/components/ui/sidebar";
import { SidebarItems } from "@/src/constants";
import { ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/src/i18n/navigation";

type SideMainProps = {
  role: "admin" | "user";
};


const SideMain = ({ role }: SideMainProps) => {
  const dash = useTranslations("dash");
  console.log("ROLE =", role);
  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs uppercase tracking-widest text-muted-foreground">
        Dashboard Admin
      </SidebarGroupLabel>

      <SidebarMenu className="space-y-1">
        {SidebarItems.map((menu) => {
          const visibleItems =
            menu.items?.filter((subItem) => subItem.roles.includes(role)) ?? [];

          // sembunyikan parent jika semua submenu tidak boleh diakses
          if (visibleItems.length === 0) return null;

          return (
            <Collapsible
              key={menu.id}
              defaultOpen={menu.isActive}
              className="group/collapsible"
            >
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton
                    tooltip={dash(menu.title)}
                    className="
                  rounded-lg
                  transition-all
                  hover:bg-[#1A4D2E]
                  hover:text-white
                  data-[active=true]:bg-[#1A4D2E]
                  data-[active=true]:text-white
                "
                  >
                    <menu.icon className="h-4 w-4 shrink-0" />

                    <span>{dash(menu.title)}</span>

                    <ChevronRight
                      className="
                    ml-auto
                    h-4
                    w-4
                    transition-transform
                    group-data-[state=open]/collapsible:rotate-90
                  "
                    />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                <CollapsibleContent>
                  <SidebarMenuSub>
                    {visibleItems.map((subItem) => (
                      <SidebarMenuSubItem key={subItem.id}>
                        <SidebarMenuSubButton
                          asChild
                          className="
                        rounded-md
                        transition-all
                        hover:bg-[#EAF5EE]
                        hover:text-[#1A4D2E]
                        data-[active=true]:bg-[#1A4D2E]
                        data-[active=true]:text-white
                      "
                        >
                          <Link href={subItem.path || "#"}>
                            <subItem.icon className="h-4 w-4" />
                            <span>{dash(subItem.sub)}</span>
                          </Link>
                        </SidebarMenuSubButton>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          );
        })}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SideMain;
