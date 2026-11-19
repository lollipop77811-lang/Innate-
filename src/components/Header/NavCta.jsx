import React from 'react';

export const NavCta = ({ onOpenBooking }) => (
  <div className="hidden sm:flex items-center shrink-0">
    <button
      type="button"
      onClick={onOpenBooking}
      className="btn btn-primary !py-2 !px-5 text-[11px] sm:text-xs"
    >
      Book
    </button>
  </div>
);
