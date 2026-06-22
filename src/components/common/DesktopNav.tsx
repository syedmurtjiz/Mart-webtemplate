import Link from "next/link";
import { cn } from "@/lib/cn";

export interface NavLink {
  name: string;
  href: string;
}

interface DesktopNavProps {
  navLinks: NavLink[];
  currentPath: string;
}

export const DesktopNav = ({ navLinks, currentPath }: DesktopNavProps) => {
  const isActive = (path: string) => {
    if (path === "/" && currentPath === "/") return true;
    if (path !== "/" && currentPath?.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="hidden lg:flex items-center space-x-1">
      {navLinks.map((item) => {
        const active = isActive(item.href);
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "relative px-4 py-2 text-sm font-bold tracking-tight transition-all duration-300 rounded-xl group",
              active 
                ? "text-brand-primary" 
                : "text-gray-600 hover:text-brand-primary"
            )}
          >
            <span className="relative z-10">{item.name}</span>
            {active ? (
              <div className="absolute inset-0 bg-[#E8F5E9] rounded-xl -z-0" />
            ) : (
              <div className="absolute inset-0 bg-[#E8F5E9] rounded-xl -z-0 scale-75 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300" />
            )}
            {active && (
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full" />
            )}
          </Link>
        );
      })}
    </nav>
  );
};
