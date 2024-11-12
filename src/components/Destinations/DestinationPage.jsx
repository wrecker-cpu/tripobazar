import React from "react";

import DestinationTitle from "./DestinationTitle";
import SubNavsDestination from "./SubNavsDestination";
import SearchDestinationPage from "../SearchDestination/SearchDestinationPage";
import Continent from "./Continent";

export default function DestinationPage() {
  return (
    <div className="bg-[#F8F8F8] max-w-[1920px] mx-auto">
   
      <DestinationTitle />
      <SubNavsDestination />
      <SearchDestinationPage />
      <Continent/>
    </div>
  );
}
