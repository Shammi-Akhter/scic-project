'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-8 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Our Products</h1>
        <Link
          href="/dashboard/add-product"
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Add New Product
        </Link>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {products.length === 0 && (
          <p className="text-gray-500 col-span-full text-center">No products available.</p>
        )}
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer"
          >
            {/* Product Image */}
            <img
              src={product.image || '/placeholder.png'}
              alt={product.name}
              className="w-full h-48 object-cover"
            />

            {/* Product Info */}
            <div className="p-4">
              <h2 className="font-semibold text-xl text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-500 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-gray-900">${product.price}</span>
                <Link
                  href={`/products/${product.id}`}
                  className="text-blue-600 font-medium hover:underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
