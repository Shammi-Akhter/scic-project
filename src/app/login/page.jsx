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
    <div className="min-h-screen flex items-center justify-center">
      <div className="bg-white shadow-2xl rounded-2xl p-10 w-96 text-center">
        {/* Logo / Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Welcome to My Shop</h1>
        <p className="text-gray-500 mb-8">Sign in to continue</p>

        {/* Google Login Button */}
        <div className="flex justify-center">
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginError}
          />
        </div>

        {/* Optional footer */}
        <p className="text-gray-400 text-sm mt-6">
          By signing in, you agree to our <span className="underline">Terms</span> & <span className="underline">Privacy Policy</span>.
        </p>
      </div>
    </div>
  );
}
