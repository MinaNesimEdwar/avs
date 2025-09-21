import React from 'react'
import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import Header from './header';
import { useTranslations } from 'next-intl';
const images = [
  "/assets/Logo Cliecnt/client1.png",
  "/assets/Logo Cliecnt/client2.png",
  "/assets/Logo Cliecnt/client3.png",
  "/assets/Logo Cliecnt/client4.png",
  "/assets/Logo Cliecnt/client5.png",
  "/assets/Logo Cliecnt/client6.png",
  "/assets/Logo Cliecnt/client7.png",
  "/assets/Logo Cliecnt/client8.png",
  "/assets/Logo Cliecnt/client9.png",
  "/assets/Logo Cliecnt/client10.png",
  "/assets/Logo Cliecnt/client11.png",
  "/assets/Logo Cliecnt/client12.png",
  "/assets/Logo Cliecnt/client13.png",
  "/assets/Logo Cliecnt/client14.png",
  "/assets/Logo Cliecnt/client15.png",
  "/assets/Logo Cliecnt/client16.png",
  "/assets/Logo Cliecnt/client17.png",
  "/assets/Logo Cliecnt/client18.png",
  "/assets/Logo Cliecnt/client19.png",
  "/assets/Logo Cliecnt/client20.png",
  "/assets/Logo Cliecnt/client21.png",
  "/assets/Logo Cliecnt/client22.png",
  "/assets/Logo Cliecnt/client23.png",
  "/assets/Logo Cliecnt/client24.png",
  "/assets/Logo Cliecnt/client25.png",
  "/assets/Logo Cliecnt/client26.png",
  "/assets/Logo Cliecnt/client27.png",
  "/assets/Logo Cliecnt/client28.png",
  "/assets/Logo Cliecnt/client29.png",
];
function Partner() {
    const t = useTranslations("partnerHeader");
  return (
    <div className=' bg-light-black py-12 lg:py-20 '>
      <div className=' container space-y-10 '>
      
        <Header title={t("title")} disc={t("disc")}/>

      <div className="relative flex w-full flex-col items-center justify-center overflow-hidden  ">
  <Marquee pauseOnHover repeat={10}>
    {images.map((src, idx) => (
      <div key={idx} className="w-52  flex items-center justify-center   ">
        <Image
          src={src}
          alt={`client-logo-${idx}`}
          className="object-contain "
          width={120}
          height={120}
        />
      </div>
    ))}
  </Marquee>

  {/* Left Gradient (25%) */}
  <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black-50  to-transparent" />

  {/* Right Gradient (25%) */}
  <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black-50  to-transparent" />
</div>
    </div>
  </div>)

}

export default Partner
