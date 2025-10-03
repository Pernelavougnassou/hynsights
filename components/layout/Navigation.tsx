import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationProps {
  className?: string;
  mobile?: boolean;
}

interface NavItem {
  href: string;
  label: string;
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const Navigation: React.FC<NavigationProps> = ({ className, mobile = false }) => {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  if (mobile) {
    return (
      <nav className={[
        'flex flex-col space-y-4',
        className
      ].filter(Boolean).join(' ')}>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={[
              'text-base font-medium transition-colors',
              isActive(item.href)
                ? 'text-blue-600'
                : 'text-gray-700 hover:text-blue-600'
            ].filter(Boolean).join(' ')}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    );
  }

  return (
    <nav className={[
      'hidden md:flex items-center space-x-8',
      className
    ].filter(Boolean).join(' ')}>
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={[
            'text-sm font-medium transition-colors relative',
            isActive(item.href)
              ? 'text-blue-600'
              : 'text-gray-700 hover:text-blue-600'
          ].filter(Boolean).join(' ')}
        >
          {item.label}
          {isActive(item.href) && (
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
          )}
        </Link>
      ))}
    </nav>
  );
};

Navigation.displayName = 'Navigation';

export default Navigation;