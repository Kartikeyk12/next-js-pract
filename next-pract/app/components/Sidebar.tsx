"use client";
import Link from "next/link";
import { useSidebar } from "../context/SidebarContext";

const menuItems = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Profile", href: "/profile" },
  { name: "Settings", href: "/settings" },
  { name: "Help", href: "/help" },
];

export default function Sidebar() {
  const { isOpen, toggle } = useSidebar();
  function navigateHome() {
    window.location.href = "/";
  }

  return (
    <aside className={`transition-all duration-300 flex flex-col ${isOpen ? "w-64" : "w-16"} bg-purple-200 dark:bg-gray-900 text-black dark:text-white`}>
      <div className="flex items-center justify-between p-4 border-b border-purple-300">
        <span onClick={navigateHome} className={`${isOpen ? "block" : "hidden"} font-bold text-lg`}>Logo</span>
        <button onClick={toggle} className="text-black focus:outline-none dark:text-white">
          {isOpen ? "⮜" : "⮞"}
        </button>
      </div>
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="block p-2 rounded hover:bg-purple-300 transition-colors"
          >
            {isOpen ? item.name : item.name[0]}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
