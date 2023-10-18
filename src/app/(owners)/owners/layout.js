"use client";

import Cookies from "universal-cookie";
import { OwnerProvider } from "@/context/ownerContext";
import { usePathname, useRouter } from "next/navigation";
import { useEffect} from "react";


export default function Layout({ children }) {
  const cookies = new Cookies();
  const router = useRouter();
  const token = cookies.get("OWNERTOKEN");
  const pathName = usePathname();

  useEffect(() => {
    const checkAuthentication = () => {
      const freePages = ["/owners/register", "/owners/forgotpassword"];
      const isFreePage =
        freePages.includes(pathName) ||
        pathName.startsWith("/owners/resetpassword/") ||
        pathName.startsWith("/owners/activate-account/");
      if (!token && !isFreePage) {
        // TO DO: redirect users to their intended page after signing in
        // cookies.set("intendedPath", pathName, {path: "/"})
        router.push("/owners/login");
      }
      // TO DO: verify token
      return children;
    };

    checkAuthentication();
  }, [children, token, pathName, router]);

  return (
      
        <OwnerProvider>
            {children}
        </OwnerProvider>
    
  );
}
