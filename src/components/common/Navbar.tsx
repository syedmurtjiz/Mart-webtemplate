"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import { useFavoritesStore } from "@/store/useFavoritesStore";
import { useCartStore, useCartCount } from "@/store/useCartStore";
import { useUIStore } from "@/store/useUIStore";
import { cn } from "@/lib/cn";
import { useHasHydrated } from "@/hooks/useHasHydrated";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";

export const Navbar = () => {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);

    const isMobileMenuOpen = useUIStore(state => state.isMobileMenuOpen);
    const toggleMobileMenu = useUIStore(state => state.toggleMobileMenu);
    const closeMobileMenu = useUIStore(state => state.closeMobileMenu);
    const openCart = useUIStore(state => state.openCart);

    const favoritesCount = useFavoritesStore(state => state.items.length);
    const cartItemCount = useCartCount();
    const hasHydrated = useHasHydrated();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { name: "Home", href: "/" },
        { name: "Shop", href: "/shop" },
        { name: "New Arrivals", href: "/new-arrivals" },
        { name: "Offers", href: "/offers" },
        { name: "About", href: "/about" },
        { name: "Contact", href: "/contact" },
    ];

    return (
        <header className={cn(
            "sticky top-0 z-50 transition-all duration-300",
            isScrolled
                ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-0"
                : "bg-brand-bg/95 backdrop-blur-md border-b border-brand-primary/10 py-1"
        )}>
            <div className={cn(
                "bg-brand-primary text-white transition-all duration-300 overflow-hidden",
                isScrolled ? "h-0 opacity-0" : "py-2 opacity-100"
            )}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs font-semibold tracking-wider flex items-center justify-center gap-2">
                    🌿 Free Delivery on Orders Over Rs 2,000 | Premium Quality & Guaranteed Satisfaction
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-24">
                    <Link href="/" className="flex items-center hover:opacity-90 transition-all">
                        <Image
                            src="/images/logo_no_bg.png"
                            alt="Grynlo logo"
                            width={160}
                            height={48}
                            className="object-contain"
                            priority
                        />
                    </Link>

                    <DesktopNav navLinks={navItems} currentPath={pathname || "/"} />

                    <div className="flex items-center gap-1.5">
                        <button className="p-3 text-gray-700 hover:text-brand-primary hover:bg-[#E8F5E9]/50 transition-colors rounded-xl">
                            <Search className="h-5 w-5" />
                        </button>
                        <Link href="/favorites" className="relative p-3 text-gray-700 hover:text-brand-primary hover:bg-[#E8F5E9]/50 transition-colors rounded-xl">
                            <Heart className="h-5 w-5" />
                            {hasHydrated && favoritesCount > 0 && (
                                <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-[#FF8F00] text-white text-[9px] font-bold rounded-full">
                                    {favoritesCount}
                                </span>
                            )}
                        </Link>
                        <button
                            onClick={openCart}
                            className="relative p-3 text-gray-700 hover:text-brand-primary hover:bg-[#E8F5E9]/50 transition-colors rounded-xl"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            {hasHydrated && cartItemCount > 0 && (
                                <span className="absolute top-1 right-1 flex items-center justify-center w-4 h-4 bg-[#FF8F00] text-white text-[9px] font-bold rounded-full">
                                    {cartItemCount}
                                </span>
                            )}
                        </button>
                        <button
                            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                            aria-expanded={isMobileMenuOpen}
                            onClick={toggleMobileMenu}
                            className="lg:hidden p-3 text-gray-700 hover:text-brand-primary hover:bg-[#E8F5E9]/50 transition-colors rounded-xl"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            <MobileNav
                navLinks={navItems}
                isOpen={isMobileMenuOpen}
                onClose={closeMobileMenu}
                currentPath={pathname || "/"}
            />
        </header>
    );
};
