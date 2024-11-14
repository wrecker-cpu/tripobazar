import React from "react";
import Loader from "../Loader"
import { useState, useRef } from "react";
import {
  FaHeart,
  FaArrowRight,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../../utils/Spinner";
function Continent() {
  const [liked, setLiked] = useState(Array(8).fill(false)); // Initial state for heart toggle
  const carouselRef = useRef(null); // Reference for the carousel container

  const { data, loading } = useFetch(
    "https://tripobazar-backend.vercel.app/api/continent"
  );

  console.log(data);

  const cards = Array(8).fill({
    imgSrc: "src/assets/africa-bg-2.png",
    topLeftText: "₹ 78,999 onwards",
    bottomText: "India",
  });

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
    return <Loader/>;
  }

  return (
    <>
    {data?.map((item, idx) => {
      return (
        <section key={idx} className="relative h-[25%] md:h-[60%] w-full max-h-[50%]">
          {/* Background Image with dark overlay */}
          <div className="w-full h-full">
            <img
              className="w-full h-full object-cover absolute inset-0"
              src={item.ContinentPhotoUrl}
            />
            <div className="absolute inset-0 bg-black opacity-50"></div>
          </div>
  
          <div className="flex items-start relative z-10">
            <div className="h-full w-[2px] bg-white absolute left-5 sm:left-10 md:left-20 z-20"></div>
            <div className="relative z-10 pl-8 sm:pl-16 md:pl-36 pt-10 md:pt-16 pb-10 md:pb-20 text-white">
              <h1 className="text-4xl sm:text-6xl md:text-8xl uppercase font-bold mb-2 sm:mb-3">
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
                className="flex overflow-x-scroll space-x-3 sm:space-x-4 mt-10 sm:mt-16 md:mt-20 scrollbar-hide max-w-full overflow-hidden"
              >
                {item?.Countries?.map((card, index) => (
                  <div
                    key={index}
                    className="relative h-[260px] sm:h-[300px] md:h-[360px] min-w-[200px] sm:min-w-[250px] md:min-w-[350px] rounded-lg overflow-hidden shadow-lg"
                  >
                    {/* Image */}
                    <img
                      src={card.CountryPhotoUrl}
                      alt="Card"
                      className="w-full h-[70%] md:h-[80%] object-cover"
                    />
  
                    {/* Top left tag */}
                    <p className="absolute top-0 text-sm sm:text-lg md:text-xl left-0 bg-green-500 text-white px-2 py-1 rounded">
                      {card.topLeftText}
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
      );
    })}
  </>
  
  
  );
}

export default Continent;
