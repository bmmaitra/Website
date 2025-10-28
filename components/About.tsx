
import React from 'react';
import { LocationPinIcon } from './icons/LocationPinIcon';
import { PhoneIcon } from './icons/PhoneIcon';
import { ClockIcon } from './icons/ClockIcon';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-brand-blue">Your Neighborhood Pharmacy</h2>
          <p className="mt-2 text-lg text-gray-600">Proudly serving the Staten Island community with a personal touch.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden shadow-lg">
            <img src="https://picsum.photos/seed/pharmacy-map/1200/800" alt="Map of MB&T Pharmacy location" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <LocationPinIcon className="h-16 w-16 text-white opacity-80" />
            </div>
            <p className="absolute bottom-4 left-4 text-white font-bold bg-black/50 p-2 rounded">Staten Island, NY</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-brand-blue mb-4">Committed to Our Community</h3>
            <p className="text-gray-700 mb-6">
              At MB&T Pharmacy, we're more than just a place to pick up prescriptions. We're your neighbors, your friends, and your dedicated health partners. We pride ourselves on providing exceptional, personalized care to every person who walks through our doors.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <LocationPinIcon className="h-6 w-6 text-brand-teal mr-4" />
                <span className="text-gray-800">123 Victory Blvd, Staten Island, NY 10301</span>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="h-6 w-6 text-brand-teal mr-4" />
                <span className="text-gray-800">(718) 555-1234</span>
              </div>
              <div className="flex items-center">
                <ClockIcon className="h-6 w-6 text-brand-teal mr-4" />
                <span className="text-gray-800">Mon-Fri: 9am - 7pm | Sat: 9am - 3pm | Sun: Closed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
