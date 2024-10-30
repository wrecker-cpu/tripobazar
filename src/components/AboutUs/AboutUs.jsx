import React from "react";
import WeCraft from "./WeCraft";
import SubNavbar from "./SubNavbar";
import Whoweare from "./Whoweare";
import OurValues from "./OurValues";
import OurMission from "./OurMission";
import Careers from "./Careers";
import StayConnected from "./StayConnected";

export default function AboutUs() {
  return (
    <div className="bg-[#F8F8F8] max-w-[1920px] mx-auto">
      <WeCraft />
      <SubNavbar />
      <Whoweare />
      <OurValues />
      <OurMission />
      <Careers />
      <StayConnected/>
    </div>
  );
}
