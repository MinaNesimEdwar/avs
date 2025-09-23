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
import ProjectCard from "./projectCard";
import * as motion from "motion/react-client"; //server
function ProjectsSection() {
  const t = useTranslations("projectsHeader");
  const d = useTranslations("projects");
  const locale = useLocale();
  const imgs = ["/project1.jpg", "/project2.jpg", "/project3.jpg"];
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

          <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/3">
            <motion.div
              initial={{ opacity: 0, x: 10, y: -30 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0 }}
            >
              <ProjectCard
                header={d("header1")}
                disc={d("disc1")}
                img={imgs[0]}
                id={1}
              />
            </motion.div>
          </CarouselItem>

          <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/3">

      <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <ProjectCard header={d("header2")} disc={d("disc2")} img={imgs[1]} id={2}/>
      </motion.div>
          </CarouselItem>


            <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/3">
      <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ProjectCard header={d("header3")} disc={d("disc3")} img={imgs[2]} id={3} />
      </motion.div>
          </CarouselItem>

            <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/3">
      <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ProjectCard header={d("header1")} disc={d("disc1")} img={imgs[0]} id={4} />
      </motion.div>
          </CarouselItem>

            <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/3">
      <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ProjectCard header={d("header2")} disc={d("disc2")} img={imgs[1]} id={5} />
      </motion.div>
          </CarouselItem>
          
            <CarouselItem className="basis-3/4 md:basis-1/2 lg:basis-1/3">
      <motion.div
        initial={{ opacity: 0, x: 10, y: -30 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <ProjectCard header={d("header3")} disc={d("disc3")} img={imgs[2]} id={6} />
      </motion.div>
          </CarouselItem>
        </CarouselContent>
      </Carousel>


    </div>
  );
}

export default ProjectsSection;
