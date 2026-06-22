import React from "react";
import { cn } from "@/lib/cn";

export const Input = React.forwardRef<
  HTMLInputElement, 
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, ...props }, ref) => (
  <input
    ref={ref}
    className={cn(
      "w-full px-6 py-4 bg-gray-50 border border-gray-100 rounded-2xl",
      "focus:outline-none focus:ring-2 focus:ring-brand-light/20",
      "focus:border-brand-light transition-all font-medium text-gray-900",
      className
    )}
    {...props}
  />
));
Input.displayName = "Input";
