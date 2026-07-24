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

const SideMain = () => {
  const dash = useTranslations("dash");

  return (
    <SidebarGroup>
      <SidebarGroupLabel className="text-xs uppercase tracking-widest text-muted-foreground">
        Dashboard Admin
      </SidebarGroupLabel>
      <SidebarMenu className="space-y-1">
        {SidebarItems.map((item) => (
          <Collapsible
            key={item.title}
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild>
                <SidebarMenuButton
                  tooltip={dash(item.title)}
                  className="
                          rounded-lg
                          transition-all
                          hover:bg-[#1A4D2E]
                          hover:text-white
                          data-[active=true]:bg-[#1A4D2E]
                          data-[active=true]:text-white
                        "
                >
                  {item.icon && <item.icon className="h-4 w-4 shrink-0" />}
                  {dash(item.title)}
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
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.id}>
                      <SidebarMenuSubButton
                        asChild
                        className="
    rounded-md
    transition-colors
    hover:bg-sidebar-accent
  "
                      >
                        <Link href={subItem.path || "#"}>
                          {subItem.icon && <subItem.icon />}

                          <span>{dash(subItem.sub)}</span>
                        </Link>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
};

export default SideMain;
