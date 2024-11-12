import React, { useState } from "react";

import FilterSvg from "../../../svgs/FilterSvg/index";
import DatePicker from "react-datepicker";

export default function SearchDestinationPage() {
  const [guests, setGuests] = useState(1);
  const incrementGuests = () => setGuests(guests + 1);
  const decrementGuests = () => setGuests(guests > 1 ? guests - 1 : 1);
  return (
    <div className="bg-search-image font-poppins relative max-w-[1920px] mx-auto flex justify-center  bg-cover bg-center h-[90%]">
      <div className="w-full h-full bg-gray-50 opacity-40 absolute inset-0"></div>
      <div className="flex flex-col py-20 w-[90%] mx-auto justify-center items-center">
        <div className="relative z-20">
          <p className="text-xl esm:text-2xl ew:text-3xl sm:text-6xl mb-20 text-center font-bold">
            Discover a new destination,<br></br>
            <span className="text-med-green">
              with every step of your journey!
            </span>
          </p>
        </div>
        <div className="max-w-[1720px] w-full h-auto p-4 md:p-16 bg-white shadow-lg rounded-lg relative z-20">
          {/* Starting Location and Destination Inputs */}
          <div className="flex flex-col md:flex-row items-center jusitfy-between gap-4">
            <div className="flex items-center border bg-white rounded-md py-3 px-2 w-full">
              <input
                type="text"
                placeholder="Where are you starting from?"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>

            <p className="text-gray-500 font-medium">To</p>

            <div className="flex items-center bg-white border rounded-md py-3 px-2  w-full">
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
      </div>
    </div>
  );
}
