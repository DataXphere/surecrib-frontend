import "./globals.css";
import { Inter } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
// const permanent = Permanent_Marker({ subsets: ["latin"] });

export const metadata = {
  title: "SureCrib",
  description: `Student's Housefinder`,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning={true}>
        <Nav></Nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
