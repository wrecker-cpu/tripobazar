import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
// import LoginPage from "./LoginPage/LoginPage";

import Navbar from "./Navbar/Navbar";
import AboutUs from "./AboutUs/AboutUs";

export default function LandingPage() {
  return (
    <div className="max-w-[1920px] font-poppins mx-auto bg-[#F8F8F8] ">
      <Navbar />
      <AboutUs />
    </div>
  );
}
