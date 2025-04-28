import React from 'react';
import { X } from 'lucide-react';

interface MenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuItem: React.FC<{ text: string; isActive?: boolean }> = ({ text, isActive }) => (
  <div 
    className={`group cursor-pointer py-4 transition-all duration-300 ease-in-out
      ${isActive ? 'text-orange-500' : 'text-white hover:text-white'}`}
  >
    <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-[5px]">
      {text}
    </span>
  </div>
);

const Menu: React.FC<MenuProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 animate-fade-in">
      <div className="flex justify-end p-8">
        <button 
          onClick={onClose}
          className="text-white hover:rotate-90 transition-transform duration-300"
          aria-label="Close menu"
        >
          <X size={24} />
        </button>
      </div>
      
      <nav className="flex flex-col items-center justify-center h-[calc(100vh-120px)] space-y-8 text-3xl">
        <MenuItem text="Homepage" />
        <MenuItem text="Portfolio" />
        <MenuItem text="Services" isActive={true} />
        <MenuItem text="Newsletter" />
        <MenuItem text="Other pages" />
      </nav>
    </div>
  );
};

export default Menu;