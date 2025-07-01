'use client';

import React, { useState } from 'react';
import PopularServiceCard from './PopularServiceCard';
import { popularServices } from '../__data__/service.data';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
import { Button } from '@/components/ui/button';

const PopularServices = () => {
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const filterList: string[] = ['Cleaning', 'Electrical', 'Plumbing', 'Construction', 'Capenter', 'Medical', 'Computer service'];
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Popular <span className="text-[var(--primary-main)]">Services</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore what others are booking the most. These in-demand services are trusted, tested, and trending in your area.
          </p>
        </div>

        {/* filters */}
        <section className="w-full mb-4">
          {/* Desktop: flex buttons */}
          <div className="hidden md:flex justify-center gap-2 flex-wrap">
            {filterList.map(f => (
              <Button key={f} size="sm" className="text-sm text-gray-600 border border-gray-200 rounded-md px-4 py-1 hover:opacity-90">
                {f}
              </Button>
            ))}
          </div>

          {/* Mobile: Swiper */}
          <div className="md:hidden">
            <Swiper modules={[Navigation, Pagination]} spaceBetween={8} slidesPerView="auto" pagination={false} className="pl-4">
              {filterList.map(f => (
                <SwiperSlide key={f} className="!w-auto">
                  <Button
                    size="sm"
                    className="text-sm text-gray-600 border border-gray-200 rounded-md px-4 py-1 hover:opacity-90 whitespace-nowrap"
                  >
                    {f}
                  </Button>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Custom Navigation Buttons */}
        <div className="hidden md:flex absolute top-1/2 left-0 right-0 z-10 justify-between px-4 -translate-y-1/2 pointer-events-none">
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
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.3 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
          pagination={false}
          onReachBeginning={() => setAtStart(true)}
          onReachEnd={() => setAtEnd(true)}
          onFromEdge={() => {
            setAtStart(false);
            setAtEnd(false);
          }}
        >
          {popularServices.map(({ id, image, category, rating, reviews, title, price }) => (
            <SwiperSlide key={id}>
              <PopularServiceCard
                image={image}
                category={category}
                rating={rating}
                title={title}
                price={price}
                href="/services/construction"
                reviews={reviews}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#003CC5] to-[#29BFF4] text-white font-medium hover:opacity-90 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
