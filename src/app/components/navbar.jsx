// Navbar.jsx
"use client";
import { useState } from "react";
import {  FiMenu, FiX } from "react-icons/fi";
import * as motion from "motion/react-client";
import Image from "next/image";
import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { BsCart3 } from "react-icons/bs";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const locale = useLocale();
  const pathname = usePathname();


  const nextLocale = locale === "en" ? "ar" : "en";
  return (
    <motion.nav
      initial={{ y: -200 }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="lg:container fixed lg:top-4 top-0 right-0 left-0 z-50 bg-white lg:rounded-full shadow-xl py-2 md:ps-8 md:pe-2 px-4 pe-2 flex items-center justify-between text-black"
    >
      {/* logo */}
      <a href="/" className="block">
        <Image className="object-contain " src="/assets/logo.jpeg" alt="logo" width={100} height={100} />
      </a>

      {/* navs */}
      <ul
        className={`lg:flex flex-col lg:flex-row items-center gap-6 text-lg absolute lg:static max-lg:text-white max-lg:text-center bg-black lg:bg-transparent w-full lg:w-auto top-16 lg:top-auto left-0 lg:left-auto px-4 lg:px-0 py-6 lg:py-0 transition-all duration-300 ease-in-out max-lg:space-y-6 ${
          isMobileMenuOpen ? "block" : "hidden"
        }`}
      >
        <li>
          <Link
            href="/about"
            className="capitalize font-semibold hover:text-main transition-all duration-300"
          >
            About us
          </Link>
        </li>
        <li>
          <Link
            href="/blogs"
            className="capitalize font-semibold hover:text-main transition-all duration-300"
          >
            Blogs
          </Link>
        </li>
        <li>
          <Link
            href="/projects"
            className="capitalize font-semibold hover:text-main transition-all duration-300"
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="capitalize font-semibold hover:text-main transition-all duration-300"
          >
            Products
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className="capitalize font-semibold hover:text-main transition-all duration-300"
          >
            contact us
          </Link>
        </li>

      </ul>

      <div className="flex items-center gap-2">
        <Link href={"/cart"} className="text-white bg-main font-semibold border-2 border-transparent hover:border-main hover:bg-transparent hover:text-main transition-all duration-300 lg:size-12 size-10 rounded-md lg:rounded-full flex items-center justify-center ">
        <BsCart3 className=" text-lg" /></Link>
        <Link
          href={pathname}
          locale={nextLocale}
          className="text-white bg-main font-semibold border-2 border-transparent hover:border-main hover:bg-transparent hover:text-main transition-all duration-300 lg:size-12 size-10 rounded-md lg:rounded-full flex items-center justify-center px-3"
        >
          {locale === "en" ? "AR" : "EN"}
        </Link>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            className="text-white bg-main font-semibold border-2 border-transparent cursor-pointer hover:border-main hover:bg-white hover:text-main transition-all duration-300 lg:size-12 size-10 rounded-md lg:rounded-full flex items-center justify-center"
          >
            {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>
    </motion.nav>
  );
}

export default Navbar;
