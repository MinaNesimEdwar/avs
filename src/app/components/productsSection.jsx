import React from "react";
import Header from "./header";
import { useTranslations } from "next-intl";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BsCart3 } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import * as motion from "motion/react-client"; //server

const products = [
  {
    image: "/product1.jpg",
    title: "Audio Mixer",
    description:
      "Professional sound mixer with multiple channels. \nDelivers clear audio control for any event.",
  },
  {
    image: "/product2.png",
    title: "Wireless Microphone",
    description:
      "Crystal-clear voice transmission with no cables. \nPerfect for conferences, stages, and events.",
  },
  {
    image: "/product3.jpg",
    title: "Powered Speaker",
    description:
      "High-performance speaker with deep bass. \nIdeal for halls, concerts, and large venues.",
  },
  {
    image: "/product4.jpg",
    title: "CCTV Camera",
    description:
      "Advanced security camera with night vision. \nKeeps your premises safe 24/7.",
  },
  {
    image: "/product5.jpg",
    title: "HD Projector",
    description:
      "Bright and sharp visuals with full HD resolution. \nPerfect for meetings, classrooms, and cinemas.",
  },
];

function ProductsSection() {
  const t = useTranslations("productHeader");
  return (
    <div className=" container  py-12 lg:py-20">
      <Carousel
        className={"mx-auto max-w-[90%] md:max-w-full space-y-8"}
        opts={{ loop: true, align: "start" }}
      >
        <div className="max-md:flex-col flex items-center max-md:gap-4 justify-between">
          <Header title={t("title")} disc={t("disc")} />
          <div className="flex items-center gap-2">
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
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-3/4 md:basis-1/2 lg:basis-1/4"
            >
              <motion.div
                initial={{ opacity: 0, x: -30, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: index * 0.2 }}
              >
                <Card
                  className={
                    "py-0 overflow-hidden bg-light-black border-main rounded-3xl relative group"
                  }
                >
                  <CardContent className=" aspect-square space-y-4  p-0">
                    <div className="  bg-white overflow-hidden">
                      <Image
                        src={products[index].image}
                        alt={`product-${index}`}
                        className=" h-56 w-full  object-contain"
                        width={150}
                        height={150}
                      />
                    </div>

                    <div className=" px-4 py-8 space-y-4">
                      <h3 className=" text-lg text-white font-bold">
                        {products[index].title}
                      </h3>
                      <p className=" text-gray-400 line-clamp-2">
                        {products[index].description}
                      </p>
                      <div className=" flex items-center justify-between">
                        <p className=" text-main font-bold">$35.85 </p>
                        <Link className=" text-sm text-white capitalize rounded-full px-4 py-2 bg-main hover:gap-3 transition-all duration-300 flex items-center gap-2">
                          <BsCart3 className="text-white text-lg" /> add to cart
                        </Link>
                      </div>
                    </div>
                  </CardContent>
                  <div
                    className="w-[80%] sm:w-1/2 bg-white/90 absolute p-3 rounded-2xl 
                flex items-center justify-around left-1/2 -translate-x-1/2 
                -translate-y-full top-0 
                group-hover:top-1/4 group-hover:-translate-y-0 
                transition-all duration-500 ease-in-out "
                  >
                    <FaRegEye className=" text-2xl hover:text-main transition-all duration-300 cursor-pointer" />
                    <BsCart3 className=" text-2xl hover:text-main transition-all duration-300 cursor-pointer" />
                  </div>
                </Card>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
    </div>
  );
}

export default ProductsSection;
