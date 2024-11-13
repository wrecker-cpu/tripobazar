// src/components/Navbar.jsx

import Logo from "../../assets/Logo.svg";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing icons
import HamburgerSvg from "../../../svgs/HamburgerSvg";

import SideHamBurgerMenu from "./SideHamBurgerMenu";
import { Link } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import MenuSvg from "../../../svgs/MenuSvg";

import TransitionLink from "../../../utils/TransitionLink";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [userData, setUserData] = useState(null);
  const downRef = useRef(null);

  const Destination = {
    description: [
      {
        region: "India",
        destinations: [
          { name: "Kerala" },
          { name: "Leh-Ladakh" },
          { name: "Himachal" },
          { name: "Rajasthan" },
          { name: "Uttarakhand" },
          { name: "Sikkim" },
          { name: "North Kerala" },
          { name: "Dholavira" },
        ],
      },
      {
        region: "Asia",
        destinations: [{ name: "Vietnam" }],
      },
      {
        region: "Australia",
        destinations: [{ name: "Australia" }],
      },
      {
        region: "Africa",
        destinations: [{ name: "Egypt" }],
      },
      {
        region: "Europe",
        destinations: [{ name: "Georgia" }],
      },
      {
        region: "Middle East",
        destinations: [{ name: "Saudi Arabia" }],
      },
    ],
  };

  const NavbarData = [
    {
      title: "My trips",
      description: [{ name: "New packages" }, { name: "Latest Offer" }],
    },
    {
      title: "Whats new",
      description: [{ name: "Fixed Plants" }],
    },
  ];

  const toggleSearch = () => {
    setIsSearchVisible((prev) => !prev);
  };

  const toggleDestinations = (idx) => {
    setOpenDropdownIndex((prevIndex) => (prevIndex === idx ? null : idx));
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
    const data = localStorage.getItem("userInfo");
    if (data) {
      setUserData(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (downRef.current && !downRef.current.contains(e.target)) {
        setOpenDropdownIndex(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [downRef]);

  return (
    <div className="z-20  sticky top-0  max-w-[1920px] border-b bg-white mx-auto">
      <nav
        className={`bg-white flex items-center justify-between py-4  relative w-[90%] mx-auto`}
      >
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
              to={"/adminpanel"}
              className="border-[.1rem] flex justify-center items-center gap-2 rounded-lg tracking-wider text-[#03B58B] border-[#012831] font-poppins text-[.8rem] font-medium px-8 py-2"
            >
              <MenuSvg />
              Menu
            </Link>
          )}
          <div className="flex flex-row justify-between gap-6">
            <div className="relative">
              <button className="flex text-sm uppercase justify-center items-center">
                <TransitionLink to="/destination"> Destinations</TransitionLink>
                <IoIosArrowDown
                  onClick={() => toggleDestinations(-1)}
                  className="w-5 pl-1 text-med-green h-5"
                />
              </button>
              <div
                ref={downRef}
                style={{
                  visibility: `${
                    openDropdownIndex === -1 ? "visible" : "hidden"
                  }`,
                }}
                className={`absolute z-20 w-max transition-opacity ease-in-out duration-300 left-0 mt-2 bg-white shadow-md border rounded-md ${
                  openDropdownIndex === -1
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="flex flex-row flex-wrap gap-4 p-2">
                  {Destination.description.map((region, idx) => (
                    <div key={idx} className="flex flex-col">
                      <h3 className="text-sm font-semibold text-med-green uppercase mb-1 border-b-2 border-med-green">
                        {region.region}
                      </h3>
                      <ul className="whitespace-nowrap">
                        {region.destinations.map((destination, destIdx) => (
                          <li
                            key={destIdx}
                            className="py-1 text-sm cursor-pointer border-b-2 border-transparent hover:border-med-green transition-all duration-200"
                          >
                            {destination.name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {NavbarData.map((item, idx) => {
              return (
                <div key={idx} className="relative">
                  <button
                    onClick={() => toggleDestinations(idx)}
                    className="flex text-sm uppercase justify-center items-center"
                  >
                    {item.title}
                    <IoIosArrowDown className="w-5 pl-1 text-med-green h-5" />
                  </button>
                  <div
                    ref={downRef}
                    style={{
                      visibility: `${
                        openDropdownIndex === idx ? "visible" : "hidden"
                      }`,
                    }}
                    className={`absolute z-20 w-[160px] transition-opacity ease-in-out duration-300 left-0 mt-2 bg-white shadow-md border rounded-md ${
                      openDropdownIndex === idx
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <ul className="p-2 whitespace-nowrap">
                      {item.description.map((liItems, idx) => {
                        return (
                          <li
                            key={idx}
                            className="py-1 text-sm cursor-pointer border-b-2 border-transparent hover:border-med-green transition-all duration-200"
                          >
                            {liItems.name}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Center - Logo (always centered) */}
        <TransitionLink to={"/"}>
          {" "}
          <div className="flex-grow flex justify-start md:justify-end emd:justify-center">
            <img
              src={Logo}
              alt="Logo"
              className="h-11 pr-0 md:pr-10 emd:pr-0 cursor-pointer"
            />
          </div>
        </TransitionLink>

        {/* Right Side - Nav Links and Search Bar (visible on medium and larger screens) */}
        <div className="hidden emd:flex items-center justify-center space-x-5 xlg:space-x-9">
          <TransitionLink
            className="font-poppins text-[.8rem] font-normal relative inline-block transition duration-300 ease-in-out hover:text-green-500 "
            to={"/aboutus"}
          >
            ABOUT US
          </TransitionLink>
          <TransitionLink
            to={"/traveltips"}
            href="#"
            className="font-poppins text-[.8rem] font-normal relative inline-block transition duration-300 ease-in-out hover:text-green-500 "
          >
            TRAVEL TIPS
          </TransitionLink>
          <a
            href="#"
            className="font-poppins text-[.8rem] font-normal relative inline-block transition duration-300 ease-in-out hover:text-green-500 "
          >
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

      <SideHamBurgerMenu
        hideMenu={hideMenu}
        toggleMenu={toggleMenu}
        isMenuOpen={isMenuOpen}
      />
    </div>
  );
};

export default Navbar;
