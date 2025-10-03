import type { Metadata } from "next";
import "./globals.css";
import { DM_Sans } from "next/font/google";
import HeaderWrapper from "@/shared/HeaderWrapper";
import Footer from "@/shared/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "My App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased bg-[#5C5C5C0D]`}>
        <HeaderWrapper /> 
        {children}
        <Footer/>
      </body>
    </html>
  );
}
