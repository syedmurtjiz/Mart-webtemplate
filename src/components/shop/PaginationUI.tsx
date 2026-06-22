"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const PaginationUI = ({ currentPage, totalPages, onPageChange }: PaginationProps) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 rounded-xl border border-gray-200 text-gray-400 hover:text-brand-primary hover:border-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      {[...Array(totalPages)].map((_, i) => {
        const page = i + 1;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`w-10 h-10 rounded-xl border text-sm font-bold transition-all ${
              currentPage === page
                ? "bg-brand-primary border-brand-primary text-white shadow-lg shadow-brand-primary/20"
                : "border-gray-200 text-gray-600 hover:border-brand-primary/30 hover:text-brand-primary"
            }`}
          >
            {page}
          </button>
        );
      })}

      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 rounded-xl border border-gray-200 text-gray-400 hover:text-brand-primary hover:border-brand-primary/30 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};
