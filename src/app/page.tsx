import Categories from '@/core/components/Categories';
import Hero from '@/core/components/Hero';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <Image
        src="/blurred-ellipse.svg"
        alt="Hero image"
        width={650}
        height={650}
        className="absolute -top-25 -left-15 scale-150 z-1"
        priority
      />
      <Hero />
      <Categories />
    </main>
  );
}
