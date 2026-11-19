import React from 'react';
import { motion } from 'framer-motion';

const EASE = [0.16, 1, 0.3, 1];

// Heading that fades up into view. `highlight` (any substring of `text`) gets `highlightClass`.
export const TitleReveal = ({ text, as = 'h2', className = '', delay = 0, highlight = null, highlightClass = '' }) => {
  const Component = motion[as] || motion.h2;
  const index = highlight ? text.indexOf(highlight) : -1;

  return (
    <Component
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay, ease: EASE }}
      className={className}
    >
      {index === -1 ? (
        text
      ) : (
        <>
          {text.slice(0, index)}
          <span className={highlightClass}>{highlight}</span>
          {text.slice(index + highlight.length)}
        </>
      )}
    </Component>
  );
};

export const LineReveal = ({ children, className = '', delay = 0.1 }) => (
  <motion.div
    initial={{ opacity: 0, y: 14 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.7, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);
