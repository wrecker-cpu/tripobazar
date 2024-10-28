import React, { useState } from "react";
import dalLek from "../../assets/bg-img.jpg";
import discoverOne from "../../assets/Discover-1.svg";
import FilterSvg from "../../../svgs/FilterSvg/index";
import DatePicker from "react-datepicker";
import ExploreSvg from "../../../svgs/ExploreSvg";
import CoursalSection from "./CoursalSection";
import FromOurTravellers from "./FromOurTravellers";
import PopularPackages from "./PopularPackages";
import YourCustomAdventure from "./YourCustomAdventure";
export default function HomePage() {
  const [guests, setGuests] = useState(1);
  const incrementGuests = () => setGuests(guests + 1);
  const decrementGuests = () => setGuests(guests > 1 ? guests - 1 : 1);

  return (
    <div>
      <section>
        <div className="w-full h-full md:h-[600px] sticky z-10 top-0  md:relative">
          <img className="w-full h-full object-cover" src={dalLek} alt="wth" />
          {/* Top Left Logo and Paragraph */}
          <div className="absolute bottom-80 left-10 hidden md:flex items-center">
            <img src={discoverOne} alt="Logo" className="h-5  mr-2" />
          </div>

          {/* H1 Heading */}
          <div className="flex absolute bottom-auto top-40 md:top-auto left-1/2 -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 md:-translate-y-0 md:bottom-32 md:left-10 justify-start items-center h-auto  ">
            <h1 className="text-white font-poppins text-4xl sm:text-[65px] emd:text-[80px] font-extrabold leading-none">
              DISCOVER NEW <br></br>HORIZONS
            </h1>
          </div>

          {/* Top Right Paragraph */}
          <div className="absolute md:flex hidden top-20 right-4">
            <img src={discoverOne} alt="Logo" className="h-5  mr-2" />
          </div>

          {/* Small Centered Image with Text */}
          <div className="absolute bottom-32 -right-28 xlg:right-28 transform -translate-x-1/2 hidden md:flex justify-center items-center">
            <ExploreSvg />
          </div>
        </div>

        <div className="w-full max-w-[1720px]    h-auto p-4 md:p-16 bg-[#f8f8f8] shadow-lg rounded-lg mx-auto mt-[-2rem] relative z-10">
          {/* Starting Location and Destination Inputs */}
          <div className="flex flex-col md:flex-row items-center jusitfy-between gap-4">
            <div className="flex items-center border bg-[#f8f8f8] rounded-md py-3 px-2 w-full">
              <input
                type="text"
                placeholder="Where are you starting from?"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            <p className="text-gray-500 font-medium">To</p>

            <div className="flex items-center bg-[#f8f8f8] border rounded-md py-3 px-2  w-full">
              {/* <img src={destinationIcon} alt="Destination" className="h-5 w-5 mr-2" /> */}
              <input
                type="text"
                placeholder="Enter Destination"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
            <div className="md:w-auto w-full flex justify-end">
              <div>
                <FilterSvg />
              </div>
            </div>
          </div>

          {/* Date Inputs */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4 items-end">
            {/* Start Date */}
            <div className="flex flex-col">
              <p className="text-gray-500 font-medium mb-1">Start Date</p>
              <div className="flex items-center bg-gray-100 rounded-md p-2 h-12">
                <DatePicker
                  placeholderText="E.g 2004-03-02"
                  className="outline-2 p-2 w-full outline-med-green bg-inherit text-lg font-medium text-[#717A7C] cursor-pointer"
                  dateFormat="yyyy-MM-dd"
                  required
                />
              </div>
            </div>

            {/* End Date */}
            <div className="flex flex-col">
              <p className="text-gray-500 font-medium mb-1">End Date</p>
              <div className="flex items-center bg-gray-100 rounded-md p-2 h-12">
                <DatePicker
                  placeholderText="E.g 2004-03-02"
                  className="outline-2 p-2 w-full outline-med-green bg-inherit text-lg font-medium text-[#717A7C] cursor-pointer"
                  dateFormat="yyyy-MM-dd"
                  required
                />
              </div>
            </div>

            {/* Guests Selector */}
            <div className="flex flex-col">
              <p className="text-gray-500 mb-1 font-medium">Guests</p>
              <div className="flex items-center justify-around bg-gray-100 rounded-md p-2 h-12">
                <button
                  onClick={decrementGuests}
                  className="bg-med-green w-7 h-7 flex items-center justify-center text-white rounded-full"
                >
                  -
                </button>
                <p className="font-medium text-[#717A7C] text-lg">2 guests</p>
                <button
                  onClick={incrementGuests}
                  className="bg-med-green w-7 h-7 flex items-center justify-center text-white rounded-full"
                >
                  +
                </button>
              </div>
            </div>

            {/* Search Button */}
            <button className="flex w-full text-center text-lg h-11 items-center justify-center font-medium px-4 py-2 bg-[#03B58B] text-white rounded-md">
              <p>Search Packages</p>
            </button>
          </div>
        </div>
      </section>

      <h1 className="text-black text-center font-poppins mt-10 text-[30px] md:text-[40px] font-extrabold leading-none">
        Popular Packages
      </h1>
      <p className="mb-10 mt-5 md:text-base text-sm text-center ">
        Simplify your journey choices effortlessly with our convenient <br></br>{" "}
        and easy-to-choose travel packages.
      </p>
      <PopularPackages />
      <CoursalSection />
      <YourCustomAdventure />
      <FromOurTravellers />
    </div>
  );
}
