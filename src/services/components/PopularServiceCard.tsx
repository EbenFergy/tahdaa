import React from 'react';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { ServiceCardProps } from '../types/service.types';

const PopularServiceCard = ({ image, category, rating, title, price, reviews, className }: ServiceCardProps) => {
  return (
    <div className={cn('bg-white rounded-lg shadow-md overflow-hidden border border-gray-200', className)}>
      <div className="relative h-48 w-full">
        <Image src={image} alt={category} fill className="object-cover w-full h-full" />
      </div>

      <div className="p-4 flex flex-col justify-between h-[90px]">
        <h3 className="text-sm font-semibold text-gray-800 ">{title}</h3>
        <div className="flex justify-between items-end">
          {reviews && (
            <div className="bg-white/80 text-sm font-medium rounded flex items-center gap-1">
              <Star className="w-3 h-3 text-[var(--primary-main)] fill-[var(--primary-main)]" />
              {rating.toFixed(1)} ({reviews} Reviews)
            </div>
          )}
          <div className="text-sm text-gray-600">
            <p className="flex gap-1 items-end">
              From
              <span className="font-semibold text-gray-900 text-lg">${price}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularServiceCard;
