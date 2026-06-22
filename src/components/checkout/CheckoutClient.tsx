"use client";

import React, { useState, useMemo } from "react";
import { useCartStore } from "@/store/useCartStore";
import { Button } from "@/components/ui/Button";
import { CheckoutForm } from "./CheckoutForm";
import { PaymentMethods } from "./PaymentMethods";
import { OrderSummary } from "./OrderSummary";
import { ArrowLeft, Lock } from "lucide-react";
import Link from "next/link";
import { useHasHydrated } from "@/hooks/useHasHydrated";

export default function CheckoutClient() {
  const cartItems = useCartStore(state => state.items);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "cod">("card");
  const hasHydrated = useHasHydrated();

  const subtotal = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const shipping = useMemo(() => {
    return subtotal > 15000 ? 0 : 500;
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal + shipping;
  }, [subtotal, shipping]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order Placed Successfully!");
  };

  if (!hasHydrated) {
    return (
      <main className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-gray-400 font-bold uppercase tracking-widest animate-pulse">
          Loading Checkout...
        </div>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="min-h-screen bg-brand-bg">
        <div className="max-w-7xl mx-auto px-4 py-32 text-center">
          <div className="bg-white rounded-[3rem] shadow-2xl p-16 md:p-24 border border-gray-100 max-w-2xl mx-auto">
            <h1 className="text-4xl font-black text-gray-900 tracking-tighter italic uppercase mb-6">
              Your Cart is Empty
            </h1>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-10">
              Add items to your cart before checking out.
            </p>
            <Link href="/shop">
              <Button variant="primary" className="px-10">Return to Shop</Button>
            </Link>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-bg">
      <form onSubmit={handleSubmit} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/cart"
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-brand-primary transition-all mb-6 inline-flex group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Cart</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter italic leading-none mb-4">
            Secure <span className="text-brand-primary">Checkout</span>
          </h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex items-center gap-2 px-3 py-1 bg-brand-primary/10 text-brand-primary rounded-full border border-brand-primary/20 w-fit">
              <Lock className="h-3 w-3" />
              <span className="text-[9px] font-black uppercase tracking-widest">SSL Encrypted</span>
            </div>
            <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
              Complete your order in just a few steps.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left Column: Billing & Shipping */}
          <div className="lg:col-span-7 space-y-8">
            <CheckoutForm />
            <PaymentMethods 
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:col-span-5">
            <OrderSummary 
              items={cartItems}
              subtotal={subtotal}
              shipping={shipping}
              total={total}
            />
          </div>
        </div>
      </form>
    </main>
  );
}
