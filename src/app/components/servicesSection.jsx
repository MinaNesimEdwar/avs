
import { useTranslations } from 'next-intl';

import React from 'react'

import ServCard from './servCard';
import Header from './header';
import * as motion from "motion/react-client"; //server

function ServicesSection() {
    const t =useTranslations("services") 
    const d =useTranslations("servHeader") 
    
const imgs=["/serv1.png","/serv2.png","/serv3.png","/serv1.png"]

  return (
    <div className=' container space-y-8 py-12 lg:py-20'>
      <Header title={d("title")} disc={d("disc")}/>
      <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4'>
        <motion.div
        initial={{opacity:0,x:10,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0}}
        ><ServCard header={t("header1")} disc={t("disc1")} img={imgs[0]} /></motion.div> 
        <motion.div
        initial={{opacity:0,x:10,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.2}}
        ><ServCard header={t("header2")} disc={t("disc2")} img={imgs[1]}/></motion.div>
        <motion.div
        initial={{opacity:0,x:10,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.4}}
        ><ServCard header={t("header3")} disc={t("disc3")} img={imgs[2]}/></motion.div>
        <motion.div
        initial={{opacity:0,x:10,y:-30}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once:true}}
        transition={{duration:1,delay:0.6}}
        ><ServCard header={t("header4")} disc={t("disc4")} img={imgs[3]}/></motion.div>
        
      </div>
    </div>
  )
}

export default ServicesSection
