import React from "react";
import { Product } from "@/types";
import { ProductCardGrid } from "./ProductCardGrid";
import { ProductCardList } from "./ProductCardList";

interface ProductCardProps {
  product: Product;
  isFlashSale?: boolean;
  viewMode?: "grid" | "list";
}

export const ProductCard = ({ product, isFlashSale = false, viewMode = "grid" }: ProductCardProps) => {
  if (viewMode === "list") return <ProductCardList product={product} isFlashSale={isFlashSale} />;
  return <ProductCardGrid product={product} isFlashSale={isFlashSale} />;
};
