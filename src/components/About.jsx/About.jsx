import React from "react";
import WeCraft from "../About.jsx/WeCraft";
import SubNavbar from "../About.jsx/SubNavbar";
import Whoweare from "../About.jsx/Whoweare";
import OurValues from "../About.jsx/OurValues";
import OurMission from "../About.jsx/OurMission";
import Careers from "../About.jsx/Careers";

function About() {
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

export default About;
