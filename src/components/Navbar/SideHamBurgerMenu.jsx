import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import TransitionLink from "../../../utils/TransitionLink";

export default function SideHamBurgerMenu({ toggleMenu, isMenuOpen }) {
  const data = [
    { name: "Destinations", link: "/" },
    { name: "What's new", link: "/" },
    { name: "My trips", link: "/" },
    { name: "About Us", link: "/aboutus" },
    { name: "Travel Tips", link: "/" },
    { name: "Visas", link: "/" },
    { name: "Profile", link: "/" },
    { name: "My Bookings", link: "/" },
    { name: "Privacy Policy", link: "/aboutus/privacy-policy" },
    { name: "Careers", link: "/aboutus/careers" },
    { name: "FAQs", link: "/" },
  ];

  return (
    <div
      className={`fixed inset-0 max-w-[1980px] mx-auto w-full h-full top-1/2 transition-transform ease-in-out duration-500 left-1/2 ${
        isMenuOpen ? "-translate-x-1/2" : "translate-x-[200%]"
      } -translate-y-1/2 bg-white z-20 overflow-hidden shadow-lg`}
    >
      <div className="w-[98%] mx-auto h-full flex flex-col">
        {/* Header Section */}
        <div className="flex justify-between mt-5 items-center">
          <img
            src="https://trippobazaar.com/wp-content/uploads/2024/07/trippo_logo.png"
            alt="Logo"
            className="h-11 cursor-pointer"
            onClick={toggleMenu}
          />
          <button className="border-[.1rem] rounded-lg text-[#03B58B] border-[#012831] font-poppins text-[1rem] font-medium px-4 py-2">
            Login/Sign Up
          </button>
          <button className="text-xl" onClick={toggleMenu}>
            <IoCloseOutline className="w-8 h-8 text-gray-500" />
          </button>
        </div>

        {/* Scrollable Options List */}
        <div className="flex flex-col overflow-y-auto py-4">
          {data.map((item, idx) => (
            <TransitionLink
              to={item.link}
              className="text-start  py-4 border-b uppercase border-med-green w-full"
              key={idx}
            >
              {item.name}
            </TransitionLink>
          ))}
        </div>

        {/* Footer Section */}
        <div className="flex justify-start gap-3 py-4">
          <button className="text-sm border-[1px] border-[#012831] rounded-full py-2 px-[10px]">
            <FaSearch />
          </button>
          <button className="bg-[#03B58B] text-white px-4 h-9 rounded-md">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
