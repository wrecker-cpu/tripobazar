import React from "react";
import { useParams } from "react-router-dom";
import SrchDestinationCountry from "../SerchDestinationCountry/SrchDestinationCountry";
import SubNavofViewall from "./SubNavofViewall";
import CardSection from "./CardSection";
import Discover from "./Discover";
import useFetch from "../../../hooks/useFetch";
import Loader from "../Loader";
function CountryDestination() {
  const { country } = useParams();

  const { data, loading, error } = useFetch(
    `https://tripobazar-backend.vercel.app/api/country/name/${country}`
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1920px]  mx-auto">
      <SrchDestinationCountry country={country} />
      <SubNavofViewall />
      <CardSection data={data} error={error} />
      <Discover data={data} />
    </div>
  );
}

export default CountryDestination;
