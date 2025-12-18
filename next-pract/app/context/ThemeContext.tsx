"use client";
import { createContext, useContext, useEffect, useState, useRef, ReactNode } from "react";

interface ThemeContextType {
  darkMode: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize with false to avoid hydration mismatch, then update immediately on mount
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const hasInitialized = useRef<boolean>(false);

  // Initialize theme from localStorage on mount
  useEffect(() => {
    if (hasInitialized.current) return;
    hasInitialized.current = true;
    
    const savedTheme = localStorage.getItem("theme");
    const isDark = savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches);
    
    // Defer state update to avoid synchronous setState in effect
    requestAnimationFrame(() => {
      setDarkMode(isDark);
    });
  }, []);

  // Apply theme to DOM whenever darkMode changes
  useEffect(() => {
    // Only apply if we're on the client
    if (typeof window === "undefined") return;
    
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    // Persist in localStorage (only after initialization to avoid overwriting)
    if (hasInitialized.current) {
      localStorage.setItem("theme", darkMode ? "dark" : "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    // Ensure we're initialized before toggling
    if (!hasInitialized.current && typeof window !== "undefined") {
      hasInitialized.current = true;
    }
    setDarkMode((prev) => {
      const newValue = !prev;
      // Immediately update DOM for instant feedback
      if (typeof window !== "undefined") {
        const root = document.documentElement;
        if (newValue) {
          root.classList.add("dark");
        } else {
          root.classList.remove("dark");
        }
        localStorage.setItem("theme", newValue ? "dark" : "light");
      }
      return newValue;
    });
  };

  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
