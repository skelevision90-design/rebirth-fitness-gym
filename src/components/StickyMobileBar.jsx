/**
 * StickyMobileBar.jsx
 * 
 * Persistent bottom navigation bar on mobile screens.
 * Contains direct actions: Call, WhatsApp, and Join Now.
 * Hidden on desktop (md:hidden).
 * SAFE TO CHANGE:
 * - Action labels and contact targets live in `src/data/siteContent.js`.
 */

import { Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function StickyMobileBar() {
  const { contact, mobileStickyBar } = siteContent;

  const handleJoinClick = (e) => {
    e.preventDefault();
    const joinElement = document.getElementById('join');
    if (joinElement) {
      joinElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappMessage = encodeURIComponent(contact.whatsapp.defaultMessage);
  const whatsappUrl = `https://wa.me/${contact.whatsapp.number}?text=${whatsappMessage}`;

  return (
    <aside 
      aria-label="Quick Mobile Actions" 
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gym-black/95 backdrop-blur-md border-t border-gym-border px-3 py-2.5 pb-[max(0.65rem,env(safe-area-inset-bottom))]"
    >
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          href={`tel:${contact.phone.raw}`}
          className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-gym-card border border-gym-border text-white hover:text-amber-brand text-[14px] font-bold min-h-[48px] transition-colors active:scale-95"
        >
          <Phone size={18} className="text-amber-brand mb-0.5" aria-hidden="true" />
          <span>{mobileStickyBar.callLabel}</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-2 px-2 rounded-lg bg-gym-card border border-gym-border text-white hover:text-amber-brand text-[14px] font-bold min-h-[48px] transition-colors active:scale-95"
        >
          <MessageCircle size={18} className="text-amber-brand mb-0.5" aria-hidden="true" />
          <span>{mobileStickyBar.whatsappLabel}</span>
        </a>

        {/* Join Now Primary Action Button */}
        <button
          type="button"
          onClick={handleJoinClick}
          className="flex items-center justify-center gap-1 py-2 px-2 rounded-lg bg-amber-brand text-black font-black text-[15px] min-h-[48px] transition-colors active:scale-95 cursor-pointer shadow-md"
        >
          <span>{mobileStickyBar.joinLabel}</span>
          <ArrowRight size={16} strokeWidth={2.5} aria-hidden="true" />
        </button>
      </div>
    </aside>
  );
}
