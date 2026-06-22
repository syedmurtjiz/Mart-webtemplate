"use client";

import React, { useState, useMemo } from "react";
import { Heart, ShoppingCart, Star, Flame, Loader2 } from "lucide-react";
import { Product } from "@/types";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useCartStore } from "@/store/useCartStore";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { useHasHydrated } from "@/hooks/useHasHydrated";

interface ProductCardListProps {
  product: Product;
  isFlashSale?: boolean;
}

export const ProductCardList = ({ product, isFlashSale = false }: ProductCardListProps) => {
  const toggleFavorite = useFavoritesStore(state => state.addItem);
  const removeFavorite = useFavoritesStore(state => state.removeItem);
  const favoriteItems = useFavoritesStore(state => state.items);
  const isFavorite = useMemo(
    () => favoriteItems.some(item => item.id === product.id),
    [favoriteItems, product.id]
  );
  const addItem = useCartStore(state => state.addItem);
  const [isAdding, setIsAdding] = useState(false);
  const hasHydrated = useHasHydrated();
  const displayFavorite = hasHydrated && isFavorite;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsAdding(true);
    addItem(product);
    setTimeout(() => setIsAdding(false), 500);
  };

  const handleToggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (isFavorite) {
      removeFavorite(product.id);
    } else {
      toggleFavorite(product);
    }
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500 cursor-pointer flex flex-col md:flex-row h-full">
      <div className="relative w-full md:w-64 aspect-[4/3] md:aspect-square overflow-hidden bg-[#F8F9FA] flex-shrink-0">
        <ImageWithFallback 
          src={product.image} 
          alt={product.name} 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-3 left-3 z-10">
          {isFlashSale && product.discount && (
            <div className="px-2.5 py-1 bg-[#FF8F00] text-white text-[10px] font-black flex items-center gap-1 rounded-full shadow-lg shadow-[#FF8F00]/20 uppercase tracking-wider">
              <Flame className="h-3 w-3" /> 
              <span>-{product.discount}%</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow justify-between">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="px-2.5 py-1 bg-brand-primary/5 text-brand-primary text-[10px] font-bold border border-brand-primary/10 rounded-full uppercase tracking-wider">
              {product.category}
            </div>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-3 w-3 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} 
                />
              ))}
            </div>
          </div>
          
          <h3 className="text-gray-900 text-xl font-bold group-hover:text-brand-primary transition-colors">
            {product.name}
          </h3>
          
          <p className="text-sm text-gray-500 font-medium leading-relaxed line-clamp-2">
            {product.description || "Fresh and high-quality product sourced directly from our trusted farm partners. Guaranteed freshness and taste for your family."}
          </p>

          <div className="flex items-center gap-6 pt-2">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-brand-primary tracking-tight">
                Rs {product.price.toLocaleString()}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-gray-400 line-through font-medium">
                  Rs {product.originalPrice.toLocaleString()}
                </span>
              )}
            </div>
            
            <div className="flex items-center gap-2">
              <button 
                onClick={handleAddToCart}
                disabled={isAdding}
                className="px-6 py-3 bg-brand-primary hover:bg-[#1B5E20] text-white text-xs font-black uppercase tracking-widest rounded-xl transition-all shadow-md shadow-brand-primary/20 flex items-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isAdding ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <ShoppingCart className="h-4 w-4" />
                )}
                Add to Cart
              </button>
              <button 
                onClick={handleToggleFavorite}
                className={`p-3 rounded-xl border transition-all ${
                  displayFavorite 
                    ? "bg-red-50 border-red-100 text-red-500" 
                    : "border-gray-100 text-gray-400 hover:text-red-500 hover:border-red-100"
                }`}
              >
                <Heart className={`h-4 w-4 ${displayFavorite ? "fill-current" : ""}`} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
