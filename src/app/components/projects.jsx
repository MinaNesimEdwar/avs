import React from "react";
import Header from "./header";
import { useTranslations } from "next-intl";
import ProjectCard from "./projectCard";
import * as motion from "motion/react-client"; //server
function Projects() {
  const t = useTranslations("projectsHeader");
  const d = useTranslations("projects");
  const imgs=["/project1.jpg","/project2.jpg","/project3.jpg"]
  return (
    <div className=" container space-y-8 py-12 lg:py-20">
      <Header title={t("title")} disc={t("disc")} />
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        
        <motion.div
         initial={{opacity:0,x:10,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0}}
        ><ProjectCard header={d("header1")} disc={d("disc1")} img={imgs[0]}/></motion.div>
        <motion.div
         initial={{opacity:0,x:10,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.2}}
        ><ProjectCard header={d("header2")} disc={d("disc2")} img={imgs[1]}/></motion.div>
        <motion.div
         initial={{opacity:0,x:10,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.4}}
        ><ProjectCard header={d("header3")} disc={d("disc3")} img={imgs[2]}/></motion.div>
        
        
      </div>
    </div>
  );
}

export default Projects;
