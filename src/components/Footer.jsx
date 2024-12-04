import Link from "next/link";
import { FaTelegram, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-50 py-8 border-t border-green-200">
      <div className="container mx-auto px-4">
        {/* لوگو و اطلاعات تماس */}
        <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
          <img src="/favicon.ico" alt="Phone Pal" className="h-10" />
          <div className="text-center sm:text-left text-sm text-black space-y-1">
            <p>تلفن:  ۰۲۱۲۲۷۵۰۰۰۰</p>
            <p> ۰۲۱۲۲۶۵۶۵۲ </p>
            <p>آدرس: تهران، خ ولیعصر، بالاتر از میدان ونک،</p>
          <div className="text-center sm:text-left text-sm text-green-700 space-y-1">
            <p>پاسخگویی ۲۴ ساعته</p>
            </div>
          </div>
        </div>

        {/* منوهای فوتر */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* با فون پال */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-black">با فون پال</h3>
            <ul className="space-y-2 text-xs text-green-700">
              <li>
                <Link href="/news" className="hover:text-green-900 transition-colors">
                  آقای خبر
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-900 transition-colors">
                  تماس با فون پال
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-900 transition-colors">
                  درباره فون پال
                </Link>
              </li>
            </ul>
          </div>

          {/* خدمات مشتریان */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-black">خدمات مشتریان</h3>
            <ul className="space-y-2 text-xs text-green-700">
              <li>
                <Link href="/faq" className="hover:text-green-900 transition-colors">
                  پاسخ به پرسش‌های متداول
                </Link>
              </li>
              <li>
                <Link href="/guide" className="hover:text-green-900 transition-colors">
                  راهنمای کاربران
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-900 transition-colors">
                  شرایط استفاده
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-green-900 transition-colors">
                  حریم خصوصی
                </Link>
              </li>
              <li>
                <Link href="/report" className="hover:text-green-900 transition-colors">
                  گزارش تخلف
                </Link>
              </li>
            </ul>
          </div>

          {/* راهنمای خرید */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-black">راهنمای خرید از فون پال</h3>
            <ul className="space-y-2 text-xs text-green-700">
              <li>
                <Link href="/order-guide" className="hover:text-green-900 transition-colors">
                  نحوه ثبت سفارش
                </Link>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-green-900 transition-colors">
                  رویه ارسال سفارش
                </Link>
              </li>
              <li>
                <Link href="/payment" className="hover:text-green-900 transition-colors">
                  شیوه‌های پرداخت
                </Link>
              </li>
            </ul>
          </div>

          {/* فرم ایمیل */}
          <div>
            <h3 className="text-sm font-bold mb-4 text-black">با ما همراه باشید!</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" aria-label="Telegram" className="hover:text-green-900 transition-colors">
                <FaTelegram className="text-green-700" size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="hover:text-green-900 transition-colors">
                <FaInstagram className="text-red-400" size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="hover:text-green-900 transition-colors">
                <FaTwitter className="text-blue-400" size={20} />
              </a>
              <a href="#" aria-label="YouTube" className="hover:text-green-900 transition-colors">
                <FaYoutube className="text-red-500" size={20} />
              </a>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full px-3 py-2 text-xs border border-green-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-green-600 hover:text-green-800 transition-colors">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
