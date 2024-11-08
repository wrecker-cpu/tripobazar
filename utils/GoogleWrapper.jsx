import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import GoogleButton from "./GoogleButton";

export default function GoogleWrapper() {
  return (
    <GoogleOAuthProvider clientId="979524085481-6dcc56di2c2jhno3jekcttaembj5tom2.apps.googleusercontent.com">
      <GoogleButton />
    </GoogleOAuthProvider>
  );
}
