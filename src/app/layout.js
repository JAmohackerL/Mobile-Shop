import Footer from "@/components/Footer";
import "./globals.css";
import Navbar from "@/components/Navbar";

import localFont from "next/font/local";

// فونت‌های شخصی‌سازی‌شده
const myFont = localFont({
  src: [
    {
      path: "./fonts/Estedad-Medium.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Estedad-Regular.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Estedad-Bold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "./fonts/Estedad-SemiBold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl" className={`${myFont.className} bg-gray-50`}>
      <body className="flex flex-col min-h-screen">
        {/* نوار بالایی */}
        <Navbar />
        {/* محتوای اصلی */}
        <main className="flex-1 container mx-auto px-4 py-8 bg-green-50 rounded-lg shadow-lg">
          {children}
        </main>
        {/* پاورقی */}
        <Footer />
      </body>
    </html>
  );
}
