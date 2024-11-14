import React from 'react'
import { useState } from 'react';
import FilterBox from '../FilterBox/FilterBox'
import FilterSvg from '../../../svgs/FilterSvg';

import img1 from '../../assets/CountryDestination/sm-imgone.svg';
import img2 from '../../assets/CountryDestination/sm-imgtwo.svg';
import img3 from '../../assets/CountryDestination/sm-imgthree.svg';
import img4 from '../../assets/CountryDestination/sm-img-4.svg';
import img5 from '../../assets/CountryDestination/sm-img-5.svg';
import img6 from '../../assets/CountryDestination/sm-img-6.svg';
function CountryPakages() {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);
  
  return (
    <div className="w-full flex gap-4 bg-transparent p-4">
      {/* First Part - Existing Component */}
      <div className="w-[15%] text-center">
      <div className="cursor-pointer  sticky md:top-[20%] top-[29%] " onClick={toggleModal}>
              <FilterSvg className=""/>
            </div>
      </div>
   {/* Second Part - Cards */}
<div className="w-full sm:w-[70%]  grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-9">
  {/* Card template */}
  {[...Array(4)].map((_, index) => (
    <div key={index} className="bg-white  border text-center rounded-lg shadow-lg  hover:shadow-lime-500">
      {/* Card Image */}
      <div className="relative w-full h-28 sm:h-48 mb-2">
        <img
          src="src/assets/africa-bg-2.png"
          alt="Card Image"
          className="w-full h-full object-cover rounded-t-lg"
        />
        <p className="absolute text-xs sm:text-sm top-0 left-0 bg-[#2C9C48] text-white px-2 py-1 rounded">
          Seasonal Offer
        </p>
      </div>
      {/* Card Content */}
      <h4 className="text-base sm:text-lg font-semibold mb-1">
        Trip to Egypt Flight Inclusive Deal Seasonal Special Offer
      </h4>
      <p className="text-xs sm:text-sm text-[#002831C2] mb-2">8 Days 7 Nights | 2 Guests</p>
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#00B58A]">₹ 58,999</h3>
      <p className="text-xs sm:text-sm text-black font-semibold mb-2">What’s included?</p>
      {/* Small Logo Images */}
      <div className="flex flex-wrap justify-center gap-2 mb-2 mx-auto">
        <img src={img1} alt="" className="w-6 sm:w-8 h-6 sm:h-8" />
        <img src={img2} alt="" className="w-6 sm:w-8 h-6 sm:h-8" />
        <img src={img3} alt="" className="w-6 sm:w-8 h-6 sm:h-8" />
        <img src={img4} alt="" className="w-6 sm:w-8 h-6 sm:h-8" />
        <img src={img5} alt="" className="w-6 sm:w-8 h-6 sm:h-8" />
        <img src={img6} alt="" className="w-6 sm:w-8 h-6 sm:h-8" />
      </div>
      {/* Book Now Button */}
      <button className="w-[80%] sm:w-[70%] mb-4 sm:mb-[9%] bg-[#03B58B] text-white py-2 rounded-md hover:bg-green-600">
        Book Now
      </button>
    </div>
  ))}
</div>

      <FilterBox showModal={showModal} onClose={toggleModal} />
    </div>
  );
}

export default CountryPakages