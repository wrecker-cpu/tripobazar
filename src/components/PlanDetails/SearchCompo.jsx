import React, { useState } from "react";
import LocationIcon from '../../../svgs/LocationIcon/index.jsx'
import BreadCrumbsLink from "../../../utils/BreadCrumbsLink";
function SearchCompo() {
  

  // State to manage the number of guests
  const [guests, setGuests] = useState(2);

  // Handlers to increase or decrease the number of guests
  const handleIncreaseGuests = () => setGuests(guests + 1);
  const handleDecreaseGuests = () => {
    if (guests > 1) setGuests(guests - 1);
  };

    return (<div>

   
  
    <div className="w-full bg-white flex items-center justify-center px-4 py-4">
      {/* Search Bar Container */}
      <div className="flex flex-wrap md:flex-nowrap items-center w-full max-w-[1200px] gap-4 md:gap-6">
        {/* From Input */}
        <div className="flex flex-col w-full sm:w-[48%] md:w-[18%]">
          <label htmlFor="from" className="text-gray-600 text-sm mb-1">
            From
          </label>
          <div className="flex items-center   rounded-md px-2 py-2">
         
    <LocationIcon className="h-2 w-2 "/>    
            <input
              type="text"
              id="from"
              placeholder="Enter city"
              className="outline-none text-center bg-transparent flex-1 text-sm"
            />
          </div>
        </div>

        {/* Destination Input */}
        <div className="flex flex-col w-full sm:w-[48%] md:w-[18%]">
          <label htmlFor="destination" className="text-gray-600 text-sm mb-1">
            Destination
          </label>
          <div className="flex items-center  rounded-md px-2 py-2">
          <LocationIcon className="h-2 w-2 "/>  
            <input
              type="text"
              id="destination"
              placeholder="Enter city"
              className="outline-none text-center bg-transparent flex-1 text-sm"
            />
          </div>
        </div>

        {/* Check-In Date */}
        <div className="flex flex-col w-full sm:w-[48%] md:w-[14%]">
          <label htmlFor="checkin" className="text-gray-600 text-sm mb-1">
            Check-In
          </label>
          <div className="flex items-center  rounded-md px-2 py-2">
            {/* <img src="/path/to/logo3.png" alt="Check-In Icon" className="h-4 w-4 mr-2" /> */}
            <input
              type="date"
              id="checkin"
              className="outline-none bg-transparent flex-1 text-sm"
            />
          </div>
        </div>

        {/* Check-Out Date */}
        <div className="flex flex-col w-full sm:w-[48%] md:w-[14%]">
          <label htmlFor="checkout" className="text-gray-600 text-sm mb-1">
            Check-Out
          </label>
          <div className="flex items-center  rounded-md px-2 py-2">
          
            <input
              type="date"
              id="checkout"
              className="outline-none bg-transparent flex-1 text-sm"
            />
          </div>
        </div>

        {/* Guests Section */}
        <div className="flex flex-col w-full sm:w-[48%] md:w-[12%]">
          <label htmlFor="guests" className="text-gray-600 text-sm mb-1">
            Guests
          </label>
          <div className="flex items-center rounded-md px-2 py-2">
            <img src="/path/to/logo5.png" alt="Guests Icon" className="h-4 w-4 mr-2" />
            <button
              onClick={handleDecreaseGuests}
              className=" text-green-600 font-semibold px-2 text-lg"
            >
              -
            </button>
            <p className="flex-1 text-center font-semibold text-gray-600 text-[.6rem]">{guests} Guests</p>
            <button
              onClick={handleIncreaseGuests}
              className="text-green-600 font-semibold px-2 text-lg"
            >
              +
            </button>
          </div>
        </div>

        {/* Search Button */}
        <button className="h-10 w-full sm:w-[48%] md:w-[14%] bg-green-600 text-white px-4 rounded-md text-sm hover:bg-green-700">
          Search Packages
        </button>
      </div>
    </div>
    </div>
  );
}

export default SearchCompo;