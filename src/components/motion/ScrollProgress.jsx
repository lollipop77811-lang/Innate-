import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="absolute left-0 right-0 bottom-[-1px] h-[2px] origin-left bg-gradient-to-r from-[#C78460] via-[#D4A373] to-[#866452]"
    />
  );
};
