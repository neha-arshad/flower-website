"use client";
import React from "react";
import "animate.css";

const Herosection = () => {
  return (
    <section id="Home">
      <div className="mr-60 ml-60 sm:grid-cols-12">
        <div className="text-black bg-[#F3C5C9] p-44 pl-10">
          <div className="flex flex-col items-start">
            <h1 className="text-[#E6493C] text-xl font-semibold font-serif p-px">
              NEW ARRIVALS
            </h1>
            <h1
              className="animate__animated animate__tada"
              style={{
                fontWeight: "bold",
                fontSize: "3rem",
                fontFamily: "sans-serif",
                animationDuration: "3s",
              }}
            >
              FOr MOther's day
            </h1>
            <p className="text-black pt-5 font-sans">
              EXCLUSIVE offer 10% off this week
            </p>
          </div>
          <button className="text-white mt-14 px-4 py-2 bg-[#FF3E2B]">
            SHOP NOW
          </button>
          {/* First Image */}
          <img
            className="absolute bottom-10 right-96 w-[500px] h-[500px]"
            src="/Images/hero2.png"
            alt="hero image"
          />

          {/* Second Image - slightly overlapping the first one */}
          <img
            className="absolute top-28 right-56 w-[600px] h-[600px]"
            src="/Images/hero-image.png"
            alt="second image"
          />
          {/* Third Image - overlapping both first and second images */}
          <img
            className="absolute top-48 right-44  w-[520px] h-[520px]"
            src="/Images/hero3.png"
            alt="third image"
          />
        </div>
      </div>
    </section>
  );
};

export default Herosection;
