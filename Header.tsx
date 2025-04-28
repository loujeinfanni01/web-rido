import React, { useState } from 'react';
import { Menu as MenuIcon } from 'lucide-react';
import Menu from './Menu';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="flex justify-between items-center w-full py-8 px-12">
        <div className="text-3xl font-bold">
          A.
        </div>
        <button 
          className="p-2 transition-transform duration-300 hover:rotate-12"
          aria-label="Menu"
          onClick={() => setIsMenuOpen(true)}
        >
          <MenuIcon size={24} />
        </button>
      </header>
      
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
};

export default Header;