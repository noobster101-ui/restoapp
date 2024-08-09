"use client";

import { Coffee, Wine, Utensils, Soup, Croissant, Cookie } from "lucide-react";
import Link from "next/link";

const menuItems = [
  { name: "Coffee", icon: Coffee },
  { name: "Beverages", icon: Wine },
  { name: "Food", icon: Utensils, active: true },
  { name: "Appetizer", icon: Soup },
  { name: "Bread", icon: Croissant },
  { name: "Snack", icon: Cookie },
];

export function Sidebar() {
  return (
    <nav className="sidebar flex flex-col bg-white shadow-md p-3">
      {menuItems.map((item) => (
        <Link
          key={item.name}
          href={`/${item.name.toLowerCase()}`}
          className={`sidebar-link flex flex-col items-center p-3 hover:bg-gray-100 ${
            item.active ? "active" : ""
          }`}
        >
          <item.icon className="sidebar-icon w-7 h-7 mb-2" />
          <span className="sidebar-text text-sm font-medium">{item.name}</span>
        </Link>
      ))}
    </nav>
  );
}