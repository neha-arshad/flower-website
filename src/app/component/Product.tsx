"use client"
import React from 'react'
import Image from "next/image";
import CountdownTimer from './Countdown';


const Product = () => {
  return (
    <>
      <div className="mr-60 ml-60 bg-white" id='product'>
        <h1 className="text-black mb-6 pt-5 pl-14">Featured Products</h1>

        <div className="grid grid-cols-4 gap-4">
          <div className="relative">
            <Image
              src="/Images/Frame4.png"
              alt="Featured Product 1"
              width={500}
              height={300}
              className="object-cover"
            />
            <span className="text-black pl-5 text-xs font-semibold ">
              A bouquet of red colored flowers
            </span>
            <span className="text-black pl-20 text-sm"> $64.00</span>
          </div>

          <div className="relative">
            <Image
              src="/Images/Frame.4.1.png"
              alt="Featured Product 2"
              width={500}
              height={300}
              className="object-cover"
            />
            <span className="text-black pl-7 text-xs font-semibold">
              A bouquet of colors flowers
            </span>
            <span className="text-black pl-20 text-sm"> $64.00</span>
            <span className="text-[#FD0707] line-through pl-4">$120.00</span>
          </div>

          <div className="relative">
            <Image
              src="/Images/Frame.4.2.png"
              alt="Featured Product 3"
              width={500}
              height={300}
              className="object-cover"
            />
            <p className="absolute top-4 left-6 text-white p-1  bg-[#FF3C2A]">
              new
            </p>
            <span className="text-black pl-8 text-xs font-semibold">
              A bouquet of colors flowers
            </span>
            <span className="text-black pl-20 text-sm"> $50.00</span>
          </div>

          <div className="relative">
            <Image
              src="/Images/Frame4.3.png"
              alt="Featured Product 4"
              width={500}
              height={300}
              className="object-cover"
            />
            <p className="absolute top-6 left-6 text-white p-1 bg-[#FF3C2A]">
              new
            </p>
            <span className=" text-black pl-8 text-xs font-semibold">
              {" "}
              A bouquet of colors flowers
            </span>
            <span className="text-black pl-20 text-sm"> $55.00</span>
          </div>
        </div>
      </div>

      <div className="ml-60 mr-60 bg-gradient-to-b from-[#D972A2] to-[#8B1F44] p-20 pt-5 h-96 flex">
        <Image
          src="/Images/product-image.png"
          alt="Product Image"
          className="w-[400px] h-[350px] "
        />
        <span className="text-white mt-28 pl-5 text-2xl italic font-mono ">
          Quality flowers for any occasion
        </span>
      </div>
      <div className="mr-60 ml-60 bg-white p-11">
        <div>
          <h1 className="text-black mt-24 pl-8 text-xl font-bold">
            Best-selling Products
          </h1>
        </div>
        <div className="flex items-center mt-8">
          <Image
            src="/Images/Frame.4.2.png"
            alt="hot deal"
            className="w-[500px] h-[500px]"
          />
          <div className="pl-5  flex flex-col">
            <span className="text-black mt-28 pl-5 text-2xl font-bold ">
              Hot deal
            </span>
            <span className="text-black mt-28 pl-14 text-2xl font-extrabold">
              Sale upto 20% off
            </span>
            <div className="mt-4">
              <CountdownTimer />
            </div>
            <div>
              <button className="bg-[#E6493C] p-3 m-10 ml-24 rounded-lg ">Buy now</button>
            </div>
          </div>
        </div>
      </div>
      <div className="ml-60 mr-60 bg-white">
        <h1 className="text-black font-bold text-xl pl-10">Hot flowers</h1>
        <div className="grid grid-cols-4 gap-4">
          <div className="relative">
            <Image src="/Images/hot-flower1.png" alt="sunflower" />
            <span className="text-black text-xs pl-14">
              A bouquet of sunflower
            </span>
            <span className="text-black text-sm pl-10 block">$55.00</span>
          </div>

          <div className="relative">
            <Image src="/Images/hot-flower2.png" alt="pink nd white rose" />
            <span className="text-black text-xs pl-14">A bouquet of Roses</span>
            <span className="text-black text-sm pl-14"> $55.00</span>
            <span className="text-[#FD0707] line-through pl-4">$120.00</span>
          </div>

          <div className="relative">
            <Image src="/Images/hot-flower3.png" alt="Purple rose" />
            <span className="text-black text-xs pl-14">A bouquet of Roses</span>
            <span className="text-black text-sm pl-14 block"> $62.00</span>
          </div>

          <div className="relative">
            <Image src="/Images/hot-flower4.png" alt="pink nd white rose" />
            <span className="text-black text-xs pl-14">
              A bouquet of colorful Roses
            </span>
            <span className="text-black text-sm pl-14 block"> $68.00</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
