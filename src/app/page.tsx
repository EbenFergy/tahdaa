import Categories from '@/categories/components/Categories';
import FlowDescription from '@/core/components/FlowDescription';
import Hero from '@/core/components/Hero';
import TopProfessionals from '@/professionals/components/TopProfessionals';
import Reviews from '@/reviews/components/Reviews';
import FeaturedServices from '@/services/components/FeaturedServices';
import PopularServices from '@/services/components/PopularServices';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="w-full overflow-hidden absolute top-0">
        <Image
          src="/blurred-ellipse.svg"
          alt="Hero image"
          width={650}
          height={650}
          className="-top-25 -left-15 scale-150 relative"
          priority
        />
      </div>
      <Hero />
      <Categories />
      <FeaturedServices />
      <PopularServices />
      <FlowDescription />
      <TopProfessionals />
      <Reviews />
    </main>
  );
}
