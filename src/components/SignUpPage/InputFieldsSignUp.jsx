import React, { useEffect, useState } from "react";
import PasswordSvg from "../../../svgs/PasswordSvg";
import IndianFlag from "../../../svgs/IndianFlag";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import UserSvg from "../../../svgs/UserSvg";
import GoogleWrapper from "../../../utils/GoogleWrapper";

export default function InputFieldsSignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const [options, setOptions] = useState("mobilenumber");
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    MobileNumber: "",
    email: "",
    password: "",
  });

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const handleClick = (name) => {
    setOptions(name);
    if (name === "mobilenumber") {
      setDetails((prev) => ({ ...prev, email: "" }));
    } else {
      setDetails((prev) => ({ ...prev, MobileNumber: "" }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      Email: details.email,
      MobileNumber: details.MobileNumber,
      Password: details.password,
    };

    try {
      const response = await axios.post("https://tripobazar-backend.vercel.app/api/users", userData);
      console.log("Create successful:", response.data);
      const userInfo = {
        userId: response.data.data.user._id,
        email: response.data.data.user.Email,
        MobileNumber: response.data.data.user.MobileNumber,
        token: response.data.token,
      };
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
      navigate("/createprofile");
    } catch (error) {
      if (error.response) {
        console.error("Error Response Data:", error.response.data);
      } else if (error.request) {
        console.error("Error Request:", error.request);
      } else {
        console.error("Error Message:", error.message);
      }
    }
  };

  useEffect(() => {
    console.log(options);
    console.log(details);
  }, [options, details]);

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className="w-full">
        <div className="text-base text-[#012831] mb-12 w-full flex justify-between tracking-wider">
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="contactMethod"
              value="mobilenumber"
              className="custom-radio"
              onClick={() => handleClick("mobilenumber")}
              defaultChecked
            />
            <label> Mobile Number</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="radio"
              name="contactMethod"
              value="Email"
              onClick={() => handleClick("Email")}
              className="custom-radio"
            />
            <label> Email Id</label>
          </div>
        </div>
        <div className="w-full ">
          {options === "mobilenumber" ? (
            <div className="w-full relative border mb-6 border-[#717A7C] rounded-lg">
              <div className="absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2">
                <IndianFlag />
              </div>
              <input
                type="text"
                name="MobileNumber"
                placeholder="Mobile Number"
                value={details.MobileNumber}
                onChange={handleChange}
                autoComplete="tel"
                className="p-3 pl-20 bg-inherit text-lg font-medium w-full text-[#717A7C]"
              />
            </div>
          ) : (
            <div className="w-full border mb-6 relative border-[#717A7C] rounded-lg">
              <div className="absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2">
                <UserSvg />
              </div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={details.email}
                onChange={handleChange}
                autoComplete="email"
                className="outline-2 p-3 pl-14 outline-med-green bg-inherit text-lg font-medium w-full text-[#717A7C]"
              />
            </div>
          )}
          <div className="border rounded-lg w-full relative mb-5 border-[#717A7C]">
            <div className="absolute top-1/2 left-7 -translate-x-1/2 -translate-y-1/2">
              <PasswordSvg />
            </div>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={details.password}
              onChange={handleChange}
              autoComplete="current-password"
              className="py-3 pl-14 pr-16 bg-inherit outline-2 outline-med-green text-lg font-medium w-full text-[#717A7C]"
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-5 -translate-y-1/2 text-[#717A7C]"
            >
              {showPassword ? "Hide" : "Show"}
            </button>
          </div>
          <div className="mb-11">
            <p className="hover:underline cursor-pointer w-full text-end">
              Forgot your Password?
            </p>
          </div>
          <button
            type="submit"
            className="w-full mb-8 text-lg font-medium bg-med-green text-white p-3 rounded-xl"
          >
            Sign Up
          </button>
        </div>
      </form>
      <div className="social-signup-options">
        <GoogleWrapper />
        <button className="w-full mb-8 text-lg font-medium bg-inherit border-2 border-black p-3 rounded-xl">
          Sign Up with Apple
        </button>
        <button className="w-full mb-8 text-lg font-medium bg-inherit border-2 border-black p-3 rounded-xl">
          Sign Up with Facebook
        </button>
      </div>
      <div className="mb-11">
        <p className="w-full flex gap-2 justify-end">
          Already have an Account?
          <Link to={"/login"}>
            <span className="text-blue-600 cursor-pointer hover:underline">
              Log In!
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
