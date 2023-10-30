"use client";

import React from "react";
import SideNavWrapper from "@/components/hoc/sideNav";
import Link from "next/link";
import Image from "next/image";

const OwnerDashboard = () => {
  return (
    <SideNavWrapper>
      <div className="bg-[#313131] p-10">
        <h1 className="text-white font-[500] text-[25px]">
          Hi, Ayokunle Edward
        </h1>
        <h2 className="text-[30px] text-white font-[600]">0</h2>
        <p className="text-white text-[15px] mt-4">September leads</p>
        <div className="flex items-center justify-center gap-[5rem]">
          <button className="px-[3rem] py-[0.7rem] bg-[#D9D9D9] rounded-md text-[19px] font-[600]">
            O Phone Clicks
          </button>
          <button className="px-[3rem] py-[0.7rem] bg-[#D9D9D9] rounded-md text-[19px] font-[600]">
            O Messages
          </button>
        </div>
      </div>

      <div className="m-[2rem]">
        <div className="flex items-center justify-center gap-[5rem]">
          <div className="flex items-center justify-between px-[3rem] py-[0.7rem] bg-[#D9D9D9] rounded-md text-[22px] font-[600] w-full">
            <span>Enquiries</span>
            <span>0</span>
          </div>
          <div className="flex items-center justify-between px-[3rem] py-[0.7rem] bg-[#D9D9D9] rounded-md text-[22px] font-[600] w-full">
            <span>Views</span>
            <span>0</span>
          </div>
        </div>

        <Link
          href="/owners/post-property"
          className="bg-[#C06A69] block text-[25px] rounded-md text-white py-[0.8rem] font-[700] text-center mt-7"
        >
          Post a Property
        </Link>

        <div className="w-full flex items-center justify-between mt-10 gap-[4rem]">
          <div className="shadow w-full rounded-lg flex justify-center items-center font-[700] p-10 gap-[2rem]">
            <div className="border-r-[1px] pr-5 border-black">
              <Image
                src="/icons/my-listing.png"
                width={80}
                height={80}
                alt="scope"
              />
              <span className="text-[25px]">Listings</span>
            </div>
            <div>
              <p>Total Listing: 0</p>
              <p>Visible Listing: 0</p>
              <p>Expired Listing: 0</p>
            </div>
            <div className="flex flex-col">
              <Image
                src="/icons/scope.png"
                width={80}
                height={50}
                alt="scope"
              />
              <button
                type="submit"
                className="px-[1rem] py-[0.2rem] rounded bg-black text-white text-[15px] font-bold"
              >
                View
              </button>
            </div>
          </div>
          <div className="shadow w-full rounded-lg flex items-center font-[700] p-10 gap-[2rem] justify-center">
            <div className="flex flex-col items-center gap-2 border-r-[1px] pr-5 border-black">
              <Image
                src="/icons/calendar.png"
                width={80}
                height={50}
                alt="scope"
              />
              <span className="text-[25px]">Subscribe</span>
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="px-[1rem] py-[0.4rem] rounded bg-black text-white text-[15px] font-bold"
              >
                Click Here
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[5rem] justify-center mt-10">
          <div className="shadow w-full rounded-lg flex items-center font-[700] p-10 gap-[2rem] justify-center">
            <div className="flex flex-col items-center gap-2 border-r-[1px] pr-5 border-black">
              <Image
                src="/icons/upload.png"
                width={80}
                height={50}
                alt="scope"
              />
              <span className="text-[25px]">Upgrade</span>
            </div>
            <div className="flex flex-col">
              <button
                type="submit"
                className="px-[1.5rem] py-[1rem] rounded-full bg-black text-white text-[18px] font-bold"
              >
                Click Here
              </button>
            </div>
          </div>
          <div className="shadow w-full rounded-lg flex items-center font-[700] p-10 gap-[2rem] justify-center">
            <div className="flex flex-col items-center">
              <Image
                src="/icons/my-messages.png"
                width={80}
                height={50}
                alt="scope"
              />
              <span className="text-[25px]">Upgrade</span>
            </div>
          </div>
          <div className="shadow w-full rounded-lg flex items-center font-[700] p-10 gap-[2rem] justify-center">
            <div className="flex flex-col items-center">
              <Image src="/icons/user.png" width={80} height={50} alt="scope" />
              <span className="text-[25px]">Upgrade</span>
            </div>
          </div>
        </div>
      </div>
    </SideNavWrapper>
  );
};

export default OwnerDashboard;
