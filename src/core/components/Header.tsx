// components/Header.tsx
// import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-white shadow-sm">
      {/* Logo */}
      <Link href="/">
        <div className="flex items-center gap-2">
          {/* <Image src="/logo.png" alt="Tahdaa Logo" width={40} height={40} /> */}
          <span className="text-xl font-bold text-blue-700">Tahdaa</span>
        </div>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-6">
        <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-blue-700">
          Services
        </Link>

        <Link href="/signin">
          <button className="text-sm font-medium px-4 py-2 rounded-md bg-[#EBECEF] text-gray-800 hover:bg-gray-300">Sign In</button>
        </Link>

        <Link href="/become-a-pro">
          <button
            className="text-sm font-medium px-4 py-2 rounded-md text-white"
            style={{
              background: 'linear-gradient(270deg, #003CC5 0%, #29BFF4 100%)',
            }}
          >
            Become a Pro
          </button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
