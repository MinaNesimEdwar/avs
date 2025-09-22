import { useTranslations } from "next-intl";

// import { motion } from "framer-motion"  //client
import * as motion from "motion/react-client"; //server
import HeroSection from "../components/heroSection";
import ServicesSection from "../components/servicesSection";
import AboutSection from "../components/aboutSection";
import Blogs from "../components/blogsSection";
import Partner from "../components/partner";
import Brands from "../components/brands";
import Projects from "../components/projectsSection";
import ProductsSection from "../components/productsSection";
import Counter from "../components/counter";

export default function Home() {
  return (
    <div className="  space-y-12">
      <HeroSection />
      <Counter />
      <AboutSection />
      <Partner />
      <ServicesSection />
      <Projects />
      <Brands />
      <ProductsSection />
      <Blogs />
    </div>
  );
}
