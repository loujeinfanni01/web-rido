import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="flex justify-between items-end w-full px-12 py-8">
      <a 
        href="#services" 
        className="vertical-text text-black font-medium tracking-wider hover:font-bold transition-all"
      >
        SERVICES
      </a>
      
      <button 
        onClick={scrollToTop}
        className="flex items-center gap-2 group"
        aria-label="Back to top"
      >
        <span className="font-medium tracking-wider text-sm group-hover:underline">BACK TO TOP</span>
        <div className="rounded-full p-2 border border-gray-300 transition-transform duration-300 group-hover:-translate-y-1">
          <ArrowUp size={16} />
        </div>
      </button>
    </footer>
  );
};

export default Footer;