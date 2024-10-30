import React from "react";
import { Link } from "react-router-dom";

function SubNavbar() {
  const SUBNAVDATA = [
    {
      label: "WHO WE ARE",
      link: "#who-we-are",
    },
    {
      label: "OUR VALUES",
      link: "#our-values",
    },
    {
      label: "OUR MISSION",
      link: "#our-mission",
    },
    {
      label: "CAREERS",
      link: "#careers",
    },
  ];
  return (
    <nav className="bg-white shadow-inner mb-8">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <p className="pb-2 italic underline font-medium em:hidden block">
          Sub Menus
        </p>
        <ul className="flex flex-col em:flex-row items-start  em:items-center justify-center text-[.7rem] em:text-sm uppercase leading-6 font-normal  em:space-x-8">
          {SUBNAVDATA.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className={`text-gray-500 em:py-0 py-2  em:border-b-0 ${
                idx === SUBNAVDATA.length - 1 ? "border-b-0" : "border-b"
              }  em:w-auto  w-full hover:text-black`}
            >
              {item.label}
            </Link>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default SubNavbar;
