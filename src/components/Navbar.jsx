"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "خانه", path: "/" },
    { title: "درباره ما", path: "/about" },
    { title: "تماس با ما", path: "/contact" },
  ];

  return (
    <nav className="w-full bg-gradient-to-r from-green-500 to-green-700 shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <div className="text-2xl font-bold text-white">لوگو</div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-white font-medium transition-all duration-300 hover:text-green-200"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* دکمه همبرگر */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
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
          <div className="md:hidden bg-gradient-to-b from-green-500 to-green-600 rounded-lg shadow-md">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-white font-medium transition-all duration-300 hover:bg-green-700 hover:rounded-lg"
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
