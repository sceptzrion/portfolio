"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: Theme;
  mounted: boolean;
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext =
  createContext<ThemeContextValue | null>(null);

const STORAGE_KEY = "rizqi-theme";
const THEME_CHANGE_EVENT = "rizqi-theme-change";

function applyTheme(theme: Theme) {
  const root = document.documentElement;

  root.classList.toggle(
    "dark",
    theme === "dark",
  );

  root.dataset.theme = theme;
  root.style.colorScheme = theme;
}

function getThemeSnapshot(): Theme {
  return document.documentElement.classList.contains(
    "dark",
  )
    ? "dark"
    : "light";
}

function getServerThemeSnapshot(): Theme {
  return "light";
}

function subscribeTheme(
  callback: () => void,
) {
  const handleThemeChange = () => {
    callback();
  };

  const handleStorage = (
    event: StorageEvent,
  ) => {
    if (event.key !== STORAGE_KEY) {
      return;
    }

    const nextTheme: Theme =
      event.newValue === "dark"
        ? "dark"
        : "light";

    applyTheme(nextTheme);
    callback();
  };

  window.addEventListener(
    THEME_CHANGE_EVENT,
    handleThemeChange,
  );

  window.addEventListener(
    "storage",
    handleStorage,
  );

  return () => {
    window.removeEventListener(
      THEME_CHANGE_EVENT,
      handleThemeChange,
    );

    window.removeEventListener(
      "storage",
      handleStorage,
    );
  };
}

function subscribeMounted() {
  return () => {};
}

function getMountedSnapshot() {
  return true;
}

function getServerMountedSnapshot() {
  return false;
}

export function ThemeProvider({
  children,
}: {
  children: ReactNode;
}) {
  const theme = useSyncExternalStore(
    subscribeTheme,
    getThemeSnapshot,
    getServerThemeSnapshot,
  );

  const mounted = useSyncExternalStore(
    subscribeMounted,
    getMountedSnapshot,
    getServerMountedSnapshot,
  );

  const setTheme = useCallback(
    (newTheme: Theme) => {
      applyTheme(newTheme);

      try {
        window.localStorage.setItem(
          STORAGE_KEY,
          newTheme,
        );
      } catch {
        // Theme still works if storage is unavailable.
      }

      window.dispatchEvent(
        new Event(
          THEME_CHANGE_EVENT,
        ),
      );
    },
    [],
  );

  const toggleTheme = useCallback(() => {
    setTheme(
      theme === "light"
        ? "dark"
        : "light",
    );
  }, [setTheme, theme]);

  const value = useMemo(
    () => ({
      theme,
      mounted,
      setTheme,
      toggleTheme,
    }),
    [
      mounted,
      setTheme,
      theme,
      toggleTheme,
    ],
  );

  return (
    <ThemeContext.Provider
      value={value}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context =
    useContext(ThemeContext);

  if (!context) {
    throw new Error(
      "useTheme must be used inside ThemeProvider",
    );
  }

  return context;
}