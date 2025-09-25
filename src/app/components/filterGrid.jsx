import React from "react";
import { products } from "@/data/shared";
import ProductCard from "./productCard";

function FilterGrid() {
 
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {products.map((product,index) => (
        <ProductCard key={index} title={product.title} disc={product.description} img={product.image} />
      ))}
    </div>
  );
}

export default FilterGrid;
