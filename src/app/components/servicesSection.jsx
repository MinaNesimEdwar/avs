import { useLocale, useTranslations } from "next-intl";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ServCard from "./servCard";
import Header from "./header";
import * as motion from "motion/react-client"; //server

function ServicesSection() {
  const t = useTranslations("services");
  const d = useTranslations("servHeader");
  const locale = useLocale();
  const imgs = ["/serv1.png", "/serv2.png", "/serv3.png", "/serv1.png"];

  return (
    <div className=" container space-y-8 py-12 lg:py-20">
      <Carousel
        className={"mx-auto max-w-[90%] md:max-w-full space-y-8"}
        opts={{
          loop: true,
          align: "start",
          direction: locale === "ar" ? "rtl" : "ltr",
        }}
        dir={locale === "ar" ? "rtl" : "ltr"}
      >
        <div className="max-md:flex-col flex items-center max-md:gap-4 justify-between">
          <Header title={d("title")} disc={d("disc")} />
          <div
            className={`flex items-center gap-2 ${
              locale === "ar" ? "flex-row-reverse justify-end" : ""
            }`}
          >
            <CarouselPrevious
              className={
                "hover:bg-main transition-all duration-300 size-9 cursor-pointer border-0  static translate-0"
              }
            />
            <CarouselNext
              className={
                "hover:bg-main transition-all duration-300 size-9 cursor-pointer border-0  static translate-0"
              }
            />
          </div>
        </div>

        <CarouselContent>

          <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/4">
            <motion.div
              initial={{ opacity: 0, x: 10, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <ServCard id={1} header={t("header1")} disc={t("disc1")} img={imgs[0]} />
            </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/4">
      <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <ServCard id={2} header={t("header2")} disc={t("disc2")} img={imgs[1]} />
      </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/4">
      <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ServCard id={3} header={t("header3")} disc={t("disc3")} img={imgs[2]} />
      </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/4">

      <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.6 }}
      >
        <ServCard id={4} header={t("header4")} disc={t("disc4")} img={imgs[3]} />
      </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/4">
           <motion.div
              initial={{ opacity: 0, x: 10, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <ServCard id={5} header={t("header1")} disc={t("disc1")} img={imgs[0]} />
            </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/4">
       <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <ServCard id={6} header={t("header2")} disc={t("disc2")} img={imgs[1]} />
      </motion.div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>



    </div>
  );
}

export default ServicesSection;
