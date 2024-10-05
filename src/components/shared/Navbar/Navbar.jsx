"use client";
import Image from "next/image";
import { useState } from "react";
import navLogo from "@/assets/navLogo.svg";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  return (
    <section className="navbg">
      <div className="container py-3.5 relative">
        <div className="flex items-center justify-between px-3 lg:px-0">
          <div>
            <Image src={navLogo} alt="nav logo" />
          </div>
          <div className="hidden md:block  ">
            <ul className="flex items-center text-white gap-x-8">
              <li className="hover:text-primary hover:scale-110">
                <Link href="#">Contact us</Link>
              </li>
              <li className="hover:text-primary hover:scale-110">
                <Link href="#">Sign up</Link>
              </li>
            </ul>
          </div>
          {/* navbar responsive */}
          <div
            className="block md:hidden w-fit "
            onClick={() => {
              setShowNav(!showNav);
            }}
          >
            {showNav ? <RxCross2 className="text-white text-xl"/> : <FaBars className="text-white text-xl" />}
          </div>
        </div>
        <div
          className={` absolute bg-secondary rounded-b-2xl w-full md:hidden grid overflow-hidden transition-all duration-300 ease-in-out py-6 px-3 z-50 ${
            showNav
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <ul className="flex flex-col text-white overflow-hidden gap-y-5 ">
            <li className="hover:text-primary ">
              <Link href="#">Contact us</Link>
            </li>
            <li className="hover:text-primary ">
              <Link href="#">Sign up</Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
