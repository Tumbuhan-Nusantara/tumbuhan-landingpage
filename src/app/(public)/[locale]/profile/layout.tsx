import FooterFeat from "@/src/components/Footer";
import Nav from "@/src/components/Navbar-2";
import SideProfile from "@/src/features/Profile/side";

export default function ProfileWrapper({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      <div className="mt-22 py-10 mx-30 flex">
        {children}
        <SideProfile/>
        </div>
      <FooterFeat />
    </div>
  );
}
