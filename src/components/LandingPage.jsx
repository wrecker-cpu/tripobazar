import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import LoginPage from "./LoginPage/LoginPage";

import Navbar from "./Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";


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

    <div className="max-w-[1920px] font-poppins mx-auto bg-[#F8F8F8] ">
      <Navbar />
      <AboutUs />

    </div>
    
  );
}
