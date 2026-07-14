"use client";
import { useRouter } from "@/src/i18n/navigation";
import DashboardWrapper from "./dashwrapper";
import { useEffect, useState } from "react";
import { axiosInstance } from "@/lib/axios";
import LeafSpinLoading from "@/components/AnimationLeaf/Leaf";
export default function Layout({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true)
        await axiosInstance.get("/api/v1/auth/me");

        setTimeout(() => {
          setLoading(false);
        }, 5000);
      } catch (error) {
        router.replace("/admin/login");
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <LeafSpinLoading />
      </div>
    );
  }
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
