import React from "react";
import bgimage from "../../assets/aboutus/OurValues.jpg";
import ExcelenceSvg from "../../../svgs/ExcelenceSvg";
import EmpowermentSvg from "../../../svgs/EmpowermentSvg";
import TransparencySvg from "../../../svgs/TransparancySvg";
function OurValues() {
  return (
    <>
      <section
        className="relative w-full mt-9 sm:mt-14 md:mt-11 h-56 md:h-96 sm:h-80 bg-top bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bgimage})` }}
      >
        <div className="absolute inset-0 h-full w-full " />
        <div className="flex flex-col justify-center items-start h-full text-white px-4 sm:px-9">
          <h1 className="text-xl sm:text-3xl md:text-5xl lg:text-[3.3rem] font-bold">
            WORLDWIDE REACH,<br></br>
            190+ COUNTRIES.
          </h1>
        </div>
      </section>
      <div className="w-full  flex h-[50vh] border bg-white md:pt-10 md:p-8 p-5">
        <div className="md:p-6 mr-3 md:mr-0 text-center flex flex-col justify-center items-center  h-80% w-1/3">
          <ExcelenceSvg />
          <p className="font-bold mb-0 text-[.6rem] md:text-lg mt-4">
            Excellence
          </p>{" "}
          <br></br>
          <p className="md:text-sm text-[.4rem] font-normal text-left">
            Elevate your travel experience with our unwavering dedication to
            excellence, where meticulous attention to detail meets professional
            service.
          </p>
        </div>

        <div className="md:p-6 pt-4 sm:pt-1 text-center flex flex-col justify-center items-center  h-80% w-1/3">
          <EmpowermentSvg />
          <p className="font-bold mb-0 text-[.6rem] md:text-lg mt-4">
            Empowerment
          </p>{" "}
          <br></br>
          <p className="md:text-sm text-[.4rem] font-normal text-left">
            Unleash the power of choice with Trippo Bazaar, where personalized
            travel experiences put you in control of every adventure.
          </p>{" "}
          <br></br>
        </div>

        <div className="md:p-6  pt-6 sm:pt-2 md:pt-10 text-center flex flex-col justify-center items-center h-80% w-1/3">
          <TransparencySvg />
          <p className="font-bold mb-0 text-[.6rem] md:text-lg mt-4">
            Transparency
          </p>{" "}
          <br></br>
          <p className="md:text-sm text-[.4rem] font-normal text-left">
            Navigate your journey with confidence – Our commitment to
            transparency ensures clear and honest communication, building trust
            at every step.
          </p>{" "}
          <br></br>
        </div>
      </div>
    </>
  );
}

export default OurValues;
