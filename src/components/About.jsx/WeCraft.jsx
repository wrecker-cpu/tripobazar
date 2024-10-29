import React from "react";
import image from "../../AboutUs/bg-aboutus-1.jpg";

function WeCraft() {
  return (
    <section
      className="relative w-full h-56 md:h-96 sm:h-80 bg-top bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="absolute inset-0 h-full w-full " />
      <div className="flex flex-col justify-center items-start h-full text-white px-4 sm:px-9">
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-[4rem] font-extrabold">
          WE CRAFT
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mt-2 md:mt-1">
          A journey that is yours.
        </p>
      </div>
    </section>
  );
}

export default WeCraft;
