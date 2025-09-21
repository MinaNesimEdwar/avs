import { Link } from "@/i18n/navigation";
import Image from "next/image";
import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { Separator } from "@/components/ui/separator";

function Footer() {
  return (
    <div className=" bg-light-black  text-gray-400 ">
      <div className=" container p-10    space-y-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-baseline gap-4">
        {/* our definition */}
        <div className=" space-y-4">
          <div>
            <Link href={"/"}>
              <Image
                className=" object-contain w-2/5"
                src={"/assets/footer.png"}
                alt="logo"
                width={100}
                height={100}
              />
            </Link>
          </div>
          <p className=" font-bold text-main text-2xl">Audio Video System</p>
          <p className=" w-3/4">
            We’re the Official Audio&Video.System Solution,Services & Support
          </p>
          <div className=" flex items-center gap-4">
            <a href="/">
              <FaFacebookF className=" text-main size-6 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="/">
              <FaInstagram className=" text-main size-6 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="/">
              <FaLinkedinIn className=" text-main size-6 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="/">
              <FaYoutube className=" text-main size-6 hover:scale-110 transition-all duration-300" />
            </a>
            <a href="/">
              <BsTwitterX className=" text-main size-6 hover:scale-110 transition-all duration-300" />
            </a>
          </div>
        </div>

        {/* contact */}
        <div className=" space-y-4">
          <p className="capitalize font-bold text-main text-2xl">get in touch</p>

          <a
            className=" flex items-center gap-2 text-sm hover:gap-3  transition-all duration-300"
            href="/"
          >
            <IoLocation className="  text-main size-6" />
            35 Sakakini Gamrah . Cairo Governorate
          </a>
          <a
            className=" flex items-center gap-2 text-sm hover:gap-3  transition-all duration-300"
            href="/"
          >
            <FaPhoneAlt className="  text-main size-6" />
            111-222-333
          </a>
          <a
            className=" flex items-center gap-2 text-sm hover:gap-3  transition-all duration-300"
            href="/"
          >
            <FaEnvelope className="  text-main size-6" />
            Sales@avs-egy.com
          </a>
        </div>

        {/* links */}
        <div className=" space-y-4">
          <div>
          <p className="capitalize font-bold text-main text-2xl">important links</p>
          </div>
            <div className=" flex items-center gap-8" >

          <div className=" capitalize space-y-4 flex flex-col">
            <a
              className=" hover:text-main transition-all duration-300"
              href="/"
            >
              Home
            </a>
            <a
              className=" hover:text-main transition-all duration-300"
              href="/"
            >
              About
            </a>
            <a
              className=" hover:text-main transition-all duration-300"
              href="/"
            >
              blogs
            </a>
            <a
              className=" hover:text-main transition-all duration-300"
              href="/"
            >
              Contact
            </a>
          </div>
          <div className=" capitalize space-y-4 flex flex-col">
            <a
              className=" hover:text-main transition-all duration-300"
              href="/"
            >
              products
            </a>
            <a
              className=" hover:text-main transition-all duration-300"
              href="/"
            >
              projects
            </a>
            <a
              className=" hover:text-main transition-all duration-300"
              href="/"
            >
              cart
            </a>
            <a
              className=" hover:text-main transition-all duration-300"
              href="/"
            >
              services
            </a>
          </div>
            </div>
        </div>
      </div>
      <div className=" container border-t border-main/50 py-6">
        <p className=" text-center text-sm"> © 2023 <a href="/" className=" text-main font-bold">AVS</a>. All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
