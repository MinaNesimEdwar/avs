import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { BsCart3 } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import * as motion from "motion/react-client"; //server
function ProductCard({title,disc,img,id}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30, y: 30 }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, delay: id * 0.2 }}
    >
      <Card
        className={
          "py-0 overflow-hidden bg-light-black border-main rounded-3xl relative group"
        }
      >
        <CardContent className=" aspect-square space-y-4  p-0">
          <div className="  bg-white overflow-hidden">
            <Image
              src={img}
              className=" h-56 w-full  object-contain"
              width={150}
              height={150}
            />
          </div>

          <div className=" px-4 py-8 space-y-4">
            <h3 className=" text-lg text-white font-bold">
              {title}
            </h3>
            <p className=" text-gray-400 line-clamp-2">
              {disc}
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
          <Link href={`/products/${id}`}>
              <FaRegEye className=" text-2xl hover:text-main transition-all duration-300 cursor-pointer" />
          </Link>
          <BsCart3 className=" text-2xl hover:text-main transition-all duration-300 cursor-pointer" />
        </div>
      </Card>
    </motion.div>
  );
}

export default ProductCard;
