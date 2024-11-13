import React, { useState } from "react";
import LocationModal from "../LocationModal";
import Spinner from "../../../../utils/Spinner";

export default function ViewAndAddAllState({
  addNew,
  allStateData,
  deleteState,
  setSelectedId,
  openModal
}) {
  const [showStateModal, setShowStateModal] = useState(false);
  const [newState, setNewState] = useState({
    StateName: "",
    StatePhotoUrl: "",
    Packages: [],
  });
  const [loading, setLoading] = useState(false); // Loading state to track the process

  const closeStateModal = () => {
    setShowStateModal(false);
    setNewState({ StateName: "", StatePhotoUrl: "" });
  };

  const openStateModal = () => {
    setShowStateModal(true);
  };

  const addCountry = async () => {
    try {
      setLoading(true); // Set loading state to true when starting the process
      await addNew(newState); // Call addNew function to add the new state
      setNewState({ StateName: "", StatePhotoUrl: "", Packages: [] });
      setShowStateModal(false);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false); // Reset loading state after the operation is done
    }
  };

  if (loading === true) {
    return <Spinner />;
  }

  return (
    <>
      <div className="mb-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-med-green font-bold text-xl">Add New State</h3>
          <button
            onClick={openStateModal}
            className="bg-med-green text-white rounded-lg px-6 py-2 hover:bg-green-600 transition-all duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Adding..." : "Add State"}{" "}
            {/* Show different text based on loading state */}
          </button>
        </div>

        {showStateModal && (
          <LocationModal
            type="state"
            addLocation={addCountry}
            newLocation={newState}
            setNewLocation={setNewState}
            closeModal={closeStateModal}
          />
        )}
      </div>

      {/* Displaying all state data */}
      {allStateData?.map((item, idx) => (
        <div key={idx}>
          <ul className="flex flex-col">
            <li className="relative flex items-center justify-between mb-3 text-med-green rounded-lg overflow-hidden transition-colors ease-in-out duration-300 bg-white p-4">
              <span
                onClick={() => setSelectedId(item._id)}
                className="text-left cursor-pointer text-xl font-semibold"
              >
                {item?.StateName}
              </span>
              <div className="flex items-center gap-4">
                <img
                  src={item?.StatePhotoUrl}
                  onClick={() => openModal(item?.StatePhotoUrl)}
                  alt={`state icon`}
                  className="w-10 h-5 cursor-pointer object-cover rounded ml-4"
                />
                <button
                  onDoubleClick={() => {
                    deleteState(item._id);
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
    </>
  );
}
