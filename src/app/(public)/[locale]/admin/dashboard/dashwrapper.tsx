import { AppSidebar } from "@/src/components/AppSidebar/Sidebar";
import Switcher from "@/src/components/Switcher";
import { Separator } from "@/src/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/src/components/ui/sidebar";

type DashboardWrapperProps = {
  children?: React.ReactNode;
  role: "admin" | "user";
};

export default function DashboardWrapper({
  children,
  role,
}: DashboardWrapperProps) {
  return (
    <SidebarProvider>
      <AppSidebar role={role} />

      <SidebarInset className="flex min-h-screen flex-col bg-muted/20">
        <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="flex items-center gap-3">
            <SidebarTrigger className="-ml-2" />

            <Separator orientation="vertical" className="h-5" />

            <Switcher />
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <div className="text-right">
              <p className="text-sm font-medium text-[#1A4D2E]">
                Dashboard Admin
              </p>

              <p className="text-xs text-muted-foreground">
                Yayasan Tumbuhan Asli Nusantara
              </p>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-auto">
          <div className="mx-auto w-full max-w-7xl p-6">{children}</div>
        </main>

        <footer className="border-t bg-background px-6 py-4">
          <div className="flex flex-col items-center justify-between gap-2 text-center text-xs text-muted-foreground md:flex-row">
            <p>
              © 2026{" "}
              <span className="font-medium">
                Yayasan Tumbuhan Asli Nusantara
              </span>
              . All rights reserved. v1.0.0
            </p>
          </div>
        </footer>
      </SidebarInset>
    </SidebarProvider>
  );
}
