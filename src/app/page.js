export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="text-center py-20">
        <h1 className="text-5xl font-bold">Welcome to My Shop</h1>
        <p className="mt-4 text-lg">Explore products and manage with ease</p>
      </section>

      {/* Highlights */}
      <section className="grid grid-cols-3 gap-6 py-10">
        <div className="p-6 border rounded">Highlight 1</div>
        <div className="p-6 border rounded">Highlight 2</div>
        <div className="p-6 border rounded">Highlight 3</div>
      </section>
    </div>
  );
}
