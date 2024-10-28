import React from "react";
import mysuru from "../../assets/mysuru.svg";
import rajasthan from "../../assets/rajasthan.svg";
import thailand from "../../assets/thailand.svg";
import borabora from "../../assets/borabora.svg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function CoursalSection() {
  const destinations = [
    { image: mysuru, name: "MySuru" },
    { image: thailand, name: "Thailand" },
    { image: borabora, name: "borabora" },
    { image: rajasthan, name: "Rajasthan" },
    { image: mysuru, name: "MySuru" },
    { image: thailand, name: "Thailand" },
    { image: borabora, name: "borabora" },
    { image: rajasthan, name: "Rajasthan" },
  ];
  return (
    <section className="w-full  h-auto relative">
      <div className="relative h-auto min-h-[1080px]">
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
              className="w-[411px] h-[662px] rounded-lg overflow-hidden shadow-md bg-opacity-50 backdrop-filter backdrop-blur-sm flex-shrink-0 border-white"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover opacity-90"
              />
              <p className="text-center text-white bg-[#012831] bg-opacity-80 py-2">
                {destination.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
