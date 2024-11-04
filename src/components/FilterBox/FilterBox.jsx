import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";

export default function FilterBox({ onClose }) {
  const [formValues, setFormValues] = useState({
    range: "5",
    checkboxes: {
      budget1: false,
      budget2: false,
      budget3: false,
      budget4: false,
    },
    reviews: "4",
    sortBy: "withoutflight",
    visaIncluded: false,
    selectPreferences: {
      hotelstay: false,
      meals: false,
      localtransport: false,
      sightseeing: false,
    },
    themePreferences: {
      architecture: false,
      artsandentertainment: false,
      history: false,
      inventions: false,
      religion: false,
      music: false,
      sports: false,
    },
  });

  const checkboxOptions = [
    { name: "budget1", label: "Less than ₹50,000" },
    { name: "budget2", label: "₹5,00,000 - ₹10,00,000" },
    { name: "budget3", label: "₹10,00,000 - ₹15,00,000" },
    { name: "budget4", label: "More than ₹10,00,000" },
  ];

  const checkboxPreferences = [
    { name: "hotelstay", label: "Hotel stay" },
    { name: "meals", label: "Meals" },
    { name: "localtransport", label: "Local transport" },
    { name: "sightseeing", label: "Sightseeing" },
  ];

  const flightInclusive = [
    { value: "withoutflight", label: "Without Flight" },
    { value: "withflight", label: "With Flight" },
  ];

  const ThemePreferences = [
    { name: "architecture", label: "Architecture" },
    { name: "artsandentertainment", label: "Arts and Entertainment" },
    { name: "history", label: "History" },
    { name: "inventions", label: "Inventions" },
    { name: "religion", label: "Religion" },
    { name: "music", label: "Music" },
    { name: "sports", label: "Sports" },
  ];

  const handleChange = (event, type) => {
    const { name, value, checked } = event.target;
    setFormValues((prevValues) => {
      switch (type) {
        case "checkbox":
          return {
            ...prevValues,
            checkboxes: {
              ...prevValues.checkboxes,
              [name]: checked,
            },
          };
        case "preferences":
          return {
            ...prevValues,
            selectPreferences: {
              ...prevValues.selectPreferences,
              [name]: checked,
            },
          };
        case "theme":
          return {
            ...prevValues,
            themePreferences: {
              ...prevValues.themePreferences,
              [name]: checked,
            },
          };
        case "range":
          return {
            ...prevValues,
            [name]: value,
          };
        case "sort":
          return {
            ...prevValues,
            sortBy: value,
          };
        case "visa":
          return {
            ...prevValues,
            visaIncluded: checked,
          };
        case "reviews":
          return {
            ...prevValues,
            reviews: value,
          };
        default:
          return prevValues;
      }
    });
  };
  const getSliderBackground = () => {
    const percentage = ((formValues.range - 0) / (10 - 0)) * 100; // Adjust for your range min/max
    return `linear-gradient(to right, #27BFEA ${percentage}%, #ddd ${percentage}%)`;
  };

  const getReviewBackground = () => {
    const percentage = ((formValues.reviews - 0) / (5 - 0)) * 100; // Adjust for your range min/max
    return `linear-gradient(to right, #03B58B ${percentage}%, #ddd ${percentage}%)`;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitting filters:", formValues);
    onClose();
  };

  const resetButton = () => {
    setFormValues({
      range: 5,
      checkboxes: {
        budget1: false,
        budget2: false,
        budget3: false,
        budget4: false,
      },
      reviews: 4,
      sortBy: "withoutflight",
      visaIncluded: false,
      selectPreferences: {
        hotelstay: false,
        meals: false,
        localtransport: false,
        sightseeing: false,
      },
      themePreferences: {
        architecture: false,
        artsandentertainment: false,
        history: false,
        inventions: false,
        religion: false,
        music: false,
        sports: false,
      },
    });
  };



  return (
    <div className="fixed  font-poppins inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
      <div
        style={{ maxWidth: "50rem" }}
        className="bg-[#f8f8f8] rounded-lg  shadow-lg "
      >
        <form onSubmit={handleSubmit}>
          <div className=" py-3 md:py-5 md:p-5">
            <div className="flex justify-between mb-8 px-4 items-center">
              <h2 className="text-xl uppercase font-bold ">Filters</h2>
              <IoCloseOutline onClick={onClose} className="w-5 h-5" />
            </div>
            <div className="flex overflow-y-auto max-h-[70vh] md:max-h-[70vh] flex-col md:flex-row pb-2 justify-between">
              <div className="flex-1 px-4 mr-2">
                <div className="pb-6 border-b-2">
                  <h3 className="font-medium mb-1">Duration</h3>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    defaultValue="5"
                    onChange={(e) => handleChange(e, "range")}
                    className="custom-range"
                    style={{ background: getSliderBackground() }} // Inline style for dynamic background
                  />
                  <p className="text-gray-500">{formValues.range} days</p>
                </div>
                <div className="mt-6 pb-6 border-b-2">
                  <h3 className="font-medium mb-4">Budget</h3>
                  <div className="flex flex-col gap-2">
                    {checkboxOptions.map((option, idx) => (
                      <div
                        className="flex items-center justify-between"
                        key={idx}
                      >
                        <label className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            name={option.name}
                            checked={formValues.checkboxes[option.name]}
                            onChange={(e) => handleChange(e, "checkbox")}
                          />
                          {option.label}
                        </label>
                        <p className="text-gray-500">(23)</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pb-6 border-b-2">
                  <h3 className="font-medium mb-1">Customer Reviews</h3>
                  <input
                    type="range"
                    min="0"
                    max="5"
                    value={formValues.reviews}
                    onChange={(e) => handleChange(e, "reviews")}
                    className="custom-range-two"
                    style={{ background: getReviewBackground() }} // Inline style for dynamic background
                  />
                  <div className="flex items-center gap-1">
                    <p className="m-0 text-lg">{formValues.reviews} </p>
                    <FaStar className="text-yellow-300 mb-[2px]" />
                  </div>
                </div>
                <div className="mt-6 pb-6 border-b-2">
                  <h3 className="font-medium mb-4">Flight Inclusive</h3>
                  <div className="flex flex-wrap gap-4">
                    {flightInclusive.map((option) => (
                      <div className="flex items-center" key={option.value}>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="sortBy" // Same name for sort radio buttons
                            value={option.value} // Value that corresponds to the sort option
                            checked={formValues.sortBy === option.value} // Check if this option is selected
                            onChange={(e) => handleChange(e, "sort")} // Handle change event
                            className="custom-radio" // Add any custom styling you want
                          />
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pb-6 border-b-2 md:border-b-0 md:pb-1 flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <label className="flex items-center gap-1">
                      <input
                        type="checkbox"
                        className="custom-checkbox"
                        name="visa"
                        checked={formValues.visaIncluded}
                        onChange={(e) => handleChange(e, "visa")}
                      />
                      Include packages with visa services
                    </label>
                  </div>
                </div>
              </div>
              <div className="h-auto border md:block hidden"></div>{" "}
              <div className="flex-1 px-4 mr-2 md:ml-2">
                <div className="pb-6 mt-6 md:mt-0  border-b-2">
                  <h3 className="font-medium mb-4">
                    Select Preferences To Include
                  </h3>
                  <div className="flex flex-col gap-2">
                    {checkboxPreferences.map((option, idx) => (
                      <div
                        className="flex items-center justify-between"
                        key={idx}
                      >
                        <label className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            name={option.name}
                            checked={formValues.selectPreferences[option.name]}
                            onChange={(e) => handleChange(e, "preferences")}
                          />
                          {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 pb-6">
                  <h3 className="font-medium mb-4">Themes</h3>
                  <div className="flex flex-col gap-2">
                    {ThemePreferences.map((option, idx) => (
                      <div
                        className="flex items-center justify-between"
                        key={idx}
                      >
                        <label className="flex items-center gap-1">
                          <input
                            type="checkbox"
                            className="custom-checkbox"
                            name={option.name}
                            checked={formValues.themePreferences[option.name]}
                            onChange={(e) => handleChange(e, "theme")}
                          />
                          {option.label}
                        </label>
                        <p className="text-gray-500">(23)</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-4  rounded-b-lg bg-white">
            <div className="md:px-4 pb-2 flex justify-between items-center">
              <div>
                <button
                  type="button"
                  onClick={resetButton}
                  className="text-med-green hover:text-[#03b58cc4]"
                >
                  Clear All
                </button>
              </div>
              <div>
                <button
                  type="submit"
                  className="text-med-green px-4 py-3 border hover:text-white hover:bg-med-green transition-colors ease-in-out duration-200 rounded-lg"
                >
                  Apply Filter
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
