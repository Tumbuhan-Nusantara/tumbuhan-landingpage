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

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  role: "admin" | "user";
};

export function AppSidebar({
  role,
  ...props
}: AppSidebarProps) {
  return (
    <TooltipProvider delayDuration={0}>
      <Sidebar collapsible="icon" {...props}>
        <SidebarHeader>
          <TeamSwitcher />
        </SidebarHeader>

        <SidebarContent>
          <SideMain role={role} />
        </SidebarContent>

        <SidebarFooter>
          <SideUser />
        </SidebarFooter>

        <SidebarRail />
      </Sidebar>
    </TooltipProvider>
  );
}