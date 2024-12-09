import React from "react";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import  { forwardRef } from 'react';
function Coupns({props, ref}) {
    const [likedCards, setLikedCards] = useState([]);

  // Card data (example)
  const cards = [
    { id: 1, image: "public/bg-home.webp", price: "50% OFF", location: "Manali" },
    { id: 2, image: "public/bg-home.webp", price: "50% OFF", location: "leh" },
    { id: 3, image: "public/bg-home.webp", price: "50% OFF", location: "ladakh" },
    { id: 4, image: "public/bg-home.webp", price: "50% OFF", location: "dholavira" },
    { id: 5, image: "public/bg-home.webp", price: "50% OFF", location: "kerala" },
    { id: 6, image: "public/bg-home.webp", price: "50% OFF", location: "jammu" },
  ];

  const toggleLike = (id) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section ref={ref}  className="relative     bg-cover bg-opacity-0 px-0 py-5">
<div className="overflow-x-auto rounded-lg py-10 px-5 bg-white h-auto w-full">
  <div className="flex gap-8 w-56">
    {cards.map((card) => (
      <div
        key={card.id}
        className="relative group rounded-lg overflow-hidden shadow-lg h-[250px] w-[230px] flex-shrink-0 snap-center bg-cover bg-center"
        style={{ backgroundImage: `url(${card.image})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/20"></div>

     {/* Content */}
<div
  className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-1 gap-2"
  style={{
    textShadow: "4px 4px 8px rgba(0.1, 0.2, 0.5, 0.7)", // Apply text shadow to all children
  }}
>
  {/* H1 - 50% OFF */}
  <h1 className="text-4xl font-extrabold">50% OFF</h1>

  {/* Thin Line */}
  <div className="w-[50%] h-[2px] bg-white"></div>

  {/* P tag - On Manali Trips */}
  <p className="text-sm font-semibold mb-11">On {card.location}  Trips</p>

  {/* Button */}
  <button className="mt-4 text-sm px-4 py-2 w-[90%] bg-[#03B58B] text-white rounded-md hover:bg-[#029f7c] transition">
    Redeem Now
  </button>
</div>

      </div>
    ))}
  </div>
</div>

  </section>
  
  );
};
// Forward the ref to the Coupns component
export default forwardRef(Coupns);

