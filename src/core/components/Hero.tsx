'use client';

import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeroSearch from './HeroSearch';
import Icon from './Icon';

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
    <header className="z-50 bg-[#F5F6FA] overflow-x-hidden">
      <section className="w-full px-6 md:px-12 lg:px-12 py-8 md:py-18  max-w-screen-2xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Left Side */}
        <div className="flex-1 z-10 ">
          <h1 className="font-urbanist font-semibold text-[48px] md:text-[48px] lg:text-[64px] leading-[60px] md:leading-[60px] lg:leading-[85px] tracking-[-0.02em]  decoration-solid decoration-0 text-[#111827]">
            Connect with Nearby Top-rated Professional <br />
            <span className="underline text-[#005ED3] underline-offset-3" style={{ textDecorationThickness: '2px' }}>
              {professions[index]}
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg md:text-[24px] md:leading-[30px]" style={{ fontFamily: 'Urbanist', fontWeight: 400 }}>
            We can connect you to the right Service, first time and every time.
          </p>

          {/* search section */}
          <HeroSearch />

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
        <div className="flex-1 w-full min-w-[500px] max-w-[1000px] -ml-5 -mt-5 relative z-10 scale-110 ">
          <Icon
            path="/item-satisfaction.svg"
            alt="satisfaction image"
            className="w-[140px] absolute bottom-20 left-30 md:-left-8 md:top-10 drop-shadow-[0px_16px_22px_rgba(0,0,0,0.15)]"
          />
          <Image
            src="https://res.cloudinary.com/dpr056mnn/image/upload/hero-image_mzfdsp.png"
            alt="Hero image"
            width={650}
            height={650}
            className="w-full h-auto object-contain"
            priority
          />
          <Icon
            path="/item-professionals.svg"
            alt="professionals image"
            className="w-[140px] absolute bottom-5 left-30 md:left-auto md:-right-8 md:bottom-5 drop-shadow-[0px_16px_22px_rgba(0,0,0,0.15)]"
          />
        </div>
      </section>
    </header>
  );
};

export default Hero;
