import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { NavLink } from 'react-router-dom';

export const MobileDrawer = ({ isOpen, onClose, navigationItems, onOpenBooking }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-16 sm:top-20 bottom-0 z-50 bg-[#F9F6F3] border-t border-[#D9CEC7] md:hidden overflow-y-auto shadow-2xl"
      >
        <div className="max-w-xl mx-auto w-full px-6 py-8 flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            {navigationItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                end={item.path === '/'}
                onClick={onClose}
                className={({ isActive }) =>
                  `px-4 py-3.5 rounded-2xl text-xl font-serif font-medium transition-colors ${
                    isActive
                      ? 'bg-[#F2ECE5] text-[#866452] font-semibold border border-[#D9CEC7]'
                      : 'text-[#2D201A] hover:bg-[#F2ECE5]/70 hover:text-[#866452]'
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="pt-5 border-t border-[#D9CEC7] flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="w-full btn btn-primary py-3.5 text-xs"
            >
              <span>Apply for a Wealth Breakthrough Call</span>
            </button>
            <p className="text-center text-xs text-[#8A766C]">
              The Innate Bliss · Stop Solving. Start Evolving.
            </p>
          </div>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
);
