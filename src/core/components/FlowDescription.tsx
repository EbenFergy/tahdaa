import React from 'react';
import Icon from './Icon';

const FlowDescription = () => {
  return (
    <section className="py-10 relative overflow-hidden">
      <Icon src="featured-services-item.svg" alt="featured service item" className="absolute hidden lg:block -right-70 z-0" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="relative flex flex-col items-center gap-3 rounded-lg bg-[var(--primary-main-800)] text-center py-10 overflow-hidden ">
          <Icon src="/spirals.svg" alt="Tahdaa Logo" className="absolute opacity-20 w-full min-w-3xl hidden md:block " />
          <h2 className="text-4xl font-bold text-gray-100 mb-4">
            How Tahdaa <span className="text-[var(--primary-main)]">Works</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">From discovery to delivery, Tahdaa simplifies everything.</p>
          <Icon src="/flow-horizontal.svg" alt="Tahdaa Logo" className="w-6/7 min-w-4xl hidden md:block" />
          <Icon src="/flow-vertical.svg" alt="Tahdaa Logo" className="w-1/2  md:hidden" />
        </div>
      </div>
    </section>
  );
};

export default FlowDescription;
