"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title:"خانه ", path: "/" },
    { title: "درباره ما", path: "/" },
    { title: "تماس باما ", path: "/" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-secondary">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <div className="text-2xl font-">لوگو</div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="hover:text-primary text-gray-700  transition-colors pr-10 font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* دکمه همبرگر */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* منوی موبایل */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 rounded-lg bg-white">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-base hover:text-primary hover:rounded-2xl hover:bg-gray-200 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
