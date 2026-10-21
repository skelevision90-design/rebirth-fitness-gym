/**
 * Navbar.jsx
 * 
 * Sticky navigation bar with desktop links and accessible full-screen mobile menu.
 * SAFE TO CHANGE:
 * - Navigation links and brand labels are controlled in `src/data/siteContent.js`.
 * - All colors and font sizes use theme tokens.
 */

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { brand, navigation } = siteContent;

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is active
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-gym-black/95 backdrop-blur-md border-b border-gym-border">
      <nav 
        aria-label="Main Navigation"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between"
      >
        {/* Brand Logo & Name */}
        <a 
          href="#root" 
          onClick={(e) => handleNavClick(e, '#root')}
          className="flex items-center gap-3 group focus-visible:outline-amber-brand"
        >
          <img 
            src={brand.logoPath} 
            alt={`${brand.name} Emblem`} 
            className="w-10 h-10 object-contain rounded-full border border-amber-brand/40 group-hover:border-amber-brand transition-colors"
          />
          <span className="font-black text-xl sm:text-2xl tracking-wider text-gym-text-light uppercase group-hover:text-amber-brand transition-colors">
            {brand.shortName}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => handleNavClick(e, item.href)}
              className="text-[16px] font-semibold text-gym-text-light/90 hover:text-amber-brand transition-colors focus-visible:outline-amber-brand py-1"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="#join"
            onClick={(e) => handleNavClick(e, '#join')}
            className="text-[16px] font-bold text-gym-text-light/80 hover:text-white transition-colors focus-visible:outline-amber-brand"
          >
            Inquire
          </a>
          <a
            href="#join"
            onClick={(e) => handleNavClick(e, '#join')}
            className="bg-amber-brand text-black font-extrabold text-[16px] px-6 py-2.5 rounded hover:bg-amber-hover transition-colors focus-visible:outline-amber-brand shadow-sm"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex lg:hidden items-center">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle Navigation Menu"
            className="text-gym-text-light p-2.5 rounded-lg hover:bg-gym-card focus-visible:outline-amber-brand min-w-[44px] min-h-[44px] flex items-center justify-center cursor-pointer"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      {/* Full-Screen Mobile Drawer */}
      {mobileMenuOpen && (
        <div 
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation Menu"
          className="lg:hidden fixed inset-0 top-20 bg-gym-black z-50 flex flex-col justify-between p-6 overflow-y-auto"
        >
          <div className="flex flex-col gap-6 pt-4">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-2xl font-bold text-gym-text-light hover:text-amber-brand transition-colors py-2 border-b border-gym-border/40"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#join"
              onClick={(e) => handleNavClick(e, '#join')}
              className="text-xl font-semibold text-gym-text-muted hover:text-amber-brand transition-colors py-2"
            >
              Inquire
            </a>
          </div>

          <div className="flex flex-col gap-4 pt-8 pb-12 border-t border-gym-border">
            <a
              href="#join"
              onClick={(e) => handleNavClick(e, '#join')}
              className="w-full text-center bg-amber-brand text-black font-black text-lg py-4 rounded hover:bg-amber-hover transition-colors min-h-[48px] flex items-center justify-center"
            >
              Join Now
            </a>
            <p className="text-center text-gym-text-muted text-[15px]">
              {brand.tagline}
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
