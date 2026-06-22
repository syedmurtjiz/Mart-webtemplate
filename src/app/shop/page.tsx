import React from "react";
import { PageHero } from "@/components/common/PageHero";
import { ShopClient } from "@/components/shop/ShopClient";
import { products } from "@/data/products";
import { ShoppingBag, Sparkles, Package, Filter } from "lucide-react";

export const metadata = {
  title: "Shop Groceries | MartFresh",
  description: "Browse our complete collection of fresh organic produce, quality groceries, and pantry essentials sourced directly from local farms.",
};

export default function ShopPage() {
  const filteredProducts = products;

  return (
    <main className="min-h-screen bg-brand-bg">
      <PageHero
        badge={{
          icon: ShoppingBag,
          text: "Explore Our Shop",
          endIcon: Sparkles
        }}
        title={
          <>
            Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-light to-[#A5D6A7] ml-3">Collection</span>
          </>
        }
        description="Browse our wide selection of fresh organic produce, quality groceries, and pantry essentials sourced directly from local farms."
        stats={[
          {
            icon: Package,
            label: "Total Items",
            value: `${filteredProducts.length}+ Products`
          },
          {
            icon: Filter,
            label: "Categories",
            value: "12+ Sections"
          }
        ]}
      />
      
      <div className="container mx-auto px-4 pb-20 pt-12">
        <ShopClient products={filteredProducts} />
      </div>
    </main>
  );
}
