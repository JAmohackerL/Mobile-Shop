import Link from "next/link";

export default function CustomLink({
  href,
  children,
  className = "",
  target = "_self",
}) {
  const isExternal = target === "_blank";

  return (
    <Link
      href={href}
      target={target}
      rel={isExternal ? "noopener noreferrer" : undefined} // برای لینک‌های خارجی
      className={`text-green-600 hover:text-green-800 transition duration-200 underline decoration-green-400 hover:decoration-green-600 hover:scale-105 ${className}`}
    >
      {children}
    </Link>
  );
}
