import { notFound } from "next/navigation";

const products = [
  { id: 1, name: "Phone", description: "Smartphone", price: 500 },
  { id: 2, name: "Laptop", description: "Powerful laptop", price: 1200 },
];

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === Number(params.id));
  if (!product) return notFound();

  return (
    <div>
      <h2 className="text-3xl">{product.name}</h2>
      <p>{product.description}</p>
      <p className="font-bold">${product.price}</p>
    </div>
  );
}
