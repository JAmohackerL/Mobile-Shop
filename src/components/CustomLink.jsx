import Link from "next/link";


export default function CustomLink({
  href,
  children,
  className = "",
  target = "_self",
}) {
  // بررسی اینکه لینک باید در تب جدید باز شود یا خیر
  const isExternal = target === "_blank";

  return (
    <Link
      href={href}
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined} // برای لینک‌های خارجی
      className={`text-green-600 hover:text-green-800 transition-all duration-200 underline decoration-green-400 decoration-2 underline-offset-4 hover:decoration-green-600 hover:scale-105 ${className}`}
    >
      {children}
    </Link>
  );
}
