# Rebirth Fitness Gym — Production Website

A fast, responsive, and accessible single-page website for **Rebirth Fitness Gym** ("Time to born again"), built to match the Stitch design.

---

## 🏋️ Stack & Architecture

- **Framework:** React 19 + Vite 6
- **Styling:** Tailwind CSS v4 with design tokens mapped to CSS variables
- **Typography:** Local `@fontsource-variable/plus-jakarta-sans` (no external Google Fonts requests)
- **Icons:** Inline `lucide-react` (SVG, zero webfont glitches)
- **State & Data:** Static Single-Source-of-Truth in `src/data/siteContent.js`
- **Zero Backend / Zero Database:** Direct WhatsApp lead integration via `wa.me`

---

## 🚀 Quickstart

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Production Build
```bash
npm run build
```
Generates optimized static assets in `/dist`.

### 4. Preview Production Build
```bash
npm run preview
```

---

## ✏️ How to Edit Content & Settings

### 1. Changing Text, Phone, WhatsApp, and Prices
Every piece of text, phone number, membership tier, operating hour, and social link lives in **one file**:
👉 `src/data/siteContent.js`

- **Phone Number:** Update `contact.phone.display` and `contact.phone.raw`.
- **WhatsApp Number:** Update `contact.whatsapp.number`.
- **Membership Plans & Prices:** Edit `memberships.plans` array.
- **Operating Hours:** Edit `operatingHours.schedule`. The website automatically calculates and tags the current day with `(Today)`.
- **Programs / Tracks:** Edit `programsSection.programs`.
- **Google Maps:** Update `contact.address.mapEmbedUrl` with your gym's Google Maps embed link.

### 2. Replacing Images & Logos
All images live in the `/public/images/` directory:
- **Logo:** Replace `/public/images/logo.png` and `/public/images/logo.svg`.
- **Favicon:** Replace `/public/favicon.svg`.
- **Hero Background:** Replace `/public/images/hero-bg.jpg`.

### 3. Modifying Colors & Typography
Design tokens are centralized in `src/index.css` inside the `@theme` block:
```css
@theme {
  --color-amber-brand: #F5A800;   /* Brand Golden-Amber */
  --color-amber-hover: #E09800;
  --color-gym-black: #0E0E0E;     /* Deep Iron Black */
  --color-gym-cream: #FBF6EC;     /* Warm Ethos Background */
  ...
}
```

### 4. Adding or Removing a Section
- **To Remove a Section:** Open `src/App.jsx` and comment out or remove the relevant component (e.g. `<Plans />` or `<About />`), and remove the corresponding link in `src/data/siteContent.js` under `navigation`.
- **To Add a Section:** Create a new component in `src/components/`, export it, import it in `src/App.jsx`, and add its navigation link to `src/data/siteContent.js`.

---

## 🌐 Free Deployment

### Deploy to Vercel
1. Push this repository to GitHub or GitLab.
2. Sign in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Select your repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**.

### Deploy to Netlify
1. Sign in to [Netlify](https://www.netlify.com).
2. Click **"Add new site"** > **"Import an existing project"**.
3. Connect your repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **"Deploy site"**.

---

## 🛡️ Security & Privacy
- Zero external tracking or external font requests.
- No secrets or credentials needed in codebase.
- Form submissions open directly in user's WhatsApp with URL-encoded parameters.
- Content Security Policy (CSP) headers enabled in `index.html`.
