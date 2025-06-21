'use client';

import { CheckCircle } from 'lucide-react';
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
    <header className="border-b  top-0 z-50 bg-[#F5F6FA] ">
      <section className="w-full px-6 md:px-12 lg:px-24  py-18 max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div className=" flex-1">
          <h1 className="font-urbanist font-semibold text-[48px] md:text-[48px] lg:text-[64px] leading-[60px] md:leading-[60px] lg:leading-[85px] tracking-[-0.02em]  decoration-solid decoration-0 text-[#111827]">
            Connect with Nearby Top-rated Professional <br />
            <span className="underline text-[#005ED3] underline-offset-3" style={{ textDecorationThickness: '2px' }}>
              {professions[index]}
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg md:text-[24px] md:leading-[30px]" style={{ fontFamily: 'Urbanist', fontWeight: 400 }}>
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

          <div className="flex items-center space-x-6 text-sm text-gray-600">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Verified Professionals</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5 text-green-500" />
              <span>Instant Booking</span>
            </div>
          </div>
        </div>

        {/* Right Side Image */}
        <div className="flex-1 w-full  max-w-[1000px] min-w-[650px] -ml-5 -mt-5 relative z-10 scale-110">
          <Image
            src="https://res.cloudinary.com/dpr056mnn/image/upload/hero-image_mzfdsp.png"
            alt="Hero image"
            width={650}
            height={650}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
