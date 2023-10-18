import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "/public/assets/SureCrib.png";
import { Menu, MenuButton, MenuItem, Button, MenuList } from "@chakra-ui/react";

const Nav = () => {
  return (
    <>
      <section className=" border bg-white shadow-lg">
        <div className="w-[90%] mx-auto flex justify-between items-center sticky z-50 font-extrabold text-black h-[100px]">
          <Image src={logo} alt="SureCrib Logo" width={100} height={100} />
          <div className="w-4/5 flex justify-between justify-self-end gap-10 uppercase">
            <Link href="/" className="p-3 hover:bg-[#80d0e9] hover:rounded-xl">
              Home
            </Link>
            <Link href="#" className="p-3 hover:bg-[#80d0e9] hover:rounded-xl">
              Services
            </Link>
            <Link href="#" className="p-3 hover:bg-[#80d0e9] hover:rounded-xl">
              Blog
            </Link>
            <Link href="#" className="p-3 hover:bg-[#80d0e9] hover:rounded-xl">
              About Us
            </Link>
            <div className="flex justify-between items-center gap-x-8">
              <Menu>
                <MenuButton
                  as={Button}
                  className="py-4 hover:bg-[#80d0e9] hover:rounded-xl font-extrabold uppercase text-black">
                  Register
                </MenuButton>
                <MenuList className="mt-6">
                  <MenuItem>
                    <Link href="/students/register">Register as Student</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/owners/register">Register as Owner</Link>
                  </MenuItem>
                </MenuList>
              </Menu>

              <Menu>
                <MenuButton
                  as={Button}
                  className="font-extrabold uppercase p-3 bg-[#1A6177] rounded-bl-[25px] rounded-tr-[25px] text-white">
                  Login
                </MenuButton>
                <MenuList className="mt-6">
                  <MenuItem>
                    <Link href="/students/login">Login as Student</Link>
                  </MenuItem>
                  <MenuItem>
                    <Link href="/owners/login">Login as Owner</Link>
                  </MenuItem>
                </MenuList>
              </Menu>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Nav;
