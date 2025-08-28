'use client';

import { notFound } from 'next/navigation';
import Link from 'next/link';

const products = [
   {
    id: 1,
    name: 'Mobile Phone',
    description: 'Latest smartphone with amazing camera',
    price: '$599',
    image: '/images/phone.webp',
  },
  {
    id: 2,
    name: 'Smart TV',
    description: '4K Ultra HD Smart TV for your living room',
    price: '$1200',
    image: '/images/tv.webp',
  },
  {
    id: 3,
    name: 'Monitor',
    description: '27-inch monitor with crystal-clear display',
    price: '$350',
    image: '/images/monitor.webp',
  },
  {
    id: 4,
    name: 'Laptop',
    description: 'Powerful laptop for work and gaming',
    price: '$1500',
    image: '/images/laptop.avif',
  },
  {
    id: 5,
    name: 'Headphones',
    description: 'Noise-cancelling over-ear headphones',
    price: '$199',
    image: '/images/head.jpeg',
  },
  {
    id: 6,
    name: 'Smartwatch',
    description: 'Keep track of your fitness and notifications',
    price: '$249',
    image: '/images/watch.jpeg',
  },
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
