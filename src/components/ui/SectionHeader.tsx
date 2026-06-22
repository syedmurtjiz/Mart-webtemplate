import React from "react";
import { Badge } from "./Badge";

interface SectionHeaderProps {
  badge?: string;
  title: string;
  highlightedTitle?: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export const SectionHeader = ({
  badge,
  title,
  highlightedTitle,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) => {
  return (
    <div className={`max-w-2xl ${align === "center" ? "mx-auto text-center" : ""} ${className}`}>
      {badge && (
        <Badge variant="primary" className="mb-4">
          {badge}
        </Badge>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
        {title} {highlightedTitle && <span className="text-brand-primary">{highlightedTitle}</span>}
      </h2>
      {description && (
        <p className="mt-4 text-gray-500 text-base md:text-lg font-medium leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};
