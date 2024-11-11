import React from "react";
import SrchDestinationCountry from "../SerchDestinationCountry/SrchDestinationCountry";
import SubNavofViewall from "./SubNavofViewall";
import CardSection from "./CardSection";
import Discover from "./Discover";
import useFetch from "../../../hooks/useFetch";
import Spinner from "../../../utils/Spinner";
import Loader from '../../../src/components/Loader';
function ViewAllDestination() {
  const { data, loading } = useFetch(
    "https://tripobazar-backend.vercel.app/api/country/672cc485ace2a7c97a8fb3a0"
  );

  return (
    <div className="max-w-[1920px] mx-auto">
      {loading === true ? (
        <Loader/>
      ) : (
        <>
          {" "}
          <SrchDestinationCountry data={data} />
          <SubNavofViewall />
          <CardSection data={data} />
          <Discover />
        </>
      )}
    </div>
  );
}

export default ViewAllDestination;
