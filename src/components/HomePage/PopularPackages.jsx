import React, { useState } from "react";
import dubai from "../../assets/home/dubai.png";
import newyork from "../../assets/home/newyorkk.jpg";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";

export default function PopularPackages() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const carouselItems = [
    {
      image: dubai,
      location: "Dubai",
      country: "UAE",
      price: "₹ 48,999",
      description: "Dubai travel plans starting at just ₹39,999.",
    },

    {
      image: newyork,
      location: "NEW YORK",
      country: "USA",
      price: "$ 2,199",
      description: "Experience New York from $2,199.",
    },
  ];
  const progressWidth = ((currentIndex + 1) / carouselItems.length) * 100;
  const { image, location, country, price, description } =
    carouselItems[currentIndex];

  return (
    <section className=" relative text-center max-w-[1720px] mx-auto">
      <div className="relative w-auto h-auto mx-auto flex items-center">
        {/* Main Image Container */}
        <div className="w-full md:w-[76%] h-[805px] overflow-hidden rounded-lg">
          <img
            src={image}
            alt={location}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay Container */}
        <div className="absolute bottom-auto right-auto md:top-auto md:left-auto top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 md:-bottom-6 md:right-0 w-[90%] mx-auto vem:mx-0 vem:w-[500px] lg:w-[42.8%] h-[624px] md:h-[700px] bg-white p-4  rounded-lg">
          {/* Green Small Div */}
          <div className="absolute top-0 left-0 ">
            <p className="text-[.7rem] bg-[#00B58A] rounded-br-lg rounded-tl-lg  h-10 flex items-center justify-center w-44  font-semibold text-white ">
              seasonal offer{" "}
            </p>
          </div>

          {/* Location and Price Info */}
          <div className=" mt-5">
            <h3 className="text-3xl md:text-5xl mb-4 md:mb-8 mt-16 font-bold">
              {location}
              <span className="text-gray-600 text-base md:text-xl font-medium">
                ,{country}
              </span>
            </h3>
            <div className="flex flex-row justify-center gap-4 mb-4 md:mb-10 max-w-lg mx-auto">
              <p className="text-gray-600 text-sm md:text-lg rounded-lg bg-[#f8f8f8] font-medium p-4 ">
                8 Days 7 Nights
              </p>
              <p className="text-gray-600 text-sm md:text-lg rounded-lg bg-[#f8f8f8] font-medium p-4 ">
                2 Guests
              </p>
            </div>

            <h2 className="  bg-[white] text-5xl font-bold text-[#00B58A] inline-block px-2 py-1 rounded-md">
              {price}
            </h2>
            <p className="mt-2 font-semibold">What’s included?</p>

            {/* Included Icons */}

            {/* Book Now Button */}
            <button className="mt-4 px-4 py-2 bg-[#03B58B] text-white rounded-md font-medium">
              Book Now
            </button>
          </div>

          {/* Additional Info Section */}
          <div className="absolute rounded-b-lg bottom-0 left-0 w-full  mt-4  border-t border-gray-200 bg-[#EDF7F9]">
            <p className="mt-8 text-sm md:text-base xlg:text-lg tracking-wide">
              Our travel plans include all facilities as per your custom
              requirements.
            </p>
            <p className="font-semibold text-base xlg:text-lg tracking-wide mt-2">
              {description}
            </p>
            <button className="border-[.1rem] mt-7 mb-8 rounded-lg text-[#03B58B] border-[#012831] w-2/5 font-poppins text-[.8rem] font-medium px-2 py-2">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <div className="flex flex-row gap-10 py-4 justify-between items-center w-[98%] md:w-[56%]">
        <div className="w-auto flex gap-2 justify-start">
          {" "}
          <button onClick={handlePrev} className="  transform text-2xl  ">
            <BsArrowLeft />
          </button>
          <button onClick={handleNext} className=" transform text-2xl  ">
            <BsArrowRight />
          </button>
        </div>
        <div className="h-[2px] w-full bg-gray-200">
          <div
            style={{ width: `${progressWidth}%` }}
            className="h-full  bg-zinc-900"
          ></div>
        </div>
      </div>
    </section>
  );
}
