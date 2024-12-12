"use client";

import { useState, useCallback, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = [
    { title: "خانه", path: "/" },
    { title: "درباره ما", path: "/about" },
    { title: "وبلاگ", path: "/blog" },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-gradient-to-r from-green-700 via-green-500 to-green-400 sticky top-0 z-50 transition-shadow duration-300 ${
        isScrolled ? "shadow-lg" : "shadow-none"
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Contact */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="text-2xl font-bold text-white">
              <span className="bg-white text-green-600 px-3 py-1 rounded-lg shadow-md">
                لوگو
              </span>
            </div>

            <a
              href="tel:02182800003"
              className="flex items-center text-white font-medium space-x-3 rtl:space-x-reverse"
            >
              <FaPhoneAlt className="text-white bg-green-700 p-3 rounded-full shadow-lg text-4xl transition-all duration-300 transform active:scale-90 active:shadow-none hover:bg-green-800 focus:ring-4 focus:ring-green-300 focus:ring-opacity-50" />
              <div className="text-left">
                <p className="text-lx md:text-2xl font-extrabold">021-82800003</p>
                <p className="text-sm md:text-base text-green-200 font-light">
                  برای تماس کلیک کنید
                </p>
              </div>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-white font-semibold text-sm lg:text-base px-4 py-2 bg-green-500 hover:bg-white hover:text-green-600 rounded-lg transition-all duration-300 shadow-md"
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
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

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-2 bg-gradient-to-b from-green-700 to-green-500 rounded-lg shadow-lg md:hidden">
            <div className="px-4 py-3 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="block text-white font-semibold text-sm lg:text-base px-4 py-2 bg-green-500 hover:bg-white hover:text-green-600 rounded-lg transition-all duration-300 shadow-md"
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
