import React from 'react'

function SubNavbar() {
  return (
<nav className="bg-white shadow-lg mb-8">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex items-center justify-center text-[.3rem] sm:text-[.5rem]  md:text-[.6rem] lg:text-[.7rem] font-medium space-x-8">
          <li>
            <a href="#who-we-are" className="text-gray-500 hover:text-black">WHO WE ARE</a>
          </li>
          <li>
            <a href="#our-values" className="text-gray-500 hover:text-black">OUR VALUES</a>
          </li>
          <li>
            <a href="#our-mission" className="text-gray-500 hover:text-black">OUR MISSION</a>
          </li>
          <li>
            <a href="#careers" className="text-gray-500 hover:text-black">CAREERS</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default SubNavbar