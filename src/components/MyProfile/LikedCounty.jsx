import React from "react";
import { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
function LikedCounty() {
    const [likedCards, setLikedCards] = useState([]);

  // Card data (example)
  const cards = [
    { id: 1, image: "public/bg-home.webp", price: "₹ onwards", location: "India" },
    { id: 2, image: "public/bg-home.webp", price: "₹ onwards", location: "USA" },
    { id: 3, image: "public/bg-home.webp", price: "₹ onwards", location: "France" },
    { id: 4, image: "public/bg-home.webp", price: "₹ onwards", location: "Italy" },
    { id: 5, image: "public/bg-home.webp", price: "₹ onwards", location: "Germany" },
    { id: 6, image: "public/bg-home.webp", price: "₹ onwards", location: "Spain" },
  ];

  const toggleLike = (id) => {
    setLikedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section className="relative bg-cover bg-opacity-0 px-0 py-5">
    <div className="overflow-x-auto rounded-lg  py-10 px-5 bg-white h-auto  w-full">
      <div className="flex gap-8 w-56">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative border hover:cursor-pointer group rounded-lg overflow-hidden shadow-lg w-[270px] flex-shrink-0 snap-center"
          >
            {/* Image */}
            <div className="w-full h-48 overflow-hidden">
              <img
                src={card.image}
                alt={`Image of ${card.location}`}
                className="w-full h-full group-hover:scale-105 duration-300 ease-in-out transition-transform object-cover"
              />
            </div>
  
            {/* Top left tag */}
            <p className="absolute top-0 left-0 bg-green-500 text-white px-3 py-2 rounded-br-md">
              {card.price}
            </p>
  
            {/* Heart icon */}
            <button
              onClick={() => toggleLike(card.id)}
              className={`absolute top-1 right-2 text-2xl p-2 rounded-full transition-all ${
                likedCards.includes(card.id) ? "text-pink-500" : "text-white"
              }`}
            >
              <FaHeart />
            </button>
  
            {/* Bottom div */}
            <div className="bg-white w-full px-3 py-2 flex justify-between items-center">
              <p>{card.location}</p>
              <span className="text-lg group-hover:translate-x-1 transition-transform ease-in-out duration-300">
                &#8594;
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  
  );
};


export default LikedCounty;
