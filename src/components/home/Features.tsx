import React from "react";
import { FEATURES } from "@/data/static";
import { SectionHeader } from "../ui/SectionHeader";

export const Features = () => {
  return (
    <section className="relative py-24 bg-brand-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader 
          badge="Our Promise"
          title="Why Thousands Choose"
          highlightedTitle="MartFresh"
          description="We're committed to bringing you the freshest, healthiest groceries while supporting local farmers."
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200">
          {FEATURES.map((f, i) => (
            <div 
              key={i} 
              className="group relative bg-white p-8 hover:bg-[#E8F5E9] transition-all duration-200 overflow-hidden border-l-4 border-transparent hover:border-brand-primary"
            >
              <span 
                className="absolute top-3 right-4 text-6xl font-black leading-none opacity-5 select-none" 
                style={{ color: f.accent }}
              >
                {f.number}
              </span>
              <div 
                className="inline-block text-[9px] font-black tracking-widest uppercase mb-4 px-2 py-1" 
                style={{ color: f.accent, backgroundColor: f.bg }}
              >
                {f.number}
              </div>
              <div 
                className="w-12 h-12 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300" 
                style={{ backgroundColor: f.bg }}
              >
                <f.icon className="h-6 w-6" style={{ color: f.accent }} />
              </div>
              <h3 className="text-gray-900 text-lg font-extrabold mb-3 group-hover:text-brand-primary transition-colors">
                {f.title}
              </h3>
              <p className="text-gray-500 leading-relaxed text-sm font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
