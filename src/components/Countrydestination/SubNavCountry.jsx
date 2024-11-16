import React from 'react'
const sections = ["ALL PACKAGES", "SEASONAL OFFERS", "ALL INCLUSIVE", ];
function SubNavCountry() {
  return (
    <nav className="bg-white sticky top-0 z-[19] shadow-inner">
    <div className="max-w-7xl mx-auto px-4 py-4">
    
      <ul className="flex flex-row em:flex-row items-start  em:items-center justify-center text-[.7rem] em:text-sm uppercase leading-6 font-normal  em:space-x-8">
        {sections.map((item, idx) => (
          <button
            key={idx}
            className={`text-gray-500 em:py-0 py-2  em:border-b-0 ${
              idx === sections.length - 1 ? "border-b-0" : "border-b"
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

export default SubNavCountry