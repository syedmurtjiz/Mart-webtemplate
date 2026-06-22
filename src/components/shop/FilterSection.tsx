import React from "react";

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
}

export const FilterSection = ({ title, children }: FilterSectionProps) => {
  return (
    <div className="mb-8">
      <h3 className="text-[18px] font-bold text-gray-900 mb-5 pb-2 border-b-2 border-brand-primary/10 inline-block">
        {title}
      </h3>
      <div className="space-y-3">
        {children}
      </div>
    </div>
  );
};
