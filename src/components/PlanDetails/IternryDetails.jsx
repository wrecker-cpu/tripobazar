import React, { useState } from "react";

function IternryDetails() {
    const [activeTab, setActiveTab] = useState("Plane Details");
    const [isCouponApplied, setIsCouponApplied] = useState(true);
    const [hotelStars, setHotelStars] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
      
        const toggleDropdown = () => {
          setIsDropdownOpen(!isDropdownOpen);
        };
        
    return (
        <div className="w-full bg-white flex flex-col lg:flex-row font-poppins">
          {/* Left Side */}
          <div className="w-full lg:w-4/5 p-4">
            {/* Navigation */}
            <nav className="flex w-full gap-4 border-[.5px] rounded-lg pl-[28%] py-4  pb-2 mb-4 text-center text-sm sm:text-base">
              {["Plane Details", "Hotel", "SightSeeing"].map((tab) => (
                <li
                  key={tab}
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
            {activeTab === "Plane Details" && (
              <div className="space-y-6   ">
                {[1, 2, 3].map((day) => (
                  <div className="border-[.5px] px-2 py-4 rounded-lg" key={day}>
                    <h3 className="text-lg font-bold">Day {day}</h3>
                    <div className="border-t my-2"></div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[1, 2, 3,].map((img) => (
                        <img
                          key={img}
                          src="/src/assets/oneContinent.png"
                          alt={`Day ${day} img ${img}`}
                          className="rounded-md w-full"
                        />
                      ))}
                    </div>
                            <p className="mt-2 text-sm sm:text-base">
       Explore beautiful
                      locations for Day .
                    </p>
                    <p className="mt-2 text-sm sm:text-base">
                      <span className="font-bold">Description:</span> Explore beautiful
                      locations for Day .
                    </p> <br></br>
                    <p className="mt-2 text-sm sm:text-base">
                      <span className="font-bold">Description:</span> Explore beautiful
                      locations for Day .
                    </p> <br></br>
                    <p className="mt-2 text-sm sm:text-base">
                      <span className="font-bold">Description:</span> Explore beautiful
                      locations for Day .
                    </p>
                  </div>
                ))}
              </div>
            )}
    
            {activeTab === "Hotel" && (
              <div>
                <h4 className="font-semibold mb-2 text-sm sm:text-base">State Hotel</h4>
                <div className="w-full flex flex-col sm:flex-row items-center border p-2 space-y-2 sm:space-y-0">
                  <input type="radio" className="mr-4" />
                  <img
                  src="/src/assets/oneContinent.png"
                    alt="Hotel"
                    className="w-[50%] h-[50%] rounded-md sm:mr-4"
                  />
                  <div className="flex-1">
                    <p className="font-semibold text-sm sm:text-base">
                      Twin Palace Hotel
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
            <label htmlFor="rooms" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="adults" className="block text-sm font-medium text-gray-700">
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
            <label htmlFor="children" className="block text-sm font-medium text-gray-700">
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
                    <p className="text-xs sm:text-sm text-gray-500 mt-2">Delux</p>
                    <div className="flex gap-1 mt-1">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`w-4 h-4 rounded-full cursor-pointer ${
                            i < hotelStars ? "bg-yellow-500" : "bg-gray-200"
                          }`}
                          onClick={() => setHotelStars(i + 1)}
                        ></span>
                      ))}
                    </div>
                    <p className=" mt-1 ">Total Price: <span className=" font-medium text-green-700 ">Rs 20000+</span>
                    </p>
                  </div>
                </div>
              </div>
            )}
    
            {activeTab === "SightSeeing" && (
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                     <img
                  src="/src/assets/oneContinent.png"
                    alt="Hotel"
                    className=" rounded-md sm:mr-4"
                  />     <img
                  src="/src/assets/oneContinent.png"
                    alt="Hotel"
                    className=" rounded-md sm:mr-4"
                  />     <img
                  src="/src/assets/oneContinent.png"
                    alt="Hotel"
                    className=" rounded-md sm:mr-4"
                  />
             </div>
            )}
          </div>
    
          {/* Right Side */}
          <div className="w-full  lg:w-1/3 bg-gray-50 p-4 space-y-4">
            {/* Payment Details */}
            <div className="border p-4 relative text-sm sm:text-base">
              <p className="absolute top-0 right-0 bg-green-500 text-white px-2 rounded-l-md">
              25% OFF
              </p>
              <p className="font-semibold pt-2">Payment Details</p>
              <p className="line-through text-gray-400">₹50000</p>
              <p className="text-[#2C9C48]">₹45000</p>
              <p className="border text-blue-500 flex py-1 text-[.7rem] mt-2"><span className="text-3xl">🎉</span> No Additional or Hidden Costs!!!</p>
              <p className="mt-2 cursor-pointer font-semibold flex items-center">
              Total Payable:<br></br> ₹ 1,76,900 <span className="ml-2">▼</span>
              </p>
              <button className="bg-[#03B58B] text-sm text-white w-full mt-2 py-2 rounded">
                Confirm and Book
              </button>
            </div>
    
            {/* Discount Section */}
            <div className="bg-[#EDF7F9] border-gray-400 rounded-md border-[.5px] w-full py-4 px-2 ">
              <div className="flex flex-col  border-gray-400 rounded-md border-[.6px] px-1 sm:flex-row items-center gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Have a Coupon?"
                  className="flex-1 w-full text-[.7rem] bg-transparent  px-0  rounded"
                />
                  <button
                  className="text-green-500  px-0 text-sm py-1 rounded"
                  onClick={() => setIsCouponApplied(false)}
                >
                  {isCouponApplied ? "Applyy" : "Apply"}
                </button>
              </div>
              <p className="text-center text-gray-500">OR</p>
              <div>
              <div className="flex items-center bg-white mt-4 hover:border-[#03B58B] border-[3px] p-2 rounded-md">
                <img src="/logo.jpg" alt="Logo" className="w-6 h-6 mr-2" />
                <div>
                  <p className="font-bold text-sm">EGYPT25SPECIAL</p>
                  <p className="text-xs text-gray-500">Get 25% OFF on all Egypt trips</p>
      
                <button
                  className={`text-green-500  text-sm flex-1 px-4 py-1 rounded ${
                    isCouponApplied ? "hidden" : ""
                  }`}
                  onClick={() => setIsCouponApplied(true)}
                >
                  Apply
                </button>
                {isCouponApplied && (
                  <button
                    className="text-red-500  text-sm px-4 flex-1 py-1 rounded"
                    onClick={() => setIsCouponApplied(false)}
                  >
                    Remove
                  </button>
                )}
                </div>
              </div>
              <div className="flex items-center bg-white mt-4 hover:border-[#03B58B] border-[3px] p-2 rounded-md">
                <img src="/logo.jpg" alt="Logo" className="w-6 h-6 mr-2" />
                <div>
                  <p className="font-bold text-sm">TRIPPO3000</p>
                  <p className="text-xs text-gray-500">Sign up and get a flat ₹ 3000 OFF</p>
      
                <button
                  className={`text-green-500  text-sm flex-1 px-4 py-1 rounded ${
                    isCouponApplied ? "hidden" : ""
                  }`}
                  onClick={() => setIsCouponApplied(true)}
                >
                  Apply
                </button>
                {isCouponApplied && (
                  <button
                    className="text-red-500  text-sm px-4 flex-1 py-1 rounded"
                    onClick={() => setIsCouponApplied(false)}
                  >
                    Remove
                  </button>
                )}
                </div>
              </div>
              <div className="flex gap-2 mt-4">
            
              </div>
              </div>
            </div>
          </div>
        </div>
      );
    
}

export default IternryDetails