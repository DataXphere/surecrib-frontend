"use client";

import SideNavWrapper from "@/components/hoc/sideNav";
import Link from "next/link";

const Profile = () => {
  return (
    <SideNavWrapper>
      <div className="bg-[#D9D9D9] py-[2rem]">
        <div className="flex items-center justify-center gap-10">
          <Link
            href="/"
            className="border px-[5rem] py-[1rem] border-black text-[22px] font-[600] hover:bg-white"
          >
            My Profile
          </Link>
          <Link
            href="/"
            className="border px-[5rem] py-[1rem] border-black text-[22px] font-[600] hover:bg-white"
          >
            Specialization
          </Link>
          <Link
            href="/"
            className="border px-[5rem] py-[1rem] border-black text-[22px] font-[600] hover:bg-white"
          >
            Edit Profile
          </Link>
        </div>
      </div>
      <div className="p-[2rem]">
        <h1 className="text-[23px] font-[600]">
          Verified Member since Aug. 2023
        </h1>
      </div>
    </SideNavWrapper>
  );
};

export default Profile;
