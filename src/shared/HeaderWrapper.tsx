"use client";

import { usePathname } from "next/navigation";
import Header from "@/shared/Header";

import AdminHeader from "@/shared/AdminHeader";
import MerchantHeader from "./MerchantHeader";

export default function HeaderWrapper() {
  const pathname = usePathname();

  if (pathname.startsWith("/dashboard")) {
    return <MerchantHeader />;
  }
  if (pathname.startsWith("/merchant")) {
    return <MerchantHeader />;
  }

  if (pathname.startsWith("/admin")) {
    return <AdminHeader />;
  }

  return <Header />;
}
