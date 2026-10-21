/**
 * ContactSection.jsx
 * 
 * "COME VISIT US" section uniting Join Rebirth form, operating hours,
 * direct call/Instagram cards, and interactive Google Maps embed.
 * SAFE TO CHANGE:
 * - Address, phone, and links live in `src/data/siteContent.js`.
 */

import { Phone, Instagram, ExternalLink } from 'lucide-react';
import { siteContent } from '../data/siteContent';
import JoinForm from './JoinForm';
import OperatingHours from './OperatingHours';

export default function ContactSection() {
  const { joinForm, contact } = siteContent;

  return (
    <section 
      id="contact" 
      aria-label="Location and Contact Information" 
      className="py-16 sm:py-24 bg-gym-black px-4 sm:px-6 max-w-7xl mx-auto"
    >
      {/* Section Header matching Stitch design */}
      <div className="mb-10 sm:mb-14">
        <span className="text-[15px] font-black uppercase tracking-widest text-amber-brand block mb-2">
          {joinForm.tag}
        </span>
        <h2 className="headline-section text-white uppercase font-black tracking-tight">
          {joinForm.headline}
        </h2>
      </div>

      {/* 2-Column Responsive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Join Rebirth Form */}
        <div className="lg:col-span-6 w-full">
          <JoinForm />
        </div>

        {/* Right Column: Hours, Quick Links & Map */}
        <div className="lg:col-span-6 w-full flex flex-col gap-6">
          {/* Real-time highlighted operating hours */}
          <OperatingHours />

          {/* Quick Call & Follow Us Action Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Click to Call Card */}
            <a
              href={`tel:${contact.phone.raw}`}
              className="bg-gym-card border border-gym-border hover:border-amber-brand/50 rounded-xl p-5 flex items-center gap-4 transition-all group focus-visible:outline-amber-brand"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-subtle text-amber-brand flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Phone size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[13px] font-black uppercase tracking-wider text-gym-text-muted">
                  Click to Call
                </p>
                <p className="text-[17px] font-extrabold text-white group-hover:text-amber-brand transition-colors">
                  {contact.phone.display}
                </p>
              </div>
            </a>

            {/* Follow Us on Instagram Card */}
            <a
              href={contact.instagram.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gym-card border border-gym-border hover:border-amber-brand/50 rounded-xl p-5 flex items-center gap-4 transition-all group focus-visible:outline-amber-brand"
            >
              <div className="w-12 h-12 rounded-lg bg-amber-subtle text-amber-brand flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                <Instagram size={22} aria-hidden="true" />
              </div>
              <div>
                <p className="text-[13px] font-black uppercase tracking-wider text-gym-text-muted">
                  Follow Us
                </p>
                <p className="text-[17px] font-extrabold text-white group-hover:text-amber-brand transition-colors">
                  {contact.instagram.handle}
                </p>
              </div>
            </a>
          </div>

          {/* Plain Google Maps Embed matching Stitch design */}
          <div className="relative bg-gym-card border border-gym-border rounded-xl overflow-hidden h-64 sm:h-72 w-full">
            <iframe
              title="Rebirth Fitness Gym Location"
              src={contact.address.mapEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg) contrast(90%)' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
            {/* Top Left Maps Button Overlay matching Stitch screenshot */}
            <a
              href="https://maps.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-3 left-3 bg-gym-black/85 hover:bg-black text-white text-[13px] font-bold px-3 py-1.5 rounded border border-gym-border/80 flex items-center gap-1.5 backdrop-blur-sm transition-colors focus-visible:outline-amber-brand"
            >
              <span>Maps</span>
              <ExternalLink size={13} aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
