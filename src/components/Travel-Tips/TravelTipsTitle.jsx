import React from 'react'
import BreadCrumbsLink from "../../../utils/BreadCrumbsLink";
import image from "../../../src/assets/TravelTips/img1.jpg";
function TravelTipsTitle() {
  return (
    <div className="bg-white">
    <div className="w-[90%] mx-auto  py-2">
      <BreadCrumbsLink />
    </div>
    <section className="">
  
      <div className="h-[90%] ">
        <img
          src={image}
          alt="wth"
          className="object-contain w-full h-full"
        />
      </div>
    </section>
  </div>
  )
}

export default TravelTipsTitle  