import React, { useState } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { MotionConfig, motion } from 'framer-motion';
import { Navbar } from './components/Header/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { PlatinumPage } from './pages/PlatinumPage';
import { DiscoveryCallModal } from './components/DiscoveryCallModal';
import { LegalModal } from './components/LegalModals';
import { FloatingActionHub } from './components/FloatingActionHub';
import { EASE } from './components/TextReveal';
import { useScrollReveal } from './hooks/useScrollReveal';

export function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [legalModalType, setLegalModalType] = useState(null);

  const location = useLocation();
  useScrollReveal();

  const openBooking = () => setIsBookingOpen(true);

  return (
    <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <div className="min-h-screen bg-[#F9F6F3] text-[#2D201A] flex flex-col font-sans overflow-x-clip selection:bg-[#E8DCD4] selection:text-[#2D201A]">
        <Navbar onOpenBooking={openBooking} />
        <motion.main
          key={location.pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="flex-grow"
        >
          <Routes location={location}>
            <Route path="/" element={<HomePage onOpenBooking={openBooking} />} />
            <Route path="/about" element={<AboutPage onOpenBooking={openBooking} />} />
            <Route path="/platinum" element={<PlatinumPage onOpenBooking={openBooking} />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </motion.main>
        <Footer
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
          onOpenBooking={openBooking}
        />
        <DiscoveryCallModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
        <LegalModal
          isOpen={!!legalModalType}
          type={legalModalType}
          onClose={() => setLegalModalType(null)}
        />
        <FloatingActionHub onOpenBooking={openBooking} />
      </div>
    </MotionConfig>
  );
}

export default App;
