import { LucideIcon } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface StatItem {
    icon: LucideIcon;
    label: string;
    value: string;
}

interface BadgeProps {
    icon: LucideIcon;
    text: string;
    endIcon?: LucideIcon;
}

interface PageHeroProps {
    badge: BadgeProps;
    title: React.ReactNode;
    description: string;
    stats?: StatItem[];
    backLink?: {
        href: string;
        text: string;
    };
}

export function PageHero({ badge, title, description, stats, backLink }: PageHeroProps) {
    const BadgeIcon = badge.icon;
    const BadgeEndIcon = badge.endIcon;

    return (
        <section className="relative bg-[#0F2710] overflow-hidden border-b border-white/5">
            {/* Set fixed height */}
            <div className="min-h-[450px] md:min-h-[550px] flex items-center">
                {/* Layered radial glows */}
                <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-[radial-gradient(circle_at_20%_20%,rgba(46,125,50,0.18),transparent_60%)] blur-[80px]" />
                    <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[radial-gradient(circle_at_80%_80%,rgba(255,143,0,0.10),transparent_60%)] blur-[100px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(46,125,50,0.06),transparent_70%)] blur-[60px]" />
                    <div
                        className="absolute inset-0 opacity-[0.04]"
                        style={{
                            backgroundImage:
                                "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px)",
                            backgroundSize: "48px 48px",
                        }}
                    />
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 w-full">
                    <div className="text-center">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 rounded-full mb-8 backdrop-blur-sm">
                            <BadgeIcon className="h-3.5 w-3.5 text-brand-light animate-pulse" />
                            <span className="text-[11px] text-white/80 font-bold tracking-widest uppercase">
                                {badge.text}
                            </span>
                            {BadgeEndIcon && <BadgeEndIcon className="h-3.5 w-3.5 text-[#FF8F00]" />}
                        </div>

                        {/* Heading */}
                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight leading-[1.1]">
                            {title}
                        </h1>

                        <p className="text-base md:text-lg text-gray-400 font-medium max-w-3xl mx-auto mb-10 leading-relaxed">
                            {description}
                        </p>

                        {/* Stats Bar */}
                        {stats && stats.length > 0 && (
                            <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-8">
                                {stats.map((stat, index) => {
                                    const StatIcon = stat.icon;
                                    return (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-4 py-2.5 md:px-6 md:py-3 backdrop-blur-sm"
                                        >
                                            <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center shrink-0">
                                                <StatIcon className="h-4 w-4 text-brand-light" />
                                            </div>
                                            <div className="text-left">
                                                <div className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                                                    {stat.label}
                                                </div>
                                                <div className="text-white font-extrabold text-sm">
                                                    {stat.value}
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        )}

                        {backLink && (
                            <Link
                                href={backLink.href}
                                className="inline-flex items-center gap-2 text-brand-light/80 hover:text-brand-light transition-colors group font-bold uppercase tracking-widest text-xs"
                            >
                                <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                                <span>{backLink.text}</span>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
