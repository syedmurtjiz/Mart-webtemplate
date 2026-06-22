"use client";

import React, { useMemo } from "react";
import { Heart, Lock } from "lucide-react";
import { PageHero } from "@/components/common/PageHero";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import Link from "next/link";
import { ProductCard } from "@/components/product/ProductCard";
import { useHasHydrated } from "@/hooks/useHasHydrated";

export default function FavoritesClient() {
  const favorites = useFavoritesStore(state => state.items);
  const hasHydrated = useHasHydrated();

  const totalValue = useMemo(() => {
    return favorites.reduce((sum, item) => sum + item.price, 0);
  }, [favorites]);

  if (!hasHydrated) {
    return (
      <main className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-400 font-bold uppercase tracking-widest animate-pulse">
          Loading Favorites...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <PageHero
        badge={{
          icon: Heart,
          text: "Wishlist"
        }}
        title={
          <>
            Your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-[#A5D6A7] ml-3">Favorites</span>
          </>
        }
        description={favorites.length === 0
          ? "Start building your collection of favorite items. Click the heart icon on any product to save it here."
          : `You have ${favorites.length} ${favorites.length === 1 ? 'item' : 'items'} saved in your favorites.`}
        stats={[
          {
            icon: Lock,
            label: "List Privacy",
            value: "Private"
          },
          {
            icon: Heart,
            label: "Saved Items",
            value: `${favorites.length} Products`
          }
        ]}
        backLink={{
          href: "/shop",
          text: "Continue Shopping"
        }}
      />

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="w-24 h-24 bg-black/5 rounded-full flex items-center justify-center mb-8">
              <Heart className="w-10 h-10 text-black/20" />
            </div>
            <h2 className="text-3xl font-black italic uppercase tracking-tight mb-4 text-black">
              No favorites yet
            </h2>
            <p className="text-gray-500 font-medium mb-10 leading-relaxed max-w-md">
              Discover our latest collections and save your favorite designs here for later.
            </p>
            <Link
              href="/shop"
              className="px-8 py-4 bg-brand-primary text-white font-black uppercase tracking-widest hover:bg-[#256428] transition-all duration-200 shadow-lg text-sm"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {favorites.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                />
              ))}
            </div>

            {/* Summary Section */}
            <div className="mt-14 bg-white p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <h3 className="text-xl font-extrabold text-gray-900 mb-1 tracking-tight">
                    {favorites.length} {favorites.length === 1 ? 'Item' : 'Items'} in Your Favorites
                  </h3>
                  <p className="text-gray-500 font-medium text-sm">
                    Total Value: Rs {totalValue.toLocaleString()}
                  </p>
                </div>
                <Link
                  href="/shop"
                  className="px-6 py-3 bg-brand-primary text-white font-bold uppercase tracking-wider text-xs hover:bg-[#256428] transition-all duration-200"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
