"use client";
import Link from "next/link";
import { useCartStore, cartTotalCents } from "@/lib/useCartStore";
import { formatPrice } from "@/data/products";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);

  const total = cartTotalCents(items);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Your Cart</h1>
      {items.length === 0 ? (
        <div className="text-gray-600">Your cart is empty. <Link href="/products" className="underline">Shop products</Link></div>
      ) : (
        <>
          <ul className="divide-y border rounded">
            {items.map((i, idx) => (
              <li key={idx} className="p-4 flex items-center gap-4">
                <img src={i.image} alt="" className="w-20 h-20 object-cover rounded" />
                <div className="flex-1">
                  <div className="font-medium">{i.name}</div>
                  <div className="text-sm text-gray-500">{[i.size, i.color].filter(Boolean).join(" / ") || "Standard"}</div>
                </div>
                <div className="w-24 text-right">{formatPrice(i.priceCents)}</div>
                <div className="w-20 text-right">? {i.qty}</div>
              </li>
            ))}
          </ul>
          <div className="flex items-center justify-between">
            <button className="text-sm underline" onClick={clear}>Clear cart</button>
            <div className="text-xl font-semibold">Total: {formatPrice(total)}</div>
          </div>
          <div>
            <Link href="/checkout" className="btn btn-accent">Proceed to checkout</Link>
          </div>
        </>
      )}
    </div>
  );
}
