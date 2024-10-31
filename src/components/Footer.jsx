import Link from "next/link";
import { FaTelegram, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-4">
        {/* لوگو و اطلاعات تماس */}
        <div className="flex justify-between items-center mb-8">
          <img src="/images/logo.png" alt="Phone Pal" className="h-8" />
          <div className="text-left text-sm text-gray-600 space-y-1">
            <p>تلفن: ۰۲۱۲۲۶۵۶۵۲ - ۰۲۱۲۲۷۵۰۰۰۰</p>
            <p>پاسخگویی ۲۴ ساعته</p>
          </div>
        </div>

        {/* منوهای فوتر */}
        <div className="grid grid-cols-4 gap-8">
          {/* با فون پال */}
          <div>
            <h3 className="text-sm font-bold mb-4">با فون پال</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link href="/news">آقای خبر</Link>
              </li>
              <li>
                <Link href="/contact">تماس با فون پال</Link>
              </li>
              <li>
                <Link href="/about">درباره فون پال</Link>
              </li>
            </ul>
          </div>

          {/* خدمات مشتریان */}
          <div>
            <h3 className="text-sm font-bold mb-4">خدمات مشتریان</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link href="/faq">پاسخ به پرسش‌های متداول</Link>
              </li>
              <li>
                <Link href="/guide">راهنمای کاربران</Link>
              </li>
              <li>
                <Link href="/terms">شرایط استفاده</Link>
              </li>
              <li>
                <Link href="/privacy">حریم خصوصی</Link>
              </li>
              <li>
                <Link href="/report">گزارش تخلف</Link>
              </li>
            </ul>
          </div>

          {/* راهنمای خرید */}
          <div>
            <h3 className="text-sm font-bold mb-4">راهنمای خرید از فون پال</h3>
            <ul className="space-y-2 text-xs text-gray-600">
              <li>
                <Link href="/order-guide">نحوه ثبت سفارش</Link>
              </li>
              <li>
                <Link href="/shipping">رویه ارسال سفارش</Link>
              </li>
              <li>
                <Link href="/payment">شیوه‌های پرداخت</Link>
              </li>
            </ul>
          </div>

          {/* فرم ایمیل */}
          <div>
            <h3 className="text-sm font-bold mb-4">با ما همراه باشید!</h3>
            <div className="flex gap-4 mb-4">
              <a href="#" aria-label="Telegram">
                <FaTelegram className="text-gray-600" size={20} />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram className="text-gray-600" size={20} />
              </a>
              <a href="#" aria-label="Twitter">
                <FaTwitter className="text-gray-600" size={20} />
              </a>
              <a href="#" aria-label="YouTube">
                <FaYoutube className="text-gray-600" size={20} />
              </a>
            </div>
            <div className="relative">
              <input
                type="email"
                placeholder="ایمیل"
                className="w-full px-3 py-2 text-xs border rounded-md"
              />
              <button className="absolute left-2 top-1/2 -translate-y-1/2 text-xs text-gray-600">
                ثبت
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
