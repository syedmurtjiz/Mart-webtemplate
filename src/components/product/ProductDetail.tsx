"use client";

import React, { useState, useMemo } from "react";
import { Product } from "@/types";
import { useCartStore } from "@/store/useCartStore";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { Star, ShoppingCart, Heart, Minus, Plus, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { Button } from "../ui/Button";
import { useHasHydrated } from "@/hooks/useHasHydrated";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore(state => state.addItem);
  const toggleFavorite = useFavoritesStore(state => state.addItem);
  const removeFavorite = useFavoritesStore(state => state.removeItem);
  const favoriteItems = useFavoritesStore(state => state.items);
  const isFavorite = useMemo(
    () => favoriteItems.some(item => item.id === product.id),
    [favoriteItems, product.id]
  );
  const hasHydrated = useHasHydrated();
  const displayFavorite = hasHydrated && isFavorite;

  const handleAddToCart = () => {
    addItem(product, quantity);
  };

  const handleToggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      toggleFavorite(product);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Product Image */}
        <div className="bg-white rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl relative aspect-square">
          <ImageWithFallback
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
          />
          {product.badge && (
            <div className="absolute top-6 left-6 px-4 py-1.5 bg-brand-primary text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg">
              {product.badge}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? "fill-amber-400 text-amber-400" : "text-gray-200"}`}
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-gray-400">({product.reviews} Reviews)</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-gray-900 tracking-tighter italic uppercase leading-none">
              {product.name}
            </h1>
            <p className="text-sm font-bold text-brand-primary uppercase tracking-widest">
              {product.category} · {product.unit}
            </p>
          </div>

          <div className="flex items-baseline gap-4">
            <span className="text-4xl font-black text-gray-900 tracking-tighter italic">
              Rs {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-xl text-gray-400 line-through font-bold">
                Rs {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>

          <p className="text-gray-600 text-lg leading-relaxed font-medium">
            {product.description}
          </p>

          <div className="space-y-6 pt-6 border-t border-gray-100">
            <div className="flex items-center gap-6">
              <div className="flex items-center bg-brand-bg rounded-2xl border border-gray-100 p-2 shadow-inner">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-xl text-gray-900 hover:text-brand-primary hover:shadow-md transition-all border border-transparent hover:border-gray-200 active:scale-90"
                >
                  <Minus className="h-5 w-5" />
                </button>
                <span className="text-xl font-black text-gray-900 w-16 text-center tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-12 h-12 flex items-center justify-center bg-white rounded-xl text-gray-900 hover:text-brand-primary hover:shadow-md transition-all border border-transparent hover:border-gray-200 active:scale-90"
                >
                  <Plus className="h-5 w-5" />
                </button>
              </div>
              <button
                onClick={handleToggleFavorite}
                className={`p-4 rounded-2xl border transition-all ${
                  displayFavorite
                    ? "bg-red-50 border-red-100 text-red-500 shadow-lg shadow-red-500/10"
                    : "border-gray-100 text-gray-400 hover:text-red-500 hover:bg-red-50"
                }`}
              >
                <Heart className={`h-6 w-6 ${displayFavorite ? "fill-current" : ""}`} />
              </button>
            </div>

            <Button
              variant="primary"
              size="lg"
              fullWidth
              icon={ShoppingCart}
              onClick={handleAddToCart}
              className="py-6"
            >
              Add to Cart
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            {[
              { icon: Truck, text: "Free Delivery" },
              { icon: ShieldCheck, text: "Secure Payment" },
              { icon: RotateCcw, text: "Easy Returns" }
            ].map((item, i) => (
              <div key={i} className="flex flex-col items-center gap-2 p-4 bg-brand-bg rounded-2xl border border-gray-100 text-center">
                <item.icon className="h-5 w-5 text-brand-primary" />
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
