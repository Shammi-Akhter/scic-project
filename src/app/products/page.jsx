"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      <h2 className="text-2xl mb-4">Products</h2>
      <ul className="space-y-4">
        {products.map((p) => (
          <li key={p.id} className="border p-4 rounded">
            <h3 className="font-bold">{p.name}</h3>
            <p>{p.description}</p>
            <p>${p.price}</p>
            <Link href={`/products/${p.id}`} className="text-blue-600 underline">
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
