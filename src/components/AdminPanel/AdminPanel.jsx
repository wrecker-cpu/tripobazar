import React, { useEffect, useState } from "react";

import SideNav from "./SideNav";
import { Route, Routes, useNavigate } from "react-router-dom";
import Users from "./Users";
import DestinationDetails from "./DestinationDetails";
import { jwtDecode } from "jwt-decode";
import Spinner from "../../../utils/Spinner";
import useFetch from "../../../hooks/useFetch";

function AdminPanel() {
  const navigate = useNavigate();
  const [isAdmin, setIsAdmin] = useState(false);
  const [selection, setSelection] = useState("users");

  useEffect(() => {
    const verifyToken = () => {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      if (!userInfo) {
        navigate("/login");
        return;
      }
      const decodedToken = jwtDecode(userInfo.token);
      if (decodedToken && decodedToken.isAdmin) {
        setIsAdmin(true);
      } else {
        navigate("/");
      }
    };

    verifyToken();
  }, [navigate]);

  const handleClick = (name) => {
    setSelection(name);
  };

  const { data, loading, error } = useFetch(
    "https://tripobazar-backend.vercel.app/api/users"
  );

  if (!isAdmin || loading === true) {
    return <Spinner />; // Optionally render a loading spinner or nothing while checking
  }

  return (
    <div className="flex h-auto bg-[#F8F8F8]">
      <SideNav handleClick={handleClick} />
      <div className="flex-1  p-6">
        {selection === "users" ? <Users data={data} /> : <DestinationDetails />}
      </div>
    </div>
  );
}

export default AdminPanel;