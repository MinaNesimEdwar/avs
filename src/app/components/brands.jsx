import React from "react";
import Header from "./header";
import { useLocale, useTranslations } from "next-intl";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import * as motion from "motion/react-client"; //server

function Brands() {
  const imgs = [
    "/brand1.png",
    "/brand2.jpg",
    "/brand3.jpg",
    "/brand4.jpg",
    "/brand5.jpg",
    "/brand1.png",
  ];
  const brands = ["bose", "jbl", "pioneer", "shure", "panasonic", "bose"];
  const t = useTranslations("brandsHeader");
  const locale =useLocale();
  return (
    <div className=" container space-y-10 ">
      <Carousel
        className="grid grid-cols-1  lg:grid-cols-[30%_70%]  gap-4 space-y-6 "
        opts={{ loop: true , align: "start",direction: locale === "ar" ? "rtl" : "ltr"}}
          dir={locale === "ar" ? "rtl" : "ltr"} 
      >
        <div className=" space-y-12">
          <Header title={t("title")} disc={t("disc")} />
          <div className={`flex items-center  max-md:justify-center  gap-2 ${
              locale === "ar" ? "flex-row-reverse justify-end" : ""
            }`}>
            <CarouselPrevious className={"static  translate-0 hover:bg-main transition-all duration-300 border-0 cursor-pointer"} />
            <CarouselNext className={"static  translate-0 hover:bg-main transition-all duration-300 border-0 cursor-pointer"} />
          </div>
        </div>
        <CarouselContent>
          {imgs.map((_, index) => (
            <motion.div 
                          initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
                key={index}>
              <CarouselItem
  
                className=" md:basis-1/2 lg:basis-1/3 "
              >
                <div className="p-2 space-y-4">
                  <div className="border-2 border-main rounded-full  size-52 flex items-center justify-center">
                    <Image
                      className=" object-contain  "
                      src={imgs[index]}
                      width={100}
                      height={100}
                      alt={brands[index]}
                    />
                  </div>
                  <p className=" capitalize text-white text-xl font-bold text-center">
                    {brands[index]}
                  </p>
                </div>
              </CarouselItem>
            </motion.div>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
}

export default Brands;
