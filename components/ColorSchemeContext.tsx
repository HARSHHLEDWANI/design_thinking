'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

export const SCHEMES = [
  { name: 'White Smoke', value: '#f4f4f4' },
  { name: 'Fall Green',  value: '#dae8b6' },
  { name: 'Blue Chalk',  value: '#dcd5ea' },
  { name: 'Misty Rose',  value: '#ffd3f1' },
];

interface ColorSchemeContextValue {
  scheme: string;
  setScheme: (color: string) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextValue>({
  scheme: '#f4f4f4',
  setScheme: () => {},
});

export function ColorSchemeProvider({ children }: { children: React.ReactNode }) {
  const [scheme, setSchemeState] = useState('#f4f4f4');

  useEffect(() => {
    const stored = localStorage.getItem('color-scheme');
    if (stored) setSchemeState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--scheme-bg', scheme);
    document.body.style.backgroundColor = scheme;
    localStorage.setItem('color-scheme', scheme);
  }, [scheme]);

  const setScheme = (color: string) => setSchemeState(color);

  return (
    <ColorSchemeContext.Provider value={{ scheme, setScheme }}>
      {children}
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme() {
  return useContext(ColorSchemeContext);
}
