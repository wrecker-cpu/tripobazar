// src/components/Navbar.jsx

import Logo from "../../assets/Logo.svg";
import { useEffect, useRef, useState } from "react";
import { FaSearch } from "react-icons/fa"; // Importing icons
import HamburgerSvg from "../../../svgs/HamburgerSvg";
import LargeDeviceSidebar from "./LargeDeviceSidebar";
import SideHamBurgerMenu from "./SideHamBurgerMenu";
import { Link, useNavigate } from "react-router-dom";

import { IoIosArrowDown } from "react-icons/io";
import MenuSvg from "../../../svgs/MenuSvg";

import TransitionLink from "../../../utils/TransitionLink";
import { Destination, NavbarData } from "./DestinationAccordionData";

const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // New state for large device sidebar
  const [userData, setUserData] = useState(null);
  const downRef = useRef([]);
  const navigate = useNavigate();
  const toggleDestinations = (index) => {
   console.log("this is called")
    setOpenDropdownIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  useEffect(() => {
    console.log("Updated openDropdownIndex:", openDropdownIndex);
  }, [openDropdownIndex]);
  
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const hideMenu = () => {
    setIsMenuOpen(false);
  };
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
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
      if (
        downRef.current &&
        !Object.values(downRef.current).some((ref) => ref && ref.contains(e.target))
      ) {
        setOpenDropdownIndex(null); // Close any open dropdown
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  return (
    <div className="relative  max-w-[1920px] mx-auto">
      <div className="z-20  sticky top-0  border-b bg-white mx-auto">
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
              <Link className="">
                <button
                  onClick={toggleSidebar}
                  className="border-[.1rem] flex justify-center items-center gap-2 rounded-lg tracking-wider text-[#03B58B] border-[#012831] font-poppins text-[.8rem] font-medium px-8 py-2"
                >
                  <MenuSvg />
                  Menu
                </button>
              </Link>
            )}
            <div className="flex flex-row justify-between gap-6">
              <div className="relative">
                <button className="flex text-sm uppercase justify-center items-center">
                  <TransitionLink to="/destination">
                    Destinations
                  </TransitionLink>
                  <IoIosArrowDown
                    onClick={() => toggleDestinations("dest")}
                    className="w-5 pl-1 text-med-green h-5"
                  />
                </button>
                <div
                  ref={(el) => (downRef.current["dest"] = el)}
                  style={{
                    visibility: openDropdownIndex === "dest" ? "visible" : "hidden",
                  }}
                  className={`absolute z-20 w-max transition-opacity ease-in-out duration-300 left-0 mt-2 bg-white shadow-md border rounded-md ${
                    openDropdownIndex === "dest"
                      ? "opacity-100"
                      : "opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="flex flex-row z-20 flex-wrap gap-4 p-2">
                    {Destination.description.map((region, idx) => (
                      <div key={idx} className="flex flex-col">
                        <h3 className="text-sm font-semibold text-med-green uppercase mb-1 border-b-2 border-med-green">
                          {region.region}
                        </h3>
                        <ul className="whitespace-nowrap">
                          {region.destinations.map((destination, destIdx) => (
                            <li
                              key={destIdx}
                              onClick={() => {
                                setOpenDropdownIndex(null);
                                let navigatePath =
                                  region.region === "India"
                                    ? `/destination/asia/${region.region}/${destination.name}`
                                    : `/destination/${region.region}/${destination.name}`;

                                navigate(navigatePath);
                              }}
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

              {NavbarData.map((item, idx) => (
                <div key={idx} className="relative">
                  <button
                    onClick={() => toggleDestinations(idx)}
                    className="flex text-sm uppercase justify-center items-center"
                  >
                    {item.title}
                    <IoIosArrowDown className="w-5 pl-1 text-med-green h-5" />
                  </button>
                  <div
                    ref={(el) => (downRef.current[idx] = el)}
                    style={{
                      visibility:
                        openDropdownIndex === idx ? "visible" : "hidden",
                    }}
                    className={`absolute z-20 w-[160px] transition-opacity ease-in-out duration-300 left-0 mt-2 bg-white shadow-md border rounded-md ${
                      openDropdownIndex === idx
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                    }`}
                  >
                    <ul className="p-2 whitespace-nowrap">
                      {item.description.map((liItems, liIdx) => (
                        <li
                          key={liIdx}
                          onClick={() => console.log("Clicked")}
                          className="py-1 text-sm cursor-pointer border-b-2 border-transparent hover:border-med-green transition-all duration-200"
                        >
                          {liItems.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
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
              <Link to={"/searchpage"}>
                <button className="text-sm border-[1px] border-[#012831] rounded-full p-2">
                  <FaSearch />
                </button>
              </Link>
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
          <button
            className="emd:hidden text-[#03B58B] mt-2"
            onClick={toggleMenu}
          >
            <HamburgerSvg />
          </button>
        </nav>

        <SideHamBurgerMenu
          hideMenu={hideMenu}
          toggleMenu={toggleMenu}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </div>
      <LargeDeviceSidebar
        isSidebarOpen={isSidebarOpen}
        closeSidebar={closeSidebar}
      />
    </div>
  );
};

export default Navbar;
