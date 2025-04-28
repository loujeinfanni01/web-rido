import React, { useEffect, useRef } from 'react';
import Button from './Button';

const ContactHero: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (headingRef.current) {
      headingRef.current.classList.add('animate-fadeIn');
    }
  }, []);

  const scrollToForm = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center px-6">
      <h1 
        ref={headingRef}
        className="text-6xl md:text-7xl lg:text-8xl font-bold text-center opacity-0 transition-opacity duration-1000"
      >
        Get in touch!
      </h1>
      
      <div className="mt-16">
        <Button 
          variant="secondary" 
          icon="arrow-down"
          onClick={scrollToForm}
          className="rounded-full"
        >
          Send Message
        </Button>
      </div>
      
      {/* Hidden ref for scroll target */}
      <div ref={scrollRef} className="absolute -bottom-16" />
    </div>
  );
};

export default ContactHero;