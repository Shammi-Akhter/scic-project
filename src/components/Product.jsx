'use client';

import Link from 'next/link';
import Image from 'next/image';

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

export default function ProductHighlights() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
        Product Highlights
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-lg h-full hover:shadow-2xl transition"
          >
            <div className="w-full">
              <img
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <p className="text-lg font-semibold text-gray-900 mb-4">{product.price}</p>
              <Link
                href={`/products`}
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
