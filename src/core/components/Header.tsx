'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Dialog, DialogContent, DialogTrigger, DialogTitle } from '@/components/ui/dialog';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

export default function Header() {
  return (
    <div className="px-6 md:px-12 bg-[#F5F6FA]">
      <header className="flex items-center justify-between py-4 relative z-50">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Tahdaa Logo" width={110} height={110} />
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
              <Image src="/avatar-pro.svg" alt="Pro Icon" width={24} height={24} className="rounded-full" />
              Become a Pro
            </Button>
          </Link>
        </nav>

        {/* Mobile Hamburger Menu */}
        <div className="md:hidden">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" size="icon">
                <Image src="/harmburger-menu.svg" alt="Tahdaa Menu" width={30} height={30} />
              </Button>
            </DialogTrigger>

            <DialogContent className={cn('h-screen', 'w-full', 'absolute', 'top-0', 'left-0', 'right-0')}>
              <VisuallyHidden>
                <DialogTitle>Mobile navigation menu</DialogTitle>
              </VisuallyHidden>

              {/* Header with logo and close */}
              <div className="flex justify-between items-center">
                <Image src="/logo.svg" alt="Tahdaa Logo" width={100} height={100} />
                {/* <DialogClose asChild>
                  <Button variant="ghost" size="icon">
                    <X className="h-5 w-5" />
                  </Button>
                </DialogClose> */}
              </div>

              {/* Navigation */}
              <nav className="flex flex-col gap-4 mt-6">
                <Link href="/services" className="text-lg font-medium text-gray-700 hover:text-primary">
                  Services
                </Link>

                <Link href="/signin">
                  <Button className="w-full bg-neutral-200 text-gray-800 hover:bg-neutral-300">Sign In</Button>
                </Link>

                <Link href="/become-a-pro">
                  <Button className="w-full bg-gradient-to-r from-[#29BFF4] to-[#003CC5] text-white hover:opacity-90">
                    <Image src="/avatar-pro.svg" alt="Pro Icon" width={24} height={24} className="rounded-full mr-2" />
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
