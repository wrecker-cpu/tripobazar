import React from "react";
import LeftArrowSvg from "../../../svgs/LeftArrowSvg";
import CompanyLogo from "../../../svgs/CompanyLogo";
import InputFieldsSignUp from "./InputFieldsSignUp";
import { Link } from "react-router-dom";

export default function SignUpPage() {
  return (
    <div className="max-w-[1980px] mx-auto h-auto">
      <div className="w-full font-poppins flex justify-center bg-login-image relative items-center bg-cover bg-center min-h-screen">
        <div className="absolute top-1/2  left-1/2 right-auto  md:top-0 h-auto md:min-h-screen md:right-0 md:left-auto  -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 w-auto md:-translate-y-0 bg-white opacity-50 md:w-2/3 lg:w-1/2 p-3"></div>

        <div className="absolute top-1/2 left-1/2 right-auto md:left-auto -translate-x-1/2 -translate-y-1/2 md:-translate-x-0 w-full h-screen md:-translate-y-0 md:top-0 md:right-0 md:w-2/3 lg:w-1/2 md:h-screen overflow-hidden flex flex-col">
          <div className="backdrop-blur-md relative flex-grow overflow-y-scroll scrollbar-hide p-3">
            <Link to={"/"} className=" absolute top-10 left-10 cursor-pointer">
              <LeftArrowSvg />
            </Link>

            <div className="flex w-full mt-14 justify-center items-center">
              <div className="max-w-sm w-full flex flex-col items-center">
                <CompanyLogo className="mb-3" />
                <h1 className="text-[28px] esm:text-[35px] em:text-6xl whitespace-nowrap font-semibold leading-[86px] mb-6">
                  Create Your Account
                </h1>
                <InputFieldsSignUp />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
