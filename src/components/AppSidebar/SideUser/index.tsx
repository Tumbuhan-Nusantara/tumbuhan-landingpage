"use client";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/src/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/src/components/ui/dropdown-menu";
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/src/components/ui/sidebar";
import { Toaster } from "@/src/components/ui/sonner";
import { axiosInstance } from "@/src/lib/axios";
import { useRouter } from "@/src/i18n/navigation";
import { UserDashType } from "@/src/types";
import { ChevronsUpDown, LogOut } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const SideUser = () => {
  const { isMobile } = useSidebar();
  const [me, setMe] = useState<UserDashType | null>(null);
  const router = useRouter();

  const getMe = async () => {
    try {
      const res = await axiosInstance.get(`/api/v1/auth/me`);
      const result = res.data.data;

      setMe(result);
      console.log("halo", result);
    } catch (error) {
      throw error;
    }
  };

  const logOut = async () => {
    try {
      await axiosInstance.post("/api/v1/auth/logout");

      toast.success("Logout berhasil");

      router.replace("/admin/login");
    } catch (error) {
      console.error(error);
      toast.error("Logout gagal");
    }
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getMe();
  }, []);
  return (
    <SidebarMenu>
      <Toaster />
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size="lg"
              className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
            >
              <Avatar className="h-8 w-8 rounded-lg">
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="tes user"
                />
                <AvatarFallback className="rounded-lg">CN</AvatarFallback>
              </Avatar>
              <div className="grid flex-1 text-left text-sm leading-tight">
                <span className="truncate font-medium">
                  {me?.first_name} {me?.last_name}
                </span>
                <span className="truncate text-xs">{me?.email}</span>
              </div>
              <ChevronsUpDown className="ml-auto size-4" />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-(--radix-dropdown-menu-trigger-width) min-w-56 rounded-lg"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuLabel className="p-0 font-normal">
              <div className="flex items-center gap-2 px-1 py-1.5 text-left text-sm">
                <Avatar className="h-8 w-8 rounded-lg">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="tes user"
                  />
                  <AvatarFallback className="rounded-lg">CN</AvatarFallback>
                </Avatar>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium">
                    {me?.first_name} {me?.last_name}
                  </span>
                  <span className="truncate text-xs">{me?.email}</span>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={logOut}>
              <LogOut />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
};

export default SideUser;
