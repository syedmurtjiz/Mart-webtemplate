"use client";

import { useState, useEffect, useRef } from "react";
import { Flame, Sparkles, Clock, ChevronLeft, ChevronRight, AlertCircle } from "lucide-react";
import Slider from "react-slick";
import { ProductCard } from "../product/ProductCard";

import { Product } from "@/types";

interface ArrowProps {
  onClick?: () => void;
  disabled?: boolean;
}

interface FlashSaleProps {
  products: Product[];
}

const NextArrow = (props: ArrowProps) => {
  const { onClick, disabled } = props;
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className="absolute -right-2 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-900 border border-gray-200 w-9 h-9 lg:w-10 lg:h-10 shadow-md hover:shadow-lg transition-all duration-200 hover:border-brand-primary hover:text-brand-primary disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center rounded-full"
    >
      <ChevronRight className="h-4 w-4 lg:h-5 lg:w-5" />
    </button>
  );
};

const PrevArrow = (props: ArrowProps) => {
  const { onClick, disabled } = props;
  return (
    <button 
      onClick={onClick} 
      disabled={disabled} 
      className="absolute -left-2 top-1/2 -translate-y-1/2 z-10 bg-white text-gray-900 border border-gray-200 w-9 h-9 lg:w-10 lg:h-10 shadow-md hover:shadow-lg transition-all duration-200 hover:border-brand-primary hover:text-brand-primary disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center rounded-full"
    >
      <ChevronLeft className="h-4 w-4 lg:h-5 lg:w-5" />
    </button>
  );
};

export const FlashSale = ({ products: filteredProducts }: FlashSaleProps) => {
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 45 });
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleScroll = () => {
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        el.scrollLeft = el.scrollLeft - half;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft = half;
      }
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const sliderSettings = {
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1.2, arrows: false, dots: true } }
    ]
  };

  return (
    <section id="flash-sale" className="relative py-8 sm:py-14 bg-brand-bg border-b border-gray-200 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-gray-200 shadow-sm p-4 sm:p-5 mb-6 sm:mb-8 flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-5">
          <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full md:w-auto">
            <div className="flex items-center gap-2 px-4 py-2 bg-[#FF8F00] text-white h-[40px] sm:h-[44px] w-full sm:w-auto justify-center sm:justify-start">
              <Flame className="h-4 w-4 animate-pulse" />
              <span className="font-extrabold text-xs tracking-wider uppercase whitespace-nowrap">
                Fresh Offers
              </span>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-gray-900">
              <Sparkles className="h-3.5 w-3.5 text-brand-primary" />
              <span className="font-bold text-sm whitespace-nowrap">Up to 50% OFF</span>
              <span className="text-gray-300">|</span>
              <span className="text-xs text-gray-500 font-medium whitespace-nowrap">Limited Farm Stock</span>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-2.5">
            <div className="flex items-center gap-1 sm:gap-1.5 text-gray-500">
              <Clock className="h-3.5 w-3.5 text-brand-primary" />
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider">Ends in:</span>
            </div>
            <div className="flex items-center gap-1 sm:gap-1.5">
              {[ 
                { val: timeLeft.hours, label: "HRS" }, 
                { val: timeLeft.minutes, label: "MIN" }, 
                { val: timeLeft.seconds, label: "SEC" } 
              ].map((unit, i) => (
                <div key={i} className="flex items-center gap-1 sm:gap-1.5">
                  {i > 0 && <span className="text-gray-400 font-extrabold text-sm">:</span>}
                  <div className="bg-brand-bg text-gray-900 px-2 sm:px-3 py-1 sm:py-1.5 min-w-[40px] sm:min-w-[48px] text-center h-[40px] sm:h-[46px] flex flex-col justify-center border border-gray-200">
                    <div className="text-base sm:text-lg font-extrabold text-brand-primary leading-none">
                      {String(unit.val).padStart(2, "0")}
                    </div>
                    <div className="text-[7px] sm:text-[8px] font-bold text-gray-500 leading-none mt-1 uppercase tracking-wider">
                      {unit.label}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <>
            {/* Mobile: infinite-loop horizontal scroll, scrollbar hidden */}
            <div
              ref={scrollRef}
              className="flex md:hidden overflow-x-auto gap-4 no-scrollbar pb-6 scroll-smooth"
            >
              {filteredProducts.map(product => (
                <div key={`a-${product.id}`} className="flex-none w-64">
                  <ProductCard product={product} isFlashSale />
                </div>
              ))}
              {filteredProducts.map(product => (
                <div key={`b-${product.id}`} className="flex-none w-64">
                  <ProductCard product={product} isFlashSale />
                </div>
              ))}
            </div>

            {/* md+ screens: original slick slider */}
            <div className="hidden md:block relative flash-sale-slider">
              <Slider {...sliderSettings}>
                {filteredProducts.map(product => (
                  <div key={product.id} className="px-3 pb-8 h-full">
                    <ProductCard product={product} isFlashSale />
                  </div>
                ))}
              </Slider>
            </div>
          </>
        ) : (
          <div className="py-20 bg-white border border-gray-100 rounded-3xl flex flex-col items-center">
            <AlertCircle className="h-10 w-10 text-gray-200 mb-4" />
            <p className="text-gray-400 font-bold">No Flash Sale Products Available</p>
          </div>
        )}
      </div>
    </section>
  );
};
