"use client";

import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import { useState } from "react";

export default function AddProductPage() {
  const { data: session, status } = useSession();
  const [form, setForm] = useState({ name: "", description: "", price: "" });
  const [message, setMessage] = useState("");

  if (status === "loading") return <p>Loading...</p>;
  if (!session) return redirect("/login");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ 
        name: form.name, 
        description: form.description, 
        price: Number(form.price) 
      }),
    });

    if (res.ok) {
      setMessage("Product added successfully!");
      setForm({ name: "", description: "", price: "" });
    } else {
      setMessage("Error adding product");
    }
  };

  return (
    <div>
      <h2 className="text-2xl mb-4">Add Product</h2>
      {message && <p className="mb-4 text-green-600">{message}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          className="border p-2 rounded w-full"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="border p-2 rounded w-full"
          value={form.description}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          className="border p-2 rounded w-full"
          value={form.price}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}
