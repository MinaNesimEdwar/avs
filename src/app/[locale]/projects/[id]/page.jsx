import Image from "next/image";
import React from "react";
import { projects } from "@/data/shared";
import * as motion from "motion/react-client"; //server
import SideBlog from "@/app/components/sideBlogs";
import ContactSection from "@/app/components/contactSection";

function SingleProject({ params }) {
  const id = params?.id;
  const project = projects?.find((item) => item.id === Number(id));
   const otherProjects = projects?.filter((item) => item.id !== Number(id))
  return (
    <div className=" container pb-20 pt-24 lg:pt-32  ">
      <div className="container grid grid-cols-12 xl:gap-x-10 gap-y-12 ">
        {/* content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="col-span-12 xl:col-span-8 space-y-6"
        >
          <h1 className="lg:text-3xl text-2xl font-bold leading-tight text-main">
            {project?.header}
          </h1>
          <Image
            src={project?.image}
            alt="project"
            width={500}
            height={500}
            className="object-cover w-full h-[45vh] rounded-xl "
          />
          <div className="  text-gray-400 space-y-6">
            <p>{project.body}</p>
          </div>
        </motion.div>
        {/* author & related */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="col-span-12 xl:col-span-4 space-y-6"
        >

          <div className="space-y-6">
            <h2 className=" text-2xl font-semibold text-main">Related Projects</h2>
           <SideBlog page={"projects"} other={otherProjects} />
          </div>
        </motion.div>
        <div className=" col-span-12">
          <ContactSection/>
        </div>

      </div>
    </div>
  );
}

export default SingleProject;
