'use client';

import { useEffect } from 'react';

export function ThemeProvider({ children }) {
  useEffect(() => {
    // Always apply dark mode
    document.documentElement.classList.add('dark');
  }, []);

  return children;
}
