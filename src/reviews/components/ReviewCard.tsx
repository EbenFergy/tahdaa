import React from 'react';
import Image from 'next/image';
import { Review } from '../types/reviews.types';

const ReviewCard = ({ name, image, review }: Review) => {
  return (
    <article className="flex flex-col gap-2 p-4 rounded-md shadow bg-white h-50">
      <div className="flex gap-6">
        {image && (
          <figure className="flex justify-center w-12 h-12 rounded-full relative">
            <Image src={image} alt={name.first} fill className=" object-cover rounded-full" priority />
          </figure>
        )}
        <h3 className="text-md font-semibold">{name.full}</h3>
      </div>

      <hr className="border-bottom border-gray-300 " />

      <p className="text-gray-600 line-clamp-3">{`"${review}"`}</p>
    </article>
  );
};

export default ReviewCard;
