import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Search, MapPin } from 'lucide-react';

const HeroSearch = () => {
  return (
    <div>
      <div className="lg:flex items-center border border-gray-300 rounded overflow-hidden w-full max-w-3xl bg-white p-2 my-2">
        {/* Left Input */}
        <div className="flex items-center flex-1 px-4 ">
          <Search className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search for services"
            className="w-full py-3 outline-none placeholder-gray-400 text-md text-gray-900"
          />
        </div>

        {/* Divider */}
        <div className="lg:rotate-0 border-b lg:border-l border-gray-300 h-px lg:h-6  lg:w-px mx-2 my-0" />

        {/* Right Input */}
        <div className="flex items-center flex-1 px-4">
          <MapPin className="w-4 h-4 text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Enter your location"
            className="w-full py-3 outline-none placeholder-gray-400 text-md text-gray-900"
          />
        </div>

        {/* Search Button */}
        <Button size="main" className={cn('bg-gradient-to-r from-[#29BFF4] to-[#003CC5]', 'hidden lg:flex', 'lg:w-auto')}>
          <Search className="w-4 h-4 mr-1" />
          Search
        </Button>
      </div>
      {/* Search Button */}
      <Button size="main" className={cn('bg-gradient-to-r from-[#29BFF4] to-[#003CC5]', 'lg:hidden', ' w-full', 'my-3')}>
        <Search className="w-4 h-4 mr-1" />
        Search
      </Button>
    </div>
  );
};

export default HeroSearch;
