"use client";

import React, { useState } from "react";
import { ShopSidebar } from "./ShopSidebar";
import { MobileFilterDrawer } from "./MobileFilterDrawer";
import { SortDropdown } from "./SortDropdown";
import { PaginationUI } from "./PaginationUI";
import { ProductCard } from "../product/ProductCard";
import { Product } from "@/types";
import { Grid, List, AlertCircle, SlidersHorizontal } from "lucide-react";

interface ShopClientProps {
  products: Product[];
}

export const ShopClient = ({ products }: ShopClientProps) => {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterDrawerOpen, setIsFilterDrawerOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Filter States
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 5000]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [sortOption, setSortOption] = useState<string>("default");

  const itemsPerPage = 9;

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handleTagToggle = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
    );
    setCurrentPage(1);
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };
  
  const filteredProducts = products
    .filter(p => !selectedCategory || p.category.toLowerCase() === selectedCategory.toLowerCase())
    .filter(p => selectedTags.length === 0 || 
      selectedTags.some(t => p.tags?.includes(t)))
    .filter(p => p.price >= priceRange[0] && p.price <= priceRange[1])
    .filter(p => p.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'price-low') return a.price - b.price;
      if (sortOption === 'price-high') return b.price - a.price;
      if (sortOption === 'rating') return b.rating - a.rating;
      if (sortOption === 'newest') return a.isNew ? -1 : 1;
      return 0; // default
    });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <button 
          onClick={() => setIsFilterDrawerOpen(true)}
          className="w-full py-4 px-6 bg-white border border-brand-primary/30 rounded-2xl shadow-sm flex items-center justify-center gap-3 text-brand-primary font-bold hover:bg-brand-primary/5 transition-all active:scale-[0.98]"
        >
          <SlidersHorizontal className="h-5 w-5" />
          <span className="text-[15px] tracking-tight">Show Filters</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar - Hidden on mobile, shown on lg screens */}
        <div className="hidden lg:block lg:w-1/4">
          <ShopSidebar 
            selectedCategory={selectedCategory}
            selectedTags={selectedTags}
            priceRange={priceRange}
            searchQuery={searchQuery}
            onCategoryChange={handleCategoryChange}
            onTagToggle={handleTagToggle}
            onPriceChange={handlePriceChange}
            onSearchChange={handleSearchChange}
          />
        </div>
        
        {/* Mobile Filter Drawer */}
        <MobileFilterDrawer 
          isOpen={isFilterDrawerOpen} 
          onClose={() => setIsFilterDrawerOpen(false)} 
          selectedCategory={selectedCategory}
          selectedTags={selectedTags}
          priceRange={priceRange}
          searchQuery={searchQuery}
          onCategoryChange={handleCategoryChange}
          onTagToggle={handleTagToggle}
          onPriceChange={handlePriceChange}
          onSearchChange={handleSearchChange}
        />
        
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 bg-white p-4 rounded-2xl border border-gray-100 shadow-sm">
            <p className="text-sm font-bold text-gray-500">
              {filteredProducts.length > 0 ? (
                <>
                  Showing <span className="text-brand-primary">{startIndex + 1}-{Math.min(startIndex + itemsPerPage, filteredProducts.length)}</span> of <span className="text-brand-primary">{filteredProducts.length}</span> results
                </>
              ) : (
                "No products found"
              )}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2 border-r border-gray-100 pr-4 mr-2">
                <button 
                  onClick={() => setViewMode("grid")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "grid" ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20" : "text-gray-400 hover:text-brand-primary hover:bg-gray-50"}`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button 
                  onClick={() => setViewMode("list")}
                  className={`p-2 rounded-lg transition-all ${viewMode === "list" ? "bg-brand-primary text-white shadow-md shadow-brand-primary/20" : "text-gray-400 hover:text-brand-primary hover:bg-gray-50"}`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
              
              <SortDropdown 
                selectedSort={sortOption}
                onSortChange={(val) => {
                  setSortOption(val);
                  setCurrentPage(1);
                }}
              />
            </div>
          </div>
          
          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6" 
              : "flex flex-col gap-6"
            }>
              {currentProducts.map((product) => (
                <div key={product.id} className={viewMode === "list" ? "h-auto" : ""}>
                  <ProductCard product={product} viewMode={viewMode} />
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-dashed border-gray-200">
              <div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
                <AlertCircle className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No Products Available</h3>
              <p className="text-gray-500 text-center max-w-md px-6">
                We couldn&apos;t find any products matching your criteria.
              </p>
            </div>
          )}
          
          {/* Pagination */}
          {totalPages > 1 && (
            <PaginationUI 
              currentPage={currentPage} 
              totalPages={totalPages} 
              onPageChange={setCurrentPage} 
            />
          )}
        </div>
      </div>
    </>
  );
};
