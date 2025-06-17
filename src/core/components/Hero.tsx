'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const professions = ['Builders', 'Plumbers', 'Electricians', 'Mechanics', 'Painters'];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % professions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full px-6 py-24 bg-white">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="flex-1">
          <h1 className="font-urbanist font-semibold text-[48px] md:text-[72px] leading-[60px] md:leading-[90px] tracking-[-0.02em]  decoration-solid decoration-0 text-[#111827]">
            Connect with Nearby Top-rated Professional <br />
            <span className="underline text-blue-700">{professions[index]}</span>
          </h1>

          <p className="mt-6 text-gray-700 text-lg md:text-[24px] md:leading-[32px]" style={{ fontFamily: 'Urbanist', fontWeight: 400 }}>
            We can connect you to the right Service, first time and every time.
          </p>

          {/* Search Bar */}
          <div className="mt-8 w-full max-w-2xl">
            <div className="flex border border-gray-300 rounded-lg overflow-hidden shadow-sm">
              <input type="text" placeholder="Search for services" className="w-1/2 px-4 py-3 outline-none text-sm" />
              <div className="border-l border-gray-300"></div>
              <input type="text" placeholder="Enter your location" className="w-1/2 px-4 py-3 outline-none text-sm" />
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 w-full max-w-[5000px] min-w-[500px]">
          <Image
            src="https://res.cloudinary.com/dpr056mnn/image/upload/hero-image_gfvmie.png"
            alt="Hero image"
            width={5000}
            height={5000}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
