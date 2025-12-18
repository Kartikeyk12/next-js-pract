"use client";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center border-b border-purple-200 dark:border-gray-700">
      <h1 className="text-xl font-semibold text-black dark:text-white">App Header</h1>
      <div className="space-x-4 flex items-center">
        <button
          className="px-3 py-1 bg-purple-300 dark:bg-purple-700 rounded hover:bg-purple-400 dark:hover:bg-purple-600 transition"
          onClick={toggleTheme}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </header>
  );
}
