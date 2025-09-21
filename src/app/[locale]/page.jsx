import { useTranslations } from "next-intl";

// import { motion } from "framer-motion"  //client
import * as motion from "motion/react-client"; //server
import HeroSection from "../components/heroSection";
import ServicesSection from "../components/servicesSection";
import AboutSection from "../components/aboutSection";
import Blogs from "../components/blogs";
import Partner from "../components/partner";
import Brands from "../components/brands";
import Projects from "../components/projects";
import Navbar from "../components/navbar";
import ProductsSection from "../components/productsSection";
import Footer from "../components/footer";
import Counter from "../components/counter";



export default function Home() {
  return (
    <div className="  space-y-12">
      <Navbar/>
      <HeroSection />
     <Counter/>
      <AboutSection />
      <Partner />
      <ServicesSection />
      <Projects/>
      <Brands/>
      <ProductsSection/>
      <Blogs />
      <Footer/>
    </div>
  );
}
