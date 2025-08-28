'use client';
import { GoogleLogin } from '@react-oauth/google';
import jwt_decode from "jwt-decode";

export default function LoginPage() {
  const handleLoginSuccess = (credentialResponse) => {
    const decoded = jwt_decode(credentialResponse.credential);
    console.log("User info:", decoded);
    // send token to your backend if needed
  };

  const handleLoginError = () => {
    console.log("Login Failed");
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <GoogleLogin
        onSuccess={handleLoginSuccess}
        onError={handleLoginError}
      />
    </div>
  );
}
