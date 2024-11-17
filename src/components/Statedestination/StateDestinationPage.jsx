import React, { useEffect, useState } from "react";
import BreadCrumbsLink from "../../../utils/BreadCrumbsLink.jsx";
import SubNavCountry from "./SubNavCountry.jsx";
import CountryPakages from "./CountryPakages.jsx";
import StealDealPakage from "./StealDealPakage.jsx";
import PopulerActivity from "./PopulerActivity.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import { useParams } from "react-router-dom";
import Loader from "../Loader.jsx";

function StateDestinationPage() {
  const { state } = useParams();

  const { data, loading, error } = useFetch(
    `https://tripobazar-backend.vercel.app/api/state/name/${state}`
  );
  // Runs when 'data' changes

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full">
      <div className="w-[90%] mx-auto py-2">
        <BreadCrumbsLink />
      </div>

      <SubNavCountry />
      <CountryPakages data={data} error={error} />
      <StealDealPakage />
      <PopulerActivity />
    </div>
  );
}

export default StateDestinationPage;
