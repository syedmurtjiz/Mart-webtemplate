"use client";

import React, { useEffect, useMemo } from "react";
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight, AlertCircle } from "lucide-react";
import { useCartStore } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { useHasHydrated } from "@/hooks/useHasHydrated";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export const CartDrawer = () => {
  const isCartOpen = useUIStore(state => state.isCartOpen);
  const closeCart = useUIStore(state => state.closeCart);
  const cartItems = useCartStore(state => state.items);
  const updateQuantity = useCartStore(state => state.updateQuantity);
  const removeFromCart = useCartStore(state => state.removeItem);
  const hasHydrated = useHasHydrated();

  const subtotal = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [cartItems]
  );
  const filteredItemCount = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems]
  );

  const filteredItems = cartItems;
  const hiddenCount = 0;

  // Prevent scroll when drawer is open
  useEffect(() => {
    if (isCartOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isCartOpen]);

  if (!hasHydrated) return null;
  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex justify-end">
      {/* Overlay */}
      <div 
        aria-hidden={!isCartOpen}
        onClick={closeCart}
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-500 z-40"
      />

      {/* Drawer Panel */}
      <div 
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
        className={`relative w-full max-w-md bg-brand-bg h-full shadow-2xl flex flex-col transform transition-transform duration-500 ease-out z-50 ${isCartOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-primary/10 flex items-center justify-center">
              <ShoppingBag className="h-5 w-5 text-brand-primary" />
            </div>
            <div>
              <h2 className="text-xl font-black text-gray-900 tracking-tighter italic uppercase leading-none">Your Cart</h2>
              <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mt-1">
                {filteredItemCount} {filteredItemCount === 1 ? "item" : "items"}
              </p>
            </div>
          </div>
          <button 
            aria-label="Close cart"
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors text-gray-500"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {hiddenCount > 0 && (
            <div className="flex items-center gap-2 p-3 bg-amber-50 rounded-xl border border-amber-100 mb-2">
              <AlertCircle className="h-4 w-4 text-amber-500" />
              <p className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">
                {hiddenCount} items from other marts are hidden
              </p>
            </div>
          )}

          {filteredItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-6">
              <div className="w-20 h-20 bg-gray-100 rounded-[2rem] flex items-center justify-center border border-dashed border-gray-300">
                <ShoppingBag className="h-8 w-8 text-gray-400" />
              </div>
              <div>
                <h3 className="text-lg font-black text-gray-900 uppercase italic tracking-tight">
                  Cart is Empty
                </h3>
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">Add some items to get started!</p>
              </div>
              <Button 
                variant="primary" 
                onClick={closeCart}
                className="px-8"
              >
                Start Shopping
              </Button>
            </div>
          ) : (
            filteredItems.map((item) => (
              <div 
                key={item.id}
                className="bg-white p-4 rounded-2xl border border-gray-100 shadow-sm flex gap-4 group hover:shadow-md transition-all duration-300"
              >
                <div className="w-20 h-20 bg-[#E8F5E9] rounded-xl overflow-hidden flex-shrink-0 relative">
                  <ImageWithFallback 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                
                <div className="flex-1 min-w-0 flex flex-col justify-between">
                  <div className="flex justify-between items-start gap-2">
                    <div>
                      <h4 className="text-sm font-black text-gray-900 uppercase italic tracking-tight truncate">
                        {item.name}
                      </h4>
                    </div>
                    <button 
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center bg-brand-bg rounded-lg border border-gray-100 p-1 scale-90 origin-left">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="w-7 h-7 flex items-center justify-center bg-white rounded-md text-gray-900 hover:text-brand-primary transition-all border border-transparent hover:border-gray-200"
                      >
                        <Minus className="h-3 w-3" />
                      </button>
                      <span className="text-xs font-black text-gray-900 w-8 text-center tabular-nums">
                        {item.quantity}
                      </span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center bg-white rounded-md text-gray-900 hover:text-brand-primary transition-all border border-transparent hover:border-gray-200"
                      >
                        <Plus className="h-3 w-3" />
                      </button>
                    </div>
                    <p className="text-sm font-black text-brand-primary italic">
                      Rs {item.price.toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        {filteredItems.length > 0 && (
          <div className="p-6 bg-white border-t border-gray-100 space-y-4">
            <div className="space-y-2">
              <div className="flex items-center justify-between text-[10px] font-black text-gray-500 uppercase tracking-widest">
                <span>Subtotal</span>
                <span className="text-gray-900 text-base italic">Rs {subtotal.toLocaleString()}</span>
              </div>
              <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">
                Shipping and taxes calculated at checkout.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <Link href="/cart" className="w-full" onClick={closeCart}>
                <Button variant="outline" fullWidth className="py-4">
                  View Cart
                </Button>
              </Link>
              <Link href="/checkout" className="w-full" onClick={closeCart}>
                <Button variant="primary" fullWidth className="py-4" icon={ArrowRight}>
                  Checkout
                </Button>
              </Link>
            </div>
            
            <div className="flex items-center justify-center gap-2 py-2">
              <div className="w-1 h-1 rounded-full bg-brand-primary/30" />
              <p className="text-[8px] font-bold text-gray-400 uppercase tracking-widest">
                100% Secure Checkout Guaranteed
              </p>
              <div className="w-1 h-1 rounded-full bg-brand-primary/30" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
