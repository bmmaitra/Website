
import React from 'react';
import RefillForm from './RefillForm';

const Hero: React.FC = () => {
  return (
    <section id="refill" className="bg-brand-light py-20 md:py-32">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-blue leading-tight mb-4">
            Your Health, <span className="text-brand-teal">Simplified.</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-xl mx-auto md:mx-0">
            Fast, easy, and reliable prescription refills for our Staten Island community. Get started in minutes with our AI-powered assistant.
          </p>
        </div>
        <div>
          <RefillForm />
        </div>
      </div>
    </section>
  );
};

export default Hero;
