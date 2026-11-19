import React from 'react';
import { Link } from 'react-router-dom';
import { BRAND_INFO } from '../../data/siteData';

export const NavLogo = () => {
  return (
    <Link
      to="/"
      className="flex items-center gap-2 sm:gap-3.5 group min-w-0 shrink"
      aria-label="The Innate Bliss Home"
    >
      <img
        src={BRAND_INFO.logo}
        alt="The Innate Bliss Logo"
        className="h-8 sm:h-10 w-auto object-contain transition-transform duration-300 group-hover:scale-105 shrink-0"
        onError={(e) => {
          e.target.style.display = 'none';
        }}
      />
      <div className="flex flex-col justify-center min-w-0">
        <span className="font-serif text-[12.5px] min-[360px]:text-sm sm:text-lg font-semibold tracking-[0.02em] min-[360px]:tracking-[0.05em] sm:tracking-[0.06em] text-[#2D201A] uppercase leading-tight truncate">
          The Innate Bliss
        </span>
        <span className="max-[359px]:hidden text-[8.5px] sm:text-[10px] uppercase tracking-[0.11em] sm:tracking-[0.18em] text-[#8A766C] font-sans font-medium truncate">
          Stop Solving. Start Evolving.
        </span>
      </div>
    </Link>
  );
};
