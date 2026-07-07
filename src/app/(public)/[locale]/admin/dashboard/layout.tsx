'use client'
import { useRouter } from "@/src/i18n/navigation";
import DashboardWrapper from "./dashwrapper";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        await axiosInstance.get("/api/v1/auth/me");

        setLoading(false);
      } catch (error) {
        router.replace("/admin/login");
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        Loading...
      </div>
    );
  }
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
