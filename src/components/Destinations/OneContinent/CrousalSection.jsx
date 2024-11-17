import React from 'react'
import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa"; // For carousel arrows
function CrousalSection() {
    
    const carouselData = [
        { img: 'src/assets/Asia.png', title: 'Cape Town 1', description1: ' 8 Days 7 Nights | 2 Guests', description2: '₹ 78,999 onwards' },
        { img: 'src/assets/Asia.png', title: 'Cape Town 2', description1: ' 8 Days 7 Nights | 2 Guests', description2: '₹ 78,999 onwards' },
        { img: 'src/assets/Asia.png', title: 'Cape Town 3', description1: ' 8 Days 7 Nights | 2 Guests', description2: '₹ 78,999 onwards' },
        { img: 'src/assets/Asia.png', title: 'Cape Town 4', description1: ' 8 Days 7 Nights | 2 Guests', description2: '₹ 78,999 onwards' },
        { img: 'src/assets/Asia.png', title: 'Cape Town 5', description1: ' 8 Days 7 Nights | 2 Guests', description2: '₹ 78,999 onwards' },
        { img: 'src/assets/Asia.png', title: 'Cape Town 6', description1: ' 8 Days 7 Nights | 2 Guests', description2: '₹ 78,999 onwards' },
        { img: 'src/assets/Asia.png', title: 'Cape Town 7', description1: ' 8 Days 7 Nights | 2 Guests', description2: '₹ 78,999 onwards' },
        { img: 'src/assets/Asia.png', title: 'Cape Town 8', description1: ' 8 Days 7 Nights | 2 Guests', description2: '₹ 78,999 onwards' },
        // Add more data as needed
      ];
    
      const [currentIndex, setCurrentIndex] = useState(0);
    
      const handleNext = () => {
        if (currentIndex < carouselData.length - 4) { // Show up to 4 cards at once
          setCurrentIndex(currentIndex + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      };
    
      return (
        <section className="w-full pt-[180%] sm:pt-[100%] md:pt-[50%] lg:pt-72 bg-[url('/path/to/your/image.jpg')] bg-cover bg-white/20 bg-opacity-10 p-10 relative">
          <h3 className="text-3xl font-bold">
            It’s time for <span className="text-green-600">Africa!</span>
          </h3>
          <p className="mt-4 text-lg">
            Discover Africa's magnificent landscapes and vibrant cultures. Embark on an unforgettable adventure filled with wildlife safaris, ancient wonders, and pristine beaches.
          </p>
          <button className="mt-6 bg-[#03B58B] text-white py-2 px-4 rounded">
            View All African Destinations
          </button>
    
          <div className="relative mt-12 overflow-hidden  pt-7 w-full mx-auto -translate-y-12">
            <div className="flex transition-transform duration-500" style={{ transform: `translateX(-${currentIndex * 25}%)` }}>
              {carouselData.map((item, index) => (
                <div key={index} className="min-w-[30%] h-auto p-2">
                  <div className="bg-white shadow-lg h-[80vh] rounded overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-[56%] object-cover"
                    />
                    <div className="p-4  bg-transparent h-[44%] ">
                      <h4 className="text-xl text-gray-600 font-bold">{item.title}</h4>
                      <p className="mt-2 text-[.8rem] font-semibold text-gray-500">{item.description1}</p>
                      <p className="mt-1 text-[.8rem] font-semibold text-gray-500">{item.description2}</p>
                      <div className="flex justify-between mt-4">
                        <button className="bg-green-600 text-white py-1 px-3 rounded">
                          Book Now 
                        </button>
                        <button className="bg-transparent text-green-600 border border-black  py-1 px-3 rounded">
                          View All Plans 
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button onClick={handlePrev} className="absolute top-1  mt-3 right-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
              &lt;
            </button>
            <button onClick={handleNext} className="absolute top-1 mt-3 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow">
              &gt;
            </button>
          </div>
        </section>
      );
}

export default CrousalSection