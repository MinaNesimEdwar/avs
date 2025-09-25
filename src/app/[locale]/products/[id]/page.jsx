import React from "react";
import { products } from "@/data/shared";
import Image from "next/image";

function SingleProduct({ params }) {
  const id = params.id; // Next.js App Router automatically provides params
  const product = products.find((item) => item.id === Number(id));
    
  if (!product) {
    return <div className="container py-20 text-white">Product not found</div>;
  }

  return (
    <div className="container py-20 grid grid-cols-1 md:grid-cols-[40%_60%] gap-12">
      {/* Image */}
      <div>
        <Image
          src={product.image}
          alt={product.title}
          width={600}
          height={600}
          className="object-cover w-full h-[400px] rounded-xl"
        />
      </div>

      {/* Details */}
      <div className="space-y-6">
        <h1 className="text-3xl font-bold text-main">{product.title}</h1>
        <p className="text-gray-300 whitespace-pre-line">{product.description}</p>
        <p className="text-2xl font-bold text-main">$35.85</p>
        <button className="px-6 py-3 bg-main text-white rounded-xl hover:bg-main/80 transition">
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
