import Header from "@/app/components/header";
import { useTranslations } from "next-intl";
import React from "react";
import * as motion from "motion/react-client"; //server
import ProjectCard from "@/app/components/projectCard";
import ContactSection from "@/app/components/contactSection";

function ProjectsPage() {
      const d = useTranslations("projectsHeader");
      const f = useTranslations("blogs");
     const imgs = [
    "/project1.jpg",
    "/project2.jpg",
    "/project3.jpg",
    "/project1.jpg",
    "/project2.jpg",
    "/project3.jpg",

  ];
  return (
    <div className=' container pb-20 pt-24 lg:pt-32  space-y-12'>
      <Header title={d("title")} disc={d("disc")} align="text-center" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: index * 0.2 }}
          >
            <ProjectCard
              title={f("title1")}
              disc={f("disc1")}
              img={imgs[index]}
              id={index + 1}
            />
          </motion.div>
        ))}
      </div>
      <ContactSection/>
    </div>
  )
}

export default ProjectsPage
