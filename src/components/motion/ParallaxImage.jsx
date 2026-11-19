import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';

// Image that drifts slightly inside its (overflow-hidden) frame while scrolling, and zooms a touch on hover.
export const ParallaxImage = ({ className = '', strength = 6, ...imgProps }) => {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [`-${strength}%`, `${strength}%`]);

  return (
    <motion.div
      ref={ref}
      style={reduce ? undefined : { y, scale: 1 + strength / 50 }}
      className="w-full h-full will-change-transform"
    >
      <img
        {...imgProps}
        className={`${className} transition-transform duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-[1.04]`}
      />
    </motion.div>
  );
};
