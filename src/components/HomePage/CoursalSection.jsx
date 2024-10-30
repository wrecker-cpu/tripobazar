import React from "react";
import YellowCircularDisc from "../../../svgs/Home/YellowCircularDisc/index";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import elephant from "/Elephant.png?url";
import ocean from "/Ocean.png?url";
import couples from "/Couples.png?url";
import explorer from "/Explorer.png?url";

export default function CoursalSection() {
  const destinations = [
    { image: elephant, name: "MySuru" },
    { image: ocean, name: "Thailand" },
    { image: couples, name: "Borabora" },
    { image: explorer, name: "Rajasthan" },
    { image: elephant, name: "MySuru" },
    { image: ocean, name: "Thailand" },
    { image: couples, name: "Borabora" },
    { image: explorer, name: "Rajasthan" },
  ];
  return (
    <section className="w-full  h-auto relative">
      <div className="relative h-auto min-h-[865px] em:min-h-[1080px]">
        <div className="absolute top-0 left-0 h-2/3 w-full bg-[#012831]"></div>
        <div className="absolute bottom-0 left-0 h-1/3 w-full bg-white"></div>
        <div className="relative z-10 pt-14 pb-14 border-b border-white text-white">
          <h3 className="text-[30px] md:text-[40px] text-center font-bold mb-4">
            Trending Destinations
          </h3>
          <p className="md:text-base text-sm text-center font-thin">
            We provide a wide range of destination packages as we want our
            customers <br />
            to have a great time exploring new places and have fun.
          </p>
        </div>
        <div className="w-full flex justify-center my-12 gap-4 relative z-10">
          <button className="w-10 h-10 opacity-70 hover:opacity-90 bg-white rounded-full flex items-center justify-center">
            <BsArrowLeft />
          </button>
          <button className="w-10 h-10 opacity-70 hover:opacity-90 bg-white rounded-full flex items-center justify-center">
            <BsArrowRight />
          </button>
        </div>
        <div className="flex px-4 md:px-24 flex-row relative z-10 gap-4 scrollbar-hide overflow-x-auto">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="w-full h-auto max-w-[411px] em:h-[662px] rounded-lg overflow-hidden shadow-md bg-opacity-50 backdrop-filter backdrop-blur-sm flex-shrink-0 border-white"
            >
              <div className="w-auto h-auto relative">
                <img
                  className="w-full h-full object-cover"
                  src={destination.image}
                  alt="wth"
                />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <YellowCircularDisc />
                  <div className="absolute inset-0 flex items-center justify-center text-6xl leading-10 text-white">
                    <p>{destination.name}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
