import { useEffect } from 'react';

/**
 * Scroll reveal driven by data attributes:
 *   data-reveal              element blurs/rises into view
 *   data-reveal-delay="0.2"  optional delay in seconds
 *   data-stagger             direct children reveal one after another
 * Once revealed, the attributes are removed so hover styles work normally.
 * A MutationObserver picks up content mounted later (route changes, modals).
 */
const SELECTOR = '[data-reveal], [data-stagger]';

const finish = (el) => {
  el.removeAttribute('data-reveal');
  el.removeAttribute('data-reveal-delay');
  el.removeAttribute('data-stagger');
  el.classList.remove('is-revealed');
  el.style.removeProperty('--reveal-delay');
  el.style.removeProperty('--i');
};

const reveal = (el) => {
  const stagger = el.hasAttribute('data-stagger');
  const targets = stagger ? [...el.children] : [el];
  el.classList.add('is-revealed');
  targets.forEach((t, i) => {
    if (stagger) t.style.setProperty('--i', i);
    const done = (e) => {
      if (e.target !== t || e.propertyName !== 'opacity') return;
      t.removeEventListener('transitionend', done);
      if (!stagger) finish(t);
      else if (i === targets.length - 1) {
        targets.forEach((c) => c.style.removeProperty('--i'));
        finish(el);
      }
    };
    t.addEventListener('transitionend', done);
  });
};

export const useScrollReveal = () => {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const seen = new WeakSet();

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(entry.target);
          reveal(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    );

    const scan = () => {
      document.querySelectorAll(SELECTOR).forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        if (reduce) return finish(el);
        const delay = el.getAttribute('data-reveal-delay');
        if (delay) el.style.setProperty('--reveal-delay', `${delay}s`);
        io.observe(el);
      });
    };

    scan();
    let frame = 0;
    const mo = new MutationObserver(() => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(scan);
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
      cancelAnimationFrame(frame);
    };
  }, []);
};
