
import React, { createContext, useContext } from 'react';

const palette = {
  bg: '#0b1020',
  card: '#141a33',
  cardAlt: '#10162b',
  text: '#e6ebff',
  subtext: '#9fb0ff',
  primary: '#7c5cff',
  accent: '#00e6b8',
};

const radii = { lg: 24, md: 16, sm: 10 } as const;
const spacing = { sm: 10, md: 16, lg: 22 } as const;

const ThemeContext = createContext({ palette, radii, spacing });
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <ThemeContext.Provider value={{ palette, radii, spacing }}>{children}</ThemeContext.Provider>
);
export const useTheme = () => useContext(ThemeContext);
