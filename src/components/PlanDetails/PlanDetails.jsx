import React from "react";
import SearchCompo from "./SearchCompo";
import Itinerary from "./Itinerary";
import SubNavPlanDetail from "./SubNavPlanDetail";
import IternryDetails from "./IternryDetails";
import FromOurTravellers from "../HomePage/FromOurTravellers";
import BreadCrumbsLink from "../../../utils/BreadCrumbsLink";
import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import Loader from "../Loader";

function PlanDetails() {
  const { id } = useParams();

  const { data, loading } = useFetch(
    `https://tripobazar-backend.vercel.app/api/package/${id}`
  );

  console.log(data);
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="max-w-[1920]  mx-auto bg-white">
      <div className="w-[90%] relative z-10 mx-auto py-2">
        <BreadCrumbsLink />
      </div>
      <SearchCompo data={data}/>
      <Itinerary data={data} />
      <SubNavPlanDetail />
      <IternryDetails data={data} />
      <FromOurTravellers />
    </div>
  );
}

export default PlanDetails;
