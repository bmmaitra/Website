
import React from 'react';
import { PharmacyIcon } from './icons/PharmacyIcon';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <PharmacyIcon className="h-8 w-8 text-brand-teal" />
          <a href="#" className="text-2xl font-extrabold text-brand-blue">
            MB&T Pharmacy
          </a>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#refill" className="text-gray-600 hover:text-brand-teal font-semibold transition-colors">Refill Prescriptions</a>
          <a href="#about" className="text-gray-600 hover:text-brand-teal font-semibold transition-colors">About Us</a>
          <a href="#contact" className="text-gray-600 hover:text-brand-teal font-semibold transition-colors">Contact</a>
        </nav>
        <a href="#refill" className="hidden md:inline-block bg-brand-coral text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-all shadow-md">
          Start Refill
        </a>
         <button className="md:hidden text-brand-blue">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
