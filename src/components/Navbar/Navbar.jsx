// src/components/Navbar.jsx

import Logo from "../../assets/Logo.svg";
import { useEffect, useState } from "react";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa"; // Importing icons
import HamburgerSvg from "../../../svgs/HamburgerSvg";
import CompanyLogo from "../../../svgs/CompanyLogo";
import { IoCloseOutline } from "react-icons/io5";
import SideHamBurgerMenu from "./SideHamBurgerMenu";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null); // State to store user data
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);

  const NavbarData = ["Destinations", "My trips", "Whats new"];

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const toggleDestinations = () => {
    setIsDestinationsOpen((prev) => !prev); // Toggle destinations div
  };
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const hideMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 999px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        hideMenu();
      }
    };

    // Attach listener
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, [hideMenu]);

  useEffect(() => {
    // Get user data from localStorage
    const data = localStorage.getItem("userInfo");
    if (data) {
      setUserData(JSON.parse(data)); // Parse the JSON string into an object
    }
  }, []);

  return (
    <div className="relative max-w-[1920px] mx-auto">
      <nav className="bg-white flex items-center justify-between p-4 shadow-md relative">
        <div className="hidden md:flex items-center gap-8 xlg:gap-10">
          {userData === null ? (
            <Link
              to={"/login"}
              className="border-[.1rem] rounded-lg text-[#03B58B] border-[#012831] font-poppins text-[.8rem] font-medium px-2 py-2"
            >
              Login/Sign Up
            </Link>
          ) : (
            <Link
              to={"/"}
              className="border-[.1rem] rounded-lg tracking-wider text-[#03B58B] border-[#012831] font-poppins text-[.8rem] font-medium px-8 py-2"
            >
              Menu
            </Link>
          )}
          <div className="flex flex-row justify-between gap-6">
            {NavbarData.map((item, idx) => {
              return (
                <button
                  onClick={toggleDestinations}
                  key={idx}
                  className="flex text-sm uppercase justify-center items-center "
                >
                  {item}
                  <IoIosArrowDown className="w-5 pl-1 text-med-green h-5" />
                </button>
              );
            })}
          </div>
        </div>

        {/* Center - Logo (always centered) */}
        <Link to={"/"}>
          {" "}
          <div className="flex-grow flex justify-start md:justify-end emd:justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-11 pr-0 md:pr-10 emd:pr-0 cursor-pointer"
            />
          </div>
        </Link>

        {/* Right Side - Nav Links and Search Bar (visible on medium and larger screens) */}
        <div className="hidden emd:flex items-center justify-center space-x-5 xlg:space-x-9">
          <Link to={"/about"}>
            <a
              href="#"
              className="font-poppins text-[.8rem] font-normal relative inline-block transition duration-300 ease-in-out hover:text-green-500 "
            >
              ABOUT US
             
            </a>
          </Link>
          <a href="#" className="font-poppins text-[.8rem] font-normal relative inline-block transition duration-300 ease-in-out hover:text-green-500 ">
            TRAVEL TIPS
          </a>
          <a href="#" className="font-poppins text-[.8rem] font-normal relative inline-block transition duration-300 ease-in-out hover:text-green-500 ">
            OFFERS
          </a>

          {/* Search Icon */}
          <div className="relative">
            <button
              onClick={toggleSearch}
              className="text-sm border-[1px] border-[#012831] rounded-full p-2"
            >
              <FaSearch />
            </button>
            {isSearchVisible && (
              <input
                type="text"
                placeholder="Search"
                className="absolute top-6 right-0 w-[50vw] border-2 rounded-lg p-2 mt-8"
              />
            )}
          </div>

          {/* Book a Trip Button */}
          <button className="bg-[#03B58B] text-white px-4 h-9 rounded-md">
            Book a Trip
          </button>
        </div>

        {/* Mobile Menu Overlay */}

        {/* Mobile Menu Toggle Button (Hamburger Icon) */}
        <button className="emd:hidden text-[#03B58B] mt-2" onClick={toggleMenu}>
          <HamburgerSvg />
        </button>
      </nav>

      <SideHamBurgerMenu toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
    </div>
  );
};

export default Navbar;
