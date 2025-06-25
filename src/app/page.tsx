import Categories from '@/core/components/Categories';
import Hero from '@/core/components/Hero';
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
    </main>
  );
}
