import React from "react";
import { LucideIcon } from "lucide-react";

interface ContactInfoCardProps {
  icon: LucideIcon;
  title: string;
  value: string;
  sub: string;
  href: string;
}

export const ContactInfoCard = ({ icon: Icon, title, value, sub, href }: ContactInfoCardProps) => {
  return (
    <div className="group p-6 bg-gray-50 rounded-3xl border border-gray-100 hover:border-brand-light hover:bg-white hover:shadow-xl hover:shadow-green-900/5 transition-all duration-500">
      <div className="flex gap-5">
        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm border border-gray-100 group-hover:bg-brand-light transition-colors duration-500">
          <Icon className="h-6 w-6 text-brand-primary group-hover:text-white transition-colors duration-500" />
        </div>
        <div>
          <h3 className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{title}</h3>
          <a href={href} className="text-gray-900 font-bold text-lg hover:text-brand-primary transition-colors">
            {value}
          </a>
          <p className="text-sm text-gray-400 mt-0.5">{sub}</p>
        </div>
      </div>
    </div>
  );
};
