import React from "react";
import CompanyLogo from "../../svgs/CompanyLogo";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { SlSocialFacebook } from "react-icons/sl";
import { AiOutlineYoutube } from "react-icons/ai";

function Footer() {
  const data = [
    "About Us",
    "Careers",
    "Privacy Policy",
    "FAQs",
    "Get a Call back",
    "Contact Us",
    "Search Destinations",
    "Booking Conditions",
    "My Reservations",
    "Explore Packages",
    "Safety Measures",
    "Health Concerns",
  ];

  const socialMediaData = [
    {
      icon: <IoLogoInstagram className="w-6 h-6" />,
    },
    {
      icon: <CiTwitter className="w-6 h-6" />,
    },
    {
      icon: <SlSocialFacebook className="w-6 h-6 p-[2px]" />,
    },
    {
      icon: <AiOutlineYoutube className="w-6 h-6" />,
    },
  ];

  return (
    <footer className="text-center w-[95%] max-w-[1720px] mx-auto text-black pb-6 bg-white">
      <div className="mx-auto flex flex-col md:flex-row md:justify-between items-center ">
        {/* Logo Section */}
        <div className="md:mb-0 mb-10">
          <CompanyLogo />
        </div>
        {/* Links Section */}
        <ul className="flex flex-wrap md:grid  md:grid-cols-2 gap-x-12 gap-4 justify-center mb-10 text-sm text-center md:text-start  md:mb-0">
          {data.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>

        {/* Contact and Subscribe Section */}
        <div className="flex flex-col w-full max-w-sm md:w-[25%] gap-2 text-sm text-center md:text-start">
          {/* Contact Information */}
          <div className="mb-8">
            <h4 className="text-[#03B58B] mb-3 font-semibold">Contact Us</h4>
            <p className="mb-1">contact@trippobazzar.com</p>
            <p>+91 9999999999 | +91 88888888888</p>
          </div>

          {/* Subscribe Section */}
          <div className="mb-2">
            <h4 className="text-[#03B58B]  font-semibold">
              Subscribe
              <span className="text-gray-700">to get exclusive deals</span>
            </h4>
          </div>

          {/* Search Bar and Button */}
          <div className="flex emd:flex-row flex-col items-center gap-3 w-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 w-full border border-[#03B58B] rounded-md outline-none text-black h-8"
            />
            <button className="bg-[#03B58B] text-[0.9rem] px-4 w-full emd:w-auto text-white flex-shrink-0 rounded-md h-8">
              Get Deals
            </button>
          </div>

          {/* Social Media Icons */}

          <div className="flex justify-center md:justify-start space-x-3 mt-4">
            {socialMediaData.map((item, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full border p-1 border-gray-300"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
