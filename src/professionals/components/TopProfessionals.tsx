'use client';

import React from 'react';
import { professionalsData } from '../__data__/professionals.data';
import ProfessionalCard from './ProfessionalCard';
import { Professional } from '../types/professional.types';
import useGetResponsiveCount from '@/core/hooks/useGetResponsiveCount';

const TopProfessionals = () => {
  const entries = useGetResponsiveCount(professionalsData, 8, 6, 4) as Professional[];

  return (
    <section className="py-20 relative overflow-hidden flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Top <span className="text-[#005ED3]">Professionals</span>
          </h2>
          <p className="text-lg text-center text-gray-600  max-w-2xl mx-auto">
            Trusted by hundreds of clients and verified through strict onboarding, our top-rated pros deliver consistent, high-quality
            results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {entries.map(pro => (
            <ProfessionalCard key={pro.id} {...pro} />
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#003CC5] to-[#29BFF4] text-white font-medium hover:opacity-90 transition">
            View All
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopProfessionals;
