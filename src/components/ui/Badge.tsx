import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "warning";
  className?: string;
  icon?: React.ElementType;
}

export const Badge = ({ 
  children, 
  variant = "primary", 
  className = "", 
  icon: Icon 
}: BadgeProps) => {
  const variants = {
    primary: "bg-[#E8F5E9] text-brand-primary border-brand-primary/10",
    secondary: "bg-white text-brand-primary border-brand-primary/15",
    outline: "bg-white/90 backdrop-blur-md text-gray-800 border-white/20",
    warning: "bg-[#FF8F00] text-white border-transparent shadow-lg shadow-[#FF8F00]/20",
  };

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-[10px] font-bold tracking-widest uppercase shadow-sm ${variants[variant]} ${className}`}>
      {Icon && <Icon className="h-3.5 w-3.5" />}
      <span>{children}</span>
    </div>
  );
};
