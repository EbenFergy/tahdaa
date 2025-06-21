// app/not-found.tsx
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4 text-center">
      <h1 className="text-6xl font-bold text-[#003CC5] mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-gray-500 mb-6">Oops! The page you’re looking for doesn’t exist or has been moved.</p>

      <Link href="/">
        <Button className="bg-gradient-to-r from-[#29BFF4] to-[#003CC5] text-white hover:opacity-90">Back to Home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
