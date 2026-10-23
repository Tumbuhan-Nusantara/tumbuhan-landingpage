import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yayasan Tumbuhan Asli Nusantara",
  description: "Tumbuhan Asli Nusantara",
  openGraph: {
    title: "Yayasan Tumbuhan Asli Nusantara (YTAN)",
    description:
      "Mengenal dan melestarikan tumbuhan asli Nusantara melalui konservasi, penelitian, dan edukasi.",
    url: "https://nusantaraplants.org",
    siteName: "Yayasan Tumbuhan Asli Nusantara",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${poppins.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
