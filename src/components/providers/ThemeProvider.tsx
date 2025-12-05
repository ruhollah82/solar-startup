import React, { useEffect, useState } from 'react';
import { ConfigProvider, theme as antdTheme } from 'antd';
import { solarTheme, solarDarkTheme } from '../../theme/antd-theme';

interface ThemeProviderProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
  const [isRTL, setIsRTL] = useState(true); // Default to RTL for Persian

  useEffect(() => {
    // Set RTL direction for Persian immediately
    document.documentElement.dir = 'rtl';
    document.documentElement.lang = 'fa';
    document.body.dir = 'rtl';

    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setIsDark(true);
    }

    // Listen for theme changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches);
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  return (
    <ConfigProvider
      direction="rtl"
      theme={{
        algorithm: isDark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        ...isDark ? solarDarkTheme : solarTheme,
      }}
      locale={{
        // Ant Design will automatically use Persian locale when direction is RTL
        // Additional locale configuration can be added here if needed
      }}
    >
      {children}
    </ConfigProvider>
  );
};
