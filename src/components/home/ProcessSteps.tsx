import React from "react";
import { ArrowRight } from "lucide-react";
import { STEPS } from "@/data/static";

export const ProcessSteps = () => {
  return (
    <section className="py-24 bg-[#E8F5E9] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-brand-primary text-xs font-bold tracking-wider uppercase mb-6 border border-brand-primary/10 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse" />
            Simple Process
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">
            From Farm to Your <span className="text-brand-primary relative">
              Table
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 100 8" preserveAspectRatio="none">
                <path d="M0 7C25 7 25 1 50 1C75 1 75 7 100 7" stroke="#2E7D32" strokeWidth="2" fill="none" opacity="0.3" />
              </svg>
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium leading-relaxed">
            Getting farm-fresh groceries delivered has never been easier. Experience a seamless journey from the fields to your kitchen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {STEPS.map((step, i) => (
            <div key={i} className="group relative">
              <div className="bg-white rounded-3xl p-8 h-full border border-gray-200 hover:border-brand-primary/30 hover:shadow-2xl hover:shadow-brand-primary/5 transition-all duration-500 flex flex-col items-center text-center">
                <span className="absolute top-4 right-8 text-7xl font-black text-gray-900/5 group-hover:text-brand-primary/10 transition-colors duration-500 pointer-events-none">
                  {step.number}
                </span>
                <div 
                  className="w-20 h-20 rounded-2xl flex items-center justify-center mb-8 relative transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3" 
                  style={{ backgroundColor: step.light }}
                >
                  <step.icon className="h-8 w-8" style={{ color: step.accent }} strokeWidth={1.5} />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-white rounded-tl-xl border-t border-l border-gray-200 group-hover:border-brand-primary/30 transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-brand-primary transition-colors">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed font-medium text-sm">{step.desc}</p>
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-8 h-8 items-center justify-center bg-white border border-gray-200 rounded-full z-20 text-gray-400 group-hover:text-brand-primary group-hover:border-brand-primary/30 transition-all">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
