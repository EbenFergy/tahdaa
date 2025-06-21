// components/Header.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();
  const isHomePage: boolean = pathname === '/';

  // if (isHomePage) return null;

  return (
    <div className="px-6 md:px-12 bg-[#F5F6FA] ">
      <header className="flex items-center justify-between  py-4  ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Tahdaa Logo" width={110} height={110} />
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link href="/services" className="text-md font-medium text-gray-700 hover:text-primary">
            Services
          </Link>

          <Link href="/signin">
            <Button size="lg" className="text-md bg-neutral-200 text-gray-800 hover:bg-neutral-300">
              Sign In
            </Button>
          </Link>

          <Link href="/become-a-pro">
            <Button size="lg" className={cn('text-white', 'bg-gradient-to-r from-[#29BFF4] to-[#003CC5]', 'hover:opacity-90', 'text-md')}>
              <Image src="/avatar-pro.svg" alt="Pro Icon" width={24} height={24} className="rounded-full z-50" />
              Become a Pro
            </Button>
          </Link>
        </nav>
      </header>
      <hr className="border-b border-gray-200" />
    </div>
  );
}
