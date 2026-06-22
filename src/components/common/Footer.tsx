import Link from "next/link";
import Image from "next/image";
import { Instagram, Play, ArrowRight } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center hover:opacity-90 transition-all">
              <Image
                src="/images/logo_no_bg.png"
                alt="Grynlo logo"
                width={180}
                height={54}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Delivering the freshest organic produce and premium pantry essentials from local farms directly to your doorstep.
            </p>
            <div className="flex gap-4">
              {[Instagram, Play].map((Icon, i) => (
                <button key={i} className="w-10 h-10 rounded-lg bg-gray-800 flex items-center justify-center hover:bg-brand-primary transition-colors">
                  <Icon className="h-5 w-5" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {["Shop All", "New Arrivals", "Flash Sale", "About Us", "Contact"].map(item => (
                <li key={item}>
                  <Link
                    href={
                      item === "Shop All" ? "/shop" :
                        item === "New Arrivals" ? "/new-arrivals" :
                          item === "About Us" ? "/about" :
                            item === "Contact" ? "/contact" : "#"
                    }
                    className="hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Customer Support</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              {["Shipping Policy", "Returns & Refunds", "FAQs", "Privacy Policy", "Terms of Service"].map(item => (
                <li key={item}><Link href="#" className="hover:text-white transition-colors">{item}</Link></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Join Our Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.</p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-gray-800 border-none rounded-lg px-4 py-3 text-sm flex-grow focus:ring-2 focus:ring-brand-primary"
              />
              <button className="bg-brand-primary p-3 rounded-lg hover:bg-[#1B5E20] transition-colors">
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
          © {currentYear} MartFresh. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
