import React from "react";
import * as motion from "motion/react-client"; //server
import AboutSection from "@/app/components/aboutSection";
import ServicesSection from "@/app/components/servicesSection";

function About() {
  return (
    <div className="container  py-16 lg:pt-28 ">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div
          className=" bg-no-repeat bg-cover bg-center h-[50vh]"
          style={{ backgroundImage: "url('/aboutPage.jpg')" }}
        >
          <div className="bg-black/60 h-full   flex flex-col items-center justify-center">
            <div className="text-center ">
              <h2 className="lg:text-4xl font-bold text-main ">About Us</h2>
              <p className="text-white ">who we are</p>
            </div>
          </div>
        </div>
      </motion.div>

      <div className=" grid grid-cols-1 my-20 md:grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h3 className=" text-main text-2xl font-bold">Our Vision</h3>
          <p className=" text-gray-400 leading-7">
            Our Company Vision is based on the principle of being responsible
            and mutual respect. It also works through a distinct environment
            with a solid structure that encourages more productivity and
            emphasizes the principle of respect for clients and employees. AVS
            evolved into an advanced solutions provider, focused on servicing
            customers and creating value through long term relationships that we
            build. We are looking forward to provide unique service and fixed
            costs based on our customers’ needs and budget.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-4"
        >
          <h3 className=" text-main text-2xl font-bold">Our Mission</h3>
          <p className=" text-gray-400 leading-7">
            A passion for results” is at the core of everything we do, that’s
            why our mission is to maintain a leading market position in
            providing cutting-edge light current solutions, and premium consumer
            product technologies with emphasis on innovation and excellence
            -every time.
          </p>
        </motion.div>
      </div>
      <div>
        <AboutSection />
        <ServicesSection />
      </div>
    </div>
  );
}

export default About;
