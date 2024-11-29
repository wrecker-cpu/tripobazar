import React, { useState } from "react";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { useSearch } from "../../../context/SearchContext";
import { useWishlist } from "../../../context/WishListContext";
import { IoIosArrowDown } from "react-icons/io";
import CouponSvg from "../../../svgs/CouponSvg";

function IternryDetails({ data }) {
  const [activeTab, setActiveTab] = useState("Plan Details");
  const [isCouponApplied, setIsCouponApplied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCoupon, setSelectedCoupon] = useState({
    id: "",
    discountPercentage: 0,
    maxDiscount: 0,
  });
  const { searchData } = useSearch();
  const { userDetails } = useWishlist();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCoupon = (coupon) => {
    setIsCouponApplied((prev) => !prev);
    setSelectedCoupon(
      (prevSelected) =>
        prevSelected.id === coupon.id
          ? { id: "", discountPercentage: 0, maxDiscount: 0 } // Reset if already selected
          : {
              id: coupon._id,
              discountPercentage: Number(coupon.discountPercentage),
              maxDiscount: Number(coupon.maxDiscount),
            } // Set new coupon
    );
  };
  const calculateDiscountedPrice = () => {
    if (!selectedCoupon.id) return data.price * searchData.guests; // No coupon applied

    const totalCost = data.price * searchData.guests;
    const discount = (totalCost * selectedCoupon.discountPercentage) / 100;

    // Apply the smaller value between the calculated discount and maxDiscount
    const finalDiscount = Math.min(discount, selectedCoupon.maxDiscount);

    return totalCost - finalDiscount; // Return the discounted price
  };

  return (
    <div className="w-[90%] mx-auto bg-white flex flex-col lg:flex-row font-poppins">
      {/* Left Side */}
      <div className="w-full lg:w-4/5 p-4">
        {/* Navigation */}
        <nav className="flex w-full gap-10 border-[.5px] rounded-lg pl-[28%] py-4  pb-2 mb-4 text-center text-sm sm:text-base">
          {["Plan Details", "Hotel", "SightSeeing"].map((tab, tabIdx) => (
            <li
              key={tabIdx}
              className={`cursor-pointer  list-none  ${
                activeTab === tab ? "text-green-500 font-semibold" : ""
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </li>
          ))}
        </nav>

        {/* Dynamic Content */}
        {activeTab === "Plan Details" && (
          <div className="space-y-6   ">
            {data?.dayDescription?.map((day, dayIdx) => (
              <div
                className="border-[.5px] px-4 py-4 rounded-lg"
                key={dayIdx} // Use a unique field or fallback to the index
              >
                <h3 className="text-lg leading-3 font-bold">{day.dayTitle}</h3>
                <div className="border-t mt-3 mb-4"></div>
                <div className="grid grid-cols-2 sm:grid-cols-6 mb-4 gap-2">
                  {day?.photos?.map((img, photoidx) => (
                    <img
                      key={`${img}-${photoidx}`} // Combine img and index for uniqueness
                      src="/src/assets/oneContinent.png"
                      alt={`Day ${dayIdx + 1} img ${photoidx + 1}`}
                      className="rounded-md w-full"
                    />
                  ))}
                </div>
                {day?.dayDetails?.split("\n").map((line, idx) => (
                  <span key={idx}>
                    {line}
                    <br />
                  </span>
                ))}
              </div>
            ))}
          </div>
        )}

        {activeTab === "Hotel" && (
          <div>
            {data?.hotels?.map((hotel) => {
              return (
                <div key={hotel._id}>
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">
                    {hotel.location}
                  </h4>
                  {hotel.hotelDetails.map((hdetail) => {
                    return (
                      <div
                        key={hdetail._id}
                        className="w-full flex flex-col sm:flex-row items-center border p-2 space-y-2 sm:space-y-0"
                      >
                        <input type="radio" className="mr-4" />
                        <img
                          src="/src/assets/oneContinent.png"
                          alt="Hotel"
                          className="w-[50%] h-[50%] rounded-md sm:mr-4"
                        />
                        <div className="flex-1">
                          <p className="font-semibold text-sm sm:text-base">
                            {hdetail.hotelName}
                          </p>
                          <div className="flex items-center gap-2 mt-1">
                            {/* Button */}
                            <button
                              className="bg-green-400 text-white px-2 py-1 rounded text-xs sm:text-sm"
                              onClick={toggleDropdown}
                            >
                              Rooms, Adults, Children
                            </button>

                            {/* Dropdown */}
                            {isDropdownOpen && (
                              <div className="absolute mt-[75%] sm:mt-[45%] md:mt-[34%] lg:mt-[25%] bg-white  shadow-lg rounded-lg p-4 w-56 z-10">
                                {/* Input 1: Rooms */}
                                <div className="mb-3">
                                  <label
                                    htmlFor="rooms"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Rooms
                                  </label>
                                  <input
                                    id="rooms"
                                    type="number"
                                    className="mt-1 block w-full border-[1.5px] text-center border-green-500 rounded-md shadow-sm focus:ring-green-400 focus:border-green-400 sm:text-sm"
                                    placeholder="Enter number of rooms"
                                  />
                                </div>

                                {/* Input 2: Adults */}
                                <div className="mb-3">
                                  <label
                                    htmlFor="adults"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Adults
                                  </label>
                                  <input
                                    id="adults"
                                    type="number"
                                    className="mt-1 block w-full border-[1.5px] text-center border-green-500  rounded-md shadow-sm focus:ring-green-400 focus:border-green-400 sm:text-sm"
                                    placeholder="Enter number of adults"
                                  />
                                </div>

                                {/* Input 3: Children */}
                                <div>
                                  <label
                                    htmlFor="children"
                                    className="block text-sm font-medium text-gray-700"
                                  >
                                    Children
                                  </label>
                                  <input
                                    id="children"
                                    type="number"
                                    className="mt-1 text-center block w-full border-[1.4px] border-green-500  rounded-md shadow-sm focus:ring-green-400 focus:border-green-400 sm:text-sm"
                                    placeholder="Enter number of children"
                                  />
                                </div>
                                <button className="bg-[#03B58B] text-[.8rem] text-white w-full mt-2 py-2 rounded">
                                  Apply
                                </button>
                              </div>
                            )}
                          </div>
                          <p className="text-xs sm:text-sm text-gray-500 mt-2">
                            Delux
                          </p>
                          <div className="flex gap-1 mt-1">
                            {[...Array(5)].map((_, i) => {
                              if (i < Math.floor(hdetail.hotelRating)) {
                                // Full stars
                                return (
                                  <MdStar key={i} className="text-yellow-400" />
                                );
                              } else if (i < hdetail.hotelRating) {
                                // Half star
                                return (
                                  <MdStarHalf
                                    key={i}
                                    className="text-yellow-400"
                                  />
                                );
                              } else {
                                // Empty stars
                                return (
                                  <MdStarOutline
                                    key={i}
                                    className="text-gray-300"
                                  />
                                );
                              }
                            })}
                          </div>
                          <p className=" mt-1 ">
                            Total Price:{" "}
                            <span className=" font-medium text-green-700 ">
                              Rs {hdetail.hotelPrice}+
                            </span>
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        )}

        {activeTab === "SightSeeing" && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <img
              src="/src/assets/oneContinent.png"
              alt="Hotel"
              className=" rounded-md sm:mr-4"
            />{" "}
            <img
              src="/src/assets/oneContinent.png"
              alt="Hotel"
              className=" rounded-md sm:mr-4"
            />{" "}
            <img
              src="/src/assets/oneContinent.png"
              alt="Hotel"
              className=" rounded-md sm:mr-4"
            />
          </div>
        )}
      </div>

      {/* Right Side */}
      <div className="w-full  lg:w-1/3  p-4 space-y-4">
        {/* Payment Details */}
        <div className="border p-6 rounded-3xl relative text-sm sm:text-base">
          <p
            className={`absolute top-0 right-0 ${
              selectedCoupon.id ? "opacity-100" : "opacity-0"
            } bg-green-500 text-white px-4 py-3 rounded-bl-lg rounded-tr-lg`}
          >
            {userDetails?.Coupons.map((item) =>
              item._id === selectedCoupon.id ? item.discountPercentage : ""
            )}
            % OFF
          </p>
          <p className="font-semibold text-lg mt-7">Payment Details</p>
          <p className="line-through text-gray-400">
            {data?.price ? data.price * searchData.guests * 1.25 : "N/A"}
          </p>
          <p className="text-med-green font-semibold">
            {data?.price
              ? searchData.guests >= 1
                ? `₹ ${calculateDiscountedPrice()} /- for ${
                    searchData.guests
                  } person${searchData.guests > 1 ? "s" : ""}`
                : `₹ ${data.price} /- per person`
              : "N/A"}
          </p>

          <p className="border rounded-xl mb-3 text-blue-500 flex justify-center items-center gap-4 py-1 text-[.7rem] mt-2">
            <span className="text-2xl">🎉</span> No Additional or Hidden
            Costs!!!
          </p>
          <div className="border-b mb-3 border-[#A4B6B9] w-full"></div>
          <p className="mb-3 cursor-pointer font-semibold gap-2 flex items-start justify-between">
            Total Payable: ₹ {calculateDiscountedPrice()}
            <span className="mt-[3px] text-lg">
              <IoIosArrowDown />
            </span>
          </p>
          <button className="bg-[#03B58B] text-lg text-white w-full  py-4 rounded-xl">
            Confirm and Book
          </button>
        </div>

        {/* Discount Section */}
        <div className="bg-[#EDF7F9] rounded-md border-[.5px] w-full p-6 ">
          <div className="flex flex-col  border-gray-400 rounded-xl border-[.6px] px-4 py-3 sm:flex-row items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Have a Coupon?"
              className="flex-1 w-full text-base bg-transparent   rounded"
            />
            <button
              className={`text-green-500 ${
                selectedCoupon ? "text-opacity-65" : "text-opacity-100"
              } px-0 text-base py-1 rounded`}
              disabled={selectedCoupon}
            >
              {selectedCoupon ? "Applied" : "Apply"}
            </button>
          </div>
          <p className="text-center text-gray-500">OR</p>
          <div>
            {userDetails?.Coupons ? (
              userDetails.Coupons.map((item) => {
                return (
                  <div
                    key={item._id}
                    onClick={() => handleCoupon(item)}
                    className={`flex items-start cursor-pointer gap-3 bg-white mt-4 
                      ${
                        selectedCoupon.id === item._id
                          ? "border-med-green"
                          : "border-white"
                      } 
                      ${
                        selectedCoupon.id !== null &&
                        selectedCoupon.id !== item._id
                          ? "hover:border-[#e5e7eb]"
                          : "hover:border-[#03B58B]"
                      } 
                      border-[3px] p-2 rounded-md`}
                  >
                    <CouponSvg />
                    <div className="w-full">
                      <p className="font-bold text-sm">{item.couponCode}</p>
                      <p className="text-xs mb-3 text-gray-500">
                        {item.couponDescription}
                      </p>

                      <div className="flex justify-between">
                        <p className={`text-green-500  text-sm  rounded `}>
                          {selectedCoupon.id === item._id
                            ? "Applied!"
                            : "Apply"}
                        </p>
                        {selectedCoupon.id === item._id && (
                          <button
                            className="text-red-500  text-sm  rounded"
                            onClick={(e) => {
                              e.stopPropagation(); // Prevent parent onClick
                              handleCoupon(item._id);
                            }}
                          >
                            Remove
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })
            ) : (
              <p>No Coupons Available</p>
            )}

            <div className="flex gap-2 mt-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IternryDetails;
