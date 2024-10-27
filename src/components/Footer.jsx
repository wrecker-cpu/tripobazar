import React from 'react'
import Logo from "../assets/Logo.svg";
function Footer() {
  return (
    <footer className="text-center text-black pb-6 bg-white">
    <div className="container mx-auto flex flex-col md:flex-row md:justify-between items-center px-4 md:px-6">
      
      {/* Logo Section */}
      <div className="flex items-center justify-center md:w-1/4 w-full mb-4 md:mb-0">
        <img src={Logo} alt="Logo" className="h-24 md:h-36" />
      </div>
      
      {/* Links Section */}
      <div className="flex flex-col md:flex-row md:w-1/2 w-full text-sm text-center md:text-start space-y-6 md:space-y-0 md:space-x-12 mb-4 md:mb-0">
        {/* First Column of Links */}
        <ul className="space-y-3">
          <li>About Us</li>
          <li>Careers</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
          <li>Get a Call back</li>
          <li>Contact Us</li>
        </ul>
        {/* Second Column of Links */}
        <ul className="space-y-3">
          <li>Search Destinations</li>
          <li>Booking Conditions</li>
          <li>My Reservations</li>
          <li>Explore Packages</li>
          <li>Safety Measures</li>
          <li>Health Concerns</li>
        </ul>
      </div>
  
      {/* Contact and Subscribe Section */}
      <div className="md:w-1/4 w-full space-y-4 text-sm text-center md:text-start">
        {/* Contact Information */}
        <h4 className="text-[#03B58B] font-semibold">Contact Us</h4>
        <p>contact@trippobazzar.com</p>
        <p>+91 9999999999 | +91 88888888888</p>
        
        {/* Subscribe Section */}
        <h4 className="text-[#03B58B] font-semibold">Subscribe</h4>
        <p>to get exclusive deals</p>
        
        {/* Search Bar and Button */}
        <div className="flex items-center border h-9 border-[#03B58B] rounded-md overflow-hidden">
          <input
            type="text"
            placeholder="Enter your email"
            className="p-2 w-full outline-none text-black"
          />
          <button className="bg-[#03B58B] text-[0.9rem] h-full w-[50%] text-white">Get Deals</button>
        </div>
  
        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-start space-x-3 mt-4">
          <img src="path/to/social1.png" alt="Social Icon 1" className="w-6 h-6" />
          <img src="path/to/social2.png" alt="Social Icon 2" className="w-6 h-6" />
          <img src="path/to/social3.png" alt="Social Icon 3" className="w-6 h-6" />
          <img src="path/to/social4.png" alt="Social Icon 4" className="w-6 h-6" />
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer