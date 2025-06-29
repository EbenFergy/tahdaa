'use client';

import useMediaQuery from '@/core/hooks/useMediaQuery';
import { iconComponentMap } from '../__data__/categories.data';

export default function Categories() {
  // Tailwind breakpoints:
  const isMobile = useMediaQuery('(max-width: 767px)');
  const isTablet = useMediaQuery('(min-width: 768px) and (max-width: 1023px)');

  // Determine limit based on screen size
  let limit = 12;
  if (isMobile) limit = 4;
  else if (isTablet) limit = 8;

  const entries = Object.entries(iconComponentMap).slice(0, limit);

  return (
    <section className="py-20 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Explore Our <span className="text-[#005ED3]">Categories</span>
          </h2>
          <p className="text-l text-center text-gray-600 max-w-2xl mx-auto">
            Find skilled professionals fast — from home repairs to digital services. Every category is curated to connect you with trusted
            experts nearby.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {entries.map(([key, IconComp], index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center hover:bg-card-gradient border border-transparent hover:border-primary-var rounded py-10 text-center cursor-pointer shadow-[4px_2px_8px_4px_#0000000A] hover:shadow-lg transition-shadow"
            >
              {/* <Icon src={icon} alt={icon.split('/')[2].split('.')[0]} /> */}
              <IconComp className="hover:fill-[#005ED3]" />
              <h3 className="font-semibold text-gray-900">{key}</h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#003CC5] to-[#29BFF4] text-white font-medium hover:opacity-90 transition">
            View All Categories
          </button>
        </div>
      </div>
    </section>
  );
}
