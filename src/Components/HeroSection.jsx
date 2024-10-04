import React from "react";
import Banner from "../Assets/herosection.webp";

export default function HeroSection({ scroll }) {
  return (
    <main className="relative w-full h-[calc(100%-100px)] rounded-lg mb-20">
      <div className="absolute w-[calc(100%-10px)] mx-auto inset-0 bg-gradient-to-b from-black/80 to-transparent rounded-lg"></div>
      <img
        loading="lazy"
        src={Banner}
        className="w-[calc(100%-10px)] h-full mx-auto rounded-xl md:object-cover md:object-center object-right object-cover"
      />
      <div className="absolute w-[350px] -translate-y-1/2 top-[38%] md:top-[40%] -translate-x-1/2 left-1/2 md:w-[750px]">
        <h1 className="text-[40px] font-bold text-center text-white">
          OKINT STONE
        </h1>
        <h1 className="text-[25px] sm:text-3xl md:text-5xl text-white text-center mt-6 mb-6 sm:mt-8 sm:mb-8 md:mt-10 md:mb-10 font-thin">
          High-quality marble and natural stones for your vision.
        </h1>
        <nav className="flex items-center justify-center gap-x-8 md:gap-x-20 md:mt-5">
          <a
            className="rounded-full text-nowrap font-semibold px-3 text-xs py-2.5 sm:px-6 sm:py-4 md:px-8 md:py-5 bg-black/70 md:font-normal tracking-tight hover:bg-black/50 text-white md:text-xl"
            href="https://wa.me/905396969720"
            target="_blank"
          >
            Contact Us
          </a>
          <a
            onClick={scroll}
            className="cursor-pointer rounded-full sm:px-6 font-semibold sm:py-4 text-xs md:px-8 px-3 py-2.5 md:py-5 text-nowrap bg-black/70 md:font-normal tracking-tight hover:bg-black/50 text-white md:text-xl"
          >
            Explore Our Products
          </a>
        </nav>
      </div>
    </main>
  );
}
