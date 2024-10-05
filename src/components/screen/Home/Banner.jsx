"use client";
import Image from "next/image";
import bannerLine from "@/assets/bannerImages/bannerLine.svg";
import bannerLogo from "@/assets/bannerImages/bannerLogo.svg";
import { useState } from "react";

const Banner = () => {
  const [hover, setHover] = useState(false);

  const heading = `INVESTING,\nBUT EASY`;
  const description = `Stay ahead in the market with \nIntelligent Investment Solutions`;
  return (
    <section className="bg-dark">
      <div className="container2 lg:pt-[72px] lg:pb-[162px] py-16 relative ">
        <div>
          <Image src={bannerLine} className="w-full" alt="banner line"/>
        </div>
        <div className="absolute top-[25%] left-[50%] translate-x-[-50%] translate-y-[-26%] w-fit ">
          <div className="relative lg:w-full md:w-[75%] sm:w-[55%] w-[50%] mx-auto h-fit">
            <Image src={bannerLogo} alt="banner logo"/>
            <h1 className="absolute bottom-0 text-white font-bold uppercase whitespace-pre-line lg:text-3xl md:text-2xl text-lg z-20">
              {heading}
            </h1>
          </div>
        </div>
        <div className="absolute top-[68%] xl:top-[58.5%] left-[50%] translate-x-[-50%]  text-center ">
          <p className="text-white text-xs sm:text-base md:text-xl lg:text-2xl sm:whitespace-pre-line ">
            {description}
          </p>
          <div className="mt-4 md:mt-[34px] ">
            <button
              onMouseEnter={() => {
                setHover(true);
              }}
              onMouseLeave={() => {
                setHover(false);
              }}
              className={` duration-1000 lg:py-6 py-3 lg:px-[70px] px-10 text-white rounded-2xl 
                ${hover === true ? "bg-light " : "btnbg "} 
              `}
              // conditional css was used because default "hover:" class did not worked !!!
            >
              {/* ${hover === true ? "bg-light " : "btnbg "}  */}
              {/* btnbg hover:bg-light duration-300   */} 
              Get started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
