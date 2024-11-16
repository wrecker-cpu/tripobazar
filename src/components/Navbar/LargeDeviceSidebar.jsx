import { useEffect, useState } from "react";
import { socialMediaData } from "../../../utils/SocialMediaData";
import TransitionLink from "../../../utils/TransitionLink";
import CompanyLogo from "../../../svgs/CompanyLogo";

const LargeDeviceSidebar = ({ isSidebarOpen, closeSidebar }) => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    {
      title: "My Profile",
      link: "",
      subItems: ["Sub-item 1", "Sub-item 2", "Sub-item 3"],
    },
    {
      title: "My Bookings",
      link: "",
      subItems: ["Modify Bookings", "Cancel Bookings", "New Bookings"],
    },
    {
      title: "Our Policy",
      link: "/aboutus/privacy-policy",
      subItems: ["Sub-item X", "Sub-item Y", "Sub-item Z"],
    },
    {
      title: "Careers",
      link: "/aboutus/careers",
      subItems: ["Sub-item 1", "Sub-item 2", "Sub-item 3"],
    },
    {
      title: "FAQs",
      link: "",
      subItems: ["Sub-item A", "Sub-item B", "Sub-item C"],
    },
    {
      title: "Contact Us",
      link: "/contactus",
      subItems: ["Sub-item X", "Sub-item Y", "Sub-item Z"],
    },
    { title: "Admin Panel", link: "/adminpanel/*", subItems: [] },
  ];

  useEffect(() => {
    // Prevent body scroll when the menu is open
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isSidebarOpen]);

  return (
    <div
      className={`fixed z-30 max-w-[1920px] h-full mx-auto p-5 top-0 flex w-full bg-white shadow-lg transition-all duration-700 ${
        isSidebarOpen
          ? "translate-x-0 opacity-100 visible"
          : "-translate-x-full opacity-0 invisible"
      } `}
    >
      <div className="flex items-center w-full relative h-[680px]">
        <button
          onClick={closeSidebar}
          className="text-gray-600 p-0 text-5xl font-light absolute top-0 right-5"
        >
          x
        </button>

        {/* First Part: Large logo */}
        <div
          onClick={closeSidebar}
          className="w-1/4 h-32 flex justify-center items-center"
        >
          <TransitionLink to={"/"}>
            <CompanyLogo className="w-full h-full" />
          </TransitionLink>
        </div>

        {/* Second Part: List of items */}
        <div className="w-auto mx-40">
          <div className="p-4 relative">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <li
                  className="list-none pb-6 text-[#00283166] font-semibold text-2xl cursor-pointer hover:text-green-500"
                  onClick={closeSidebar}
                >
                  <TransitionLink to={item.link} className="block">
                    {item.title}
                  </TransitionLink>
                </li>

                {activeItem === index && (
                  <ul className="absolute top-0 left-[70%] text-start cursor-pointer space-y-3 p-0 rounded">
                    {item.subItems.map((subItem, subIndex) => (
                      <li
                        key={subIndex}
                        className="text-[1rem] font-semibold text-black"
                      >
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            <button className="pb-6 text-[#00283166] font-semibold text-2xl cursor-pointer hover:text-green-500">
              Logout
            </button>
          </div>
        </div>

        {/* Third Part: Bottom logos */}
        <div className="w-auto absolute bottom-4 right-0 flex flex-col justify-end items-center space-y-4 p-4">
          {socialMediaData.map((item, index) => (
            <div
              key={index}
              className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full border p-[6px] hover:h-9 hover:w-9 border-black"
            >
              {item.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LargeDeviceSidebar;
