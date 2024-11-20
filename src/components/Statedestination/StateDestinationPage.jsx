import React, { useEffect, useState } from "react";
import BreadCrumbsLink from "../../../utils/BreadCrumbsLink.jsx";
import SubNavCountry from "./SubNavCountry.jsx";
import CountryPakages from "./CountryPakages.jsx";
import StealDealPakage from "./StealDealPakage.jsx";
import PopulerActivity from "./PopulerActivity.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import { useParams } from "react-router-dom";
import Loader from "../Loader.jsx";
import SrchDestinationCountry from "../SerchDestinationCountry/SrchDestinationCountry.jsx";

function StateDestinationPage() {
  const { state } = useParams();

  const { data, loading, error } = useFetch(
    `https://tripobazar-backend.vercel.app/api/state/name/${state}`
  );

  if (loading) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full p-0 m-0">
      <SrchDestinationCountry />
      <SubNavCountry />
      <CountryPakages data={data} error={error} state={state} />
      <StealDealPakage />
      <PopulerActivity />
    </div>
  );
}

export default StateDestinationPage;
