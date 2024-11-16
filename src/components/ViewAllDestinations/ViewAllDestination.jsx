import React from "react";
import { useParams } from "react-router-dom";
import SrchDestinationCountry from "../SerchDestinationCountry/SrchDestinationCountry";
import SubNavofViewall from "./SubNavofViewall";
import CardSection from "./CardSection";
import Discover from "./Discover";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../../src/components/Loader";
function ViewAllDestination() {
  const { country } = useParams(); 

  const { data, loading } = useFetch(
    `https://tripobazar-backend.vercel.app/api/country/name/${country}`
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1920px]  mx-auto">
      <SrchDestinationCountry data={data} />
      <SubNavofViewall />
      <CardSection data={data} />
      <Discover />
    </div>
  );
}

export default ViewAllDestination;
