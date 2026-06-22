import React from "react";
import Link from "next/link";
import { Leaf, ArrowRight, Truck } from "lucide-react";
import { Button } from "../ui/Button";
import { Badge } from "../ui/Badge";
import { ImageWithFallback } from "../common/ImageWithFallback";

export const Hero = () => {
  return (
    <section className="relative bg-[#E8F5E9] overflow-hidden pt-10 pb-10 sm:pb-20 md:pt-16 md:pb-28">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[900px] h-[900px] bg-[radial-gradient(circle_at_70%_20%,rgba(46,125,50,0.07),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.018]" style={{ backgroundImage: "linear-gradient(rgba(46,125,50,0.3) 1px, transparent 1px), linear-gradient(to right, rgba(46,125,50,0.3) 1px, transparent 1px)", backgroundSize: "64px 64px" }} />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="space-y-8 z-10">
            <Badge variant="secondary" icon={Leaf}>
              100% Organic · Fresh Daily
            </Badge>
            
            <div className="space-y-6">
              <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                Freshness <span className="relative inline-block">
                  <span className="relative z-10 text-brand-primary">Delivered</span>
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path d="M2 6 C50 2, 150 2, 198 6" stroke="#FF8F00" strokeWidth="3" strokeLinecap="round"/>
                  </svg>
                </span> <br className="hidden sm:block" /> to Your Door
              </h1>

              {/* Mobile Image - Shown only between heading and paragraph on mobile */}
              <div className="lg:hidden relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 aspect-[4/3]">
                  <ImageWithFallback 
                    src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1080" 
                    alt="Fresh Organic Vegetables" 
                    fill
                    className="object-cover" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                </div>
                
                <div className="absolute -bottom-4 -left-2 bg-white rounded-xl shadow-lg border border-gray-100 p-3 flex items-center gap-3 min-w-[160px] z-20">
                  <div className="w-9 h-9 bg-[#E8F5E9] rounded-lg flex items-center justify-center shrink-0">
                    <Truck className="h-4 w-4 text-brand-primary" />
                  </div>
                  <div>
                    <p className="text-gray-900 font-extrabold text-xs leading-tight">Same-Day Express</p>
                    <p className="text-brand-primary text-[9px] font-semibold">Order before 2 PM</p>
                  </div>
                </div>
              </div>

              <p className="text-base md:text-lg text-gray-600 leading-relaxed max-w-lg font-medium">
                Premium organic fruits, vegetables, dairy, and pantry essentials sourced from local farms — handpicked for peak freshness and delivered same-day.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/shop">
                <Button size="lg" icon={ArrowRight} fullWidth>
                  Shop Fresh Now
                </Button>
              </Link>
              <Link href="/new-arrivals">
                <Button variant="outline" size="lg" fullWidth>
                  New Arrivals
                </Button>
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
              {[ 
                { value: "50k+", label: "Deliveries" }, 
                { value: "200+", label: "Local Farms" }, 
                { value: "4.9★", label: "Avg. Rating" } 
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl md:text-3xl font-extrabold text-gray-900 tabular-nums">{value}</div>
                  <div className="text-[10px] mt-0.5 text-gray-500 font-bold uppercase tracking-widest">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-10 hidden lg:block">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl shadow-gray-900/10 border border-gray-200 hover:scale-[1.01] transition-transform duration-700 aspect-[4/3] lg:aspect-[5/4]">
              <ImageWithFallback 
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1080" 
                alt="Fresh Organic Vegetables" 
                fill
                className="object-cover" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
            
            <div className="absolute -bottom-6 -left-5 bg-white rounded-2xl shadow-xl border border-gray-200 p-4 backdrop-blur-md flex items-center gap-3.5 min-w-[200px]">
              <div className="w-11 h-11 bg-[#E8F5E9] rounded-xl flex items-center justify-center shrink-0">
                <Truck className="h-5 w-5 text-brand-primary" />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mb-0.5">Delivery</p>
                <p className="text-gray-900 font-extrabold text-sm leading-tight">Same-Day Express</p>
                <p className="text-brand-primary text-[10px] font-semibold">Order before 2 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
