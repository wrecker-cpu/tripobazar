import React from 'react'

function SubNavTravelTips() {
    const sections = ["WHAT TO BRING", "TRANSPORT", "SAFETYMEDICAL", "BANKS, CREDIT CARDS & MONEY", "SHOPPING" ,"TIME"];

    return (
      <nav className="bg-white sticky top-0 z-30 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <p className="pb-2 italic underline font-medium em:hidden block">
            Sub Menus
          </p>
          <ul className="flex flex-col em:flex-row items-start  em:items-center justify-center text-[.7rem] em:text-sm uppercase leading-6 font-normal  em:space-x-8">
            {sections.map((item, idx) => (
              <button
                key={idx}
                className={`text-gray-500 em:py-0 py-2  em:border-b-0 ${
                  idx === sections.length - 1 ? "border-b-0" : "border-b"
                }  em:w-auto  w-full hover:text-med-green`}
              >
                {item}
              </button>
            ))}
          </ul>
        </div>
      </nav>
    );
}

export default SubNavTravelTips