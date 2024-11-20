import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function CrousalSection({ selectedDestination }) {

  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate=useNavigate();

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex < selectedDestination[0]?.Countries.length - 4
        ? prevIndex + 1
        : prevIndex
    );
  };

  // if (!selectedDestination) {
  //   return <Loader />;
  // }

  if ( !selectedDestination?.Countries?.length) {
    return (
      <div className="w-full h-auto pt-96 pb-40 flex justify-center items-center bg-gray-100">
        <h1 className="text-4xl max-w-6xl font-extrabold text-gray-800 text-center">
          {selectedDestination?.ContinentName
            ? `${selectedDestination.ContinentName} Coming Soon: A journey awaits you with breathtaking views, unforgettable experiences, and more to explore. Stay tuned for updates!`
            : "Coming Soon: A journey awaits you with breathtaking views, unforgettable experiences, and more to explore. Stay tuned for updates!"}
        </h1>
      </div>
    );
  }
  console.log(selectedDestination)

  return (
    <section className="w-full pt-[180%]  sm:pt-[100%] md:pt-[50%] lg:pt-72 bg-[url('/path/to/your/image.jpg')] bg-cover bg-white/20 bg-opacity-10 p-10 relative">
      <h3 className="text-3xl font-bold">
        It’s time for{" "}
        <span className="text-green-600">
          {selectedDestination?.ContinentName || "Loading...."}
        </span>
      </h3>
      <p className="mt-4 text-lg">
        Discover {selectedDestination?.ContinentName}'s magnificent landscapes
        and vibrant cultures. Embark on an unforgettable adventure filled with
        wildlife safaris, ancient wonders, and pristine beaches.
      </p>
      <button className="mt-6 bg-[#03B58B] text-white py-2 px-4 rounded">
        View All {selectedDestination?.ContinentName} Destinations
      </button>

      <div className="relative mt-12 overflow-hidden  pt-7 w-full mx-auto -translate-y-12">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 25}%)` }}
        >
          {selectedDestination?.Countries?.map((item, idx) => (
            <div key={idx} 
            onClick={()=>{navigate(`/destination/${selectedDestination.ContinentName}/${item.CountryName}`)}}
            className="min-w-[30%] h-auto p-2">
              <div className="bg-white shadow-lg h-[80vh] rounded overflow-hidden">
                <img
                  src={item?.CountryPhotoUrl}
                  alt={`photoNumber:${idx + 1}`}
                  className="w-full h-[56%] object-cover"
                />
                <div className="p-4  bg-transparent h-[44%] ">
                  <h4 className="text-xl text-gray-600 font-bold">
                    {item?.CountryName}
                  </h4>
                  <p className="mt-2 text-[.8rem] font-semibold text-gray-500">
                    {item?.States[0]?.Packages[0]?.description}
                  </p>
                  <p className="mt-1 text-[.8rem] font-semibold text-gray-500">
                    ₹{item?.States[0]?.Packages[0]?.price} onwards
                  </p>
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
        <button
          onClick={handlePrev}
          className="absolute top-1  mt-3 right-10 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1 mt-3 right-2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

export default CrousalSection;
