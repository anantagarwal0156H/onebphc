'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const Themecontext = createContext();

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') setDark(true);
  }, []);

  const toggleDark = () => {
    setDark((prev) => {
      localStorage.setItem('theme', !prev ? 'dark' : 'light');
      return !prev;
    });
  };

  return (
    <Themecontext.Provider value={{ dark, toggleDark }}>
      {children}
    </Themecontext.Provider>
  );
}

export function useTheme() {
  return useContext(Themecontext);
}