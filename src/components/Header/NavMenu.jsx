import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

export const NavMenu = ({ navigationItems }) => (
  <nav className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-7">
    {navigationItems.map((item) => (
      <NavLink
        key={item.name}
        to={item.path}
        end={item.path === '/'}
        className={({ isActive }) =>
          `text-xs uppercase tracking-[0.11em] font-medium transition-colors py-2 relative group whitespace-nowrap ${
            isActive ? 'text-[#866452] font-semibold' : 'text-[#6B584E] hover:text-[#2D201A]'
          }`
        }
      >
        {({ isActive }) => (
          <>
            {item.name}
            {isActive ? (
              <motion.span
                layoutId="nav-underline"
                transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                className="absolute bottom-0.5 left-0 right-0 h-[1.5px] bg-[#C78460]"
              />
            ) : (
              <span className="absolute bottom-0.5 left-0 right-0 h-[1.5px] bg-[#C78460]/70 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
            )}
          </>
        )}
      </NavLink>
    ))}
  </nav>
);
