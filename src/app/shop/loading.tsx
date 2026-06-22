import React from "react";

export default function ShopLoading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* PageHero Skeleton */}
      <div className="h-64 w-full bg-gray-100 rounded-[3rem] animate-pulse mb-12" />
      
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Skeleton */}
        <div className="hidden lg:block w-1/4 space-y-8">
          {[...Array(3)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 w-3/4 bg-gray-100 rounded-lg animate-pulse" />
              <div className="space-y-2">
                {[...Array(5)].map((_, j) => (
                  <div key={j} className="h-4 w-full bg-gray-100 rounded-md animate-pulse" />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Products Grid Skeleton */}
        <div className="flex-1 space-y-8">
          <div className="h-16 w-full bg-gray-100 rounded-2xl animate-pulse" />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="space-y-4">
                <div className="aspect-[4/3] bg-gray-100 rounded-2xl animate-pulse" />
                <div className="h-4 w-3/4 bg-gray-100 rounded-full animate-pulse" />
                <div className="h-4 w-1/2 bg-gray-100 rounded-full animate-pulse" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
