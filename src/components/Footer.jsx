/**
 * Footer.jsx
 * 
 * Clean footer with Rebirth emblem, copyright statement, and quick navigation.
 * SAFE TO CHANGE:
 * - Brand details, social links, and copyright text live in `src/data/siteContent.js`.
 */

import { siteContent } from '../data/siteContent';

export default function Footer() {
  const { brand, contact } = siteContent;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gym-black border-t border-gym-border/80 pt-10 pb-28 md:pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Brand Wordmark & Emblem */}
        <div className="flex items-center gap-3">
          <img 
            src={brand.logoPath} 
            alt={`${brand.name} Emblem`} 
            className="w-8 h-8 object-contain rounded-full border border-amber-brand/40"
          />
          <span className="font-black text-xl tracking-wider text-gym-text-light uppercase">
            {brand.shortName}
          </span>
        </div>

        {/* Center Copyright Note */}
        <p className="text-[15px] sm:text-[16px] text-gym-text-muted text-center font-medium">
          © {brand.copyrightYear} {brand.name}. {brand.subTagline} All Rights Reserved.
        </p>

        {/* Social and Scroll to Top Links */}
        <div className="flex items-center gap-6 text-[15px] sm:text-[16px] font-bold">
          <a
            href={contact.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gym-text-muted hover:text-amber-brand transition-colors focus-visible:outline-amber-brand"
          >
            Instagram
          </a>
          <a
            href={`https://wa.me/${contact.whatsapp.number}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gym-text-muted hover:text-amber-brand transition-colors focus-visible:outline-amber-brand"
          >
            WhatsApp
          </a>
          <button
            type="button"
            onClick={scrollToTop}
            className="text-amber-brand hover:text-amber-hover transition-colors font-black cursor-pointer flex items-center gap-1 focus-visible:outline-amber-brand"
          >
            Top ↑
          </button>
        </div>
      </div>
    </footer>
  );
}
