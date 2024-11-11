import React from 'react'
import { useState , useRef} from 'react';
import { FaHeart, FaArrowRight, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
function Continent() {
    const [liked, setLiked] = useState(Array(8).fill(false)); // Initial state for heart toggle
    const carouselRef = useRef(null); // Reference for the carousel container
  
    const cards = Array(8).fill({
      imgSrc: 'src/assets/africa-bg-2.png',
      topLeftText: '₹ 78,999 onwards',
      bottomText: 'India',
    });
  
    const toggleHeart = (index) => {
      setLiked(liked.map((item, i) => (i === index ? !item : item)));
    };
  
    // Function to scroll carousel to the left
    const scrollLeft = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: -250, behavior: 'smooth' });
      }
    };
  
    // Function to scroll carousel to the right
    const scrollRight = () => {
      if (carouselRef.current) {
        carouselRef.current.scrollBy({ left: 250, behavior: 'smooth' });
      }
    };
    return (
        <section className="relative h-[130vh] w-full">
          {/* Background Image with dark overlay */}
          <div className="absolute inset-0 bg-[url('src/assets/Asia.png')] bg-cover bg-center">
            <div className="absolute inset-0 bg-black opacity-5"></div>
          </div>
    
          {/* Content */}
          <div className="relative z-10 px-8 py-5 text-white">
            {/* Heading and Description */}
            <h1 className="text-8xl font-bold mb-3">ASIA</h1>
            <p className="text-lg font-normal mb-5">Discover the enchanting wonders <br></br>
             of Asia's tourism treasures</p>
    
            {/* Carousel Navigation */}
            <div className="flex items-center mb-3 mt-9 space-x-2">
              <button onClick={scrollLeft} className="p-2 text-white bg-black bg-opacity-50 rounded hover:bg-opacity-70">
                <FaChevronLeft />
              </button>
              <button onClick={scrollRight} className="p-2 text-white bg-black bg-opacity-50 rounded hover:bg-opacity-70">
                <FaChevronRight />
              </button>
            </div>
    
            {/* Carousel Section */}
            <div ref={carouselRef} className="flex overflow-x-scroll space-x-4 mt-20 scrollbar-hide">
              {cards.map((card, index) => (
                <div key={index} className="relative h-[360px] min-w-[350px]  rounded-lg overflow-hidden shadow-lg">
                  {/* Image */}
                  <img src={card.imgSrc} alt="Card" className="w-full h-[80%] object-cover" />
    
                  {/* Top left tag */}
                  <p className="absolute top-0 text-xl left-0 bg-green-500 text-white px-2 py-1 rounded">
                    {card.topLeftText}
                  </p>
    
                 {/* Heart icon */}
<button
  className={`absolute top-2 right-2 text-3xl p-1 rounded-full  ${
    liked[index] ? 'text-pink-500' : 'text-white'
  }`}
  onClick={() => toggleHeart(index)}
>
  <FaHeart />
</button>
    
                  {/* Bottom div */}
                  <div className="bg-white h-[20%] text-2xl text-black w-full px-3 py-2 flex justify-between items-center">
                    <p>{card.bottomText}</p>
                    <FaArrowRight className="text-lg" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      );
    
}

export default Continent