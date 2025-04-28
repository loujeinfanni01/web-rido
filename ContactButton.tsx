import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const ContactButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <button 
      className="bg-orange-500 text-white flex items-center justify-center gap-4 px-10 py-4 rounded-full transition-all duration-300 hover:bg-orange-600 group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <span className="font-medium tracking-wider">
        {isHovered ? 'MORE' : 'CONTACT US'}
      </span>
      <div className="bg-black rounded-full p-2 transition-transform duration-300 group-hover:translate-x-1">
        <ArrowRight size={16} color="white" />
      </div>
    </button>
  );
};

export default ContactButton;