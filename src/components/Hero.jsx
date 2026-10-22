/**
 * Hero.jsx
 * 
 * Impactful hero section with the Rebirth emblem, clamp-scaled headline,
 * brand tagline box, and direct call-to-actions.
 * SAFE TO CHANGE:
 * - Headline, subtitle, and CTA targets live in `src/data/siteContent.js`.
 * - Background image can be replaced in `/public/images/hero-bg.jpg`.
 */

import { siteContent } from '../data/siteContent';

export default function Hero() {
  const { hero, brand } = siteContent;

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="hero"
      aria-label="Welcome to Rebirth Fitness" 
      className="relative min-h-[calc(100svh-80px)] flex flex-col justify-between items-center text-center px-4 sm:px-6 py-8 sm:py-12 overflow-hidden bg-gym-black"
    >
      {/* Background Iron Gym Image with Dark Mood Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-30 scale-105 filter grayscale contrast-125"
        style={{ backgroundImage: `url('${brand.heroBgImage}')` }}
        aria-hidden="true"
      />
      {/* Radial Vignette & Gradient Mask for high contrast */}
      <div 
        className="absolute inset-0 z-0 bg-gradient-to-b from-gym-black/80 via-gym-black/60 to-gym-black pointer-events-none"
        aria-hidden="true"
      />

      {/* Main Hero Content */}
      <div className="relative z-10 max-w-4xl mx-auto my-auto flex flex-col items-center justify-center pt-2 sm:pt-6">
        
        {/* Emblem Badge matching Stitch screenshot */}
        <div className="mb-4 sm:mb-6">
          <div className="w-20 h-20 sm:w-24 sm:h-24 p-1.5 rounded-2xl border-2 border-amber-brand/70 bg-gym-black/90 shadow-2xl flex items-center justify-center transform hover:scale-105 transition-transform duration-300">
            <img 
              src={brand.logoPath} 
              alt={brand.name} 
              className="w-full h-full object-contain rounded-full"
            />
          </div>
        </div>

        {/* Hero Title with Amber Box on "BORN AGAIN." */}
        <h1 className="headline-hero text-gym-text-light mb-4 sm:mb-6 tracking-tight flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
          <span>{hero.titlePrefix}</span>
          <span className="bg-amber-brand text-black px-3.5 py-1 rounded inline-block font-black shadow-md whitespace-nowrap">
            {hero.titleHighlight}
          </span>
        </h1>

        {/* Short human description (under 30 words) */}
        <p className="text-[17px] sm:text-xl text-gray-300 max-w-2xl font-normal leading-relaxed mb-6 sm:mb-8">
          {hero.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
          <a
            href={hero.primaryCta.target}
            onClick={(e) => handleScrollTo(e, hero.primaryCta.target)}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-amber-brand text-black font-extrabold text-[17px] rounded hover:bg-amber-hover transition-colors shadow-lg flex items-center justify-center focus-visible:outline-white"
          >
            {hero.primaryCta.label}
          </a>
          <a
            href={hero.secondaryCta.target}
            onClick={(e) => handleScrollTo(e, hero.secondaryCta.target)}
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-transparent border border-white/80 text-white font-bold text-[17px] rounded hover:bg-white/10 transition-colors flex items-center justify-center focus-visible:outline-amber-brand"
          >
            {hero.secondaryCta.label}
          </a>
        </div>
      </div>

      {/* Subtle bottom decorative accent line matching Stitch design */}
      <div className="relative z-10 w-full max-w-3xl mx-auto pt-6 pb-2" aria-hidden="true">
        <div className="h-px bg-gradient-to-r from-transparent via-amber-brand/40 to-transparent" />
      </div>
    </section>
  );
}
