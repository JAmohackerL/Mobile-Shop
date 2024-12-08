import Link from "next/link";
import { FaTelegram, FaInstagram, FaHeadphones } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-green-50 py-12 border-t border-green-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-800">
          {/* درباره ما */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">درباره ما</h3>
            <p className="text-xs leading-relaxed">
              این یک متن تست است
            </p>
          </div>

          {/* تماس با ما */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">تماس با ما</h3>
            <ul className="space-y-2 text-xs">
              <li>ساعت پاسخ‌گویی: پاسخگویی ۲۴ ساعته</li>
              <li>آدرس: تهران، خیابان ولیعصر، میدان ونک</li>
              <li>
                پشتیبانی و مشاوره رایگان:{" "}
                <span className="font-bold text-green-800">۰۲۱۹۱۲۳۴۵۶۷</span>
              </li>
            </ul>
          </div>

          {/* لینک‌های مفید */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">راهنمای خرید از فون پال</h3>
            <ul className="space-y-2 text-xs text-green-600">
              <li>
                <Link href="/faq" className="hover:text-green-900">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-900">
                  شرایط و ضوابط
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-900">
                  ارتباط با ما
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-900">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* مجوزها */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-700">مجوزها</h3>
            <div className="flex flex-col space-y-2 items-center sm:items-start">
              <img src="#" alt="" className="h-12" />
              <img src="#" alt= "" className="h-12" />
            </div>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="mt-8 border-t border-green-200 pt-4 text-xs text-gray-500 text-center">
          کلیه حقوق این وبسایت متعلق به فون‌پال می‌باشد © ۲۰۲۴
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="mt-6 flex justify-center gap-4">
          <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegram className="text-blue-600 hover:text-green-800 transition-colors" size={24} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-red-600 hover:text-green-800 transition-colors" size={24} />
          </Link>
          <Link href="/support" aria-label="Support">
            <FaHeadphones className="text-green-600 hover:text-green-800 transition-colors" size={24} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
