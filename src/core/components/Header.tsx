'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import Icon from './Icon';

export default function Header() {
  return (
    <div className="px-6 md:px-12 bg-[#F5F6FA]">
      <header className="flex items-center justify-between py-4 relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Icon src="/logo.svg" alt="Tahdaa Logo" className="w-[110]" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
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
              <Icon src="/avatar-pro.svg" alt="Pro Icon" className="rounded-full" />
              Become a Pro
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" size="icon">
                <Icon src="/harmburger-menu.svg" alt="Tahdaa Menu" className="rounded-full w-[30]" />
              </Button>
            </DialogTrigger>

            <DialogContent
              className={cn(
                'fixed right-0 top-0 h-screen w-4/5 sm:w-2/3 max-w-sm bg-white z-50 shadow-xl border-l border-gray-200 p-6 transform',
                'data-[state=open]:animate-slide-in-from-right',
                'data-[state=closed]:animate-slide-out-to-right'
              )}
            >
              <VisuallyHidden>
                <DialogTitle>Mobile navigation menu</DialogTitle>
              </VisuallyHidden>

              {/* Navigation */}
              <nav className="flex flex-col text-center gap-8 justify-center h-full">
                <Link href="/services" className="text-lg font-medium text-gray-700 hover:text-primary">
                  Services
                </Link>

                <Link href="/signin">
                  <Button size="lg" className="w-full text-lg bg-neutral-200 text-gray-800 hover:bg-neutral-300">
                    Sign In
                  </Button>
                </Link>

                <Link href="/become-a-pro">
                  <Button size="lg" className="w-full text-lg bg-gradient-to-r from-[#29BFF4] to-[#003CC5] text-white hover:opacity-90">
                    <Icon src="/avatar-pro.svg" alt="Pro Icon" className="rounded-full" />
                    Become a Pro
                  </Button>
                </Link>
              </nav>
            </DialogContent>
          </Dialog>
        </div>
      </header>

      <hr className="border-b border-gray-200" />
    </div>
  );
}
