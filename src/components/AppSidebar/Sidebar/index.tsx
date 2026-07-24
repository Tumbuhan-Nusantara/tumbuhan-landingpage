"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/src/components/ui/sidebar";
import SideUser from "../SideUser";
import SideMain from "../SideMain";

import { TeamSwitcher } from "../SideHeader";
import { TooltipProvider } from "../../ui/tooltip";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <TooltipProvider delayDuration={0}>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>

        <SidebarContent>
          <SideMain />
        </SidebarContent>

        <SidebarFooter>
          <SideUser />
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  );
}
