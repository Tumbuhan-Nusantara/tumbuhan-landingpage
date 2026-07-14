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
      <div className="mt-22 py-10 lg:mx-30 flex lg:flex-row md:flex-col flex-col lg:gap-8 md:gap-6 gap-2">
        {children}
      </div>
      <FooterFeat />
    </div>
  );
}
