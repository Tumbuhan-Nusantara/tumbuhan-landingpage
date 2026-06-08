import DashboardWrapper from "./dashwrapper";
export default function Layout({ children }: { children: React.ReactNode }) {
  return <DashboardWrapper>{children}</DashboardWrapper>;
}
