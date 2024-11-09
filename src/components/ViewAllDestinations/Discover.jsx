import React from "react";
import image1 from "../../assets/aboutus/image1over.jpg";
import image2 from "../../assets/aboutus/image2over.jpg";
function Discover() {
  return (
    <div>
      <section className="w-[90%] mt-5 mx-auto h-auto mb-7  bg-[#F8F8F8] flex flex-col md:flex-row ">
        {/* First Div */}
        <div className="flex-1 flex flex-col justify-center items-start mb-6 md:mb-0 md:pr-6">
          <h1 className="text-black text-3xl sm:text-4xl lg:text-5xl font-bold">
            Discover <span>Africa</span>
          </h1>

          <p className="text-black mt-4 text-sm sm:text-base lg:text-lg">
            Explore the vibrant rhythms of Africa, where ancient cultures blend
            with modern cities under endless skies. From the vast savannas of
            the Serengeti to the bustling markets of Marrakech, embark on a
            journey of discovery through breathtaking landscapes and rich
            heritage. Experience the warmth of its people, the roar of majestic
            wildlife, and the kaleidoscope of colors that paint this diverse
            continent. Africa awaits, ready to enchant and inspire your soul.
          </p>
          <div className="mt-4 flex flex-wrap gap-4">
            <button className="bg-[#03B58B] text-white hover:text-[#03B58B] hover:bg-white px-4 py-2 rounded shadow">
            Customize Plan
            </button>
      
          </div>
        </div>

        {/* Second Div */}
        <div className="md:flex-1 hidden md:flex justify-center md:justify-end items-center md:items-end relative mt-6 mb- sm:mb-96 md:mb-20 md:mt-0">
          <img
            src={image1}
            alt="Large Image"
            className="rounded-2xl md:me-10 lg:mr-8 shadow-2xl w-3/4 h-auto md:w-5/6 lg:w-3/4 z-1"
          />
          <img
            src={image2}
            alt="Smaller Image"
            className="rounded-2xl shadow-2xl w-1/2 h-auto absolute right-0 bottom-2 md:right-4 md:bottom-0 lg:right-0 lg:bottom-[-3rem] z-10"
          />
        </div>
      </section>
    </div>
  );
}

export default Discover;
