# The Innate Bliss

Website for **The Innate Bliss**, the money-mindset and holistic coaching practice of Payal Gulati.

Built with React 18, Vite, Tailwind CSS, Framer Motion and React Router.

## Pages

| Route       | Page                                                                 |
| ----------- | -------------------------------------------------------------------- |
| `/`         | Home: 1:1 Money Unblock Call, Quantum Wealth Matrix Method, booking |
| `/about`    | About the Founder                                                    |
| `/platinum` | Platinum Lifetime Membership                                         |

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build in dist/
```

## Project structure

```
public/
  images/             logo and photos of Payal (served as-is)
  videos/             hero video, add VSL 01_2.mp4 here (see below)
src/
  App.jsx             routes, booking modal, legal modal, contact buttons
  data/siteData.js    brand details, contact info, social links
  pages/              Home, About, Platinum
  components/
    Header/           navbar + mobile menu
    Hero/             hero section and autoplaying video card
    Home/             home page sections
    BookingSection    closing call-to-action
    DiscoveryCallModal booking form
    FloatingActionHub WhatsApp / call / email buttons and quick answers
    LegalModals       privacy policy and terms
    TextReveal        fade-up heading animation
```

## Content to update

- **Phone / WhatsApp number**: `src/data/siteData.js` (currently a placeholder).
- **Hero video**: put the file at `public/videos/VSL 01_2.mp4`. If it's missing, the hero falls back to the
  YouTube upload (`lfiGHm5Hgm8`).
- **Booking form**: `src/components/DiscoveryCallModal.jsx` shows a confirmation but doesn't send the details
  anywhere yet. Connect it to WhatsApp, email or a booking/payment link before going live.
