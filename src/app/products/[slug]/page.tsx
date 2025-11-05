import { notFound } from "next/navigation";
import { getProductBySlug, formatPrice } from "@/data/products";
import { AddToCart } from "./product-actions";

export async function generateStaticParams() {
  const { products } = await import("@/data/products");
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetail({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) return notFound();

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="card overflow-hidden">
        <img src={product.image} alt={product.name} className="w-full h-[420px] object-cover" />
      </div>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold">{product.name}</h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
        </div>
        <div className="text-2xl font-semibold">{formatPrice(product.priceCents)}</div>
        <AddToCart product={product} />
      </div>
    </div>
  );
}
