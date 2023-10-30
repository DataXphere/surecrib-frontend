"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";

const SideNavWrapper = ({ children }) => {
  const route = [
    {
      icon: "/icons/dashboard.png",
      name: "Dashboard",
      link: "/owners/dashboard",
    },
    {
      icon: "/icons/post-property.png",
      name: "Post a Property",
      link: "/owners/post-property",
    },
    {
      icon: "/icons/my-listing.png",
      name: "My Listing",
      link: "/owners/my-listing",
    },
    {
      icon: "/icons/profile.png",
      name: "Profile",
      link: "/owners/profile",
    },
    {
      icon: "/icons/my-messages.png",
      name: "My Messages",
      link: "/owners/messages",
    },
    {
      icon: "/icons/favourite.png",
      name: "Favourite",
      link: "/owners/favourite",
    },
    // {
    //   icon: "/icons/signout.png",
    //   name: "Sign Out",
    //   link: "/",
    // },
  ];
  const router = useRouter();
  const logout = () => {
    cookies.set("OWNERTOKEN", null);
    router.push("/");
  };

  const path = usePathname();
  //    console.log(router);
  return (
    <div className="flex min-h-screen">
      <div
        className="w-[20rem] pt-[3rem]"
        style={{
          background:
            "linear-gradient(180deg, #1A6177 0%, rgba(26, 97, 119, 0.00) 100%)",
        }}
      >
        <div className="w-full">
          {route.map((item, index) => {
            const { icon, name, link } = item;
            return (
              <Link
                key={index}
                className={`${
                  path.includes(link) ? "bg-[#A0B7BD]" : ""
                } font-[600] py-3 hover:bg-[#A0B7BD] w-full text-white text-[20px] px-[1rem] mb-5 flex items-center gap-3`}
                href={link}
              >
                <Image alt={name} src={icon} width={30} height={30} />
                {name}
              </Link>
            );
          })}
          <span
            className={` cursor-pointer font-[600] py-3 hover:bg-[#A0B7BD] w-full text-white text-[20px] px-[1rem] mb-5 flex items-center gap-3`}
            onClick={logout}
          >
            <Image
              alt="Sign Out"
              src="/icons/signout.png"
              width={30}
              height={30}
            />
            Sign Out
          </span>
        </div>
      </div>
      <div className="w-full">
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default SideNavWrapper;
