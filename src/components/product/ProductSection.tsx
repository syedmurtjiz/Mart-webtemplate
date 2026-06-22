"use client";

import React, { useRef, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { SectionHeader } from "../ui/SectionHeader";
import { Button } from "../ui/Button";

interface ProductSectionProps {
  badge?: string;
  title: string;
  highlightedTitle: string;
  description?: string;
  products: Product[];
  viewAllLink?: string;
  bgColor?: string;
}

export const ProductSection = ({
  badge,
  title,
  highlightedTitle,
  description,
  products,
  viewAllLink = "#",
  bgColor = "bg-white",
}: ProductSectionProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft = el.scrollLeft - half;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft = half;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`py-24 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <SectionHeader 
            badge={badge}
            title={title}
            highlightedTitle={highlightedTitle}
            description={description}
          />
          <Link href={viewAllLink}>
            <Button variant="ghost" className="border-b-2 border-brand-primary/10 pb-1 rounded-none px-0" icon={ArrowRight}>
              View All
            </Button>
          </Link>
        </div>
        
        {/* Desktop grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Mobile: infinite-loop horizontal scroll, scrollbar hidden — same as CollectionList */}
        <div
          ref={scrollRef}
          className="flex md:hidden gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1"
        >
          {/* Original set + clone for seamless looping */}
          {products.map((product) => (
            <div key={`a-${product.id}`} className="flex-none w-48">
              <ProductCard product={product} />
            </div>
          ))}
          {products.map((product) => (
            <div key={`b-${product.id}`} className="flex-none w-48">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
