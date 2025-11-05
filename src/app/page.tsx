import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function HomePage() {
  return (
    <div className="space-y-10">
      <section className="text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-bold">Essentials for every wardrobe</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">Discover modern essentials and timeless pieces designed for comfort and style.</p>
        <Link href="/products" className="btn btn-accent">Shop the Collection</Link>
      </section>
      <section>
        <h2 className="text-xl font-semibold mb-4">Featured</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
