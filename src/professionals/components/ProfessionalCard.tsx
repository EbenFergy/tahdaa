import React from 'react';
import Image from 'next/image';
import { Star } from 'lucide-react';
import { Professional } from '../types/professional.types';

const ProfessionalCard = ({ name, image, rating, reviews, services, lowestRate }: Professional) => {
  return (
    <article className="flex gap-2 p-4 min-w-1xl rounded-md shadow bg-white">
      {
        <figure className="flex justify-center min-w-12 flex-1">
          <Image
            src={image ?? '/avatar-pro.svg'}
            alt={name}
            width={100}
            height={100}
            className={` object-cover rounded-full w-10 h-10 bg-gray-300 ${image ? '' : 'p-1'}`}
            priority
          />
        </figure>
      }

      <div className="w-full">
        <header className="mb-2">
          <h3 className="text-md font-semibold">{name}</h3>
          <p className="flex items-center justify-start text-sm text-gray-600 gap-1">
            <Star className="w-4 h-4 text-[var(--primary-main)] fill-[var(--primary-main)]" />
            {rating.toFixed(1)} <span className="text-gray-400">({reviews} reviews)</span>
          </p>
        </header>

        <footer className="flex justify-between text-sm text-gray-500">
          <span className="mr-2">{services} services</span>
          <span>From ${lowestRate}</span>
        </footer>
      </div>
    </article>
  );
};

export default ProfessionalCard;
