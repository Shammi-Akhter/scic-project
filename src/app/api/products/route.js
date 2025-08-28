let products = [
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

export async function GET() {
  return new Response(JSON.stringify(products), { status: 200 });
}

export async function POST(req) {
  const body = await req.json();
  const newProduct = { ...body, id: products.length + 1 };
  products.push(newProduct);
  return new Response(JSON.stringify(newProduct), { status: 201 });
}
