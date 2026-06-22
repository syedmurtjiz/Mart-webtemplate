import React from "react";
import { Minus, Plus, X } from "lucide-react";
import { ImageWithFallback } from "@/components/common/ImageWithFallback";
import { Product } from "@/types";

interface CartItem extends Product {
  quantity: number;
}

interface CartItemCardProps {
  item: CartItem;
  updateQuantity: (id: string, qty: number) => void;
  removeFromCart: (id: string) => void;
}

export const CartItemCard = ({ item, updateQuantity, removeFromCart }: CartItemCardProps) => {
  return (
    <div className="bg-white rounded-[2.5rem] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500 p-8 border border-gray-100 group relative">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="w-full md:w-44 h-44 bg-[#E8F5E9] rounded-[2rem] overflow-hidden flex-shrink-0 shadow-inner relative">
          <ImageWithFallback
            src={item.image}
            alt={item.name}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>

        {/* Product Details */}
        <div className="flex-1 min-w-0 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-1 bg-brand-primary/10 text-brand-primary text-[9px] font-black uppercase tracking-widest rounded-lg border border-brand-primary/20">
                    Quality Assured
                  </span>
                </div>
                <h3 className="text-2xl font-black text-gray-900 tracking-tighter italic uppercase mb-1 leading-none">
                  {item.name}
                </h3>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="w-10 h-10 flex items-center justify-center bg-brand-bg hover:bg-red-500 hover:text-white text-gray-500 rounded-full transition-all border border-gray-200 shadow-sm hover:shadow-red-500/20 hover:scale-110 active:scale-95"
                title="Remove item"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-gray-900 tracking-tighter italic">
                Rs {item.price.toLocaleString()}
              </span>
              <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">per unit</span>
            </div>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <div className="flex items-center bg-brand-bg rounded-2xl border border-gray-100 p-1.5 shadow-inner">
              <button
                onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                className="w-11 h-11 flex items-center justify-center bg-white rounded-xl text-gray-900 hover:text-brand-primary hover:shadow-md transition-all border border-transparent hover:border-gray-200 active:scale-90"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="text-lg font-black text-gray-900 w-14 text-center tabular-nums">
                {item.quantity}
              </span>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                className="w-11 h-11 flex items-center justify-center bg-white rounded-xl text-gray-900 hover:text-brand-primary hover:shadow-md transition-all border border-transparent hover:border-gray-200 active:scale-90"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <div className="text-right">
              <p className="text-[9px] font-black text-gray-500 uppercase tracking-[0.2em] mb-1">Subtotal</p>
              <p className="text-2xl font-black text-brand-primary tracking-tighter italic">
                Rs {(item.price * item.quantity).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
