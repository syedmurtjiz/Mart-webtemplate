import React from "react";
import { PageHero } from "@/components/common/PageHero";
import { ShopClient } from "@/components/shop/ShopClient";
import { Sparkles, Zap, Clock, TrendingUp } from "lucide-react";
import { products } from "@/data/products";

export const metadata = {
  title: "New Arrivals | MartFresh",
  description: "Explore the latest organic farm produce, fresh dairy, healthy snacks, and new items added to our catalog at MartFresh.",
};

export default function NewArrivalsPage() {
  const filteredProducts = products.filter(p => p.isNew);

  return (
    <main className="min-h-screen bg-white">
      
      <PageHero
        badge={{
          icon: Sparkles,
          text: "Fresh Selection",
          endIcon: Zap
        }}
        title={
          <>
            New
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-light ml-3">Arrivals</span>
          </>
        }
        description="Discover our latest additions to the store. We constantly update our collection with the freshest produce and trendiest lifestyle products."
        stats={[
          {
            icon: Clock,
            label: "Updated",
            value: "Just Now"
          },
          {
            icon: TrendingUp,
            label: "Trending",
            value: `${filteredProducts.length} Items`
          }
        ]}
      />
      
      <div className="container mx-auto px-4 pb-20 pt-12">
        <ShopClient products={filteredProducts} />
      </div>
    </main>
  );
}
