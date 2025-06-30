import React from 'react';
import ServiceCard from './ServiceCard';
import Icon from '@/core/components/Icon';
import { featuredServices } from '../__data__/service.data';

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-gray-50 relative overflow-hidden flex items-center">
      <Icon src="featured-services-item.svg" alt="featured service item" className="absolute hidden lg:block -left-70 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-2">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured <span className="text-[#005ED3]">Services</span>
          </h2>
          <p className="text-l text-center text-gray-600  max-w-2xl mx-auto">
            Discover top-rated services tailored to your needs. From expert consultations, to quick fixes or ongoing projects, get in touch
            with trusted professionals ready to help you get the job done right and hassle-free.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
          {featuredServices.map(({ id, image, category, rating, title, price }) => (
            <ServiceCard
              key={id}
              image={image}
              category={category}
              rating={rating}
              title={title}
              price={price}
              href="/services/construction"
            />
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#003CC5] to-[#29BFF4] text-white font-medium hover:opacity-90 transition">
            View All Services
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
