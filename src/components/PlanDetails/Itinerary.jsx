import React from "react";

const Itinerary = () => {
  return (
    <section className="w-full bg-transparent px-4 py-8">
      {/* Title Section */}
      <div className="text-center">
        <h3 className="text-green-600  text-start font-bold text-lg md:text-2xl mt-2">
          Here’s Your Itinerary:
       
        <span className="text-black font-bold text-lg md:text-2xl mt-2">
          Trip to Egypt All Inclusive Deal Seasonal Special Offer
      </span> </h3>
      </div>

      {/* Subtitle Section */}
      <p className="text-gray-700 font-semibold text-sm md:text-base text-start mt-4">
        6 Days 5 Nights: New Delhi, India → Cairo (1N) → Nile River (2N) → Cairo
        (2N) → New Delhi, India
      </p>

      {/* Image Section */}
      <div className="flex flex-col md:flex-row items-center justify-center mt-6 gap-4">
        {/* Main Large Image */}
        <div className="w-full md:w-1/2 lg:w-[60%] ">
          <img
            src="/src/assets/oneContinent.png"
            alt="Main Destination"
            className="rounded-lg shadow-2xl object-cover  w-full h-[250px] md:h-[300px]"
          />
        </div>

        {/* Smaller Images */}
        <div className="grid grid-cols-2 gap-4 w-full md:w-1/2 lg:w-1/3">
          <img
            src="/src/assets/oneContinent.png"
            alt="Image 1"
            className="rounded-lg shadow-2xl object-cover w-full h-[120px] md:h-[140px]"
          />
          <img
            src="/src/assets/oneContinent.png"
            alt="Image 2"
            className="rounded-lg shadow-2xl object-cover w-full h-[120px] md:h-[140px]"
          />
          <img
            src="/src/assets/oneContinent.png"
            alt="Image 3"
            className="rounded-lg shadow-2xl object-cover w-full h-[120px] md:h-[140px]"
          />
          <img
            src="/src/assets/oneContinent.png"
            alt="Image 4"
            className="rounded-lg shadow-2xl object-cover w-full h-[120px] md:h-[140px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Itinerary;
