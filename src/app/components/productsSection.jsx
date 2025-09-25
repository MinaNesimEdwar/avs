import React from "react";
import Header from "./header";
import { useLocale, useTranslations } from "next-intl";
import { products } from "@/data/shared";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductCard from "./productCard";




function ProductsSection() {
  const t = useTranslations("productHeader");
  const locale =useLocale();
  
  return (
    <div className=" container  py-12 lg:py-20">
      <Carousel
        className={"mx-auto max-w-[90%] md:max-w-full space-y-8"}
        opts={{ loop: true, align: "start" ,direction: locale === "ar" ? "rtl" : "ltr" }}
        dir={locale === "ar" ? "rtl" : "ltr"} 
      >
        <div className="max-md:flex-col flex items-center max-md:gap-4 justify-between">
          <Header title={t("title")} disc={t("disc")} />
          <div className={`flex items-center gap-2 ${locale === "ar" ? "flex-row-reverse justify-end" : ""}`}>
                    <CarouselPrevious
          className={
            "hover:bg-main transition-all duration-300 size-9 cursor-pointer border-0  static translate-0"
          }
        />
        <CarouselNext
          className={
            "hover:bg-main transition-all duration-300 size-9 cursor-pointer border-0  static translate-0"
          }
        />
          </div>
        </div>

        <CarouselContent>
          {products.map((item) => (
            <CarouselItem
              key={item.id}
              className="basis-3/4 md:basis-1/2 lg:basis-1/4"
            >
              <ProductCard id={item.id} title={item.title} disc={item.description} img={item.image}/>
            </CarouselItem>
          ))}
        </CarouselContent>

      </Carousel>
    </div>
  );
}

export default ProductsSection;
