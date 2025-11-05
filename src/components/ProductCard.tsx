import Link from "next/link";
import type { Product } from "@/data/products";
import { formatPrice } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="card overflow-hidden">
      <Link href={`/products/${product.slug}`}>
        <img src={product.image} alt={product.name} className="w-full h-64 object-cover" />
      </Link>
      <div className="p-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-medium"><Link href={`/products/${product.slug}`}>{product.name}</Link></h3>
          <p className="text-sm text-gray-500 mt-1">{product.tags.join(" ? ")}</p>
        </div>
        <div className="text-right font-semibold">{formatPrice(product.priceCents)}</div>
      </div>
    </div>
  );
}
