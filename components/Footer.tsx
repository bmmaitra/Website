
import React from 'react';
import { PharmacyIcon } from './icons/PharmacyIcon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
                <PharmacyIcon className="h-8 w-8 text-brand-teal" />
                <h3 className="text-xl font-bold">MB&T Pharmacy</h3>
            </div>
            <p className="text-gray-300">123 Victory Blvd,<br />Staten Island, NY 10301</p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#refill" className="text-gray-300 hover:text-white transition-colors">Refill Prescriptions</a></li>
              <li><a href="#about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-4">Disclaimer</h4>
            <p className="text-gray-400 text-sm">
              This website's AI features are for assistance only and do not constitute medical advice. Please consult with a healthcare professional for any medical concerns.
            </p>
          </div>
        </div>
        <div className="mt-12 border-t border-gray-700 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} MB&T Pharmacy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
