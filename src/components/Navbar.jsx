"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="flex justify-between items-center p-4 bg-gray-200">
      <Link href="/" className="font-bold text-xl">
        My Shop
      </Link>
      <div className="space-x-4">
        <Link href="/products">Products</Link>
        {session ? (
          <>
            <Link href="/dashboard/add-product">Add Product</Link>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              className="ml-4 text-red-600"
            >
              Logout
            </button>
          </>
        ) : (
          <Link href="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}
