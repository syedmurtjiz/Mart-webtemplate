"use client";

import React from "react";
import { FilterSection } from "./FilterSection";
import { categories as defaultCategories } from "@/data/categories";

export const DEFAULT_TAGS = [
  "Fresh",
  "Organic",
  "Grocery",
  "Dairy",
  "Snacks",
  "Beverages",
  "Household",
  "Baby Care",
  "Kitchen"
];

interface ShopSidebarProps {
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

export const ShopSidebar = ({ 
  categories = defaultCategories, 
  selectedCategory,
  selectedTags,
  priceRange,
  searchQuery,
  onCategoryChange,
  onTagToggle,
  onPriceChange,
  onSearchChange,
}: ShopSidebarProps) => {
  return (
    <aside className="space-y-8">
      {/* Search Filter */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <h3 className="text-[18px] font-bold text-gray-900 mb-5">Search</h3>
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-4 pr-10 py-3 bg-gray-50 border border-transparent rounded-2xl text-sm focus:bg-white focus:border-brand-primary/30 focus:ring-0 transition-all"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-primary">
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Categories Filter */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <FilterSection title="Categories">
          <div className="space-y-2">
            {categories.map((category) => {
              const isChecked = selectedCategory === category.name;
              return (
                <label key={category.id} className="flex items-center group cursor-pointer">
                  <div className="relative flex items-center">
                    <input 
                      type="checkbox" 
                      checked={isChecked}
                      onChange={() => onCategoryChange(isChecked ? "" : category.name)}
                      className="peer hidden"
                    />
                    <div className="w-5 h-5 border-2 border-gray-200 rounded-md peer-checked:bg-brand-primary peer-checked:border-brand-primary transition-all group-hover:border-brand-primary/30"></div>
                    <svg className="absolute left-1 w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="ml-3 text-sm font-medium text-gray-600 group-hover:text-brand-primary transition-colors">
                    {category.name}
                  </span>
                </label>
              );
            })}
          </div>
        </FilterSection>
      </div>

      {/* Price Filter */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <FilterSection title="Price Range">
          <div className="px-2 pt-2">
            <div className="mb-4">
              <input 
                type="range"
                min="0"
                max="5000"
                value={priceRange[1]}
                onChange={(e) => onPriceChange([priceRange[0], Number(e.target.value)])}
                className="w-full accent-brand-primary h-1.5 bg-gray-100 rounded-full appearance-none cursor-pointer"
              />
            </div>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400">Rs</span>
                <input 
                  type="number"
                  min="0"
                  max="5000"
                  value={priceRange[0]}
                  onChange={(e) => onPriceChange([Math.max(0, Number(e.target.value)), priceRange[1]])}
                  className="w-full pl-7 pr-2 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-black focus:outline-none focus:border-brand-primary"
                />
              </div>
              <span className="text-gray-400 text-xs font-bold">-</span>
              <div className="relative flex-1">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-gray-400">Rs</span>
                <input 
                  type="number"
                  min="0"
                  max="5000"
                  value={priceRange[1]}
                  onChange={(e) => onPriceChange([priceRange[0], Math.max(0, Number(e.target.value))])}
                  className="w-full pl-7 pr-2 py-2 bg-gray-50 border border-gray-100 rounded-xl text-xs font-black focus:outline-none focus:border-brand-primary"
                />
              </div>
            </div>
          </div>
        </FilterSection>
      </div>

      {/* Tags Filter */}
      <div className="bg-white p-6 rounded-3xl border border-gray-100 shadow-sm">
        <FilterSection title="Popular Tags">
          <div className="flex flex-wrap gap-2">
            {DEFAULT_TAGS.map((tag) => {
              const isSelected = selectedTags.includes(tag);
              return (
                <button 
                  key={tag}
                  onClick={() => onTagToggle(tag)}
                  className={`px-4 py-2 text-[11px] font-bold uppercase tracking-wider rounded-xl border transition-all ${
                    isSelected 
                      ? "bg-brand-primary text-white border-brand-primary hover:bg-[#256428]" 
                      : "bg-gray-50 text-gray-600 border-transparent hover:border-brand-primary/30 hover:bg-white hover:text-brand-primary"
                  }`}
                >
                  {tag}
                </button>
              );
            })}
          </div>
        </FilterSection>
      </div>

    </aside>
  );
};
