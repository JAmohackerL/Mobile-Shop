import Link from "next/link";
import { FaTelegram, FaInstagram, FaHeadphones } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-50 to-green-100 py-12 border-t border-green-300 shadow-lg">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm text-gray-800">
          {/* درباره ما */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-800">درباره ما</h3>
            <p className="text-sm leading-relaxed text-gray-600">
              این یک متن تست است. فون‌پال همراه شما در خرید آسان و مطمئن.
            </p>
          </div>

          {/* تماس با ما */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-800">تماس با ما</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>ساعت پاسخ‌گویی: <span className="text-green-900 font-medium">پاسخگویی ۲۴ ساعته</span></li>
              <li>آدرس: <span className="text-green-900 font-medium">تهران، خیابان ولیعصر، میدان ونک</span></li>
              <li>
                پشتیبانی و مشاوره رایگان: <span className="font-bold text-green-900">۰۲۱۹۱۲۳۴۵۶۷</span>
              </li>
            </ul>
          </div>

          {/* لینک‌های مفید */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-800">راهنمای خرید از فون پال</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <Link href="/faq" className="hover:text-green-900 transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-green-900 transition-colors">
                  شرایط و ضوابط
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-green-900 transition-colors">
                  ارتباط با ما
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-green-900 transition-colors">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* مجوزها */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-green-800">مجوزها</h3>
            <div className="flex flex-col space-y-4 items-center sm:items-start">
              <img src="#" alt="مجوز ۱" className="h-14 w-auto object-contain rounded shadow-md" />
              <img src="#" alt="مجوز ۲" className="h-14 w-auto object-contain rounded shadow-md" />
            </div>
          </div>
        </div>

        {/* کپی‌رایت */}
        <div className="mt-8 border-t border-green-300 pt-4 text-xs text-gray-600 text-center">
          کلیه حقوق این وبسایت متعلق به فون‌پال می‌باشد © ۲۰۲۴
        </div>

        {/* شبکه‌های اجتماعی */}
        <div className="mt-6 flex justify-center gap-6">
          <Link href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
            <FaTelegram className="text-blue-600 hover:text-green-700 transition-colors" size={28} />
          </Link>
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FaInstagram className="text-red-500 hover:text-green-700 transition-colors" size={28} />
          </Link>
          <Link href="/support" aria-label="Support">
            <FaHeadphones className="text-black hover:text-green-700 transition-colors" size={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
