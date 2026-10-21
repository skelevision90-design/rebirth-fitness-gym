/**
 * About.jsx
 * 
 * Ethos & Philosophy section in the warm cream card container.
 * Houses the brand philosophy and the Core Training Tracks.
 * SAFE TO CHANGE:
 * - Ethos text, tag, and paragraphs live in `src/data/siteContent.js`.
 */

import { siteContent } from '../data/siteContent';
import Programs from './Programs';

export default function About() {
  const { about } = siteContent;

  return (
    <section 
      id="about" 
      aria-label="About Rebirth Fitness Gym"
      className="max-w-6xl mx-auto px-4 sm:px-6 my-10 sm:my-16"
    >
      {/* Light Cream Container matching Stitch design */}
      <div className="bg-gym-cream text-gym-text-dark rounded-2xl sm:rounded-3xl p-6 sm:p-12 lg:p-16 border border-gym-border-light shadow-xl">
        
        {/* Ethos Header & Philosophy Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          
          {/* Left Column: Tag + Big Title */}
          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="bg-black text-amber-brand text-[15px] font-black uppercase tracking-wider px-3.5 py-1 rounded mb-4">
              {about.tag}
            </span>
            <h2 className="headline-section text-gym-text-dark uppercase font-black tracking-tight relative">
              {about.headline}
              {/* Amber decorative underline under "BUILT" */}
              <span className="block w-16 h-1.5 bg-amber-brand mt-3 rounded-full" />
            </h2>
          </div>

          {/* Right Column: Paragraphs */}
          <div className="lg:col-span-7 flex flex-col gap-4 pt-1">
            {about.paragraphs.map((p, idx) => (
              <p 
                key={idx} 
                className="text-[17px] sm:text-lg text-gym-text-body font-normal leading-relaxed"
              >
                {p}
              </p>
            ))}
          </div>
        </div>

        {/* Embedded Programs / Core Training Tracks */}
        <Programs />
      </div>
    </section>
  );
}
