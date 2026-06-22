"use client";

import React, { useState, useMemo } from "react";
import { Minus, Plus, X, ShoppingBag, ArrowLeft, Tag, Zap, ShieldCheck, Truck } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import Link from "next/link";
import { useHasHydrated } from "@/hooks/useHasHydrated";
import { PROMO_CODES } from "@/data/promoCodes";
import { CartItemCard } from "./CartItemCard";
import { CartSummary } from "./CartSummary";

export default function CartClient() {
  const cartItems = useCartStore(state => state.items);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeFromCart = useCartStore(state => state.removeItem);
  
  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);
  const [promoError, setPromoError] = useState("");
  const hasHydrated = useHasHydrated();

  const discount = useMemo(() => {
    return appliedPromo ? subtotal * (PROMO_CODES[appliedPromo.toUpperCase()] / 100) : 0;
  }, [appliedPromo, subtotal]);

  const shipping = useMemo(() => {
    return subtotal > 15000 ? 0 : 500;
  }, [subtotal]);

  const total = useMemo(() => {
    return subtotal - discount + shipping;
  }, [subtotal, discount, shipping]);

  const handleApplyPromo = () => {
    const promo = promoCode.trim().toUpperCase();
    const discountPct = PROMO_CODES[promo];
    if (discountPct !== undefined) {
      setAppliedPromo(promo);
      setPromoError("");
    } else {
      setPromoError("Invalid promo code");
    }
  };

  const handleRemovePromo = () => {
    setAppliedPromo(null);
    setPromoCode("");
    setPromoError("");
  };

  if (!hasHydrated) {
    return (
      <main className="min-h-screen bg-brand-bg flex items-center justify-center">
        <div className="text-gray-400 font-bold uppercase tracking-widest animate-pulse">
          Loading Cart...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-brand-bg py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/shop"
            className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 hover:text-brand-primary transition-all mb-6 inline-flex group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Shop</span>
          </Link>
          <h1 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tighter italic leading-none mb-4">
            My Shopping <span className="text-brand-primary">Cart</span>
          </h1>
          <p className="text-sm font-bold text-gray-500 uppercase tracking-widest">
            {cartItems.length === 0
              ? "Your cart is empty."
              : `You have ${cartItems.length} items in your cart.`}
          </p>
        </div>

        {cartItems.length === 0 ? (
          <div className="bg-white rounded-[3rem] shadow-2xl p-16 md:p-24 text-center border border-gray-100">
            <div className="max-w-md mx-auto space-y-8">
              <div className="w-24 h-24 bg-[#E8F5E9] rounded-[2.5rem] flex items-center justify-center border border-dashed border-gray-200 mx-auto">
                <ShoppingBag className="h-10 w-10 text-gray-500" />
              </div>
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-4 tracking-tight italic">
                  Your Cart is Empty
                </h2>
                <p className="text-sm font-medium text-gray-500 leading-relaxed uppercase tracking-widest">
                  Browse our latest collection and add your favorite items to the cart.
                </p>
              </div>
              <Link
                href="/shop"
                className="px-10 py-5 bg-brand-primary text-white rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-brand-primary/90 transition-all duration-500 shadow-xl hover:shadow-[0_20px_40px_rgba(46,125,50,0.2)] inline-block"
              >
                Start Shopping
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cartItems.map((item) => (
                <CartItemCard 
                  key={item.id}
                  item={item}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                />
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <CartSummary 
                subtotal={subtotal}
                discount={discount}
                shipping={shipping}
                total={total}
                promoCode={promoCode}
                setPromoCode={setPromoCode}
                appliedPromo={appliedPromo}
                promoError={promoError}
                onApplyPromo={handleApplyPromo}
                onRemovePromo={handleRemovePromo}
              />
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
