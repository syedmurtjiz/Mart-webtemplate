"use client";

import React from "react";
import Slider from "react-slick";
import { Star, Quote, MessageSquareHeart } from "lucide-react";
import { TESTIMONIALS } from "@/data/static";

export const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    appendDots: (dots: React.ReactNode) => (
      <div className="mt-10">
        <ul className="flex items-center justify-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-2.5 h-2.5 rounded-full bg-gray-300 hover:bg-brand-primary transition-colors duration-300" />
    )
  };

  return (
    <section className="py-24 bg-gradient-to-br from-brand-bg via-[#E8F5E9] to-brand-bg overflow-hidden relative">
      <style jsx global>{`
        .slick-dots li.slick-active div {
          background-color: #2E7D32 !important;
          width: 24px !important;
        }
        .slick-list {
          margin: 0 -12px;
        }
        .slick-slide > div {
          padding: 20px 12px;
        }
      `}</style>
      
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_30%_30%,rgba(46,125,50,0.08),transparent_60%)]" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_70%_70%,rgba(255,143,0,0.08),transparent_60%)]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-6 shadow-sm">
            <MessageSquareHeart className="h-4 w-4 text-brand-primary" />
            <span className="text-xs font-black tracking-widest uppercase text-gray-700">Customer Stories</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 mb-6 leading-[1.1]">
            Loved by <span className="text-brand-primary">50,000+ Families</span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8 font-medium">
            See why families across the country trust MartFresh for the freshest organic produce and groceries.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 py-6 bg-white rounded-3xl border border-gray-200 shadow-sm">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-brand-primary">50k+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Happy Families</div>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-[#FF8F00] text-[#FF8F00]" />
                ))}
              </div>
              <div className="text-3xl md:text-4xl font-black text-gray-900">4.9</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Average Rating</div>
            </div>
            <div className="h-12 w-px bg-gray-200 hidden sm:block" />
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-black text-[#FF8F00]">12.5k+</div>
              <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mt-1">Verified Reviews</div>
            </div>
          </div>
        </div>

        <div className="testimonial-slider">
          <Slider {...settings}>
            {TESTIMONIALS.map((t, i) => (
              <div key={i} className="outline-none">
                <div 
                  className="group bg-white rounded-3xl border border-gray-200 p-8 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden h-full relative"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 rounded-bl-full opacity-5" style={{ backgroundColor: t.color }} />
                  
                  <div className="relative z-10">
                    <Quote 
                      className="h-10 w-10 mb-6 opacity-10" 
                      style={{ color: t.color }} 
                      fill="currentColor" 
                    />
                    
                    <div className="flex gap-0.5 mb-5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-[#FF8F00] fill-[#FF8F00]" />
                      ))}
                    </div>
                    
                    <p className="text-gray-600 text-base leading-relaxed mb-8 font-medium italic">
                      &quot;{t.text}&quot;
                    </p>
                    
                    <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                      <div 
                        className="w-12 h-12 rounded-2xl flex items-center justify-center text-white text-sm font-black shrink-0 shadow-md" 
                        style={{ backgroundColor: t.color }}
                      >
                        {t.initials}
                      </div>
                      <div>
                        <p className="text-gray-900 font-bold text-sm leading-tight group-hover:text-brand-primary transition-colors">
                          {t.author}
                        </p>
                        <p className="text-gray-400 text-xs font-semibold uppercase tracking-wider mt-1">
                          {t.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};
