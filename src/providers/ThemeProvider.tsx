import React, { useEffect, useState } from 'react';
import '../styles/global.css';
import { ThemeContext } from './ThemeContext';

type Theme = 'light' | 'dark';

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('light');

  // Get initial theme from localStorage or system
  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme | null;

    if (saved) {
      setTheme(saved);
      document.body.classList.add(`theme-${saved}`);
    } else {
      const system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      setTheme(system);
      document.body.classList.add(`theme-${system}`);
    }
  }, []);

  // Update theme dynamically
  const toggleTheme = () => {
    const newTheme: Theme = theme === 'light' ? 'dark' : 'light';

    document.body.classList.remove(`theme-${theme}`);
    document.body.classList.add(`theme-${newTheme}`);

    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
