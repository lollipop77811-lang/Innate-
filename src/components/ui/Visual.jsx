import React from 'react';
import { ParallaxImage } from '../motion/ParallaxImage';

const TONES = {
  light: 'bg-[#F2ECE5] text-[#866452] group-hover:bg-[#866452] group-hover:text-white',
  white: 'bg-white text-[#866452] group-hover:bg-[#866452] group-hover:text-white',
  dark: 'bg-[#D4A373]/15 text-[#D4A373] group-hover:bg-[#D4A373] group-hover:text-[#191412]',
};

// Round icon badge used across tiles and timelines.
export const IconBadge = ({ icon: Icon, tone = 'light', className = '' }) => (
  <span
    className={`inline-flex items-center justify-center w-11 h-11 rounded-full shrink-0 transition-colors duration-500 ${TONES[tone]} ${className}`}
  >
    <Icon className="w-5 h-5" strokeWidth={1.6} />
  </span>
);

// Small card: icon on top, short text below.
export const IconTile = ({ icon, children, tone = 'light', className = '' }) => (
  <div
    className={`group h-full flex items-start gap-3.5 sm:block p-4 sm:p-5 rounded-2xl bg-white border border-[#D9CEC7]/80 shadow-xs transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 hover:shadow-serene hover:border-[#C9B3A5] ${className}`}
  >
    <IconBadge icon={icon} tone={tone} />
    <p className="pt-1 sm:pt-0 sm:mt-3.5 text-sm sm:text-[15px] text-[#43342D] leading-relaxed">{children}</p>
  </div>
);

// Rounded image frame with optional overlay content (quote card, caption).
// On phones a long overlay would hide the photo, so by default it moves below the image
// and only floats on top of the picture from the `sm` breakpoint up.
export const ImageFrame = ({
  src,
  alt,
  aspect = 'aspect-[4/3]',
  className = '',
  overlay = null,
  overlayClass = 'sm:bottom-5 sm:left-5 sm:right-5',
  stackOnMobile = true,
  ...imgProps
}) => (
  <div className="relative">
    <div
      className={`relative rounded-3xl overflow-hidden border border-[#D9CEC7] shadow-serene bg-[#EAE1D6] ${aspect} ${className}`}
    >
      <ParallaxImage src={src} alt={alt} className="block w-full h-full object-cover" {...imgProps} />
      {overlay && (
        <div
          className={`pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#140F0D]/55 to-transparent ${
            stackOnMobile ? 'hidden sm:block' : ''
          }`}
        />
      )}
    </div>
    {overlay && (
      <div
        className={
          stackOnMobile
            ? `relative -mt-6 mx-3 sm:mx-0 sm:mt-0 sm:absolute ${overlayClass}`
            : `absolute bottom-4 left-4 right-4 ${overlayClass}`
        }
      >
        {overlay}
      </div>
    )}
  </div>
);

// Frosted card that sits on top of an image.
export const GlassCard = ({ children, className = '' }) => (
  <div
    className={`p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/80 shadow-lg ${className}`}
  >
    {children}
  </div>
);
