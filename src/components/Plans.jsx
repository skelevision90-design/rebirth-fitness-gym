/**
 * Plans.jsx
 * 
 * Membership tiers matching the Stitch design.
 * - Desktop: 3-column clean row.
 * - Mobile: Horizontal swipe carousel with scroll-snap and interactive dots.
 * 
 * SAFE TO CHANGE:
 * - Plan names, prices, features, and badges live in `src/data/siteContent.js`.
 */

import { useState, useRef, useEffect } from 'react';
import { Check } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function Plans() {
  const { memberships, contact } = siteContent;
  const [activeIndex, setActiveIndex] = useState(1); // default to middle featured plan
  const carouselRef = useRef(null);

  // Update active dot on mobile scroll
  const handleScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, clientWidth } = carouselRef.current;
    const newIndex = Math.round(scrollLeft / clientWidth);
    if (newIndex >= 0 && newIndex < memberships.plans.length) {
      setActiveIndex(newIndex);
    }
  };

  const scrollToPlan = (index) => {
    if (!carouselRef.current) return;
    const width = carouselRef.current.clientWidth;
    carouselRef.current.scrollTo({
      left: width * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  const handleInquirePlan = (planName) => {
    // Scroll to the join form and set URL hash, or open WhatsApp with inquiry
    const targetElement = document.getElementById('join');
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill goal or notify user if input is available
      const goalSelect = document.getElementById('fitness-goal-select');
      if (goalSelect) {
        goalSelect.focus();
      }
    } else {
      const msg = encodeURIComponent(`Hi, I'm interested in the ${planName} membership at Rebirth Fitness Gym.`);
      window.open(`https://wa.me/${contact.whatsapp.number}?text=${msg}`, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section 
      id="memberships" 
      aria-label="Membership Plans" 
      className="py-16 sm:py-24 bg-gym-black px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
        <span className="text-[15px] font-black uppercase tracking-widest text-amber-brand block mb-2">
          {memberships.tag}
        </span>
        <h2 className="headline-section text-white uppercase font-black tracking-tight mb-3">
          {memberships.headline}
        </h2>
        <p className="text-[17px] text-gym-text-muted leading-relaxed">
          {memberships.subtitle}
        </p>
      </div>

      {/* Plans Container: Desktop 3-column row, Mobile scroll-snap carousel */}
      <div
        ref={carouselRef}
        onScroll={handleScroll}
        className="flex lg:grid lg:grid-cols-3 gap-6 overflow-x-auto lg:overflow-x-visible snap-x snap-mandatory no-scrollbar pb-6 lg:pb-0"
      >
        {memberships.plans.map((plan, index) => {
          const isFeatured = plan.isPopular;

          return (
            <div
              key={plan.id}
              className={`snap-center flex-shrink-0 w-[88vw] sm:w-[360px] lg:w-auto rounded-2xl flex flex-col justify-between transition-all duration-300 relative ${
                isFeatured
                  ? 'bg-amber-brand text-black p-8 sm:p-9 shadow-2xl ring-2 ring-amber-brand lg:-translate-y-2'
                  : 'bg-gym-card text-gym-text-light p-8 border border-gym-border hover:border-gym-border/80'
              }`}
            >
              {/* Featured Badge */}
              {plan.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-black text-amber-brand text-[15px] font-black px-4 py-1 rounded-full uppercase tracking-wider whitespace-nowrap shadow-md">
                  {plan.badge}
                </div>
              )}

              {/* Plan Header */}
              <div>
                <p
                  className={`text-[15px] font-extrabold uppercase tracking-widest mb-3 ${
                    isFeatured ? 'text-black/80' : 'text-gym-text-muted'
                  }`}
                >
                  {plan.name}
                </p>

                <div className="flex items-baseline gap-1 mb-6">
                  <span
                    className={`text-4xl sm:text-5xl font-black tracking-tight ${
                      isFeatured ? 'text-black' : 'text-white'
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-[17px] font-bold ${
                      isFeatured ? 'text-black/80' : 'text-gym-text-muted'
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                {/* Features List */}
                <ul className="flex flex-col gap-3.5 mb-8" aria-label={`${plan.name} features`}>
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          isFeatured
                            ? 'bg-black text-amber-brand'
                            : 'bg-amber-subtle text-amber-brand'
                        }`}
                      >
                        <Check size={14} strokeWidth={3} aria-hidden="true" />
                      </div>
                      <span
                        className={`text-[17px] font-medium leading-snug ${
                          isFeatured ? 'text-black font-semibold' : 'text-gray-300'
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => handleInquirePlan(plan.name)}
                className={`w-full py-3.5 px-6 rounded font-black text-[16px] min-h-[48px] transition-colors focus-visible:outline-2 cursor-pointer ${
                  isFeatured
                    ? 'bg-black text-white hover:bg-neutral-900 focus-visible:outline-black'
                    : 'bg-gym-dark border border-gym-border text-white hover:bg-neutral-800 focus-visible:outline-amber-brand'
                }`}
              >
                {plan.ctaText}
              </button>
            </div>
          );
        })}
      </div>

      {/* Mobile Pagination Dots */}
      <div 
        className="flex lg:hidden justify-center items-center gap-2 mt-4" 
        aria-label="Plan carousel navigation"
      >
        {memberships.plans.map((_, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => scrollToPlan(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
              activeIndex === idx ? 'w-8 bg-amber-brand' : 'w-2.5 bg-gym-border'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
