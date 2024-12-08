import React, { useEffect, useState } from "react";
import { MdStar, MdStarHalf, MdStarOutline } from "react-icons/md";
import { useSearch } from "../../../context/SearchContext";
import { useWishlist } from "../../../context/WishListContext";
import { IoIosArrowDown } from "react-icons/io";
import CouponSvg from "../../../svgs/CouponSvg";
import CarouselImageModal from "../../../utils/CarosalImageModal";

function IternryDetails({ data }) {
  const [activeTab, setActiveTab] = useState("Plan Details");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [fadeState, setFadeState] = useState("fadeIn");
  const [imgmodal, setImgModal] = useState({
    isOpen: false,
    img: [],
  });
  const [selectedHotel, setSelectedHotel] = useState([]);
  const [customizeHotel, setCustomizeHotel] = useState({
    rooms: 1,
    adults: 1,
    children: 0,
  });
  const [selectedCoupon, setSelectedCoupon] = useState({
    id: "",
    discountPercentage: 0,
    maxDiscount: 0,
  });
  const { searchData } = useSearch();
  const { userDetails } = useWishlist();

  const toggleDropdown = (id) => {
    setIsDropdownOpen(id);
  };

  const handleCoupon = (coupon) => {
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

  const handleHotelArray = (hotel, hdetail) => {
    const isHotelSelected = selectedHotel.some(
      (item) => item._id === hdetail._id
    );

    const isLocationSelected = selectedHotel.some(
      (item) => item.location === hotel.location
    );

    if (isHotelSelected) {
      setSelectedHotel((prevSelected) =>
        prevSelected.filter((item) => item._id !== hdetail._id)
      );
    } else {
      if (!isLocationSelected) {
        setSelectedHotel((prevSelected) => [
          ...prevSelected,
          {
            ...hdetail,
            room: customizeHotel.rooms,
            adults: customizeHotel.adults,
            children: customizeHotel.children,
            location: hotel.location,
          },
        ]);
      } else {
        alert(`You can only select one hotel per location!`);
      }
    }
  };

  const handleHotelChangeInput = (e) => {
    e.stopPropagation();
    const { name, value } = e.target;

    setCustomizeHotel((prev) => ({
      ...prev,
      [name]: Math.max(name === "children" ? 0 : 1, value), // Ensure at least 0 for children and 1 for others
    }));
  };

  const handleRoomChange = (
    hdetail,
    newRoomCount,
    newAdultsCount,
    newChildrenCount
  ) => {
    setSelectedHotel((prevSelected) =>
      prevSelected.map((item) =>
        item._id === hdetail._id
          ? {
              ...item,
              room: newRoomCount,
              adults: newAdultsCount,
              children: newChildrenCount,
              hotelPrice: hdetail.hotelPrice * newRoomCount,
            } // Update room count and price dynamically
          : item
      )
    );
  };

  const handleApplyClick = (hdetail) => {
    handleRoomChange(
      hdetail,
      customizeHotel.rooms,
      customizeHotel.adults,
      customizeHotel.children
    );
    setIsDropdownOpen(null);
    setCustomizeHotel({
      rooms: 1,
      adults: 1,
      children: 0,
    });
  };

  const handleTabChange = (tab) => {
    setFadeState("fadeOut");
    setTimeout(() => {
      setActiveTab(tab);
      setFadeState("fadeIn");
    }, 100); // Matches the animation duration
  };

  const calculateDiscountedPrice = () => {
    // Calculate the total cost for the selected hotels
    const totalHotelPrice = selectedHotel.reduce((total, hotel) => {
      return total + (hotel.hotelPrice || 0); // Add hotelPrice of selected hotels, default to 0 if not available
    }, 0);

    // Include the main price calculation
    const mainPrice = data?.price * searchData.guests;

    // Add the total of selected hotel prices to the main price
    const totalCost = mainPrice + totalHotelPrice;

    // Apply coupon if available
    if (!selectedCoupon.id) return totalCost;

    const discount = Math.min(
      (totalCost * selectedCoupon.discountPercentage) / 100,
      selectedCoupon.maxDiscount
    );

    return totalCost - discount;
  };

  const openModal = (images) => {
    setImgModal((prev) => ({ ...prev, isOpen: true, img: images }));
  };
  const closeModal = () => {
    setImgModal((prev) => ({ ...prev, isOpen: false, img: [] }));
  };

  const handleDropdownClick = (e) => {
    e.stopPropagation();
  };

  useEffect(() => {}, [customizeHotel]);

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
              onClick={() => handleTabChange(tab)}
            >
              {tab}
            </li>
          ))}
        </nav>

        {/* Dynamic Content */}
        <div
          className={
            fadeState === "fadeIn" ? "animate-fadeIn" : "animate-fadeOut"
          }
        >
          {activeTab === "Plan Details" && (
            <div className="space-y-6   ">
              {data?.dayDescription?.map((day, dayIdx) => (
                <div
                  className="border-[.5px] px-4 py-4 rounded-lg"
                  key={dayIdx} // Use a unique field or fallback to the index
                >
                  <h3 className="text-lg leading-3 font-bold">
                    {day.dayTitle}
                  </h3>
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
                    {hotel?.hotelDetails.map((hdetail) => {
                      return (
                        <div
                          key={hdetail._id}
                          onClick={() => handleHotelArray(hotel, hdetail)}
                          className={`w-auto flex flex-col active:scale-[0.98] transition-transform ease-in-out duration-300 sm:flex-row mb-4 items-center border-2 rounded-3xl 
    cursor-pointer p-2 space-y-2 sm:space-y-0 
    ${
      selectedHotel.some((item) => item._id === hdetail._id)
        ? "border-med-green"
        : "border-gray-200 hover:border-gray-300"
    }`}
                        >
                          {/* Content */}

                          <img
                            src={
                              hdetail?.hotelPhotoUrl?.[0] ||
                              ""
                            } 
                            onClick={() =>
                              hdetail?.hotelPhotoUrl &&
                              openModal(hdetail.hotelPhotoUrl)
                            } 
                            alt="Hotel"
                            className="w-[30%] h-[30%] rounded-3xl sm:mr-4"
                          />

                          <div className="flex-1">
                            <p className="font-semibold text-sm sm:text-base">
                              {hdetail.hotelName}
                            </p>
                            <div className="flex items-center gap-2 mt-1">
                              {/* Button */}
                              <button
                                className="bg-green-400 text-white px-2 py-1 rounded text-xs sm:text-sm"
                                onClick={(e) => {
                                  toggleDropdown(hdetail._id);
                                  handleDropdownClick(e); // Ensure this is invoked properly
                                }}
                              >
                                Rooms, Adults, Children
                              </button>

                              {/* Dropdown */}
                              {isDropdownOpen === hdetail._id && (
                                <div
                                  onClick={handleDropdownClick}
                                  className="absolute mt-[75%] sm:mt-[45%] md:mt-[34%] lg:mt-[25%] bg-white  shadow-lg rounded-lg p-4 w-56 z-10"
                                >
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
                                      name="rooms"
                                      value={customizeHotel.rooms}
                                      onChange={handleHotelChangeInput}
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
                                      name="adults"
                                      value={customizeHotel.adults}
                                      onChange={handleHotelChangeInput}
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
                                      name="children"
                                      value={customizeHotel.children}
                                      onChange={handleHotelChangeInput}
                                      type="number"
                                      className="mt-1 text-center block w-full border-[1.4px] border-green-500  rounded-md shadow-sm focus:ring-green-400 focus:border-green-400 sm:text-sm"
                                      placeholder="Enter number of children"
                                    />
                                  </div>
                                  <button
                                    onClick={() => {
                                      handleApplyClick(hdetail);
                                    }}
                                    className="bg-med-green text-[.8rem] text-white w-full mt-2 py-2 rounded"
                                  >
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
                                    <MdStar
                                      key={i}
                                      className="text-yellow-400"
                                    />
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
                              <span className="font-medium text-green-700">
                                Rs{" "}
                                {selectedHotel.some(
                                  (item) => item._id === hdetail._id
                                )
                                  ? selectedHotel.find(
                                      (item) => item._id === hdetail._id
                                    )?.hotelPrice
                                  : hdetail.hotelPrice}
                                +
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
              ? searchData.guests === 1
                ? `₹ ${calculateDiscountedPrice()} /- per person`
                : `₹ ${calculateDiscountedPrice()} /- total pack price`
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
          <button className="bg-med-green text-lg text-white w-full  py-4 rounded-xl">
            Confirm and Book
          </button>
        </div>

        {/* Discount Section */}
        <div className="bg-[#EDF7F9] rounded-3xl border-[.5px] w-full p-6 ">
          <div className="flex flex-col  border-gray-400 rounded-xl border-[.6px] px-4 py-3 sm:flex-row items-center gap-2 mb-4">
            <input
              type="text"
              placeholder="Have a Coupon?"
              className="flex-1 w-full text-base bg-transparent   rounded"
            />
            <button
              className={`text-green-500 ${
                selectedCoupon.id ? "text-opacity-65" : "text-opacity-100"
              } px-0 text-base py-1 rounded`}
              disabled={selectedCoupon}
            >
              {selectedCoupon.id ? "Applied" : "Apply"}
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
                          : "hover:border-med-green"
                      } 
                      border-[3px] p-2 rounded-xl`}
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

      {imgmodal.isOpen && (
        <CarouselImageModal
          images={imgmodal.img}
          handleCloseModal={closeModal}
        />
      )}
    </div>
  );
}

export default IternryDetails;
