import type { Metadata } from "next";
import "./globals.css";

import { DM_Sans } from "next/font/google";
import Header from "@/shared/Header";
import Footer from "@/shared/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // add the weights you need
});

export const metadata: Metadata = {
  title: "My App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${dmSans.className} antialiased bg-[#5C5C5C0D]`}>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
