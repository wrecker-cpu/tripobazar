import React from "react";
import { Link } from "react-router-dom";
import AllContinent from "./AllContinent";
import OneContinent from "./OneContinent/OneContinent";

export default function SubNavsDestination() {
  // Sections and their corresponding routes
  const sectionRoutes = {
    "All": "",
    "Asia": "onecontinent",
    "AFRICA": "",
    "AUSTRALIA": "onecontinent",
    "NORTH AMERICA": "onecontinent",
    "SOUTH AMERICA": "onecontinent",
  };

  const sections = ["All", "Asia", "AFRICA", "AUSTRALIA", "NORTH AMERICA", "SOUTH AMERICA"];

  return (<>
    <nav className="bg-white sticky top-0 z-[19] shadow-inner">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ul className="flex flex-row em:flex-row items-start em:items-center justify-center text-[.7rem] em:text-sm uppercase leading-6 font-normal em:space-x-8">
          {sections.map((item, idx) => (
            <li key={idx}>
              <Link
                to={sectionRoutes[item]}  // Use the mapping to get the route
                className={`text-gray-500 uppercase em:py-0 py-2 em:border-b-0 ${idx === sections.length - 1 ? "border-b-0" : "border-b-0"} em:w-auto w-full hover:text-med-green`}
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
     
       </>
  );
}
