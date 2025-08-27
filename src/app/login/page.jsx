"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div className="text-center">
      <h2 className="text-2xl mb-6">Login</h2>
      <button
        onClick={() => signIn("google", { callbackUrl: "/products" })}
        className="bg-red-500 text-white px-6 py-2 rounded"
      >
        Sign in with Google
      </button>
    </div>
  );
}
