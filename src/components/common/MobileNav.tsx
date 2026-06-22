import Link from "next/link";
import { Heart, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/cn";
import { useUIStore } from "@/store/useUIStore";
import { NavLink } from "./DesktopNav";

interface MobileNavProps {
  navLinks: NavLink[];
  isOpen: boolean;
  onClose: () => void;
  currentPath: string;
}

export const MobileNav = ({ navLinks, isOpen, onClose, currentPath }: MobileNavProps) => {
  const openCart = useUIStore(state => state.openCart);

  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath?.startsWith(path)) return true;
    return false;
  };

  if (!isOpen) return null;

  return (
    <div className="lg:hidden absolute top-full left-0 right-0 bg-white border-t border-gray-100 p-4 space-y-2 shadow-xl animate-in fade-in slide-in-from-top-2 duration-300">
      {navLinks.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "block px-4 py-3 text-base font-bold rounded-xl transition-all",
              active 
                ? "text-brand-primary bg-[#E8F5E9]" 
                : "text-gray-900 hover:bg-[#E8F5E9]/50 hover:text-brand-primary"
            )}
            onClick={onClose}
          >
            {item.name}
          </Link>
        );
      })}
      <div className="flex items-center gap-2 px-4 pt-2 border-t border-gray-100">
        <Link href="/favorites" className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-gray-900 hover:bg-[#E8F5E9] rounded-xl flex-1">
          <Heart className="h-4 w-4" /> Favorites
        </Link>
        <button 
          onClick={() => {
            openCart();
            onClose();
          }}
          className="flex items-center gap-2 px-4 py-3 text-base font-semibold text-gray-900 hover:bg-[#E8F5E9] rounded-xl flex-1"
        >
          <ShoppingCart className="h-4 w-4" /> Cart
        </button>
      </div>
    </div>
  );
};
