/**
 * OperatingHours.jsx
 * 
 * Displays gym operating schedule with automatic real-time highlight of today's day.
 * SAFE TO CHANGE:
 * - Schedule times and days live in `src/data/siteContent.js`.
 */

import { Clock } from 'lucide-react';
import { siteContent } from '../data/siteContent';

export default function OperatingHours() {
  const { operatingHours } = siteContent;
  
  // Real-time current day of week (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  const currentDayIndex = new Date().getDay();

  return (
    <div className="bg-gym-card border border-gym-border rounded-xl p-6 sm:p-7 shadow-lg">
      {/* Card Header with Amber Clock Icon */}
      <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gym-border/60">
        <Clock size={22} className="text-amber-brand flex-shrink-0" aria-hidden="true" />
        <h3 className="text-lg sm:text-xl font-black uppercase tracking-wider text-gym-text-light">
          {operatingHours.title}
        </h3>
      </div>

      {/* Schedule Table/List */}
      <ul className="flex flex-col gap-2.5" aria-label="Gym operating hours by day">
        {operatingHours.schedule.map((item) => {
          const isToday = item.dayIndex === currentDayIndex;

          return (
            <li
              key={item.day}
              className={`flex items-center justify-between py-2 px-3 rounded-lg text-[16px] sm:text-[17px] transition-colors ${
                isToday
                  ? 'bg-amber-subtle border border-amber-border text-amber-brand font-bold'
                  : 'text-gym-text-muted hover:text-gym-text-light'
              }`}
            >
              <div className="flex items-center gap-2">
                <span>{item.day}</span>
                {isToday && (
                  <span className="text-[14px] bg-amber-brand text-black font-black px-2 py-0.5 rounded-full tracking-wide">
                    Today
                  </span>
                )}
              </div>
              <span className={isToday ? 'text-amber-brand font-extrabold' : 'text-gym-text-light font-medium'}>
                {item.hours}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
