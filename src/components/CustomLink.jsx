import Link from "next/link";

export default function CustomLink({ href, children, className = "" }) {
  return (
    <Link
      href={href}
      className={`text-green-600 hover:text-green-800 transition-colors duration-200 underline decoration-green-400 decoration-2 underline-offset-4 hover:decoration-green-600 ${className}`}
    >
      {children}
    </Link>
  );
}
