import React from 'react'
const sections = ["All", "THEME", "PRICE", "DURATION", "CUSTOMER REVIEWS","MY TRIPS"];
function SubNavofViewall() {
  return (
    <nav className="bg-white sticky mt-[38rem] sm:mt-[37rem] md:mt-[21rem] lg:mt-40 z-10 shadow-inner  mb-9">
    <div className="max-w-7xl mx-auto px-0 em:px-4 py-4">
 
      <ul className="flex  em:flex-row items-start  em:items-center justify-center text-[.7rem] em:text-sm uppercase leading-6 font-normal  em:space-x-8">
        {sections.map((item, idx) => (
          <button
            key={idx}
            className={`text-gray-500 em:py-0 py-2  em:border-b-0 ${
              idx === sections.length - 1 ? "border-b-0" : "border-b-0"
            }  em:w-auto  w-full hover:text-med-green`}
          >
            {item}
          </button>
        ))}
      </ul>
    </div>
  </nav>
  )
}

export default SubNavofViewall