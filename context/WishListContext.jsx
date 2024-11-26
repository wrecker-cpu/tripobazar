import { jwtDecode } from "jwt-decode";
import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState({
    _id: "",
    Email: "",
    Password: "",
    isAdmin: false, // Default as false
    FullName: "",
    MobileNumber: "",
    DateOfBirth: "",
    status: true, // Default as true
    Address: "",
    MaritalStatus: "",
    PinCode: "",
    WishListCountries: [],
    WishListStates: [],
  });

  useEffect(() => {
    const verifyUser = async () => {
      try {
        // Retrieve user info from localStorage
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        if (!userInfo) {
          return;
        }

        // Decode the token to extract user ID
        const decodedToken = jwtDecode(userInfo.token);
        if (decodedToken && decodedToken.id) {
          const userId = decodedToken.id;
          const response = await axios.get(
            `https://tripobazar-backend.vercel.app/api/users/data/${userId}`,
            {
              headers: {
                Authorization: `Bearer ${userInfo.token}`, // Pass token in headers if needed
              },
            }
          );

          if (response.status !== 200) {
            throw new Error("Failed to fetch user details");
          }

          const userData = response.data.data;

          setUserDetails({
            _id: userData._id || "",
            Email: userData.Email || "",
            Password: userData.Password || "",
            isAdmin: userData.isAdmin || false,
            FullName: userData.FullName || "",
            MobileNumber: userData.MobileNumber || "",
            DateOfBirth: userData.DateOfBirth || "",
            status: userData.status || true,
            Address: userData.Address || "",
            MaritalStatus: userData.MaritalStatus || "",
            PinCode: userData.PinCode || "",
            WishListCountries: userData.WishListCountries || [],
            WishListStates: userData.WishListStates || [],
          });
        }
      } catch (error) {
        console.error("Error verifying user:", error);
      }
    };

    verifyUser();
  }, []);

  const updateUserWishlist = async (updatedCountries, updatedStates) => {
    try {
      // Retrieve user info from localStorage
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo) {
        return;
      }

      const decodedToken = jwtDecode(userInfo.token);
      const userId = decodedToken.id;

      const response = await axios.put(
        `https://tripobazar-backend.vercel.app/api/users/${userId}`,
        {
          WishListCountries: updatedCountries,
          WishListStates: updatedStates,
        },
        {
          headers: {
            Authorization: `Bearer ${userInfo.token}`, // Pass token in headers if needed
          },
        }
      );

      if (response.status === 200) {
        setUserDetails((prevState) => ({
          ...prevState,
          WishListCountries: updatedCountries,
          WishListStates: updatedStates,
        }));
      }
    } catch (error) {
      console.error("Error updating wishlist:", error);
    }
  };

  // Function to add a country to the wishlist
  const addCountryToWishlist = (countryId) => {
    const isCountryInWishlist = userDetails.WishListCountries.some(
      (wishlist) => {
        if (typeof wishlist === "object" && wishlist._id) {
          return wishlist._id === countryId;
        }

        return wishlist === countryId;
      }
    );

    if (!isCountryInWishlist) {
      const updatedCountries = [...userDetails.WishListCountries, countryId];
      updateUserWishlist(updatedCountries, userDetails.WishListStates);
    } else {
      const updatedCountries = userDetails.WishListCountries.filter(
        (wishlistCountry) => {
          if (typeof wishlistCountry === "object" && wishlistCountry._id) {
            return wishlistCountry._id !== countryId;
          }
          return wishlistCountry !== countryId;
        }
      );
      updateUserWishlist(updatedCountries, userDetails.WishListStates);
    }
  };

  const addStateToWishlist = (stateId) => {
    const isStateInWishlist = userDetails.WishListStates.some((wishlist) => {
      if (typeof wishlist === "object" && wishlist._id) {
        return wishlist._id === stateId;
      }

      return wishlist === stateId;
    });

    if (!isStateInWishlist) {
      const updatedStates = [...userDetails.WishListStates, stateId];
      updateUserWishlist(userDetails.WishListCountries, updatedStates);
    } else {
      // Remove the state from the wishlist
      const updatedStates = userDetails.WishListStates.filter(
        (wishlistState) => {
          if (typeof wishlistState === "object" && wishlistState._id) {
            return wishlistState._id !== stateId;
          }
          return wishlistState !== stateId;
        }
      );
      updateUserWishlist(userDetails.WishListCountries, updatedStates);
    }
  };

  //   console.log(userDetails);

  return (
    <WishlistContext.Provider
      value={{
        userDetails,
        setUserDetails,
        addCountryToWishlist,
        addStateToWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// Use Wishlist Hook
export const useWishlist = () => {
  return useContext(WishlistContext);
};
