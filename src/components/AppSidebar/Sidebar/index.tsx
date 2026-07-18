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

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
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
  );
}
