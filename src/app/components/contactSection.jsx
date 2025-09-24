import React from "react";
import ContactForm from "./contactForm";
import Header from "./header";
import { useTranslations } from "next-intl";
import { FaPhone } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import * as motion from "motion/react-client"; //server


function ContactSection() {
  const t = useTranslations("contactHeader");
  return (
    <div className=" grid grid-cols-1 md:grid-cols-2 gap-8 pt-16">
      <motion.div
      initial={{ opacity: 0, y: -30 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      className="space-y-10">
        <Header title={t("title")} disc={t("disc")} />
        <p className="text-gray-400 w-[80%]">
          Have a new idea or a project in mind? We’d love to hear your vision
          and discuss how we can turn it into reality. Let’s work together to
          build solutions that truly make an impact.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex gap-4 items-center">
            <FaPhone className="text-main text-2xl md:text-3xl" />
            <div>
              <h3 className=" capitalize font-bold text-sm md:text-lg text-main">Phone Number</h3>
              <p className="text-gray-400 font-light">+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <TbWorld className="text-main text-2xl md:text-3xl" />
            <div>
              <h3 className=" capitalize font-bold text-sm md:text-lg text-main">website</h3>
              <p className="text-gray-400 font-light">AVS.org.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <MdEmail className="text-main text-2xl md:text-3xl" />
            <div>
              <h3 className=" capitalize font-bold text-sm md:text-lg text-main">Email Address</h3>
              <p className="text-gray-400 font-light">avs@gmail.com</p>
            </div>
          </div>
        </div>
      </motion.div>


      <motion.div
            initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0}}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      >
        <ContactForm />
      </motion.div>
    </div>
  );
}

export default ContactSection;
