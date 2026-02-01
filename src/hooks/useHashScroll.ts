'use client';

import { useEffect } from 'react';

export const useHashScroll = () => {
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const scrollToHash = () => {
      const { hash } = window.location;
      if (!hash) return;
      const id = hash.slice(1);
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };

    const onHashChange = () => {
      requestAnimationFrame(scrollToHash);
    };

    onHashChange();
    window.addEventListener('hashchange', onHashChange);

    return () => {
      window.removeEventListener('hashchange', onHashChange);
    };
  }, []);
};
