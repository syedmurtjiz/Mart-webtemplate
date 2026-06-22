"use client";

import React, { useRef, useEffect } from "react";
import { categories } from "@/data/categories";
import { SectionHeader } from "../ui/SectionHeader";

export const CategoryFilter = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        // Jumped past the cloned set → jump back to real set silently
        el.scrollLeft = el.scrollLeft - half;
      } else if (el.scrollLeft <= 0) {
        // Swiped before start → jump to end of real set
        el.scrollLeft = half;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const categoryCard = (cat: (typeof categories)[0], key: string) => (
    <button
      key={key}
      className="group relative flex-none w-28 p-5 rounded-2xl border border-gray-100 bg-brand-bg hover:border-brand-primary/30 hover:bg-white hover:shadow-md transition-all duration-300"
    >
      <div className="flex justify-center mb-4 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
        <div className="text-3xl p-3 rounded-xl bg-white group-hover:bg-[#E8F5E9]/50 transition-colors duration-300 shadow-sm">
          {cat.icon}
        </div>
      </div>
      <div className="text-center">
        <div className="text-xs font-extrabold text-gray-900 tracking-wide mb-1">{cat.name}</div>
      </div>
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
    </button>
  );

  return (
    <section className="relative py-24 bg-[#E8F5E9] overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(46,125,50,0.02),transparent)] blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader 
          badge="Fresh Produce"
          title="Shop by"
          highlightedTitle="Category"
          description="Select a department to browse handpicked fresh farm produce and pantry items."
          align="center"
          className="mb-16"
        />

        {/* Mobile: infinite-loop horizontal scroll, scrollbar hidden */}
        <div
          ref={scrollRef}
          className="flex md:hidden gap-4 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden pb-1"
        >
          {/* Original set + clone for seamless looping */}
          {categories.map((cat) => categoryCard(cat, `a-${cat.id}`))}
          {categories.map((cat) => categoryCard(cat, `b-${cat.id}`))}
        </div>

        {/* md+ screens: original grid layout */}
        <div className="hidden md:grid md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((cat) => (
            <button 
              key={cat.id} 
              className="group relative p-8 rounded-2xl border border-gray-100 bg-brand-bg hover:border-brand-primary/30 hover:bg-white hover:shadow-md transition-all duration-300"
            >
              <div className="flex justify-center mb-6 transform group-hover:scale-105 group-hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl p-4 rounded-xl bg-white group-hover:bg-[#E8F5E9]/50 transition-colors duration-300 shadow-sm">
                  {cat.icon}
                </div>
              </div>
              <div className="text-center">
                <div className="text-sm font-extrabold text-gray-900 tracking-wide mb-1">{cat.name}</div>
                <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 leading-none">
                  {cat.productCount} Products
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-brand-primary rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
