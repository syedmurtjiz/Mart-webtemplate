"use client";

import React, { useEffect } from "react";
import { X, SlidersHorizontal } from "lucide-react";
import { ShopSidebar } from "./ShopSidebar";
import { categories as defaultCategories } from "@/data/categories";

interface MobileFilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  categories?: typeof defaultCategories;
  selectedCategory: string;
  selectedTags: string[];
  priceRange: [number, number];
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onTagToggle: (tag: string) => void;
  onPriceChange: (range: [number, number]) => void;
  onSearchChange: (query: string) => void;
}

export const MobileFilterDrawer = ({ 
  isOpen, 
  onClose,
  categories = defaultCategories,
  selectedCategory,
  selectedTags,
  priceRange,
  searchQuery,
  onCategoryChange,
  onTagToggle,
  onPriceChange,
  onSearchChange,
}: MobileFilterDrawerProps) => {
  // Prevent scrolling when drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Overlay */}
      <div 
        className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div 
        className={`fixed inset-y-0 left-0 w-[300px] bg-brand-bg z-[70] shadow-2xl transition-transform duration-300 ease-in-out transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } overflow-y-auto`}
      >
        <div className="sticky top-0 bg-white border-b border-gray-100 p-5 flex items-center justify-between z-10">
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-5 w-5 text-brand-primary" />
            <h2 className="text-lg font-black text-gray-900 italic uppercase tracking-tight">Filters</h2>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-gray-500" />
          </button>
        </div>

        <div className="p-5 pb-20">
          <ShopSidebar 
            categories={categories} 
            selectedCategory={selectedCategory}
            selectedTags={selectedTags}
            priceRange={priceRange}
            searchQuery={searchQuery}
            onCategoryChange={onCategoryChange}
            onTagToggle={onTagToggle}
            onPriceChange={onPriceChange}
            onSearchChange={onSearchChange}
          />
        </div>
      </div>
    </>
  );
};
