"use client";

import { useState, useCallback } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { title: "خانه", path: "/" },
    { title: "درباره ما", path: "/about" },
    { title: "وبلاگ", path: "/blog" },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  return (
    <nav className="w-full bg-gradient-to-r from-blue-600 to-green-500 shadow-lg">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <div className="text-2xl font-bold text-white">لوگو</div>

          {/* شماره تماس برای موبایل */}
          <div className="flex items-center md:hidden text-white font-medium">
            <FaPhoneAlt className="text-green-200 ml-2 text-xl" />
            <p className="text-sm lg:text-base">021-91091100</p>
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center space-x-4 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-white font-medium text-sm lg:text-base px-3 py-1 hover:bg-white hover:text-green-600 rounded-lg transition"
              >
                {item.title}
              </a>
            ))}

            {/* شماره تماس برای دسکتاپ */}
            <div className="hidden md:flex items-center text-white font-medium">
              <FaPhoneAlt className="text-green-200 ml-2 text-xl" />
              <div>
                <p className="text-sm lg:text-base">021-91091100</p>
                <p className="text-xs lg:text-sm text-green-100">
                  مشاوره و پشتیبانی رایگان
                </p>
              </div>
            </div>
          </div>

          {/* دکمه منوی موبایل */}
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
          <div className="mt-2 bg-gradient-to-b from-blue-500 to-green-500 rounded-lg shadow-lg md:hidden">
            <div className="px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="block text-white font-medium text-sm lg:text-base px-3 py-2 hover:bg-white hover:text-green-600 rounded-lg transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
