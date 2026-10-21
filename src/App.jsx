/**
 * App.jsx
 * 
 * Main layout assembler for Rebirth Fitness Gym.
 * Renders all sections in precise Stitch design order:
 * 1. TopBanner
 * 2. Navbar
 * 3. Hero (Time to born again)
 * 4. About & Programs (Built for Iron & Community / Core Training Tracks)
 * 5. Plans (Transparent Memberships / Pick Your Plan)
 * 6. ContactSection (Come Visit Us / Join Rebirth / Floor Operating Hours / Map)
 * 7. Footer
 * 8. StickyMobileBar (Mobile only)
 */

import TopBanner from './components/TopBanner';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Plans from './components/Plans';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import StickyMobileBar from './components/StickyMobileBar';

export default function App() {
  return (
    <div className="min-h-screen bg-gym-black text-gym-text-light flex flex-col font-sans selection:bg-amber-brand selection:text-black">
      {/* Top Announcement Banner */}
      <TopBanner />

      {/* Main Sticky Navbar */}
      <Navbar />

      {/* Main Content Landmark */}
      <main id="main-content" className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About & Programs Section (Ethos & Core Training Tracks) */}
        <About />

        {/* Membership Plans Section */}
        <Plans />

        {/* Location, Contact & Join Form Section */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Sticky Mobile Actions Bar (Call, WhatsApp, Join) */}
      <StickyMobileBar />
    </div>
  );
}
