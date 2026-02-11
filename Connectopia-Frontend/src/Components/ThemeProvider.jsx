import { useEffect } from 'react';
import { useThemeStore } from '../Store/useThemeStore';

const ThemeProvider = ({ children }) => {
  const { theme } = useThemeStore();

  useEffect(() => {
    // Apply theme to the HTML element for DaisyUI
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return children;
};

export default ThemeProvider;
