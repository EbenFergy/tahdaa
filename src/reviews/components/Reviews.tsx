'use client';

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import ReviewCard from './ReviewCard';
import { reviews } from '../data/reviews.data';
import GoogleLogo from '@/components/ui/GoogleLogo';

const Reviews = () => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  return (
    <section className="py-20 relative overflow-hidden bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Genuine Reviews From <span className="text-[var(--primary-main)]">Customers</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Hear directly from people who’ve used Tahdaa. These real experiences highlight the professionalism, reliability, and
            satisfaction our users value most.
          </p>
        </div>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex absolute top-1/2 left-0 right-0 z-10 justify-between px-4  pointer-events-none">
          <button
            className={`custom-prev w-8 h-8 bg-[var(--primary-main)] rounded-full text-white flex items-center justify-center pointer-events-auto ${
              atStart ? 'opacity-30' : 'opacity-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button
            className={`custom-next w-8 h-8 bg-[var(--primary-main)] rounded-full text-white flex items-center justify-center pointer-events-auto ${
              atEnd ? 'opacity-30' : 'opacity-100'
            }`}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation={{
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
          }}
          spaceBetween={20}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={{ clickable: true }}
          onReachBeginning={() => setAtStart(true)}
          onReachEnd={() => setAtEnd(true)}
          onFromEdge={() => {
            setAtStart(false);
            setAtEnd(false);
          }}
        >
          {reviews.map(review => (
            <SwiperSlide key={review.id} className="shadow-lg">
              <ReviewCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center space-y-2 mt-6">
          <h3 className="text-xl font-semibold text-gray-800">
            Trusted By Over <span className="text-[var(--primary-main)]">1,200+</span> Clients Worldwide
          </h3>

          <div className="flex justify-center items-center gap-2">
            {/* Five Stars */}
            {Array(5)
              .fill(0)
              .map((_, i) => (
                <svg
                  key={i}
                  className="w-4 h-4 text-[var(--primary-main)] fill-[var(--primary-main)]"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
                </svg>
              ))}
            <span className="text-gray-600 text-sm">Based on 850 Reviews</span>
          </div>
          <GoogleLogo />
        </div>
      </div>
    </section>
  );
};

export default Reviews;
