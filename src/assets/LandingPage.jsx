import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import LoginPage from "./LoginPage/LoginPage";
import dalLek from "../assets/bg-img.jpg";
import discoverOne from "../assets/Discover-1.svg";
import round from "../assets/Round.svg";
import dubai from "../assets/dubai.svg";
import newyork from "../assets/newyorkk.jpg";
import mysuru from "../assets/mysuru.svg";
import rajasthan from "../assets/rajasthan.svg";
import thailand from "../assets/thailand.svg";
import borabora from "../assets/borabora.svg";
import adventureImage from "../assets/travel-adventure.jpg"
export default function LandingPage() {
  const [guests, setGuests] = useState(1);

  const incrementGuests = () => setGuests(guests + 1);
  const decrementGuests = () => setGuests(guests > 1 ? guests - 1 : 1);
  const carouselItems = [
    {
      image: dubai,
      location: "DUBAI",
      country: "UAE",
      price: "₹ 48,999",
      description: "Dubai travel plans starting at just ₹39,999.",
    },
  
    {
      image: newyork,
      location: "NEW YORK",
      country: "USA",
      price: "$ 2,199",
      description: "Experience New York from $2,199.",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  const { image, location, country, price, description } = carouselItems[currentIndex];
 
    const destinations = [
      { image: mysuru, name: "MySuru" },
      { image: thailand, name: "Thailand" },
      { image: borabora, name: "borabora" },
      { image: rajasthan, name: "Rajasthan" },
      { image: mysuru, name: "MySuru" },
      { image: thailand, name: "Thailand" },
      { image: borabora, name: "borabora" },
      { image: rajasthan, name: "Rajasthan" },
    ];
    const reviews = [
      {
        text: "I couldn’t recommend Trippobazaar more highly - we had the most amazing holiday. Every detail had been thought about and they were on hand to answer any questions straight away. Very personal service.",
        name: "Rahul",
      },
      {
        text: "An unforgettable experience! Trippobazaar provided everything we needed to enjoy our trip with ease and comfort. Excellent customer support and attention to detail.",
        name: "Sneha",
      },
      {
        text: "Absolutely thrilled with the service! They helped us plan the perfect trip, and it was smooth from start to finish. Definitely booking again.",
        name: "Amit",
      },
    ];
  return (
    <div className="max-w-[1920px] mx-auto bg-[#F8F8F8] ">
    {/* section-1  */}
     <section
        className="w-full h-screen bg-cover bg-center relative"
        style={{ backgroundImage: `url(${dalLek})` }}
      >
        {/* Top Left Logo and Paragraph */}
        <div className="absolute top-64 left-4 flex items-center">
          <img src={discoverOne} alt="Logo" className="h-5  mr-2" />
        </div>

        {/* H1 Heading */}
        <div className="flex justify-start items-center h-full px-14 ">
          <h1 className="text-white font-poppins mt-60 text-[80px] font-extrabold leading-none">
            DISCOVER NEW <br></br>HORIZONS
          </h1>
        </div>

        {/* Top Right Paragraph */}
        <div className="absolute top-20 right-4">
          <img src={discoverOne} alt="Logo" className="h-5  mr-2" />
        </div>

        {/* Small Centered Image with Text */}
        <div className="absolute bottom-11 right-28 transform -translate-x-1/2 flex justify-center items-center">
          <img src={round} alt="Small Icon" className="h-32" />
          <p className="absolute text-center text-white font-semibold">
            EXPLORE <br></br>PLANS
          </p>
        </div>
      </section>

      <div className="w-4/5 h-[40vh] bg-white shadow-lg rounded-lg mx-auto mt-[-2rem] p-6 relative z-10">
        {/* Starting Location and Destination Inputs */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center bg-gray-100 rounded-md p-2 w-full">
            {/* <img src={startLocationIcon} alt="Start Location" className="h-5 w-5 mr-2" /> */}
            <input
              type="text"
              placeholder="Where are you starting from?"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>

          <p className="text-gray-500 font-medium">To</p>

          <div className="flex items-center bg-gray-100 rounded-md p-2 w-full">
            {/* <img src={destinationIcon} alt="Destination" className="h-5 w-5 mr-2" /> */}
            <input
              type="text"
              placeholder="Enter Destination"
              className="w-full bg-transparent focus:outline-none"
            />
          </div>
        </div>

        {/* Date Inputs */}
        <div className="flex items-center mt-4 space-x-4">
          <div className="flex flex-col w-full">
            <p className="text-gray-500 font-medium mb-1">Start Date</p>
            <div className="flex items-center bg-gray-100 rounded-md p-2">
              {/* <img src={calendarIcon} alt="Calendar Icon" className="h-5 w-5 mr-2" /> */}
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col w-full">
            <p className="text-gray-500 font-medium mb-1">End Date</p>
            <div className="flex items-center bg-gray-100 rounded-md p-2">
              {/* <img src={calendarIcon} alt="Calendar Icon" className="h-5 w-5 mr-2" /> */}
              <input
                type="date"
                className="w-full bg-transparent focus:outline-none"
              />
            </div>
          </div>

          {/* Guests Selector */}
          <div className="flex items-center space-x-2">
            <p className="text-gray-500 font-medium">Guests</p>
            <button
              onClick={decrementGuests}
              className="px-3 py-1 bg-gray-200 rounded-md"
            >
              -
            </button>
            <p className="font-semibold">{guests}</p>
            <button
              onClick={incrementGuests}
              className="px-3 py-1 bg-gray-200 rounded-md"
            >
              +
            </button>
          </div>

          {/* Search Button */}
          <button className="flex  text-center text-sm h-11 items-center px-4 py-2 bg-[#03B58B] text-white rounded-md">
            {/* <img src={searchIcon} alt="Search Icon" className="h-5 w-5" /> */}
            <p className="">Search Packages</p>
          </button>
        </div>
      </div>
      <h1 className="text-black text-center font-poppins mt-10 text-[40px] font-extrabold leading-none">Popular Packages</h1>
      <p className="mb-10 mt-5 text-center ">
        Simplify your journey choices effortlessly with our convenient <br></br> and
        easy-to-choose travel packages.
      </p>
          {/* section-2  */}
      <section className="p-6 relative text-center ">
      <div className="relative w-4/5 h-[90%] mx-auto flex items-center">
        {/* Main Image Container */}
        <div className="w-full h-full overflow-hidden rounded-lg">
          <img src={image} alt={location} className="w-full h-full object-cover" />
        </div>

        {/* Overlay Container */}
        <div className="absolute bottom-0 right-0 w-[30vw] h-[85vh] bg-white p-4  rounded-lg">
          {/* Green Small Div */}
          <div className="absolute top-0 left-0 bg-[#00B58A] h-5 text-center w-28 mb-4"><p className="text-[.7rem] font-semibold text-white "> seasonal offer </p></div>

          {/* Location and Price Info */}
          <div className="space-y-2 mt-5">
            <h3 className="text-lg font-bold">{location}</h3>
            <p className="text-gray-500">{country}</p>
            <h2 className="text-2xl font-bold bg-[white] text-[#00B58A] inline-block px-2 py-1 rounded-md">
              {price}
            </h2>
            <p className="mt-2 font-semibold">What’s included?</p>

            {/* Included Icons */}
            <div className="flex space-x-2 mt-2">
              {/* <img src={includedIcon1} alt="Icon 1" className="h-6 w-6" />
              <img src={includedIcon2} alt="Icon 2" className="h-6 w-6" />
              <img src={includedIcon3} alt="Icon 3" className="h-6 w-6" />
              <img src={includedIcon4} alt="Icon 4" className="h-6 w-6" /> */}
            </div>

            {/* Book Now Button */}
            <button className="mt-4 px-4 py-2 bg-[#03B58B] text-white rounded-md font-medium">
              Book Now
            </button>
          </div>

          {/* Additional Info Section */}
          <div className="absolute bottom-0 left-0 w-full  mt-4  border-t border-gray-200 bg-[#EDF7F9]">
            <p>Our travel plans include all facilities as per your custom requirements.</p>
            <p className="font-bold mt-2">{description}</p>
            <button className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-md font-medium">
              View All
            </button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Buttons */}
      <button
        onClick={handlePrev}
        className=" mt-6 transform text-2xl -translate-y-1/2 -200 p-2   hover:bg-gray-300"
      >
        &#8592; {/* Left Arrow */}
      </button>
      <button
        onClick={handleNext}
        className="mt-6 transform text-2xl -translate-y-1/2 -200 p-2   hover:bg-gray-300"
      >
        &#8594; {/* Right Arrow */}
      </button>
    </section>
        {/* section-3  */}
    <section className="w-full mb-16 h-[55vh] relative">
      {/* Main Dark Background Container */}
      <div className="bg-[#012831] w-full text-center h-[70vh] p-8 text-white">
        <h3 className="text-2xl font-bold mb-4">Trending Destinations</h3>
        <p className="text-sm font-thin mb-4">
          We provide a wide range of destination packages as we want our
          customers <br></br>to have a great time exploring new places and have fun.
        </p>
        <div className="w-full h-[1px] bg-gray-500 mt-11"></div>
      </div>

      {/* Transparent Carousel Container */}
      <div className="absolute top-[65%] w-full px-8">
        <div className="flex gap-4 overflow-x-auto">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="min-w-[200px] h-[55vh] rounded-lg overflow-hidden shadow-md bg-opacity-50 backdrop-filter backdrop-blur-sm  border-white"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover opacity-90"
              />
              <p className="text-center text-white bg-[#012831] bg-opacity-80 py-2">
                {destination.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
        {/* section-4  */}
    <section className="w-full mt-64 h-[105vh] shadow-lg relative ">
      <div className="flex h-full w-full ">
        {/* Right Side Image Div */}
       
        <div className="w-[60%] h-full bg-white p-8 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">YOUR CUSTOM ADVENTURE</h2>
          <p className="text-gray-700 mb-6">
            Craft your dream journey with us. Explore destinations, create memories, and let your adventure begin. From enchanting getaways to exotic adventures, our website crafts the perfect journey just for you.
          </p>
          
          {/* Search Bar */}
          <div className="flex items-center mt-4">
            <input
              type="text"
              placeholder="Search destinations..."
              className="border-2 border-[#03B58B] rounded-l-md py-2 px-4 flex-1 outline-none"
            />
            <button className="bg-[#03B58B] ml-1 text-white py-2 px-6 rounded-md">
              Search
            </button>
          </div>
        </div>
        {/* Left Side Text Div */}
        <div className="relative w-[40%] bg-white h-full overflow-hidden">
          <img
            src={adventureImage}
            alt="Adventure"
            className="w-full h-full object-cover rounded-bl-[30%]"
          />
        </div>
      </div>
    </section>
        {/* section-5   */}
    <section className="w-[60%] mb-5 h-[70vh]   mx-auto mt-8 p-4 bg-transparent ">
      <h3 className="text-[#03B58B] text-center text-2xl font-semibold mb-4">
        From Our Travellers
      </h3>

      {/* Reviews Carousel */}
      <div className="flex overflow-x-auto ">
        {reviews.map((review, index) => (
          <div
            key={index}
            className={`min-w-[300px] h-[50vh] border-2 text-start   p-9  ${
              index === 0 ? 'border-l-0' : '' // Remove left border for the first card
            } ${index === reviews.length - 1 ? 'border-r-0' : ''}`} // Remove right border for the last card
          >
            <div className="flex items-center mb-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-blue-500" />
              ))}
            </div>
            <p className="text-gray-700  text-[.7rem] font-normal mb-4">{review.text}</p>
            <p className="text-gray-900  text-end font-normal">- {review.name}</p>
          </div>
        ))}
      </div>
    </section>
    </div>
    
  );
}
