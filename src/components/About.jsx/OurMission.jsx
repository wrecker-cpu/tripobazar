import React from "react";

function OurMission() {
  return (
    <>
      <section className="bg-white w-full md:pt-10 h-[80vh] flex flex-col md:flex-row">
        {/* Left div with heading and paragraph */}
        <div className="w-full md:w-1/2 h-full flex flex-col justify-center 
         px-8  md:pl-44 text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
          <p className="text-gray-700  text-sm md:text-lg">
            Our mission is to provide outstanding services and experiences for
            all our clients. We strive to bring value and excellence in
            everything we do.
          </p>
        </div>

        {/* Right div with curved image */}
        <div className="w-full md:w-1/2 h-full flex justify-center md:justify-end mt-6 md:mt-0">
          <img
            src="public/AboutUs/adventure-background.jpg"
            alt="Our Mission Visual"
            className="w-[80%] md:w-auto h-[50vh] md:h-[90%] object-cover rounded-tl-[4rem] md:rounded-tl-[10rem]"
          />
        </div>
      </section>
    </>
  );
}

export default OurMission;
