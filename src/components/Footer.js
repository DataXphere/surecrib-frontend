import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/SureCrib.png";

const Footer = () => {
  return (
    <>
      <section className=" border bg-white shadow-lg">
        <div className="w-[90%] mx-auto flex justify-between items-center sticky z-50 font-bold text-black h-[100px]">
          <Image src={logo} alt="SureCrib Logo" width={100} height={100} />
          <div className="w-4/5 flex justify-end justify-self-end gap-10 uppercase">
            <Link href="/" className="p-3 hover:bg-[#80d0e9] hover:rounded-xl">Home</Link>
            <Link href="#" className="p-3 hover:bg-[#80d0e9] hover:rounded-xl">Services</Link>
            <Link href="#" className="p-3 hover:bg-[#80d0e9] hover:rounded-xl">Blog</Link>
            <Link href="#" className="p-3 hover:bg-[#80d0e9] hover:rounded-xl">About Us</Link>
            </div>
        </div>
        <div className="w-full flex justify-center items-center md:flex-row flex-col pb-4">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-black">
      Copyright 2023 - DataXphere All Right Reserved.
      </p>
      </div>
      </section>
    </>
  );
};
  
  export default Footer;