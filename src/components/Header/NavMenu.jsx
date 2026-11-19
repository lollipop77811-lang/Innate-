import React from 'react';
import { NavLink } from 'react-router-dom';

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
            <span
              className={`absolute bottom-0.5 left-0 h-[1.5px] bg-[#C78460] transition-all duration-300 ${
                isActive ? 'w-full' : 'w-0 group-hover:w-full'
              }`}
            />
          </>
        )}
      </NavLink>
    ))}
  </nav>
);
