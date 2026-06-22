import React from "react";
import { cn } from "@/lib/cn";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ElementType;
  fullWidth?: boolean;
}

export const Button = ({
  variant = "primary",
  size = "md",
  children,
  icon: Icon,
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 font-bold tracking-wide transition-all duration-300 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "bg-brand-primary text-white shadow-lg shadow-brand-primary/20 hover:shadow-brand-primary/30 hover:-translate-y-0.5",
    secondary: "bg-[#FF8F00] text-white shadow-lg shadow-[#FF8F00]/20 hover:bg-[#F57C00]",
    outline: "bg-white/80 backdrop-blur-sm text-gray-900 border border-gray-200 hover:border-brand-primary/30 hover:text-brand-primary shadow-sm hover:shadow",
    ghost: "text-gray-700 hover:text-brand-primary hover:bg-[#E8F5E9]/50",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-sm",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], fullWidth && "w-full", className)}
      {...props}
    >
      {children}
      {Icon && <Icon className="h-4 w-4" />}
    </button>
  );
};
