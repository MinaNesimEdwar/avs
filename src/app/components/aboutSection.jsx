import React from "react";
import Header from "./header";
import { useTranslations } from "next-intl";
import { FaCheckCircle } from "react-icons/fa";
import * as motion from "motion/react-client"; //server
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { GoArrowUpRight } from "react-icons/go";

function AboutSection() {
  const t = useTranslations("aboutHeader");
  const d = useTranslations("about");
  return (
    <div className=" container py-12 lg:py-20 ">
      <div className=" grid grid-cols-1 lg:grid-cols-[40%_60%] items-center gap-12 overflow-hidden">
        <motion.div
        initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
        className=" h-full overflow-hidden">
          <Image
            className=" border-1 border-main object-cover w-full  m-auto h-full  rounded-3xl"
            src={"/about2.jpg"}
            alt=""
            width={550}
            height={400}
          />
        </motion.div>
        <div className=" space-y-6">
          <Header title={t("title")} disc={t("disc")} />
          <motion.p
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className=" text-gray-400 leading-7 "
          >
            {d("disc")}
          </motion.p>

          <ul className=" space-y-4">
            <motion.li
              initial={{ opacity: 0,scale: 0.8 }}
              whileInView={{ opacity: 1,scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1 }}
              className=" flex items-center gap-2 text-white hover:gap-4 transition-all duration-300"
            >
              <FaCheckCircle className=" text-main " />
              <p>{d("point1")}</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0,scale: 0.8 }}
              whileInView={{ opacity: 1,scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.1 }}
              className=" flex items-center gap-2 text-white hover:gap-4 transition-all duration-300"
            >
              <FaCheckCircle className=" text-main " />
              <p>{d("point2")}</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0,scale:0.8 }}
              whileInView={{ opacity: 1,scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.2 }}
              className=" flex items-center gap-2 text-white hover:gap-4 transition-all duration-300"
            >
              <FaCheckCircle className=" text-main " />
              <p>{d("point3")}</p>
            </motion.li>
            <motion.li
              initial={{ opacity: 0,scale:0.8}}
              whileInView={{ opacity: 1,scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 1.3 }}
              className=" flex items-center gap-2 text-white hover:gap-4 transition-all duration-300"
            >
              <FaCheckCircle className=" text-main " />
              <p>{d("point4")}</p>
            </motion.li>
          </ul>
          <motion.div
                    initial={{ opacity: 0,x:30 }}
            whileInView={{ opacity: 1,x:0}}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
          >
            <Link
              href={"/"}
              className="capitalize text-white max-lg:m-auto w-fit flex items-center justify-center gap-2 bg-main rounded-full  text-sm px-5 py-3 hover:gap-3 duration-300 transition-all "
            >
              <GoArrowUpRight className=" text-sm" />
              {d("btn")}
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
