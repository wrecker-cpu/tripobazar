import React, { useEffect, useState } from "react";
import BreadCrumbsLink from "../../../utils/BreadCrumbsLink";
import SubNavCountry from "./SubNavCountry";
import CountryPakages from "./CountryPakages";
import StealDealPakage from "./StealDealPakage.jsx";
import PopulerActivity from "./PopulerActivity.jsx";
import useFetch from "../../../hooks/useFetch.jsx";
import { useParams } from "react-router-dom";
import Loader from "../Loader.jsx";

function CountryDestination() {
  const { state } = useParams();

  const { data, loading } = useFetch(
    `https://tripobazar-backend.vercel.app/api/state/name/${state}`
  );
  const [stateData, setStateData] = useState(null);

  // Effect to update the stateData once useFetch fetches data
  useEffect(() => {
    if (data) {
      setStateData(data); // Initialize stateData with the fetched data
      console.log("runs");
    }
  }, [data]); // Runs when 'data' changes

  if (loading || !stateData) {
    return <Loader />;
  }

  return (
    <div className="w-full h-full">
      <div className="w-[90%] mx-auto py-2">
        <BreadCrumbsLink />
      </div>

      <SubNavCountry />
      <CountryPakages data={stateData} />
      <StealDealPakage />
      <PopulerActivity />
    </div>
  );
}

export default CountryDestination;
