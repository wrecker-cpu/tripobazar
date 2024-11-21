import React from "react";
import BreadCrumbsLink from "../../../utils/BreadCrumbsLink";
import image from "../../../src/assets/TravelTips/img1.jpg";
import { IoSearch } from "react-icons/io5";
import FilterSvg from "../../../svgs/FilterSvg";
function TravelTipsTitle() {
  return (
    <div className="bg-white">
      <div className="w-[90%] mx-auto  py-2">
        <BreadCrumbsLink />
      </div>
      <section className="">
        <div className="h-[90%] relative">
          {/* Image */}
          <img src={image} alt="wth" className="object-contain w-full h-full" />

          {/* Search Bar */}
          <div className="absolute top-10 left-0 w-full flex justify-center ">
            <div className="relative w-[90%]">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-5 pr-52 pl-12  outline-none border text-lg rounded-md shadow-md"
              />
              <IoSearch className="absolute w-5 h-5 text-med-green top-1/2 left-3 transform -translate-y-1/2 " />
              <div className="flex items-center gap-4 absolute top-1/2 right-8  -translate-y-1/2">
                <div className="md:w-auto w-full flex cursor-pointer justify-end">
                  <FilterSvg />
                </div>
                <button className="bg-med-green text-white px-5 py-3 rounded-lg">Search</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default TravelTipsTitle;
