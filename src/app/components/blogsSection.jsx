import React from "react";
import BlogCard from "./blogCard";
import Header from "./header";
import { useLocale, useTranslations } from "next-intl";
import * as motion from "motion/react-client"; //server
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
function BlogsSection() {
  const t = useTranslations("blogHeader");
  const d = useTranslations("blogs");
  const locale = useLocale();
  const imgs = ["/blog1.jpg", "/blog2.jpg", "/blog3.png"];
  return (
    <div className=" container space-y-6 py-12 lg:py-20">
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
          <Header title={t("title")} disc={t("disc")} />
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

          <CarouselItem
          
            className="basis-[90%] md:basis-1/2 lg:basis-1/3"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <BlogCard
                title={d("title1")}
                disc={d("disc1")}
                img={imgs[0]}
                id={1}
              />
            </motion.div>
          </CarouselItem>

          <CarouselItem
            
            className="basis-[90%] md:basis-1/2 lg:basis-1/3"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <BlogCard
                title={d("title2")}
                disc={d("disc2")}
                img={imgs[1]}
                id={2}
              />
            </motion.div>
          </CarouselItem>

          <CarouselItem
           
            className="basis-[90%] md:basis-1/2 lg:basis-1/3"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <BlogCard
                title={d("title3")}
                disc={d("disc3")}
                img={imgs[2]}
                id={3}
              />
            </motion.div>
          </CarouselItem>

          <CarouselItem
          
            className="basis-[90%] md:basis-1/2 lg:basis-1/3"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <BlogCard
                title={d("title1")}
                disc={d("disc1")}
                img={imgs[0]}
                id={4}
              />
            </motion.div>
          </CarouselItem>

          <CarouselItem
            
            className="basis-[90%] md:basis-1/2 lg:basis-1/3"
          >
            <motion.div
              initial={{ opacity: 0, x: -30, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <BlogCard
                title={d("title2")}
                disc={d("disc2")}
                img={imgs[1]}
                id={5}
              />
            </motion.div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>

    </div>
  );
}

export default BlogsSection;
