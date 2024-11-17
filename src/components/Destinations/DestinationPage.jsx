import React from "react";
import { Route, Routes, } from "react-router-dom";
import DestinationTitle from "./DestinationTitle";
import SubNavsDestination from "./SubNavsDestination";

import AllContinent from "./AllContinent";
import OneContinent from "./OneContinent/OneContinent";


export default function DestinationPage() {
  return (
    <div className="bg-[#F8F8F8] max-w-[1920px] mx-auto">
   
      <DestinationTitle />
      <SubNavsDestination />
      <Routes>
          <Route path="/" element={<AllContinent/>} />
          <Route path="onecontinent" element={<OneContinent/>} />
        

          {/* Add more routes as needed */}
        </Routes>
      {/* <AllContinent/>
      <OneContinent/> */}
      
    </div>
  );
}
