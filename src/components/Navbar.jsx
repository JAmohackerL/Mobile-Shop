"use client";

import { useState, useCallback } from "react";
import Link from "next/link";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "خانه", path: "/" },
    { title: "درباره ما", path: "/about" },
    { title: "وبلاگ", path: "/contact" },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg rtl">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <div className="text-2xl font-extrabold text-white">لوگو</div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-white font-medium text-sm lg:text-base px-3 py-1 transition-all duration-300 ease-in-out hover:text-green-200 hover:underline focus:outline-none whitespace-nowrap"
              >
                {item.title}
              </Link>
            ))}
            {/* شماره تماس */}
            <div className="flex items-center space-x-2 text-white font-bold text-sm lg:text-base">
              <FaPhoneAlt className="text-green-200 ml-2" /> {/* فاصله با شماره */}
              <span>021-91091100</span>
              <span className="text-green-100 text-xs lg:text-sm">
                | تماس با ما
              </span>
            </div>
          </div>

          {/* دکمه همبرگر */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
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
          <div className="md:hidden bg-gradient-to-b from-green-500 to-green-600 rounded-lg shadow-xl transform scale-100 transition-all duration-500 ease-out">
            <div className="px-2 pt-2 pb-3 space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-3 py-2 rounded-md text-white font-medium text-lg transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:rounded-lg focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              {/* شماره تماس */}
              <div className="flex items-center justify-center space-x-2 text-white font-bold text-lg">
                <FaPhoneAlt className="text-green-200 ml-2" /> {/* فاصله با شماره */}
                <span>021-910-911-00</span>
                <span className="text-green-100 text-sm">
                  | مشاوره و پشتیبانی رایگان
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
