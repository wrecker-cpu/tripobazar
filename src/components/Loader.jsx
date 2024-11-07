import React from 'react'
import Logo from "../../src/assets/Logo.svg";

function Loader() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blend-saturation">
    <div className="relative flex justify-center items-center">
      {/* Spinning circle */}
      <div className="absolute w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 xl:w-56 xl:h-56 border-2 border-t-8 border-gray-200 border-t-[#03B58B] animate-spin rounded-full">
      </div>
      
      {/* Logo image */}
      <img
        src={Logo}// Make sure this path is correct
        alt="Logo"
        className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 object-contain"
      />
    </div>
  </div>
  )
}

export default Loader