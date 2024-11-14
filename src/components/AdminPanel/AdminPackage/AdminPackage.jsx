import React, { useState } from "react";
import useApiData from "../../../../hooks/useApiData";
import Spinner from "../../../../utils/Spinner";
import useFetch from "../../../../hooks/useFetch";
import EditPackage from "./EditPackage";
import AddPackage from "./AddPackage";

export default function AdminPackage() {
  const [selectedId, setSelectedId] = useState();
  const [isAddingPackage, setIsAddingPackage] = useState(false);

  const [editPackage, setEditPackage] = useState(false);
  const baseUrl = "https://tripobazar-backend.vercel.app/api/package";
  const {
    data: allStateData,
    deleteById,
    updateById,
    addNew,
  } = useApiData(baseUrl);

  const { data, loading } = useFetch(
    `https://tripobazar-backend.vercel.app/api/package/${selectedId}`
  );

  if (loading === true) {
    return <Spinner />;
  }
  console.log(selectedId)

  return (
    <>
      {!selectedId ? (
      <div>
        {/* Button to show AddPackage form */}
        <button
          onClick={() => setIsAddingPackage(!isAddingPackage)}
          className="bg-green-600 h-10 py-3 text-center flex items-center hover:scale-95 transition-transform ease-in-out duration-300 text-white font-medium rounded-full px-4 mb-4"
        >
          {isAddingPackage ? "Cancel" : "Add Package"}
        </button>

        {/* Show AddPackage form when isAddingPackage is true */}
        {isAddingPackage ? (
          <AddPackage setIsAddingPackage={setIsAddingPackage} addNew={addNew} />
        ) : (
          <div>
            {allStateData?.map((item, idx) => (
              <div key={idx}>
                <ul className="flex flex-col">
                  <li className="relative flex items-center justify-between mb-3 text-med-green rounded-lg overflow-hidden transition-colors ease-in-out duration-300 bg-white p-4">
                    <span
                      onClick={() => setSelectedId(item._id)}
                      className="text-left cursor-pointer text-xl font-semibold"
                    >
                      {item?.title}
                    </span>
                    <div className="flex items-center gap-4">
                      <img
                        src={item?.MainPhotos[0]}
                        onClick={() => openModal(item?.MainPhotos[0])}
                        alt={`state icon`}
                        className="w-10 h-5 cursor-pointer object-cover rounded ml-4"
                      />
                      <button
                        onDoubleClick={() => {
                          deleteById(item._id);
                        }}
                        className="text-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    ) : (
        <>
          {!editPackage ? (
            <div className="bg-gray-50 text-gray-900">
              <div className="container mx-auto p-6">
                {/* Title and Description */}
                <section className="mb-8 relative">
                  <div className="flex justify-between items-center">
                    <h1 className="text-4xl font-bold mb-2">{data?.title}</h1>
                    
                  </div>
                  <p className="text-lg mb-4">{data?.description}</p>
                  <p className="text-xl font-semibold text-green-600">
                    Price: Rs. {data?.price}/-
                  </p>

                  <div className="absolute top-1 right-0 flex flex-col gap-2">
                  <button
                      onClick={() => {
                        setEditPackage(true);
                      }}
                      className="bg-blue-600 h-10 py-3 text-center flex items-center hover:scale-95 transition-transform ease-in-out duration-300 text-white font-medium rounded-full px-4"
                    >
                      Edit Package
                    </button>
                    <button
                      onClick={() => {
                        setSelectedId(null);
                      }}
                      className="bg-red-600 h-10 py-3 text-center flex items-center hover:scale-95 transition-transform ease-in-out duration-300 text-white font-medium rounded-full px-4"
                    >
                      Back
                    </button>
                  </div>
                </section>

                {/* What's Included */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">What's Included</h2>
                  <ul className="list-disc list-inside space-y-1">
                    {data?.whatsIncluded.map((item, index) => (
                      <li key={index} className="text-gray-700">
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Coupon Codes */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Available Coupons</h2>
                  <ul className="flex space-x-2">
                    {data?.coupon.map((code, index) => (
                      <li
                        key={index}
                        className="bg-blue-200 text-blue-800 px-3 py-1 rounded-lg"
                      >
                        {code}
                      </li>
                    ))}
                  </ul>
                </section>

                {/* Photos */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Photos</h2>
                  <div className="grid grid-cols-2 gap-4">
                    {data?.MainPhotos?.map((photo, index) => (
                      <img
                        key={index}
                        src={photo}
                        alt={`Tour photo ${index + 1}`}
                        className="rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                </section>

                {/* Itinerary */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Itinerary</h2>
                  {data?.dayDescription.map((day, index) => (
                    <div key={index} className="mb-6">
                      <h3 className="text-xl font-semibold mb-2">
                        {day.dayTitle}
                      </h3>
                      <p className="text-gray-700 mb-4 whitespace-pre-line">
                        {day.dayDetails}
                      </p>
                      <div className="grid grid-cols-2 gap-4">
                        {day?.photos.map((photo, photoIndex) => (
                      <img
                        key={photoIndex}
                        src={photo}
                        alt={`Day ${index + 1} photo ${photoIndex + 1}`}
                        className="rounded-lg shadow-md"
                      />
                    ))}
                      </div>
                    </div>
                  ))}
                </section>

                {/* Special Instructions */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Special Instructions
                  </h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data?.specialInstruction}
                  </p>
                </section>

                {/* Conditions of Travel */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Conditions of Travel
                  </h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data?.conditionOfTravel}
                  </p>
                </section>

                {/* Things to Maintain */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Things to Maintain
                  </h2>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data?.thingsToMaintain}
                  </p>
                </section>

                {/* Hotels */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Hotels</h2>
                  {data?.hotels?.map((hotel, index) => (
                    <div key={index} className="mb-4">
                      <h3 className="text-lg font-semibold">
                        {hotel.location}
                      </h3>
                      <ul className="list-disc list-inside space-y-1">
                        {hotel?.hotelDetails?.map((detail, detailIndex) => (
                          <li key={detailIndex} className="text-gray-700">
                             {detail.hotelName}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </section>

                {/* Policies */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">Policies</h2>
                  <h3 className="text-lg font-semibold mb-2">Child Policy</h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data?.policies.childPolicies}
                  </p>
                  <h3 className="text-lg font-semibold mt-4 mb-2">
                    Cancellation Policy
                  </h3>
                  <p className="text-gray-700 whitespace-pre-line">
                    {data?.policies.cancelPolicy}
                  </p>
                </section>

                {/* Terms and Conditions */}
                <section className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    Terms and Conditions
                  </h2>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Inclusions</h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      {data?.termsAndConditions[0].inclusions}
                    </p>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold mb-2">Exclusions</h3>
                    <p className="text-gray-700 whitespace-pre-line">
                      {data?.termsAndConditions[0].exclusions}
                    </p>
                  </div>
                </section>
              </div>
            </div>
          ) : (
            <EditPackage setEditPackage={setEditPackage} setSelectedId={setSelectedId} id={selectedId} updateById={updateById} initialData={data} />
          )}
        </>
      )}
    </>
  );
}
