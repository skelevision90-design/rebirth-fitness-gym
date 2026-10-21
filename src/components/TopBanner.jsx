/**
 * TopBanner.jsx
 * 
 * Announcement banner rendered above the navbar.
 * SAFE TO CHANGE:
 * - Text and link target are controlled in `src/data/siteContent.js`.
 * - Styling uses Tailwind theme tokens (bg-amber-brand, text-black).
 */

import { siteContent } from '../data/siteContent';

export default function TopBanner() {
  const { topBanner } = siteContent;

  if (!topBanner || !topBanner.enabled) return null;

  const handleClick = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById(topBanner.targetSection || 'join');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside 
      aria-label="Gym Announcement" 
      className="bg-amber-brand text-black py-2.5 px-4 text-center font-bold text-[15px] sm:text-[16px] leading-tight flex items-center justify-center transition-colors"
    >
      <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
        <span>{topBanner.text}</span>
        <button
          onClick={handleClick}
          className="inline-flex items-center underline underline-offset-2 hover:opacity-80 focus-visible:outline-black text-[15px] sm:text-[16px] font-black cursor-pointer tracking-wider"
        >
          {topBanner.ctaText}
        </button>
      </div>
    </aside>
  );
}
