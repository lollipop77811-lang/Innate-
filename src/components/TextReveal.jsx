import React from 'react';
import { motion } from 'framer-motion';

export const EASE = [0.16, 1, 0.3, 1];

const wordVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(6px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.8, ease: EASE } },
};

// Splits text into words, flagging the words that belong to `highlight`.
const toWords = (text, highlight) => {
  const index = highlight ? text.indexOf(highlight) : -1;
  const parts =
    index === -1
      ? [{ str: text, hl: false }]
      : [
          { str: text.slice(0, index), hl: false },
          { str: highlight, hl: true },
          { str: text.slice(index + highlight.length), hl: false },
        ];
  return parts.flatMap(({ str, hl }) =>
    str
      .split(' ')
      .filter(Boolean)
      .map((word) => ({ word, hl }))
  );
};

// Heading that reveals word by word (blur + rise). `onMount` animates immediately instead of on scroll.
export const TitleReveal = ({
  text,
  as = 'h2',
  className = '',
  delay = 0,
  highlight = null,
  highlightClass = '',
  onMount = false,
}) => {
  const Component = motion[as] || motion.h2;
  const words = toWords(text, highlight);
  const trigger = onMount
    ? { animate: 'visible' }
    : { whileInView: 'visible', viewport: { once: true, margin: '-60px' } };

  return (
    <Component
      initial="hidden"
      {...trigger}
      transition={{ staggerChildren: 0.06, delayChildren: delay }}
      className={className}
      aria-label={text}
    >
      {words.map(({ word, hl }, i) => (
        <React.Fragment key={i}>
          <motion.span
            aria-hidden="true"
            variants={wordVariants}
            className={`inline-block will-change-transform ${hl ? highlightClass : ''}`}
          >
            {word}
          </motion.span>
          {i < words.length - 1 && ' '}
        </React.Fragment>
      ))}
    </Component>
  );
};

export const LineReveal = ({ children, className = '', delay = 0.1 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, filter: 'blur(6px)' }}
    whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
    viewport={{ once: true, margin: '-40px' }}
    transition={{ duration: 0.9, delay, ease: EASE }}
    className={className}
  >
    {children}
  </motion.div>
);
