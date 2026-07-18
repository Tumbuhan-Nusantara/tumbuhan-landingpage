import FooterFeat from "@/components/Footer";
import Nav from "@/components/Navbar-2";

export default function ProfileWrapper({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      <div className="py-22">
        {children}
      </div>
      <FooterFeat />
    </div>
  );
}
