"use client";

import React, { useRef, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { COLLECTIONS } from "@/data/static";
import { SectionHeader } from "../ui/SectionHeader";
import { ImageWithFallback } from "../common/ImageWithFallback";

export const CollectionList = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        // Reached the cloned set → jump back to real set silently
        el.scrollLeft = el.scrollLeft - half;
      } else if (el.scrollLeft <= 0) {
        // Swiped before start → jump to end of real set
        el.scrollLeft = half;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const collectionCard = (item: (typeof COLLECTIONS)[0], key: string) => (
    <button
      key={key}
      className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-400 bg-[#E8F5E9] text-left flex-none w-40"
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <ImageWithFallback
          src={item.image}
          alt={item.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-all duration-300" />
      <div className="absolute bottom-0 left-0 right-0 p-3">
        <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest mb-1">{item.subtitle}</p>
        <h3 className="text-white text-sm font-extrabold leading-snug mb-1">{item.name}</h3>
        <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
          <span className="text-[#A5D6A7] text-xs font-semibold">{item.count}</span>
          <ArrowRight className="h-3 w-3 text-[#A5D6A7]" />
        </div>
      </div>
    </button>
  );

  return (
    <section className="py-24 bg-white border-b border-gray-200 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <SectionHeader 
            badge="Curated For You"
            title="Shop by"
            highlightedTitle="Collection"
          />
          <p className="text-gray-500 font-medium text-base max-w-sm sm:text-right leading-relaxed">
            Curated lifestyle collections to fill your kitchen with healthy, fresh ingredients.
          </p>
        </div>

        {/* Mobile: infinite-loop horizontal scroll, scrollbar hidden */}
        <div
          ref={scrollRef}
          className="flex sm:hidden gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1"
        >
          {/* Original set + clone for seamless looping */}
          {COLLECTIONS.map((item, i) => collectionCard(item, `a-${i}`))}
          {COLLECTIONS.map((item, i) => collectionCard(item, `b-${i}`))}
        </div>

        {/* sm+ screens: original grid layout */}
        <div className="hidden sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {COLLECTIONS.map((item, index) => (
            <button 
              key={index} 
              className="group relative overflow-hidden rounded-2xl border border-gray-200 hover:border-transparent hover:shadow-2xl transition-all duration-400 bg-[#E8F5E9] text-left"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <ImageWithFallback 
                  src={item.image} 
                  alt={item.name} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent group-hover:from-black/85 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white/60 text-[10px] font-bold uppercase tracking-widest mb-1">{item.subtitle}</p>
                <h3 className="text-white text-base font-extrabold leading-snug mb-2">{item.name}</h3>
                <div className="flex items-center gap-1 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <span className="text-[#A5D6A7] text-xs font-semibold">{item.count}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-[#A5D6A7]" />
                </div>
              </div>
              <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-900 text-[9px] font-bold uppercase tracking-wider px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {item.count}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
