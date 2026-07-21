import FooterFeat from "@/src/components/Footer";
import Nav from "@/src/components/Navbar-2";

export default function BeritaWrapper({
  children,
}: Readonly<{
  children?: React.ReactNode;
}>) {
  return (
    <div>
      <Nav />
      <div>{children}</div>
      <FooterFeat />
    </div>
  );
}
