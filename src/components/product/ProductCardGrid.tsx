"use client";

import React, { useState, useMemo } from "react";
import { Heart, ShoppingCart, Star, Flame, Package, Loader2 } from "lucide-react";
import { Product } from "@/types";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useCartStore } from "@/store/useCartStore";
import { ImageWithFallback } from "../common/ImageWithFallback";
import { useHasHydrated } from "@/hooks/useHasHydrated";

interface ProductCardGridProps {
  product: Product;
  isFlashSale?: boolean;
}

export const ProductCardGrid = ({ product, isFlashSale = false }: ProductCardGridProps) => {
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
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/5 hover:-translate-y-1.5 transition-all duration-500 cursor-pointer relative h-auto sm:h-full flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F9FA] flex-shrink-0">
        <ImageWithFallback 
          src={product.image} 
          alt={product.name} 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out" 
        />
        <div className="absolute top-3 inset-x-3 z-10 flex items-start justify-between">
          <div className="flex flex-col gap-1.5">
            {isFlashSale && product.discount && (
              <div className="px-2.5 py-1 bg-[#FF8F00] text-white text-[10px] font-black flex items-center gap-1 rounded-full shadow-lg shadow-[#FF8F00]/20 uppercase tracking-wider">
                <Flame className="h-3 w-3" /> 
                <span>-{product.discount}%</span>
              </div>
            )}
            <div className="px-2.5 py-1 bg-white/90 backdrop-blur-md text-gray-800 text-[10px] font-bold border border-white/20 rounded-full shadow-sm uppercase tracking-wider">
              {product.category}
            </div>
          </div>
          <button 
            onClick={handleToggleFavorite}
            className={`p-2 rounded-full border transition-all duration-300 hover:scale-110 shadow-sm ${
              displayFavorite 
                ? "bg-red-500 text-white border-red-500 shadow-red-500/20" 
                : "bg-white/90 backdrop-blur-md text-gray-400 hover:text-red-500 border-white/20"
            }`}
          >
            <Heart className={`h-4 w-4 ${displayFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
        <button className="absolute bottom-0 inset-x-0 z-10 h-10 flex items-center justify-center bg-white/70 opacity-0 group-hover:opacity-100 translate-y-full group-hover:translate-y-0 transition-all duration-300 backdrop-blur-sm">
          <span className="text-[10px] font-semibold tracking-[0.35em] text-brand-primary uppercase">Quick View</span>
        </button>
      </div>

      <div className="p-3 sm:p-4 space-y-2 sm:space-y-3 flex flex-col flex-grow">
        <div className="flex-grow space-y-1 sm:space-y-1.5">
          <div className="flex items-center gap-1 sm:gap-2 mb-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  className={`h-2 w-2 sm:h-2.5 sm:w-2.5 ${i < 4 ? "fill-amber-400 text-amber-400" : "text-gray-200"}`} 
                />
              ))}
            </div>
            <span className="text-[8px] sm:text-[10px] text-gray-400 font-bold uppercase tracking-wider">{product.badge ?? 'Fresh Pick'}</span>
          </div>
          <h3 className="text-gray-900 text-[13px] sm:text-[15px] font-bold line-clamp-1 group-hover:text-brand-primary transition-colors leading-tight">
            {product.name}
          </h3>
          {product.description && (
            <p className="text-[10px] sm:text-[12px] text-gray-500 line-clamp-2 font-medium leading-relaxed">
              {product.description}
            </p>
          )}
        </div>

        {isFlashSale && (
          <div className="space-y-1 sm:space-y-1.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 sm:gap-1.5">
                <Package className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-red-500" />
                <span className="text-[8px] sm:text-[10px] text-gray-600 font-bold">Stock</span>
              </div>
              <span className="text-[8px] sm:text-[10px] text-red-600 font-bold">{(product.stock ?? 0)} left</span>
            </div>
            <div className="h-1 bg-gray-100 rounded-full overflow-hidden">
              <div 
                className="h-full bg-red-500 transition-all duration-1000 ease-out rounded-full" 
                style={{ width: `${((product.stock ?? 0) / (product.maxStock ?? 100)) * 100}%` }}
              ></div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between pt-2 sm:pt-3 border-t border-gray-100 mt-auto">
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-bold text-brand-primary tracking-tight whitespace-nowrap">
              Rs {product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-[8px] sm:text-[10px] text-gray-400 line-through font-medium">
                Rs {product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
          <button 
            onClick={handleAddToCart}
            disabled={isAdding}
            className="p-1.5 sm:p-2.5 bg-brand-primary hover:bg-[#1B5E20] text-white rounded-lg sm:rounded-xl transition-all shadow-sm flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed ml-1"
          >
            {isAdding ? (
              <Loader2 className="h-3 w-3 sm:h-4 sm:w-4 animate-spin" />
            ) : (
              <ShoppingCart className="h-3 w-3 sm:h-4 sm:w-4" />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
