import React from "react";
import { Instagram, ExternalLink } from "lucide-react";
import { INSTAGRAM_IMAGES } from "@/data/static";
import { ImageWithFallback } from "../common/ImageWithFallback";

export const InstagramFeed = () => {
  return (
    <section className="relative py-24 bg-brand-bg overflow-hidden border-t border-gray-200">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#E8F5E9] rounded-full text-[11px] font-bold tracking-widest text-brand-primary uppercase mb-5">
              <Instagram className="h-3.5 w-3.5" />
              Follow Us
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 leading-tight">
              Fresh on <span className="text-brand-primary">Instagram</span>
            </h2>
            <p className="text-gray-500 font-medium text-base max-w-lg">
              Follow <a href="#" className="text-brand-primary font-bold hover:underline">@martfresh</a> for daily farm updates and exclusive offers.
            </p>
          </div>
          <a 
            href="#" 
            className="shrink-0 inline-flex items-center gap-2.5 bg-brand-primary text-white px-6 py-3 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 font-bold text-xs uppercase tracking-wider"
          >
            <Instagram className="h-4 w-4" />
            Follow @martfresh 
            <ExternalLink className="h-3 w-3 opacity-70" />
          </a>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {INSTAGRAM_IMAGES.map((img, i) => (
            <a 
              key={i} 
              href="#" 
              className="group relative aspect-square overflow-hidden rounded-2xl bg-[#E8F5E9] border border-gray-200 hover:border-brand-primary/30 transition-all duration-300 hover:scale-[1.04]"
            >
              <ImageWithFallback 
                src={img.url} 
                alt={img.caption} 
                fill
                className="object-cover transition-all duration-500 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1B5E20]/80 via-brand-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-end pb-4 px-2">
                <Instagram className="h-6 w-6 text-white mb-1.5 drop-shadow" />
                <p className="text-white text-[10px] font-semibold text-center leading-tight drop-shadow">
                  {img.caption}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
