import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ServiceCardProps } from '../types/service.types';
import { Button } from '@/components/ui/button';

const ServiceCard = ({ image, category, rating, title, price, href = '#', className }: ServiceCardProps) => {
  return (
    <div className={cn('bg-white rounded-lg shadow-md overflow-hidden border border-gray-200', className)}>
      <div className="relative h-48 w-full">
        <Image src={image} alt={category} fill className="object-cover w-full h-full" />
        <div className="absolute top-2 left-2 bg-white/80 text-sm font-medium px-3 py-1 rounded">{category}</div>
        <div className="absolute top-2 right-2 bg-white/80 text-sm font-medium px-3 py-1 rounded flex items-center gap-1">
          <Star className="w-4 h-4 text-yellow-500 fill-yellow-400" />
          {rating.toFixed(1)}
        </div>
      </div>

      <div className="p-4 flex flex-col justify-between h-[140px]">
        <h3 className="text-lg font-semibold text-gray-800 ">{title}</h3>
        <div className="flex justify-between items-end">
          <div className="flex flex-col text-sm text-gray-600">
            Starting from
            <p>
              <span className="font-semibold text-gray-900 text-lg">${price}</span>/per hour
            </p>
          </div>
          <Link href={href}>
            <Button size="sm" className={cn('text-white', 'bg-gradient-to-r from-[#29BFF4] to-[#003CC5]', 'hover:opacity-90', 'text-sm')}>
              Book Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
