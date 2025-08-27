let products = [
  { id: 1, name: "Phone", description: "Smartphone", price: 500 },
  { id: 2, name: "Laptop", description: "Powerful laptop", price: 1200 },
];

export async function GET() {
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  const newProduct = { ...body, id: products.length + 1 };
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), { status: 201 });
}
