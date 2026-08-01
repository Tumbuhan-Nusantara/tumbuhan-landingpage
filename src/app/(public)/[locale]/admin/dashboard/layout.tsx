"use client";

import { useRouter, usePathname } from "@/src/i18n/navigation";
import DashboardWrapper from "./dashwrapper";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/src/lib/axios";
import LeafSpinLoading from "@/src/components/AnimationLeaf/Leaf";
import { PAGE_ACCESS } from "@/src/lib/page-access";

export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();

  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<"admin" | "user">("user");

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);

        const response = await axiosInstance.get("/api/v1/auth/me");

        const userRole = response.data.data.role as "admin" | "user";

        setRole(userRole);

        const matchedRoute = Object.keys(PAGE_ACCESS)
          .sort((a, b) => b.length - a.length)
          .find((route) => pathname.startsWith(route));

        const allowedRoles = matchedRoute
          ? PAGE_ACCESS[matchedRoute]
          : undefined;

        console.log("pathname :", pathname);
        console.log("matchedRoute :", matchedRoute);
        console.log("role :", role);
        console.log("allowedRoles :", allowedRoles);

        if (allowedRoles && !allowedRoles.includes(userRole)) {
          router.replace("/admin/dashboard");
          return;
        }

        setLoading(false);
      } catch (error) {
        router.replace("/admin/login");
      }
    };

    checkAuth();
  }, [pathname, router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LeafSpinLoading />
      </div>
    );
  }

  return <DashboardWrapper role={role}>{children}</DashboardWrapper>;
}
