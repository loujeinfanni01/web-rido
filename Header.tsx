import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from './Link';

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="w-full py-6 px-6 md:px-12 flex justify-between items-center absolute top-0 left-0 z-10">
      <Link href="/" className="text-3xl font-bold tracking-tighter">
        A.
      </Link>
      
      <button 
        onClick={toggleMenu}
        className="z-20 focus:outline-none"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <X className="w-6 h-6 transition-all duration-300" />
        ) : (
          <Menu className="w-6 h-6 transition-all duration-300" />
        )}
      </button>
      
      {menuOpen && (
        <div className="fixed inset-0 bg-white z-10 flex flex-col justify-center items-center space-y-8 animate-fadeIn">
          <Link href="/" className="text-lg uppercase tracking-wide hover:text-gray-600 transition-colors">
            Home
          </Link>
          <Link href="/about" className="text-lg uppercase tracking-wide hover:text-gray-600 transition-colors">
            About
          </Link>
          <Link href="/work" className="text-lg uppercase tracking-wide hover:text-gray-600 transition-colors">
            Work
          </Link>
          <Link href="/contact" className="text-lg uppercase tracking-wide hover:text-gray-600 transition-colors">
            Contact
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;