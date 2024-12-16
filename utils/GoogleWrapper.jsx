import { GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import GoogleButton from "./GoogleButton";

export default function GoogleWrapper() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.GOOGLE_CLIENT_ID}>
      <GoogleButton />
    </GoogleOAuthProvider>
  );
}
