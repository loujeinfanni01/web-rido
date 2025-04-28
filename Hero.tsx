import React from 'react';
import ContactButton from './ContactButton';

const Hero: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center px-6 md:px-12 max-w-5xl mx-auto">
      <p className="text-gray-500 mb-12 max-w-xl">
        Looking to make your mark? We&apos;ll help you turn your project into a success story.
      </p>
      
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-16 leading-tight">
        Let&apos;s make an <span className="font-normal">impact</span> <br className="hidden md:block" />
        together. Ready <span className="font-normal">when you are</span>
      </h1>
      
      <ContactButton />
    </section>
  );
};

export default Hero;