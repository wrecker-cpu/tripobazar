import React, { useRef, useState } from "react";

export default function ContinentModal({
  handleCountryChange,
  handleCloseModal,
  addContinent,
  countryList,
  newContinent,
  setNewContinent,
  closeModal
}) {
  const modalRef = useRef(null);


  return (
    <div
      onClick={(e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
          closeModal(); 
        }
      }}
      className="fixed top-0 left-0 w-full h-full flex justify-center items-center backdrop-blur-sm bg-black bg-opacity-50 z-50"
    >
      <div
        ref={modalRef}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-max"
      >
        <h2 className="text-xl font-semibold mb-4">Add New Continent</h2>

        <input
          type="text"
          placeholder="Continent Name"
          value={newContinent.ContinentName}
          onChange={(e) =>
            setNewContinent({
              ...newContinent,
              ContinentName: e.target.value,
            })
          }
          className="border p-2 rounded w-full mb-4"
        />

        <input
          type="text"
          placeholder="Continent Photo URL"
          value={newContinent.ContinentPhotoUrl}
          onChange={(e) =>
            setNewContinent({
              ...newContinent,
              ContinentPhotoUrl: e.target.value,
            })
          }
          className="border p-2 rounded w-full mb-4"
        />

        {/* Multi-select dropdown */}
        <div className="relative inline-block w-full mb-4">
          <select
            multiple
            onChange={handleCountryChange}
            className="appearance-none w-full bg-gray-100 border border-gray-300 text-gray-700 py-2 px-3 pr-8 rounded leading-tight focus:outline-none focus:border-med-green"
          >
            {countryList?.map((country) => (
              <option key={country._id} value={country._id}>
                {country.CountryName}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-2 flex flex-wrap gap-2 w-full">
          {newContinent.Countries?.map((countryId, index) => {
            const country = countryList?.find((c) => c._id === countryId._id);

            return (
              country && (
                <span
                  key={index}
                  className="inline-block bg-blue-100 text-blue-800 py-1 px-3 rounded-full text-sm"
                >
                  {country.CountryName}
                </span>
              )
            );
          })}
        </div>

        <div className="mt-4 flex justify-end gap-4">
          <button
            onClick={closeModal}
            className="bg-gray-300 text-black px-4 py-2 rounded"
          >
            Cancel
          </button>
          <button
            onClick={addContinent}
            className="bg-green-400 text-white px-4 py-2 rounded"
          >
            Add Continent
          </button>
        </div>
      </div>
    </div>
  );
}
