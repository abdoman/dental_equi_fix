import { useEffect, useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { NAV_ITEMS, type PageId } from '@/data/site';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <button onClick={() => handleNav('home')} className="flex items-center gap-2 group">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-primary-500 to-primary-700 shadow-lg group-hover:scale-110 transition-transform duration-300">
            <span className="text-white font-heading font-bold text-lg">X</span>
          </div>
          <div className="flex flex-col leading-tight">
            <span className={`font-heading font-bold text-lg ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
              XraySensorFix
            </span>
            <span className={`text-[10px] uppercase tracking-widest ${scrolled ? 'text-primary-600' : 'text-primary-300'}`}>
              Repair Experts
            </span>
          </div>
        </button>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 relative ${
                currentPage === item.page
                  ? scrolled
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-white bg-white/15'
                  : scrolled
                    ? 'text-neutral-600 hover:text-primary-600 hover:bg-neutral-50'
                    : 'text-white/80 hover:text-white hover:bg-white/10'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Phone CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="tel:408-657-8601"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
              scrolled
                ? 'bg-gradient-to-r from-primary-500 to-primary-700 text-white hover:shadow-lg hover:scale-105'
                : 'glass text-white hover:bg-white/20'
            }`}
          >
            <Phone className="w-4 h-4" />
            408-657-8601
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-neutral-900' : 'text-white'}`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="bg-white/95 backdrop-blur-md mx-4 mt-2 rounded-2xl shadow-xl p-4 flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNav(item.page)}
              className={`px-4 py-3 rounded-lg text-left text-sm font-medium transition-colors ${
                currentPage === item.page
                  ? 'text-primary-600 bg-primary-50'
                  : 'text-neutral-700 hover:bg-neutral-50'
              }`}
            >
              {item.label}
            </button>
          ))}
          <a
            href="tel:408-657-8601"
            className="flex items-center gap-2 px-4 py-3 rounded-lg bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold text-sm mt-2"
          >
            <Phone className="w-4 h-4" />
            Call: 408-657-8601
          </a>
        </nav>
      </div>
    </header>
  );
}
