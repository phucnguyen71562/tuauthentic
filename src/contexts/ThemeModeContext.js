import { useMediaQuery } from '@material-ui/core';
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import themeModeManager from 'utils/themeStorageManager';

const ThemeModeContext = createContext({});

export const useThemeMode = () => {
  const context = useContext(ThemeModeContext);
  if (context === undefined) {
    throw new Error('useThemeMode must be used within a ThemeModeProvider');
  }
  return context;
};

export function ThemeModeProvider({ children, initialThemeMode = 'light' }) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [themeMode, rawSetThemeMode] = useState(initialThemeMode);

  const setThemeMode = useCallback((value) => {
    themeModeManager.set(value);
    rawSetThemeMode(value);
  }, []);

  const toggleThemeMode = useCallback(() => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  }, [themeMode, setThemeMode]);

  useEffect(() => {
    const persistedPreference = themeModeManager.get();

    if (persistedPreference) {
      rawSetThemeMode(persistedPreference);
    } else {
      setThemeMode(prefersDarkMode ? 'dark' : 'light');
    }
  }, [prefersDarkMode, setThemeMode]);

  const context = {
    themeMode,
    toggleThemeMode,
  };

  return (
    <ThemeModeContext.Provider value={context}>
      {children}
    </ThemeModeContext.Provider>
  );
}

export function useThemeModeValue(lightModeValue, darkModeValue) {
  const { themeMode } = useThemeMode();
  return themeMode === 'light' ? lightModeValue : darkModeValue;
}
