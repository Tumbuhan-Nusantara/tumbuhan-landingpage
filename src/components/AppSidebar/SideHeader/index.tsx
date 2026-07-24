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
          className="
      h-14
      rounded-xl
      transition-all
      hover:bg-sidebar-accent
      data-[state=open]:bg-sidebar-accent
    "
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white shadow-sm">
            <Image src="/logo-ytan.png" alt="YTAN" width={34} height={34} />
          </div>

          <div className="flex flex-col overflow-hidden">
            <span className="truncate font-semibold text-[15px]">
              Yayasan Tumbuhan
            </span>

            <span className="truncate text-xs text-muted-foreground">
              Asli Nusantara
            </span>
          </div>

          <ChevronsUpDown className="ml-auto h-4 w-4 opacity-60" />
        </SidebarMenuButton>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
