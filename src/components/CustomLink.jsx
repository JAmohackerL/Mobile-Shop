import Link from 'next/link';

export default function CustomLink({ href, children, className = '' }) {
  return (
    <Link 
      href={href} 
      className={`text-tertiary hover:text-primary transition-colors ${className}`}
    >
      {children}
    </Link>
  );
} 