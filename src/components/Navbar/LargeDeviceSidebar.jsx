import { useState } from "react";
import { Link } from "react-router-dom";
import { socialMediaData } from "../../../utils/SocialMediaData";
import AdminPanel from "../AdminPanel/AdminPanel";
import TransitionLink from "../../../utils/TransitionLink";
import CompanyLogo from "../../../svgs/CompanyLogo";
const LargeDeviceSidebar = ({ isSidebarOpen, closeSidebar }) => {
    const [activeItem, setActiveItem] = useState(null);
    const handleItemClick = (index) => {
        setActiveItem(index === activeItem ? null : index);
      };
      const menuItems = [
        { title: "Admin Pannel",link: "/adminpanel/*", subItems: [] },
        { title: "My Profile",link: "", subItems: ["Sub-item 1", "Sub-item 2", "Sub-item 3"] },
        { title: "My Bookings",link: "", subItems: ["Modify Bookings", "Cancel Bookings", "New Bookings"] },
        { title: "Our Policy",link: "/aboutus/privacy-policy", subItems: ["Sub-item X", "Sub-item Y", "Sub-item Z"] },
        { title: "Careers",link: "/aboutus/careers", subItems: ["Sub-item 1", "Sub-item 2", "Sub-item 3"] },
        { title: "FAQs",link: "", subItems: ["Sub-item A", "Sub-item B", "Sub-item C"] },
        { title: "Contact Us",link: "/contactus", subItems: ["Sub-item X", "Sub-item Y", "Sub-item Z"] },
      ];
  return (
  <div
      className={`fixed p-5 flex top-0 right-0 h-full w-full bg-white shadow-lg transition-transform duration-300 ${
        isSidebarOpen ? "transform translate-x-0" : "transform translate-x-full"
      }`}
    >
      <button
        onClick={closeSidebar}
        className="text-gray-600 p-0 text-5xl font-light  absolute top-0 right-4"
      >
        x
      </button>
     
          {/* First Part: Large logo */}
        <div onClick={closeSidebar} className="w-1/4    flex justify-center items-center ">
        <TransitionLink to={"/"}> <CompanyLogo  alt="Logo" className="h-32 hover:h-36"/> </TransitionLink> 
          </div> 

      {/* Second Part: List of items */}
      <div className="w-1/2 p-4 relative">
            {menuItems.map((item, index) => (
              <div key={index} className="relative">
                <li
                  className="list-none pb-6 text-[#00283166] font-semibold text-2xl  cursor-pointer hover:text-green-500"
                  onClick={closeSidebar}
                >
                   <TransitionLink to={item.link}  className="block">
          {item.title}
        </TransitionLink>
                </li>
                {activeItem === index && (
                  <ul className="absolute top-0 left-[70%] text-start cursor-pointer space-y-3  p-0  rounded">
                    {item.subItems.map((subItem, subIndex) => (
                      <li key={subIndex} className="text-[1rem] font-semibold  text-black">
                        {subItem}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Third Part: Bottom logos */}
          <div className="w-1/4 pl-52 flex flex-col justify-end items-center space-y-4 p-4">
          {socialMediaData.map((item, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full border p-[6px] hover:h-9 hover:w-9 border-black"
              >
                {item.icon}
              </div>
            ))}
              <button className="border-[.1rem] rounded-lg text-[#03B58B] hover:bg-[#03B58B] hover:text-white hover:border-[#03B58B] border-[#012831] font-poppins text-[1rem] 
          font-medium px-9 mr-3 py-2">Logout</button>
          </div>
        
        </div>
   

   
    
  
);
};

export default LargeDeviceSidebar;
