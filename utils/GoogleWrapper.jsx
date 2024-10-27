import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import GoogleButton from "./GoogleButton";

export default function GoogleWrapper() {
  return (
    <GoogleOAuthProvider clientId="488459778551-nact1let20rsbavd62o3bnebtrcsqcc8.apps.googleusercontent.com">
      <GoogleButton />
    </GoogleOAuthProvider>
  );
}
