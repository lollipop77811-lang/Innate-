// TODO: replace the placeholder phone number with the real business number.
const PHONE = '+919811000000';

export const BRAND_INFO = {
  name: 'The Innate Bliss',
  founder: 'Payal Gulati',
  tagline: 'Stop Solving. Start Evolving.',

  logo: '/images/logo.png',
  founderPhoto: '/images/payal-portrait-hd.jpg',
  coachPayal: '/images/coach-payal.webp',
  heroThumb: '/images/hero-payal-thumb.jpg',

  socialLinks: {
    youtube: 'https://www.youtube.com/@TheInnateBliss',
    instagram: 'https://www.instagram.com/theinnatebliss',
    linkedin: 'https://www.linkedin.com/company/theinnatebliss',
    website: 'https://www.theinnatebliss.com',
  },

  contact: {
    email: 'connect@theinnatebliss.com',
    phone: PHONE,
    whatsappUrl: `https://wa.me/${PHONE.replace('+', '')}?text=${encodeURIComponent(
      'Hi The Innate Bliss team, I would like to know more about the 1:1 Money Unblock Call.'
    )}`,
  },
};
