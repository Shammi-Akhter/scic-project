'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';

const products = [
  { id: 1, name: 'Phone', description: 'Smartphone', price: 500, image: '/phone.jpg' },
  { id: 2, name: 'Laptop', description: 'Powerful laptop', price: 1200, image: '/laptop.jpg' },
];

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return notFound();

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 flex justify-center">
      <div className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full overflow-hidden">
        {/* Product Image */}
        <img
          src={product.image || '/placeholder.png'}
          alt={product.name}
          className="w-full h-80 object-cover"
        />

        {/* Product Info */}
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{product.name}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-gray-900 mb-6">${product.price}</p>

          {/* Back Link */}
          <Link
            href="/products"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            ← Back to Products
          </Link>
        </div>
      </div>
    </div>
  );
}
