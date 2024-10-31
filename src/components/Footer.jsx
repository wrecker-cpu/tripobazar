import { Link } from "react-router-dom";
import CompanyLogo from "../../svgs/CompanyLogo";
import { socialMediaData } from "../../utils/SocialMediaData";

function Footer() {
  const data = [
    { name: "About Us", link: "/aboutus" },
    { name: "Careers", link: "/careers" },
    { name: "Privacy Policy", link: "/privacy-policy" },
    { name: "FAQs", link: "/faqs" },
    { name: "Get a Call Back", link: "/get-a-call-back" },
    { name: "Contact Us", link: "/contactus" },
    { name: "Search Destinations", link: "/search-destinations" },
    { name: "Booking Conditions", link: "/booking-conditions" },
    { name: "My Reservations", link: "/my-reservations" },
    { name: "Explore Packages", link: "/explore-packages" },
    { name: "Safety Measures", link: "/safety-measures" },
    { name: "Health Concerns", link: "/health-concerns" },
  ];
  

  return (
    <footer className="text-center max-w-[1920px] mx-auto text-black pb-6 bg-white">
      <div className="mx-auto w-[90%] py-10 flex flex-col md:flex-row md:justify-between items-center ">
        {/* Logo Section */}
        <div className="md:mb-0 md:static relative mb-8 left-0 top-0 ">
          <CompanyLogo className="w-2 h-2 sm:w-7 sm:h-7 md:w-24 md:h-24 lg:w-28 lg:h-28 object-contain" />
        </div>

        {/* Links Section */}
        <ul className="flex text-[.6rem] flex-wrap md:grid text-left md:grid-cols-2  md:gap-y-2 md:gap-x-12 gap-4 justify-center mb-8 md:text-sm  md:text-start  md:mb-0">
          {data.map((item, idx) => (
            <Link to={item.link} key={idx} className="text-gray-700 cursor-pointer hover:text-black">{item.name}</Link>
          ))}
        </ul>

        {/* Contact and Subscribe Section */}
        <div className="flex flex-col w-full max-w-sm md:w-[25%] gap-0 md:gap-2 text-sm text-center md:text-start">
          {/* Contact Information */}
          <div className="mb-8">
            <h4 className="text-[#03B58B] mb-3 font-semibold">Contact Us</h4>
            <p className="mb-1">contact@trippobazzar.com</p>
            <p>+91 9999999999 | +91 88888888888</p>
          </div>

          {/* Subscribe Section */}
          <div className="mb-2">
            <h4 className="text-[#03B58B]  font-semibold">
              Subscribe
              <span className="text-gray-700">to get exclusive deals</span>
            </h4>
          </div>

          {/* Search Bar and Button */}
          <div className="flex emd:flex-row flex-col items-center gap-3 w-auto">
            <input
              type="text"
              placeholder="Enter your email"
              className="p-2 w-full border border-[#03B58B] rounded-md outline-none text-black h-8"
            />
            <button className="bg-[#03B58B] text-[0.9rem] px-4 w-full emd:w-auto text-white flex-shrink-0 rounded-md h-8">
              Get Deals
            </button>
          </div>

          {/* Social Media Icons */}

          <div className="flex justify-center md:justify-start space-x-3 mt-4">
            {socialMediaData.map((item, index) => (
              <div
                key={index}
                className="w-8 h-8 flex items-center justify-center cursor-pointer rounded-full border p-[6px] border-black"
              >
                {item.icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
