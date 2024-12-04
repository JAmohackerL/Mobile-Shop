"use client";
import { useState, useCallback } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const menuItems = [
    { title: "خانه", path: "/" },
    { title: "درباره ما", path: "/about" },
    { title: "تماس با ما", path: "/contact" },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <nav className="w-full bg-gradient-to-r from-green-400 to-green-600 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* لوگو */}
          <div className="text-2xl font-extrabold text-white">لوگو</div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-white font-medium text-lg transition-all duration-300 ease-in-out hover:text-green-200 hover:scale-105 hover:underline hover:shadow-lg focus:outline-none"
              >
                {item.title}
              </Link>
            ))}
            {/* جستجو */}
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="جستجو ..."
              className="px-4 py-2 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-green-400 w-64"
            />
            {/* ورود و ثبت‌نام */}
            <div className="space-x-4">
              <Link
                href="/login"
                className="text-white font-medium text-lg transition-all duration-300 ease-in-out hover:text-green-200 hover:underline"
              >
                ورود
              </Link>
              <Link
                href="/register"
                className="text-white font-medium text-lg transition-all duration-300 ease-in-out hover:text-green-200 hover:underline"
              >
                ثبت‌نام
              </Link>
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
            <div className="px-2 pt-2 pb-3 space-y-1">
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
              {/* ورود و ثبت‌نام */}
              <div className="space-y-2">
                <Link
                  href="/login"
                  className="block px-3 py-2 rounded-md text-white font-medium text-lg transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:rounded-lg focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  ورود
                </Link>
                <Link
                  href="/register"
                  className="block px-3 py-2 rounded-md text-white font-medium text-lg transition-all duration-300 ease-in-out hover:bg-green-700 hover:scale-105 hover:rounded-lg focus:outline-none"
                  onClick={() => setIsOpen(false)}
                >
                  ثبت‌نام
                </Link>
              </div>
              {/* جستجو */}
              <div className="px-5 py-2">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={handleSearchChange}
                  placeholder="جستجو ..."
                  className="w-full px-2 py-10 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
