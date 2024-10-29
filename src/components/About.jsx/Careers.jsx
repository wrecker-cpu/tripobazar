import React from 'react'
import image1 from '.././../../public/Careers/image.jpg'
function Careers() {
  return (
    <div>
        <section className="w-full h-80 mb-7 sm:h-96 md:h-96 lg:h-auto bg-[#F8F8F8] flex flex-col md:flex-row px-4 md:px-8">
  {/* First Div */}
   <div className="md:flex-1 mr-10 hidden md:flex justify-center md:justify-end items-center md:items-end relative mt-6 mb- sm:mb-96 md:mb-20 md:mt-0">
    <img
      src={image1}
      alt="Large Image"
      className="rounded-2xl md:me-10 lg:mr-8 shadow-2xl w-3/4 h-auto md:w-5/6 lg:w-3/4 z-1"
    />
    <img
      src={image1}
      alt="Smaller Image"
      className="rounded-2xl shadow-2xl w-1/2 h-auto absolute right-0 bottom-2 md:right-4 md:bottom-0 lg:right-0 lg:bottom-[-3rem] z-10"
    />
  </div>
 

  {/* Second Div */}
  <div className="flex-1 flex bg-[#012831] t text-white flex-col justify-center items-start pl-9">
    <h1 className=" text-xl sm:text-2xl lg:text-3xl text-left font-bold">With Passion &<br></br>
    Wanderlust Soul</h1>

    <p className="mt-4 text-left text-sm sm:text-base lg:text-[]">
    Embark on a journey fueled by passion! Uncover your next career adventure by exploring our Careers page – where your professional heart finds a home.
    </p>
    <div className="mt-4 flex flex-wrap space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
     
      <button className="border border-white text-white hover:bg-white hover hover:text-[#012831]  px-4 py-2 rounded shadow">
      Discover Careers
      </button>
    </div>
  </div>
</section>
    </div>
  )
}

export default Careers