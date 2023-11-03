"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import Cookies from "universal-cookie";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });
// const permanent = Permanent_Marker({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const cookies = new Cookies();
  const token = cookies.get("OWNERTOKEN");
  const pathName = usePathname();

  const isDashboardPage = pathName.startsWith("/owners");

  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>
          {!isDashboardPage && <Nav></Nav>}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
