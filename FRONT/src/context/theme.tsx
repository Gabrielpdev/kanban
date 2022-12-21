import React, { useContext, createContext, useState, useEffect } from 'react';
import { DefaultTheme } from 'styled-components';
import { light } from '../styles/themes/light';
import { dark } from '../styles/themes/dark';

interface ThemeContextData {
  theme: DefaultTheme;
  ToggleTheme(): void;
}

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const MyThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  useEffect(() => {
    const localTheme = localStorage.getItem('@Challange:theme');

    setTheme(localTheme === 'dark' ? dark : light);
  }, []);

  const ToggleTheme = () => {
    if (theme?.title === 'light') {
      localStorage.setItem('@Challange:theme', dark.title);
      setTheme(dark);
    } else {
      localStorage.setItem('@Challange:theme', light.title);
      setTheme(light);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}
