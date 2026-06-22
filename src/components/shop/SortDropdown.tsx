"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface SortOption {
  label: string;
  value: string;
}

const sortOptions: SortOption[] = [
  { label: "Default Sorting", value: "default" },
  { label: "Price: Low to High", value: "price-low" },
  { label: "Price: High to Low", value: "price-high" },
  { label: "Rating", value: "rating" },
  { label: "Newest First", value: "newest" },
];

interface SortDropdownProps {
  selectedSort: string;
  onSortChange: (value: string) => void;
}

export const SortDropdown = ({ selectedSort, onSortChange }: SortDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const selected = sortOptions.find(o => o.value === selectedSort) || sortOptions[0];

  return (
    <div className="relative">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:border-brand-primary/30 transition-all"
      >
        <span>{selected.label}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-xl z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {sortOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => {
                onSortChange(option.value);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm transition-colors ${
                selected.value === option.value 
                  ? "bg-brand-primary/5 text-brand-primary font-bold" 
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
