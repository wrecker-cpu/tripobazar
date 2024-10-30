import React from "react";
import WeCraft from "./WeCraft";
import SubNavbar from "./SubNavbar";
import Whoweare from "./Whoweare";
import OurValues from "./OurValues";
import OurMission from "./OurMission";
import Careers from "./Careers";

export default function AboutUs() {
  return (
    <div className="bg-[#F8F8F8] ">
      <WeCraft />
      <SubNavbar />
      <Whoweare />
      <OurValues />
      <OurMission />
      <Careers />
    </div>
  );
}
