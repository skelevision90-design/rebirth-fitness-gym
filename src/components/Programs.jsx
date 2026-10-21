/**
 * Programs.jsx
 * 
 * Renders the 4 Core Training Tracks.
 * - Desktop: 2x2 grid matching the Stitch design.
 * - Mobile: Keyboard accessible accordion to maintain compact height.
 * 
 * SAFE TO CHANGE:
 * - Program titles, descriptions, and icons live in `src/data/siteContent.js`.
 */

import { useState } from 'react';
import { Dumbbell, Flame, UserCheck, Scale, ChevronDown } from 'lucide-react';
import { siteContent } from '../data/siteContent';

// Map icon names from siteContent to Lucide components
const iconMap = {
  Dumbbell: Dumbbell,
  Flame: Flame,
  UserCheck: UserCheck,
  Scale: Scale,
};

export default function Programs() {
  const { programsSection } = siteContent;
  // On mobile, expand the first track by default
  const [expandedId, setExpandedId] = useState('01');

  const toggleAccordion = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <div id="programs" className="w-full">
      {/* Section Divider with centered pill tag */}
      <div className="relative flex items-center justify-center my-8 sm:my-12">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gym-border-light/70" />
        </div>
        <div className="relative bg-gym-cream px-4 text-center">
          <span className="text-[15px] font-extrabold uppercase tracking-widest text-gym-text-muted">
            {programsSection.tag}
          </span>
        </div>
      </div>

      {/* Desktop 2x2 Grid (hidden on small mobile) */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        {programsSection.programs.map((prog) => {
          const IconComponent = iconMap[prog.icon] || Dumbbell;
          return (
            <article
              key={prog.id}
              className="bg-gym-card-light border border-gym-border-light rounded-xl p-7 flex flex-col justify-between hover:shadow-md transition-shadow group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl font-black text-gym-text-dark tracking-tight">
                  {prog.id}
                </span>
                <div className="w-10 h-10 rounded-lg bg-amber-subtle flex items-center justify-center text-amber-brand group-hover:scale-110 transition-transform">
                  <IconComponent size={22} aria-hidden="true" />
                </div>
              </div>

              <div>
                <h3 className="text-xl font-black text-gym-text-dark tracking-wide uppercase mb-2">
                  {prog.title}
                </h3>
                <p className="text-[17px] text-gym-text-body font-normal leading-relaxed">
                  {prog.description}
                </p>
              </div>
            </article>
          );
        })}
      </div>

      {/* Mobile Accordion (visible on mobile only) */}
      <div className="md:hidden flex flex-col gap-3">
        {programsSection.programs.map((prog) => {
          const IconComponent = iconMap[prog.icon] || Dumbbell;
          const isExpanded = expandedId === prog.id;

          return (
            <div
              key={prog.id}
              className="bg-gym-card-light border border-gym-border-light rounded-xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => toggleAccordion(prog.id)}
                aria-expanded={isExpanded}
                aria-controls={`prog-desc-${prog.id}`}
                className="w-full p-4 flex items-center justify-between text-left focus-visible:outline-amber-brand min-h-[52px]"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-black text-gym-text-dark">
                    {prog.id}
                  </span>
                  <div className="w-8 h-8 rounded bg-amber-subtle flex items-center justify-center text-amber-brand">
                    <IconComponent size={18} aria-hidden="true" />
                  </div>
                  <span className="font-black text-[17px] text-gym-text-dark uppercase tracking-tight">
                    {prog.title}
                  </span>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gym-text-muted transition-transform duration-200 ${
                    isExpanded ? 'rotate-180' : ''
                  }`}
                  aria-hidden="true"
                />
              </button>

              {isExpanded && (
                <div
                  id={`prog-desc-${prog.id}`}
                  className="px-4 pb-4 pt-1 border-t border-gym-border-light/40"
                >
                  <p className="text-[17px] text-gym-text-body leading-relaxed">
                    {prog.description}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
