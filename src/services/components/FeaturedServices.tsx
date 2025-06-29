import React from 'react';

const FeaturedServices = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Featured <span className="text-[#005ED3]">Services</span>
          </h2>
          <p className="text-l text-center text-gray-600  max-w-2xl mx-auto">
            Discover top-rated services tailored to your needs. From expert consultations, to quick fixes or ongoing projects, get in touch
            with trusted professionals ready to help you get the job done right and hassle-free.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(4)
            .fill(0)
            .map((_, index) => (
              <ServiceCard
                key={index}
                imageUrl="/services/construction.jpg"
                serviceName="Construction"
                rating={4.9}
                title="Home & Office Renovation"
                price={45}
                href="/services/construction"
              />
            ))}
        </div> */}
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
