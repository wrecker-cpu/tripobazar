import { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
const CardSection = ({ data }) => {

  const { country } = useParams(); 

  const [liked, setLiked] = useState(Array(8).fill(false)); // Initial state for heart toggle

  const toggleHeart = (index) => {
    setLiked(liked.map((item, i) => (i === index ? !item : item)));
  };
  const navigate=useNavigate();

  return (
    <section className="relative  bg-cover bg-opacity-0 px-5 p-11">
      {/* Background image with low opacity */}
      <div className="absolute inset-0 bg-[url('src/assets/africa-bg-2.png')] bg-cover opacity-30"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 w-[90%] mx-auto lg:grid-cols-4 gap-8">
        {data?.States?.map((card, index) => {
          console.log(card);
          return (
            <div
              key={index}
              onClick={()=>{navigate(`/destination/${country}/${card.StateName}`)}}
              className="relative border hover:cursor-pointer group rounded-lg overflow-hidden shadow-lg"
            >
              {/* Image */}
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={card.StatePhotoUrl}
                  alt="Image Description"
                  className="w-full h-full group-hover:scale-105 duration-300 ease-in-out transition-transform object-cover"
                />
              </div>

              {/* Top left tag */}
              <p className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded">
                {card.StateName}
              </p>

              {/* Heart icon */}
              <button
                className={`absolute top-2 right-2 text-white  p-1 rounded-full ${
                  liked[index] ? "text-pink-500" : ""
                }`}
                onClick={() => toggleHeart(index)}
              >
                <FaHeart />
              </button>

              {/* Bottom div */}
              <div className="bg-white w-full px-3 py-2 flex justify-between items-center">
                <p>{card.StateName}</p>
                <span className="text-lg group-hover:translate-x-1 transition-transform ease-in-out duration-300">
                  &#8594;
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default CardSection;
