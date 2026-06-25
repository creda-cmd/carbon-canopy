import { createContext, useContext, useState, useEffect } from 'react';

const themes = {
  default: {
    name: 'default',
    colors: {
      background: 'bg-white',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      border: 'border-gray-200',
      card: 'bg-white',
      nav: 'bg-forest-200',
      footer: 'bg-forest-900',
    }
  },
  light: {
    name: 'light',
    colors: {
      background: 'bg-gray-50',
      text: 'text-gray-900',
      muted: 'text-gray-600',
      border: 'border-gray-300',
      card: 'bg-white',
      nav: 'bg-white',
      footer: 'bg-gray-100',
    }
  },
  dark: {
    name: 'dark',
    colors: {
      background: 'bg-gray-900',
      text: 'text-gray-100',
      muted: 'text-gray-400',
      border: 'border-gray-700',
      card: 'bg-gray-800',
      nav: 'bg-gray-800',
      footer: 'bg-gray-950',
    }
  }
};

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    const saved = localStorage.getItem('carboncanopy-theme');
    return saved && themes[saved] ? saved : 'default';
  });

  useEffect(() => {
    localStorage.setItem('carboncanopy-theme', theme);
    
    // Update document classes
    const root = document.documentElement;
    root.classList.remove('theme-default', 'theme-light', 'theme-dark');
    root.classList.add(`theme-${theme}`);
    
    // Update body classes
    const body = document.body;
    body.classList.remove('bg-white', 'bg-gray-50', 'bg-gray-900');
    body.classList.add(themes[theme].colors.background.replace('bg-', ''));
  }, [theme]);

  const value = {
    theme,
    setTheme,
    themes,
    currentTheme: themes[theme],
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}
