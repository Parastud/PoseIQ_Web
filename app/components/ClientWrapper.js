'use client';

import { ThemeProvider } from './ThemeProvider';
import Navigation from './Navigation';
import Footer from './Footer';

export default function ClientWrapper({ children }) {
  return (
    <ThemeProvider>
      <Navigation />
      <main>
        {children}
      </main>
      <Footer />
    </ThemeProvider>
  );
}
