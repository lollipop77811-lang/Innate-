import React from 'react';
import { Hero } from '../components/Hero/Hero';
import { MindsetIntroSection } from '../components/Home/MindsetIntroSection';
import { ProblemSection } from '../components/Home/ProblemSection';
import { ReframeSection } from '../components/Home/ReframeSection';
import { QuantumWealthSection } from '../components/Home/QuantumWealthSection';
import { WhoWeWorkWithSection } from '../components/Home/WhoWeWorkWithSection';
import { BookingSection } from '../components/BookingSection';

export const HomePage = ({ onOpenBooking }) => (
  <>
    <Hero onOpenBooking={onOpenBooking} />
    <MindsetIntroSection onOpenBooking={onOpenBooking} />
    <ProblemSection />
    <ReframeSection />
    <QuantumWealthSection onOpenBooking={onOpenBooking} />
    <WhoWeWorkWithSection />
    <BookingSection onOpenBookingModal={onOpenBooking} />
  </>
);
