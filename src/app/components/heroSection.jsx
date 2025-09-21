import React from "react";
import { useTranslations } from "next-intl";
import { FaPhoneAlt } from "react-icons/fa";
import { MdWavingHand } from "react-icons/md";
import * as motion from "motion/react-client"; //server
import { Link } from "@/i18n/navigation";
import Image from "next/image";
const HeroSection = () => {
  const t = useTranslations("home");

  return (
    <div className="  bg-[url('/wallpaper.jpg')] bg-cover bg-center">
      <div className=" bg-gradient-to-t from-black to-transparent  lg:min-h-screen  flex items-end justify-center ">
        <div className="container  pt-30 lg:pb-20 text-white grid grid-cols-12 gap-6  items-center ">
          {/* content */}
          <motion.div
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              duration: 0.8,
            }}
            className=" col-span-12 lg:col-span-6 flex flex-col gap-6 max-lg:text-center"
          >
            <div
              className="max-lg:m-auto transition-all duration-300  
  flex items-center gap-2 text-main w-fit text-sm bg-white rounded-full px-3 py-1 font-bold group"
            >
              <span className="bg-main size-8 rounded-full flex items-center justify-center">
                <MdWavingHand className="text-white text-sm transition-transform duration-300 group-hover:rotate-45" />
              </span>
              {t("welcome")}
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-6xl leading-10 lg:leading-16 ">
              <span className="text-main font-extrabold ">
                {t("title").split(" ")[0]}
              </span>{" "}
              {t("title").split(" ").slice(1).join(" ")}
            </h1>
            <p className=" text-gray-400 text-sm">{t("disc")}</p>
            <Link
              href={"/"}
              className=" max-lg:m-auto w-fit flex items-center justify-center gap-2 bg-main rounded-full  text-sm px-5 py-3 hover:gap-3 duration-300 transition-all "
            >
              <FaPhoneAlt className=" text-sm" />
              {t("btn")}
            </Link>
          </motion.div>

          {/* image  */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
              duration: 0.8,
            }}
            className="max-lg:hidden  lg:col-span-6"
          >
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Image
                className=" m-auto  object-contain w-[70%]"
                src={"/product2.png"}
                width={550}
                height={550}

              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
