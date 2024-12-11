"use client";

import { useState, useCallback, useEffect } from "react";
import { FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // برای بررسی اسکرول

  const menuItems = [
    { title: "خانه", path: "/" },
    { title: "درباره ما", path: "/about" },
    { title: "وبلاگ", path: "/blog" },
  ];

  const toggleMenu = useCallback(() => {
    setIsOpen((prevState) => !prevState);
  }, []);

  // تابعی برای تغییر وضعیت اسکرول
  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // اضافه کردن لیسنر به اسکرول
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full bg-gradient-to-r from-green-600 via-green-500 to-green-400 shadow-xl sticky top-0 z-50 ${
        isScrolled ? "shadow-lg" : ""
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* لوگو و شماره تماس برای موبایل */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            {/* لوگو */}
            <div className="text-2xl font-bold text-white">
              <span className="bg-white text-green-600 px-3 py-1 rounded-lg shadow-md">
                لوگو
              </span>
            </div>
          </div>

          {/* منوی دسکتاپ */}
          <div className="hidden md:flex items-center space-x-6 rtl:space-x-reverse">
            {menuItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="text-white font-medium text-sm lg:text-base px-4 py-2 bg-green-500 hover:bg-white hover:text-green-600 rounded-lg transition duration-300 shadow-md"
              >
                {item.title}
              </a>
            ))}

            {/* شماره تماس برای دسکتاپ */}
            <div className="hidden md:flex items-center text-white font-medium">
              <FaPhoneAlt className="text-white bg-green-600 p-2 rounded-full shadow-lg ml-3 text-xl" />
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
          <div className="mt-2 bg-gradient-to-b from-green-600 to-green-400 rounded-lg shadow-lg md:hidden">
            <div className="px-4 py-3 space-y-3">
              {menuItems.map((item) => (
                <a
                  key={item.path}
                  href={item.path}
                  className="block text-white font-medium text-sm lg:text-base px-4 py-2 bg-green-500 hover:bg-white hover:text-green-600 rounded-lg transition duration-300 shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </a>
              ))}

              {/* شماره تماس برای موبایل */}
              <div className="flex items-center text-white font-medium mt-4">
                <FaPhoneAlt className="text-white bg-green-600 p-2 rounded-full shadow-lg ml-3 text-xl" />
                <div>
                  <p className="text-sm">021-91091100</p>
                  <p className="text-xs text-green-100">
                    مشاوره و پشتیبانی رایگان
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
