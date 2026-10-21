/**
 * siteContent.js
 * 
 * SINGLE SOURCE OF TRUTH for all content, text, links, hours, pricing,
 * and contact details on the Rebirth Fitness Gym website.
 * 
 * EDITING GUIDE:
 * - Replace any field marked `placeholder: true` with real gym data.
 * - DO NOT use square brackets or "[add]" in any live string.
 * - Changing values here will immediately update every component on the site.
 */

export const siteContent = {
  // Brand details
  brand: {
    name: "Rebirth Fitness Gym",
    shortName: "Rebirth Fitness",
    tagline: "Time to born again",
    logoPath: "/images/logo.svg",
    logoPng: "/images/logo.png",
    heroBgImage: "/images/hero-bg.jpg",
    copyrightYear: "2025",
    subTagline: "Built for Iron & Community.",
  },

  // Top Announcement Banner
  topBanner: {
    enabled: true,
    text: "Special seasonal enrollment active — Claim your free trial session",
    ctaText: "CLAIM →",
    targetSection: "join", // scrolls to #join
  },

  // Contact & Social channels
  contact: {
    phone: {
      display: "+91 98765 43210",
      raw: "919876543210",
      placeholder: true, // Needs real gym phone number
    },
    whatsapp: {
      number: "919876543210",
      defaultMessage: "Hi, I found Rebirth Fitness Gym on Instagram and want to know about membership.",
      placeholder: true, // Needs real gym WhatsApp number
    },
    instagram: {
      handle: "@rebirthfitnessgym",
      url: "https://www.instagram.com/rebirthfitnessgym",
      placeholder: true, // Needs real Instagram URL
    },
    address: {
      display: "Rebirth Fitness Gym, Central Iron District",
      short: "Main Ring Road, Central City",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112061.0926272978!2d77.1000!3d28.6139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
      placeholder: true, // Needs real gym address & map URL
    },
  },

  // Navigation Links
  navigation: [
    { label: "About", href: "#about" },
    { label: "Programs", href: "#programs" },
    { label: "Memberships", href: "#memberships" },
    { label: "Hours & Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    badgeText: "REBIRTH FITNESS GYM",
    titlePrefix: "TIME TO",
    titleHighlight: "BORN AGAIN.",
    description: "Raw iron, purposeful training, and a real space to rebuild your strength from day one.",
    primaryCta: {
      label: "Join Now",
      target: "#join",
    },
    secondaryCta: {
      label: "See Plans",
      target: "#memberships",
    },
  },

  // About / Ethos Section
  about: {
    tag: "ETHOS & DISCIPLINE",
    headline: "BUILT FOR IRON & COMMUNITY.",
    paragraphs: [
      "Rebirth Fitness was built around a singular philosophy: strength is earned through honest hard work, progressive overload, and consistent dedication. We are not a trend-driven fitness lounge; we are an authentic iron house where technique and camaraderie take priority over vanity.",
      "Whether stepping onto the lifting platform for the first time or striving for personal powerlifting milestones, our coaches instill foundational biomechanics, grit, and lifelong athletic resilience.",
    ],
  },

  // Programs / Core Training Tracks
  programsSection: {
    tag: "CORE TRAINING TRACKS",
    programs: [
      {
        id: "01",
        title: "STRENGTH & CONDITIONING",
        icon: "Dumbbell",
        description: "Foundational compound barbell lifts and athletic conditioning formulated to build absolute muscular power and endurance.",
      },
      {
        id: "02",
        title: "FUNCTIONAL FITNESS",
        icon: "Flame",
        description: "High-output metabolic routines, rotational core work, and mobility drills engineered for full-body durability and daily life stamina.",
      },
      {
        id: "03",
        title: "PERSONAL COACHING",
        icon: "UserCheck",
        description: "Direct, 1-on-1 mentorship, strict form diagnostics, and tailored program periodization aligned directly with your personal physical aims.",
      },
      {
        id: "04",
        title: "WEIGHT MANAGEMENT",
        icon: "Scale",
        description: "Structured hypertrophy and metabolic routines paired with honest, sustainable dietary guidelines for healthy body recomposition.",
      },
    ],
  },

  // Membership Plans
  memberships: {
    tag: "TRANSPARENT MEMBERSHIPS",
    headline: "PICK YOUR PLAN",
    subtitle: "No hidden admission costs. No cancellation trickery. Pure iron and honest coaching.",
    plans: [
      {
        id: "monthly",
        name: "MONTHLY KICKSTART",
        price: "₹2,500",
        period: "/mo",
        isPopular: false,
        features: [
          "Full floor & equipment access",
          "Locker & shower facilities",
          "Initial form & movement assessment",
        ],
        ctaText: "Inquire Plan",
      },
      {
        id: "quarterly",
        name: "QUARTERLY COMMITMENT",
        badge: "REBIRTH ELITE • MOST POPULAR",
        price: "₹6,500",
        period: "/quarter",
        isPopular: true,
        features: [
          "Full floor & free-weight access",
          "Structured workout routine roadmap",
          "Priority floor trainer support",
          "Monthly strength check-ins",
        ],
        ctaText: "Inquire Plan",
      },
      {
        id: "annual",
        name: "ANNUAL TRANSFORMATION",
        price: "₹20,000",
        period: "/yr",
        isPopular: false,
        features: [
          "Complete 365-day full pass",
          "4 complimentary guest passes",
          "Bi-monthly body recomposition review",
          "Locker priority reserve",
        ],
        ctaText: "Inquire Plan",
      },
    ],
  },

  // Floor Operating Hours
  operatingHours: {
    title: "FLOOR OPERATING HOURS",
    schedule: [
      { day: "Monday", hours: "05:30 AM – 10:00 PM", dayIndex: 1 },
      { day: "Tuesday", hours: "05:30 AM – 10:00 PM", dayIndex: 2 },
      { day: "Wednesday", hours: "05:30 AM – 10:00 PM", dayIndex: 3 },
      { day: "Thursday", hours: "05:30 AM – 10:00 PM", dayIndex: 4 },
      { day: "Friday", hours: "05:30 AM – 10:00 PM", dayIndex: 5 },
      { day: "Saturday", hours: "06:00 AM – 09:00 PM", dayIndex: 6 },
      { day: "Sunday", hours: "07:00 AM – 01:00 PM", dayIndex: 0 },
    ],
    placeholder: false,
  },

  // Join Rebirth Form Section
  joinForm: {
    tag: "GET GROUNDED",
    headline: "COME VISIT US",
    cardTitle: "JOIN REBIRTH",
    description: "Drop your details below. We reply directly via WhatsApp to answer questions or set up your trial.",
    fields: {
      name: {
        label: "FULL NAME",
        placeholder: "e.g. Rahul Sharma",
      },
      phone: {
        label: "PHONE NUMBER (10 DIGITS)",
        placeholder: "9876543210",
      },
      goal: {
        label: "PRIMARY FITNESS GOAL",
        options: [
          "Strength & Powerlifting",
          "Functional Fitness",
          "Personal Coaching",
          "Weight Management",
          "General Fitness & Health",
        ],
      },
    },
    submitButtonText: "Send via WhatsApp",
    successMessage: "Connecting you to WhatsApp...",
  },

  // Sticky Mobile Bottom Bar
  mobileStickyBar: {
    callLabel: "Call",
    whatsappLabel: "WhatsApp",
    joinLabel: "Join Now",
  },
};
