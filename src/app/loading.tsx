import React from "react";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero Skeleton */}
      <div className="h-[500px] w-full bg-gray-100 rounded-[3rem] animate-pulse" />
      
      {/* Section Header Skeleton */}
      <div className="space-y-4">
        <div className="h-4 w-32 bg-gray-100 rounded-full animate-pulse" />
        <div className="h-10 w-64 bg-gray-100 rounded-xl animate-pulse" />
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="space-y-4">
            <div className="aspect-[4/3] bg-gray-100 rounded-2xl animate-pulse" />
            <div className="h-4 w-3/4 bg-gray-100 rounded-full animate-pulse" />
            <div className="h-4 w-1/2 bg-gray-100 rounded-full animate-pulse" />
          </div>
        ))}
      </div>
    </div>
  );
}
