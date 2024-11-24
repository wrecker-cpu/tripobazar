import React, { useEffect } from "react";
import { useState } from "react";
import FilterBox from "../FilterBox/FilterBox";
import FilterSvg from "../../../svgs/FilterSvg";

import img1 from "../../assets/CountryDestination/sm-imgone.svg";
import img2 from "../../assets/CountryDestination/sm-imgtwo.svg";
import img3 from "../../assets/CountryDestination/sm-imgthree.svg";
import img4 from "../../assets/CountryDestination/sm-img-4.svg";
import img5 from "../../assets/CountryDestination/sm-img-5.svg";
import img6 from "../../assets/CountryDestination/sm-img-6.svg";
import { Link } from "react-router-dom";

function CountryPakages({ data, error, state, country, continent }) {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => setShowModal(!showModal);

  const images = [img1, img2, img3, img4, img5, img6]; // Array of image sources

  if (error) {
    return (
      <div className="w-full mt-[0] h-auto flex flex-col justify-center items-center bg-gray-100 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">
          Packages for {state} will be coming soon
        </h2>
        <p className="text-lg text-gray-500">
          Stay tuned for the latest updates on {state} travel packages!
        </p>
      </div>
    );
  }
  return (
    <div className="w-full flex gap-4 bg-transparent p-4">
      {/* First Part - Existing Component */}

      <div className="w-auto md:block hidden text-center">
        <div
          className="cursor-pointer  sticky md:top-[20%] top-[29%] "
          onClick={toggleModal}
        >
          <FilterSvg />
        </div>
      </div>
      {/* Second Part - Cards */}
      <div className="w-[85%]sm:w-[90%] lg:w-[95%]   grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Card template */}
        {data?.map((item, index) => (
          <div
            key={index}
            className="bg-white  border text-center rounded-lg shadow-lg  hover:shadow-lime-500"
          >
            {/* Card Image */}
            <div className="relative w-full h-28 sm:h-48 mb-2">
              <img
                src={item?.MainPhotos[0]}
                alt="Card Image"
                className="w-full h-full object-cover rounded-t-lg"
              />
              <p className="absolute text-xs sm:text-sm top-0 left-0 bg-[#2C9C48] text-white px-2 py-1 rounded">
                Seasonal Offer
              </p>
            </div>
            {/* Card Content */}
            <h4 className="text-base px-5 sm:text-lg font-semibold mb-1">
              {item?.title}
            </h4>
            <p className="text-xs px-6 sm:text-sm text-[#002831C2] mb-2">
              {item?.description}
            </p>
            <h3 className="text-lg sm:text-xl font-bold mb-2 text-[#00B58A]">
              Rs.{item?.price}
            </h3>
            <p className="text-xs sm:text-sm text-black font-semibold mb-2">
              What’s included?
            </p>
            {/* Small Logo Images */}
            <div className="flex flex-wrap justify-center gap-2 mb-2 mx-auto">
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Icon ${index + 1}`}
                  className="w-6 sm:w-8 h-6 sm:h-8"
                />
              ))}
            </div>
            {/* Book Now Button */}
            <Link
              to={`/destination/${continent}/${country}/${state}/${item._id}`}
            >
              {" "}
              <button className="w-[80%] sm:w-[70%] mb-4 sm:mb-[9%] bg-[#03B58B] text-white py-2 rounded-md hover:bg-green-600">
                Book Now
              </button>
            </Link>
          </div>
        ))}
      </div>

      <FilterBox showModal={showModal} onClose={toggleModal} />
    </div>
  );
}

export default CountryPakages;
