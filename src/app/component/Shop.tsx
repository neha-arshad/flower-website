"use client"
import Image from "next/image";
import React from "react";

const Shop = () => {
	
  return (
    <div className="mr-60 ml-60 p-10 bg-white grid grid-cols-3 gap-4 " id="shop">
      <div className="relative bg-white">
        <Image src="/Images/Rectangle4.png" alt="CAMELLIAS" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
          <span className="text-white text-xl font-bold">CAMELLIAS</span>
          <span className="text-white font-medium">SHOP NOW</span>
        </div>
      </div>

      <div className="relative bg-white">
        <Image src="/Images/Rectangle5.png" alt="BERAMOT" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
          <span className="text-white text-xl font-bold">BERAMOT</span>
          <span className="text-white font-medium">SHOP NOW</span>
        </div>
      </div>

      <div className="relative">
        <Image src="/Images/Rectangle6.png" alt="BOTTLEBRUSH" />

        <div className="absolute inset-0 flex flex-col items-center justify-center bg-opacity-50">
          <span className="text-white text-xl font-bold">BOTTLEBRUSH</span>
          <span className="text-white font-medium">SHOP NOW</span>
        </div>
      </div>
    </div>
  );
};

export default Shop;



