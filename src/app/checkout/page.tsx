"use client";
import { useRouter } from "next/navigation";
import { useCartStore, cartTotalCents } from "@/lib/useCartStore";
import { formatPrice } from "@/data/products";
import { useState } from "react";

export default function CheckoutPage() {
  const items = useCartStore((s) => s.items);
  const clear = useCartStore((s) => s.clear);
  const router = useRouter();
  const [isProcessing, setIsProcessing] = useState(false);

  const total = cartTotalCents(items);

  function simulatePay(e: React.FormEvent) {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => {
      clear();
      router.push("/checkout/success");
    }, 1200);
  }

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <form onSubmit={simulatePay} className="space-y-4">
        <h1 className="text-2xl font-semibold">Checkout</h1>
        <div className="grid gap-4">
          <input required placeholder="Full name" className="rounded border px-3 py-2" />
          <input required placeholder="Email" type="email" className="rounded border px-3 py-2" />
          <input required placeholder="Address" className="rounded border px-3 py-2" />
          <div className="grid grid-cols-2 gap-4">
            <input required placeholder="City" className="rounded border px-3 py-2" />
            <input required placeholder="Postal code" className="rounded border px-3 py-2" />
          </div>
        </div>
        <button className="btn btn-accent" disabled={isProcessing || items.length === 0}>
          {isProcessing ? "Processing?" : "Pay now"}
        </button>
      </form>
      <aside className="space-y-4">
        <h2 className="text-xl font-semibold">Order Summary</h2>
        <ul className="divide-y border rounded">
          {items.map((i, idx) => (
            <li key={idx} className="p-4 flex items-center gap-4">
              <img src={i.image} alt="" className="w-16 h-16 object-cover rounded" />
              <div className="flex-1">
                <div className="font-medium">{i.name}</div>
                <div className="text-sm text-gray-500">{[i.size, i.color].filter(Boolean).join(" / ") || "Standard"}</div>
              </div>
              <div className="w-20 text-right">? {i.qty}</div>
              <div className="w-24 text-right">{formatPrice(i.priceCents)}</div>
            </li>
          ))}
        </ul>
        <div className="text-xl font-semibold">Total: {formatPrice(total)}</div>
      </aside>
    </div>
  );
}
