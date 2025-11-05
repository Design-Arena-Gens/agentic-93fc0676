"use client";
import { useState } from "react";
import type { Product } from "@/data/products";
import { useCartStore } from "@/lib/useCartStore";

export function AddToCart({ product }: { product: Product }) {
  const addItem = useCartStore((s) => s.addItem);
  const [size, setSize] = useState<string | undefined>();
  const [color, setColor] = useState<string | undefined>();
  const [qty, setQty] = useState(1);

  return (
    <div className="space-y-4">
      {product.sizes.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Size</label>
          <div className="flex flex-wrap gap-2">
            {product.sizes.map((s) => (
              <button key={s} onClick={() => setSize(s)} className={`px-3 py-1 rounded border ${size === s ? "bg-gray-900 text-white" : "bg-white"}`}>{s}</button>
            ))}
          </div>
        </div>
      )}
      {product.colors.length > 0 && (
        <div className="space-y-2">
          <label className="text-sm font-medium">Color</label>
          <div className="flex flex-wrap gap-2">
            {product.colors.map((c) => (
              <button key={c} onClick={() => setColor(c)} className={`px-3 py-1 rounded border ${color === c ? "bg-gray-900 text-white" : "bg-white"}`}>{c}</button>
            ))}
          </div>
        </div>
      )}
      <div className="flex items-center gap-3">
        <label htmlFor="qty" className="text-sm font-medium">Qty</label>
        <input id="qty" type="number" min={1} value={qty} onChange={(e) => setQty(parseInt(e.target.value) || 1)} className="w-20 rounded border px-2 py-1" />
      </div>
      <button
        className="btn btn-accent w-full md:w-auto"
        onClick={() => addItem({ productId: product.id, name: product.name, priceCents: product.priceCents, image: product.image, size, color, qty })}
      >
        Add to cart
      </button>
    </div>
  );
}
