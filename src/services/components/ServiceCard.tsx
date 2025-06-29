import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ServiceCardProps } from '../types/service.types';

export default function ServiceCard({ imageUrl, serviceName, rating, title, price, href = '#', className }: ServiceCardProps) {
  return (
    <div className={cn('bg-white rounded-lg shadow-md overflow-hidden border border-gray-200', className)}>
      <div className="relative h-48 w-full">
        <Image src={imageUrl} alt={serviceName} fill className="object-cover w-full h-full" />
        <div className="absolute top-2 left-2 bg-white/80 text-sm font-medium px-3 py-1 rounded">{serviceName}</div>
        <div className="absolute top-2 right-2 bg-white/80 text-sm font-medium px-3 py-1 rounded flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
          {rating.toFixed(1)}
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between h-[140px]">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">{title}</h3>
        <div className="flex items-center justify-between">
          <p className="text-sm text-gray-600">
            Starting from <span className="font-semibold text-gray-900">${price}/hr</span>
          </p>
          <Link href={href} className="bg-primary text-white px-4 py-2 rounded hover:opacity-90 text-sm font-medium">
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}
