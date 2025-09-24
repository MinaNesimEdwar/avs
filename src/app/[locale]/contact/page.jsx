import Header from "@/app/components/header";
import { useTranslations } from "next-intl";
import React from "react";
import { FaPhone } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { MdEmail } from "react-icons/md";
import * as motion from "motion/react-client"; //server
import ContactForm from "@/app/components/contactForm";
import FaqSection from "@/app/components/faqSection";
import { faqs } from "@/data/shared";

function ContactPage() {
  const t = useTranslations("contactPage");
  const d = useTranslations("faq");
  return (
    <div className=" container pb-20 pt-24 lg:pt-32  space-y-12">
      <Header title={t("title")} disc={t("disc")} align="text-center" />

      <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-10"
        >
          <iframe
          className="w-full  h-[45vh] rounded-2xl border-2 border-main"
            src="https://www.google.com/maps?q=35%20Sakakini%20Gamrah%20Cairo%20Governorate&output=embed"
            width={500}
            height={450}
            loading="lazy"
          ></iframe>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <div className="flex gap-4 items-center">
            <FaPhone className="text-main text-3xl" />
            <div>
              <h3 className=" capitalize font-bold text-lg text-main">
                Phone Number
              </h3>
              <p className="text-gray-400 font-light">+1 (123) 456-7890</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <TbWorld className="text-main text-3xl" />
            <div>
              <h3 className=" capitalize font-bold text-lg text-main">
                website
              </h3>
              <p className="text-gray-400 font-light">AVS.org.com</p>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <MdEmail className="text-main text-3xl" />
            <div>
              <h3 className=" capitalize font-bold text-lg text-main">
                Email Address
              </h3>
              <p className="text-gray-400 font-light">avs@gmail.com</p>
            </div>
          </div>
          </div>
        </motion.div>
        <motion.div
        initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <ContactForm />
        </motion.div>
      </div>

        <div className=" pt-16 space-y-10">
        <Header title={d("title")} disc={d("disc")} align="text-center" />
        <motion.div
        initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
        <FaqSection faqs={faqs}/>
        </motion.div>
        </div>

    </div>
  );
}

export default ContactPage;
