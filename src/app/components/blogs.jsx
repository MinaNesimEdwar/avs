import React from "react";
import BlogCard from "./blogCard";
import Header from "./header";
import { useTranslations } from "next-intl";
import * as motion from "motion/react-client"; //server

function Blogs() {
  const t = useTranslations("blogHeader");
  const d = useTranslations("blogs");
  const imgs = ["/blog1.jpg", "/blog2.jpg", "/blog3.png"];
  return (
    <div className=" container space-y-6 py-12 lg:py-20">
      <Header title={t("title")} disc={t("disc")} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <motion.div
                initial={{opacity:0,x:-30,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0}}
        >
          <BlogCard title={d("title1")} disc={d("disc1")} img={imgs[0]} />
        </motion.div>
        <motion.div
                initial={{opacity:0,x:-30,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.2}}
        >
          <BlogCard title={d("title2")} disc={d("disc2")} img={imgs[1]} />
        </motion.div>
        <motion.div
                initial={{opacity:0,x:-30,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.4}}
        >
          <BlogCard title={d("title3")} disc={d("disc3")} img={imgs[2]} />
        </motion.div>
      </div>
    </div>
  );
}

export default Blogs;
