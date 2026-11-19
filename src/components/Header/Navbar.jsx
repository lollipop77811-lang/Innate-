import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';
import { NavCta } from './NavCta';
import { MobileDrawer } from './MobileDrawer';
import { EASE } from '../TextReveal';

const NAVIGATION_ITEMS = [
  { name: 'Home', path: '/' },
  { name: 'About the Founder', path: '/about' },
  { name: 'Platinum Membership', path: '/platinum' },
];

export const Navbar = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        className={`fixed top-0 left-0 right-0 z-50 w-full h-16 sm:h-20 border-b transition-[background-color,box-shadow,border-color,backdrop-filter] duration-500 ${
          scrolled
            ? 'bg-[#F9F6F3]/80 backdrop-blur-xl border-[#D9CEC7] shadow-[0_6px_24px_rgba(45,32,26,0.06)]'
            : 'bg-[#F9F6F3]/95 backdrop-blur-md border-[#D9CEC7]/60 shadow-none'
        }`}
      >
        <div className="max-w-7xl mx-auto h-full px-5 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4">
          <NavLogo />
          <NavMenu navigationItems={NAVIGATION_ITEMS} />
          <NavCta onOpenBooking={onOpenBooking} />
          <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0 lg:hidden">
            <button
              type="button"
              onClick={onOpenBooking}
              className="sm:hidden btn btn-primary !py-2.5 !px-3.5 min-[360px]:!px-4 !text-[11px]"
            >
              <span>Book</span>
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 min-[360px]:p-2.5 rounded-full text-[#2D201A] hover:bg-[#F2ECE5] transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.header>
      <MobileDrawer
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navigationItems={NAVIGATION_ITEMS}
        onOpenBooking={onOpenBooking}
      />
    </>
  );
};
