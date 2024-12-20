import Link from "next/link";
import { FaTelegram, FaInstagram, FaHeadphones } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-green-700 via-green-500 to-green-400 py-8 border-t border-green-300 shadow-lg">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-100">
          {/* بخش درباره ما */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">درباره ما</h3>
            <p className="text-sm leading-relaxed text-gray-200">
              فون‌پال همراه شما در خرید آسان و مطمئن، با تضمین کیفیت و پشتیبانی سریع.
            </p>
          </div>

          {/* بخش تماس با ما */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">تماس با ما</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                ساعت پاسخ‌گویی: <span className="text-gray-100 font-medium">۲۴ ساعته</span>
              </li>
              <li>
                آدرس: <span className="text-gray-100 font-medium">تهران، خیابان ولیعصر، میدان ونک</span>
              </li>
              <li>
                پشتیبانی: <span className="font-bold text-gray-100">۰۲۱۹۱۲۳۴۵۶۷</span>
              </li>
            </ul>
          </div>

          {/* بخش لینک‌های مفید */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">راهنمای خرید</h3>
            <ul className="space-y-2 text-sm text-gray-200">
              <li>
                <Link href="/faq" className="hover:text-gray-400 transition-colors">
                  سوالات متداول
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-400 transition-colors">
                  شرایط و ضوابط
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-400 transition-colors">
                  ارتباط با ما
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-gray-400 transition-colors">
                  درباره ما
                </Link>
              </li>
            </ul>
          </div>

          {/* بخش مجوزها */}
          <div>
            <h3 className="text-lg font-bold mb-2 text-white">مجوزها</h3>
            <div className="flex flex-col space-y-3 items-center sm:items-start">
              <img
                src="/license1.png"
                alt="مجوز ۱"
                className="h-14 w-auto object-contain rounded shadow-md"
              />
              <img
                src="/license2.png"
                alt="مجوز ۲"
                className="h-14 w-auto object-contain rounded shadow-md"
              />
            </div>
          </div>
        </div>

        {/* بخش کپی‌رایت */}
        <div className="mt-6 border-t border-green-300 pt-2 text-xs text-gray-200 text-center">
          کلیه حقوق این وبسایت متعلق به فون‌پال می‌باشد © ۲۰۲۴
        </div>

        {/* بخش شبکه‌های اجتماعی */}
        <div className="mt-4 flex justify-center gap-6">
          <Link
            href="https://telegram.org"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="text-white hover:text-blue-600 transition-colors"
          >
            <FaTelegram size={28} />
          </Link>
          <Link
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white hover:text-red-600 transition-colors"
          >
            <FaInstagram size={28} />
          </Link>
          <Link
            href="/support"
            aria-label="Support"
            className="text-white hover:text-black transition-colors"
          >
            <FaHeadphones size={28} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
