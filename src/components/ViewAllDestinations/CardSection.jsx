import { useState } from 'react';
import { FaHeart } from 'react-icons/fa';
import bgimg from '../../assets/africa3.png'
const CardSection = () => {
  const [liked, setLiked] = useState(Array(8).fill(false)); // Initial state for heart toggle

  const toggleHeart = (index) => {
    setLiked(liked.map((item, i) => (i === index ? !item : item)));
  };

  const cards = Array(8).fill({
    imgSrc: '',
    topLeftText: '₹ 78,999 onwards',
    bottomText: 'Tanzania',
  });

  return (
    <section className="relative bg-[url('')] bg-cover bg-opacity-0 px-5 p-11">
       {/* Background image with low opacity */}
  <div className="absolute inset-0 bg-[url('src/assets/africa-bg-2.png')] bg-cover opacity-30"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {cards.map((card, index) => (
          <div key={index} className="relative border rounded-lg overflow-hidden shadow-lg">
            {/* Image */}
            <img src={bgimg} alt="Card" className="w-full h-48 object-cover" />

            {/* Top left tag */}
            <p className="absolute top-2 left-2 bg-green-500 text-white px-2 py-1 rounded">
              {card.topLeftText}
            </p>

            {/* Heart icon */}
            <button
              className={`absolute top-2 right-2 text-white  p-1 rounded-full ${liked[index] ? 'text-pink-500' : ''}`}
              onClick={() => toggleHeart(index)}
            >
              <FaHeart />
            </button>

            {/* Bottom div */}
            <div className="bg-white w-full px-3 py-2 flex justify-between items-center">
              <p>{card.bottomText}</p>
              <span className="text-lg">&#8594;</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
