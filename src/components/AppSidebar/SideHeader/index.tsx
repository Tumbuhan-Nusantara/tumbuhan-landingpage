"use client";

import { ChevronsUpDown } from "lucide-react";

import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/src/components/ui/sidebar";
import Image from "next/image";

export function TeamSwitcher() {
  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <SidebarMenuButton
          size="lg"
          className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
        >
          <div className="flex aspect-square size-9 items-center justify-center rounded-full bg-sidebar-primary text-sidebar-primary-foreground">
            <Image
              src="/logo-ytan.png"
              alt="Logo YTAN"
              width={90}
              height={90}
            />
          </div>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-medium">Tumbuhan Nusantara</span>
            <span className="truncate text-xs">YTAN</span>
          </div>
          <ChevronsUpDown className="ml-auto" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
