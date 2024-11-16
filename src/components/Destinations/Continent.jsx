import React from "react";
import Loader from "../Loader";
import { useState, useRef } from "react";
import {
  FaHeart,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
function Continent() {
  const [liked, setLiked] = useState(Array(8).fill(false)); // Initial state for heart toggle
  const carouselRef = useRef(null); // Reference for the carousel container
  const navigate = useNavigate();

  const { data, loading } = useFetch(
    "https://tripobazar-backend.vercel.app/api/continent"
  );
  console.log(data);

  const toggleHeart = (index) => {
    setLiked(liked.map((item, i) => (i === index ? !item : item)));
  };

  // Function to scroll carousel to the left
  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
    }
  };

  // Function to scroll carousel to the right
  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
    }
  };

  if (loading === true) {
    return <Loader />;
  }

  return (
    <div className="overflow-hidden w-full">
      {data?.map((item, idx) => (
        <section
          key={idx}
          className="relative h-[25%] md:h-[60%] w-full overflow-hidden max-w-full"
        >
          {/* Background Image with dark overlay */}
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src={item.ContinentPhotoUrl}
              alt={`Background of ${item.ContinentName}`}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>

          <div className="flex  items-start relative z-10">
            <div className="h-full w-[1px] bg-white absolute left-5 sm:left-10 md:left-20 z-20"></div>
            <div className="relative z-10 pl-8 sm:pl-16 md:pl-28 pt-10 md:pt-16 pb-10 md:pb-20 text-white max-w-full">
              <h1 className="text-[2.8rem] sm:text-[3.5rem] md:text-[4rem] lg:text-[4.8rem] uppercase font-bold mb-2 sm:mb-3">
                {item.ContinentName}
              </h1>
              <p className="text-sm sm:text-lg font-normal mb-4 sm:mb-5">
                Discover the enchanting wonders <br />
                of {item.ContinentName}'s tourism treasures
              </p>

              {/* Carousel Navigation */}
              <div className="flex items-center mb-3 mt-6 sm:mt-1 space-x-2 z-20 relative">
                <button
                  onClick={scrollLeft}
                  className="p-2 text-white bg-black bg-opacity-50 rounded hover:bg-opacity-70"
                >
                  <FaChevronLeft />
                </button>
                <button
                  onClick={scrollRight}
                  className="p-2 text-white bg-black bg-opacity-50 rounded hover:bg-opacity-70"
                >
                  <FaChevronRight />
                </button>
              </div>

              {/* Carousel Section */}
              <div
                ref={carouselRef}
                className="flex overflow-x-scroll space-x-3 sm:space-x-4 mt-10 sm:mt-16 md:mt-20 scrollbar-hide max-w-full scroll-snap-type-x-mandatory"
              >
                {item?.Countries?.map((card, index) => (
                  <div
                    key={index}
                    onClick={() => navigate(`/destination/${card.CountryName}`)}
                    className="relative h-[260px] sm:h-[300px] md:h-[360px] min-w-[200px] sm:min-w-[250px] md:min-w-[350px] rounded-lg overflow-hidden shadow-lg flex-shrink-[-4] scroll-snap-align-start cursor-pointer"
                  >
                    {/* Image */}
                    <img
                      src={card.CountryPhotoUrl}
                      alt={`Photo of ${card.CountryName}`}
                      className="w-full h-[70%] md:h-[80%] object-cover"
                    />

                    {/* Top left tag */}
                    <p className="absolute top-0 text-base left-0 bg-green-500 text-white px-3 py-2 rounded-br-md">
                      ₹ {card.States[0]?.Packages[0]?.price} onwards
                    </p>

                    {/* Heart icon */}
                    <button
                      className={`absolute top-2 right-2 text-2xl sm:text-3xl p-1 rounded-full ${
                        liked[index] ? "text-pink-500" : "text-white"
                      }`}
                      onClick={() => toggleHeart(index)}
                    >
                      <FaHeart />
                    </button>

                    {/* Bottom div */}
                    <div className="bg-white h-[24%] rounded-b-lg md:h-[20%] text-lg sm:text-xl md:text-2xl text-black w-full px-3 py-2 flex justify-between items-center">
                      <p>{card.CountryName}</p>
                      <FaArrowRight className="text-md sm:text-lg" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}

export default Continent;
