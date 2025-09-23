import Image from "next/image";
import React from "react";
import { services } from "@/data/shared";
import * as motion from "motion/react-client"; //server
import SideBlog from "@/app/components/sideBlogs";
function SingleService({ params }) {
      const id = params?.id;
      const serv = services?.find((item) => item.id === Number(id));
       const otherServices = services?.filter((item) => item.id !== Number(id))
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
            {serv?.header}
          </h1>
          <Image
            src={serv?.image}
            alt="serv"
            width={500}
            height={500}
            className="object-cover w-full h-[45vh] rounded-xl "
          />
          <div className="  text-gray-400 space-y-6">
            <p>{serv.body}</p>
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
          <div className="flex items-center gap-4  border-b-main border-b-2 pb-4">
            <Image
              src="/assets/footer.png"
              alt="author"
              width={100}
              height={100}
              className="object-contain p-2 bg-light-black rounded-md size-24"
            />
            <div>
              <p className="font-semibold  text-main text-lg">By:</p>
              <p className="font-bold text-lg text-white">{serv?.author}</p>
              <p className="text-sm text-gray-400">Created at : {serv?.date}</p>
            </div>
          </div>
          <div className="space-y-6">
            <h2 className=" text-2xl font-semibold text-main">Related Services</h2>
           <SideBlog page="services" other={otherServices} />
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default SingleService
