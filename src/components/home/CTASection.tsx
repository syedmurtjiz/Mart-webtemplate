import React from "react";
import { Leaf, ArrowRight, Truck, ShieldCheck, Clock } from "lucide-react";
import { Button } from "../ui/Button";

export const CTASection = () => {
  const perks = [
    { icon: Leaf, label: "100% Organic" },
    { icon: Truck, label: "Free Delivery over ₨999" },
    { icon: ShieldCheck, label: "Quality Guaranteed" },
    { icon: Clock, label: "Same-Day Dispatch" }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden bg-brand-primary shadow-2xl shadow-brand-primary/20 p-10 md:p-16 lg:p-20">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">
            <div className="text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full mb-8 backdrop-blur-sm">
                <Leaf className="h-3.5 w-3.5 text-[#A5D6A7]" />
                <span className="text-[11px] text-white font-bold tracking-widest uppercase">100% Fresh & Organic</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-[1.1] tracking-tight">
                Ready to Eat <span className="text-[#FF8F00]">Fresh</span> Today?
              </h2>
              <p className="text-green-50/80 text-lg font-medium mb-10 max-w-xl">
                Get the best quality organic produce delivered straight to your door. Farm-fresh, packed with nutrition, and delivered with care.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary" size="lg" icon={ArrowRight}>
                  Shop Fresh Now
                </Button>
                <Button variant="outline" size="lg" className="bg-white/10 hover:bg-white/20 border-white/25 text-white">
                  View All Categories
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {perks.map((p, i) => (
                <div key={i} className="flex items-center gap-4 bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl p-5 group">
                  <div className="w-11 h-11 bg-white/15 rounded-xl flex items-center justify-center group-hover:bg-white/25 transition-colors">
                    <p.icon className="h-5 w-5 text-[#A5D6A7]" />
                  </div>
                  <span className="text-white font-semibold text-sm">{p.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
