"use client";

import Cookies from "universal-cookie";
import { UserProvider } from "@/context/studentContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Layout({ children }) {
  const cookies = new Cookies();
  const router = useRouter();
  const token = cookies.get("TOKEN");
  const pathName = usePathname();

  useEffect(() => {
    const checkAuthentication = () => {
      const freePages = ["/students/register", "/students/forgotpassword"];
      const isFreePage =
        freePages.includes(pathName) ||
        pathName.startsWith("/students/resetpassword/") ||
        pathName.startsWith("/students/activate-account/");
      if (!token && !isFreePage) {
        // TO DO: redirect users to their intended page after signing in
        // cookies.set("intendedPath", pathName, {path: "/"})
        router.push("/students/login");
      }
      // TO DO: verify token
      return children;
    };

    checkAuthentication();
  }, [children, token, pathName, router]);

  return <UserProvider>{children}</UserProvider>;
}
