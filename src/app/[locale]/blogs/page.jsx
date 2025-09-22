import Header from "@/app/components/header";
import { useTranslations } from "next-intl";
import React from "react";
import * as motion from "motion/react-client"; //server
import BlogCard from "@/app/components/blogCard";

function BlogPage() {
  const d = useTranslations("blogHeader");
  const f = useTranslations("blogs");
  const imgs = [
    "/blog1.jpg",
    "/blog2.jpg",
    "/blog3.png",
    "/blog1.jpg",
    "/blog2.jpg",
    "/blog3.png",
  ];
  return (
    <div className=" container   ">
      <div className="pb-20 pt-24 lg:pt-32  space-y-12">
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
            <BlogCard
              title={f("title1")}
              disc={f("disc1")}
              img={imgs[index]}
              id={index + 1}
            />
          </motion.div>
        ))}
      </div>
      </div>
    </div>
  );
}

export default BlogPage;
