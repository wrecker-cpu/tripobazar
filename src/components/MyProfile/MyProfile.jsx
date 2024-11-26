import React, { useRef,useState } from "react";
function MyProfile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [travelers, setTravelers] = useState([]);
  const [profileFields, setProfileFields] = useState({
    name: "",
    date: "",
    gender: "",
    maritalStatus: "",
    address: "",
    pincode: "",
  });
  
  
  const totalFields = 6; // Total fields in the profile section
const filledFields = Object.values(profileFields).filter((value) => value.trim() !== "").length; // Count of filled fields
const profileCompletion = Math.round((filledFields / totalFields) * 100); // Calculate percentage

const handleInputChange = (e) => {
  setProfileFields({ ...profileFields, [e.target.name]: e.target.value });
};

  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    countryCode: "+91",
    dateOfBirth: "",
    passportNumber: "",
    passportCountry: "",
    passportExpiry: "",
  });

  // Refs for scrollable sections
  const profileRef = useRef(null);
  const loginDetailsRef = useRef(null);
  const savedTravelersRef = useRef(null);

  const handleScrollTo = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  // const handleInputChange = (e) => {
  //   const { name, value } = e.target;
  //   setFormData({ ...formData, [name]: value });
  // };

  const handleSaveTraveler = () => {
    setTravelers([...travelers, formData]);
    setIsModalOpen(false);
    setFormData({
      name: "",
      email: "",
      phone: "",
      countryCode: "+91",
      dateOfBirth: "",
      passportNumber: "",
      passportCountry: "",
      passportExpiry: "",
    });
  };

  return (
    <div className="md:flex p-0 m-0 h-auto w-full bg-tranparent">
      {/* Left Sidebar */}
      <div className="md:w-[20%]  sticky top-0 shadow-sm md:shadow-none h-full md:mx-8 md:mt-6  z-10 md:block w-full md:rounded-xl bg-white p-4 ">

      <div
  className="
    p-[5%] mb-3 text-center  font-semibold text-white rounded-[10px] customfradiant
    lg:w-[9vw] lg:h-[12vh] lg:text-3xl
    md:w-[8vw] md:h-[10vh] md:text-2xl
    sm:w-[12vw] sm:h-[8vh] sm:text-xl
    w-[20vw] h-[8vh] text-xl
  "
>
  DP
</div>

         
      <h3 className="font-semibold mb-0">Desai Priyansh</h3>
      <p className="text-[.7rem] text-[#0028319E] mb-6 ">priyansh@gmail.com</p>
        <ul className="md:space-y-4  flex md:block justify-evenly  w-full text-[.8rem]">
          <li
            onClick={() => handleScrollTo(profileRef)}
            className="cursor-pointer text-gray-700 flex items-center"
          >
            <span className="w-4 h-4 border-[.5px] flex items-center justify-center border-[#03B58B]  rounded-full mr-3">
            <span className="md:w-2 md:h-2 w-1 h-1    bg-[#03B58B] rounded-full "></span></span>
            Profile 
            <span className="hidden md:flex   font-bold text-2xl pl-[42%]">→</span>
          </li>
          <li
            onClick={() => handleScrollTo(loginDetailsRef)}
            className="cursor-pointer text-gray-700 flex items-center"
          >
             <span className="w-4 h-4 border-[.5px] flex items-center justify-center border-[#03B58B]  rounded-full mr-3">
             <span className="w-1 h-1 bg-[#03B58B] rounded-full "></span></span>
            Login Details
            <span className="hidden md:flex   font-bold text-2xl pl-[19%]">→</span>
          </li>
          <li
            onClick={() => handleScrollTo(savedTravelersRef)}
            className="cursor-pointer text-gray-700 flex items-center"
          >
    <span className="w-4 h-4 border-[.5px] flex items-center justify-center border-[#03B58B]  rounded-full mr-3">
    <span className="w-1 h-1    bg-[#03B58B] rounded-full "></span></span>
            Saved Travelers
            <span className="hidden md:flex   font-bold text-2xl pl-[8%]">→</span>
          </li>
        </ul>
      </div>

      {/* Right Content */}
      <div className="flex-1 p-6  md:mt-6 md:rounded-l-xl bg-white  h-aouto  space-y-12">
        {/* Profile Section */}

        <div ref={profileRef}>
       
{/* Progress Bar */}
{/* Progress Bar */}
<div className="md:mt-3 mb-16"> 
  <p className=" text-sm  text-start text-gray-600">Your Profile is incomplete</p>
  <p className=" text-sm  text-right text-gray-600">{profileCompletion}% </p>
  <div className="relative w-full  bg-gray-200 h-[3px] rounded-md">
    <div
      className="absolute top-0 left-0 bg-[#00B58AB2] h-[3px] rounded-md"
      style={{ width: `${profileCompletion}%` }}
    ></div>
  </div>
 
</div>




          <h3 className="text-xl font-bold">Profile</h3>
          <p className="text-[#0028319E] text-sm font-[400] mt-2">User Details</p>
          {/* inputs */}
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <input type="text" placeholder="Name"  name="name"
             className="border p-2 rounded-md"  onChange={handleInputChange} />
            <input type="date"   name="date" className="border 
            p-2 rounded-md"  onChange={handleInputChange} />
            <select className="border p-2 rounded-md"  
            onChange={handleInputChange}   name="gender">
              <option className="text-gray-400">Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
            <select className="border p-2 rounded-md "
             onChange={handleInputChange}   name="maritalStatus">
              <option>Marital Status</option>
              <option>Single</option>
              <option>Married</option>
            </select>
            <input type="text" placeholder="Address"   name="address"
            className="border p-2 rounded-md"  onChange={handleInputChange} />
            <input type="text" placeholder="Pincode"   name="picode"
             className="border p-2 rounded-md"  onChange={handleInputChange} />
          </div>
        </div>

        {/* Login Details Section */}
        <div  ref={loginDetailsRef}>
          <h3 className="text-xl font-bold">Login Details</h3>

          <div className="grid gride-cols-1  md:grid-cols-3 text-sm gap-4 mt-4">
            <div className="flex items-center">
              <select className="border p-2 rounded-l-md">
                <option className="hover:bg-green-100">+91</option>
                <option className="hover:bg-green-100">+1</option>
                <option className="hover:bg-green-100">+44</option>
              </select>
              <input
                type="text"
                placeholder="Phone Number"
                className="border p-2 flex-1 rounded-r-md"
              />
            </div>
            <input type="email" placeholder="Email" className="border p-2 rounded-md" />
            <div className="relative ">
              <input
                type="password"
                placeholder="Password"
                className="border p-2 w-full rounded-md"
              />
              <span className="absolute right-3 top-3 cursor-pointer">👁️</span>

            </div>

          </div>
          <div className="flex justify-end">
  <label className="text-sm text-[#00B58A] cursor-pointer">
    Change Password?
  </label>
</div>

        </div>

        {/* Saved Travelers Section */}
        <div ref={savedTravelersRef}>
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold">Saved Travelers</h3>
            <button
              onClick={() => setIsModalOpen(true)}
              className=" text-[#03B58B] border-black border-[1.3px] hover:bg-[#03B58B] hover:border-none hover:text-white px-1 md:px-4 py-2 rounded-md"
            >
              + Add Traveler
            </button>
          </div>
          <ul className="mt-6 space-y-4">
            <th
             
                className="flex justify-between text-sm  text-[#0028319E] font-normal bg-white p-4  rounded-md">
              
                <p>Name </p>
                <p>Age</p>
                <p>Gender</p>
                <p>Contact Dteails</p>

                {/* for empty space */}
                <p></p>
              </th>
            {travelers.map((traveler, index) => (
              <li
                key={index}
                className="flex justify-between bg-white p-4  rounded-md"
              >
                <p>{traveler.name}</p>
                <p>{traveler.email}</p>
                <p>{traveler.phone}</p>
                <button className="text-[#00B58A] bg-none text-end text-sm">View Details</button>
              </li>

            ))}
          </ul>
        </div>
      </div>

      {/* Modal for Add Traveler */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-transparent  text-black 
        backdrop-blur-sm z-100 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white px-3 overflow-y-auto py-6  md:py-6 lg:p-9 rounded-lg h-auto md:h-auto w-[87%] sm:w-[70%] md:w-[60%] lg:w-[50%] shadow-lg relative">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold">Traveler’s Info</h3>
              <button
               
                className="text-red-500 font-semibold"
              >
                Remove
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-4">User Details</p>
            <div className="grid md:grid-cols-2 grid-cols-1 text-sm gap-4 mt-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="border p-2 rounded-md"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                className="border p-2 rounded-md"
              />
              <div className="flex justify-center items-center">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="border p-2 rounded-l-md"
                >
                  <option value="+91">+91</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Phone Number"
                  className="border p-2 flex-1 rounded-r-md"
                />
              </div>
              <input
                type="date"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleInputChange}
                className="border p-2 rounded-md"
              />
            </div>

            <p className="text-gray-500 text-sm mt-6">Passport Details</p>
            <div className="grid text-sm md:grid-cols-2 grid-cols-1 gap-4 mt-4">
              <input
                type="text"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleInputChange}
                placeholder="Passport Number"
                className="border p-2 rounded-md"
              />
              <select
                name="passportCountry"
                value={formData.passportCountry}
                onChange={handleInputChange}
                className="border p-2 rounded-md"
              >
                <option value="">Issuing Country</option>
                <option value="India">India</option>
                <option value="USA">USA</option>
                <option value="UK">UK</option>
              </select>
              <input
                type="date"
                name="passportExpiry"
                value={formData.passportExpiry}
                onChange={handleInputChange}
                className="border p-2 rounded-md"
              />
            </div>

            <div className="mt-6 flex justify-end">
            <button
                onClick={handleSaveTraveler} 
                className=" text-red-600 px-6 mr-4 py-2 rounded-md"
              >
         cancle
              </button>
              <button
                onClick={handleSaveTraveler}
                className="bg-green-500 text-white px-6 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
 
}

export default MyProfile