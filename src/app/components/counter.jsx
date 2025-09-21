"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const CounterItem = ({ value, label, duration = 2000 ,delay}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    const increment = end / (duration / 16); // update every ~16ms (60fps)

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.div
      initial={{ y: 50, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{once:true}}
        transition={{ duration: 0.6, delay :delay}}
      className="text-center  capitalize space-y-4  bg-light-black p-4 lg:p-14 rounded-3xl font-bold border border-main/20 "
    >
      <p className="text-white  md:text-4xl">
        {count}
        {value === 25 || value === 75 ? "+" : ""}
      </p>
      <p className=" text-xs md:text-lg">{label}</p>
    </motion.div>
  );
};

const Counter = () => {
 const t = useTranslations("counter");
  return (
    <motion.div
      initial={{ opacity: 0 ,y:30}}
      whileInView={{ opacity: 1 ,y:0}}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="container     px-16 py-8   flex items-center justify-center gap-8 text-main   "
    >
      <CounterItem value={660} label={t("projects")} delay={0.2} />
      <CounterItem value={25} label={t("years")} delay={0.4}/>
      <CounterItem value={75} label={t("clients")} delay={0.6}/>
    </motion.div>
  );
};

export default Counter;
