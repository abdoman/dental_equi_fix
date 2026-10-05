import { Phone, Mail, MapPin, Clock, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, FOOTER_LINKS, LEGAL_LINKS, type PageId } from '@/data/site';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700">
                <span className="text-white font-heading font-bold text-lg">X</span>
              </div>
              <span className="font-heading font-bold text-lg text-white">XraySensorFix</span>
            </div>
            <p className="text-sm text-neutral-400 leading-relaxed">
              Precision repairs for the modern dental practice. We extend the life of your imaging equipment
              with professional-grade repairs and rigorous testing.
            </p>
          </div>

          {/* Main Nav Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className="flex items-center gap-1 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Other Links</h4>
            <ul className="space-y-2.5">
              {FOOTER_LINKS.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="flex items-center gap-1 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </button>
                </li>
              ))}
              {LEGAL_LINKS.map((link) => (
                <li key={link.page}>
                  <button
                    onClick={() => onNavigate(link.page)}
                    className="flex items-center gap-1 text-sm text-neutral-400 hover:text-primary-400 transition-colors"
                  >
                    <ChevronRight className="w-3 h-3" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <Phone className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <a href="tel:408-657-8601" className="hover:text-primary-400 transition-colors">
                  408-657-8601
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <Mail className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span>info@xraysensorfix.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <MapPin className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <span>San Jose, California, USA</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-400">
                <Clock className="w-4 h-4 mt-0.5 text-primary-400 shrink-0" />
                <div>
                  <p>Mon–Fri: 9:00 AM – 6:00 PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} XraySensorFix.com — All rights reserved.
          </p>
          <div className="flex gap-4">
            {LEGAL_LINKS.map((link) => (
              <button
                key={link.page}
                onClick={() => onNavigate(link.page)}
                className="text-xs text-neutral-500 hover:text-primary-400 transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
