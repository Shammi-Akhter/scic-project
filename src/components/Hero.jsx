'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const products = [
  {
    id: 1,
    name: 'HeadPhone',
    price: '$599',
    image: '/images/head.jpeg',
  },
  {
    id: 2,
    name: 'Smart TV',
    price: '$1200',
    image: '/images/tv.webp',
  },
  {
    id: 3,
    name: 'Monitor',
    price: '$350',
    image: '/images/monitor.webp',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {products.map((product, index) => (
        <div
          key={product.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain"
          />
        
          <div className="absolute inset-0  bg-opacity-50 flex flex-col justify-center items-center text-center px-4">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">
              {product.name}
            </h2>
            <p className="text-2xl md:text-3xl text-white mb-6 drop-shadow-md">
              {product.price}
            </p>
           
          </div>
        </div>
      ))}

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {products.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-4 h-4 rounded-full ${
              idx === current ? 'bg-white' : 'bg-gray-400'
            } transition`}
          />
        ))}
      </div>
    </div>
  );
}
