'use client';

import { signIn } from 'next-auth/react';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center  px-4">
      <div className="bg-white p-10 rounded-2xl shadow-2xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Login to My Shop</h1>
        <p className="text-gray-500 mb-8">Use Google to sign in quickly</p>

        <button
          onClick={() => signIn('google', { callbackUrl: '/' })} // ← Redirect to home
          className="w-full bg-red-600 text-white py-3 rounded-lg font-semibold hover:bg-red-700 transition"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  );
}
