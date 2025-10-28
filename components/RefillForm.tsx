
import React, { useState } from 'react';
import type { RefillFormData } from '../types';
import { submitRefillRequest } from '../services/geminiService';
import { BotIcon } from './icons/BotIcon';

const RefillForm: React.FC = () => {
  const [formData, setFormData] = useState<RefillFormData>({
    fullName: '',
    dob: '',
    phone: '',
    email: '',
    rxNumbers: '',
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.dob || !formData.phone || !formData.rxNumbers) {
      setError('Please fill out all required fields.');
      return;
    }
    setError('');
    setLoading(true);
    setResponse('');
    
    const aiResponse = await submitRefillRequest(formData);
    setResponse(aiResponse);
    setLoading(false);
    
    if (aiResponse && !aiResponse.toLowerCase().includes('error')) {
        setFormData({ fullName: '', dob: '', phone: '', email: '', rxNumbers: '' });
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-lg mx-auto">
      <h3 className="text-2xl font-bold text-brand-blue mb-6">Refill Your Prescriptions</h3>
      
      {response ? (
        <div className="bg-teal-50 border-l-4 border-brand-teal text-teal-900 p-4 rounded-r-lg mb-6 flex items-start space-x-4">
          <BotIcon className="h-8 w-8 text-brand-teal flex-shrink-0 mt-1"/>
          <div>
            <p className="font-bold">AI Assistant</p>
            <p className="whitespace-pre-wrap">{response}</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="fullName" className="block text-sm font-semibold text-gray-700">Full Name</label>
              <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal" />
            </div>
            <div>
              <label htmlFor="dob" className="block text-sm font-semibold text-gray-700">Date of Birth</label>
              <input type="date" name="dob" id="dob" value={formData.dob} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal" />
            </div>
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-gray-700">Phone Number</label>
            <input type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal" />
          </div>
           <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700">Email (Optional)</label>
            <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal" />
          </div>
          <div>
            <label htmlFor="rxNumbers" className="block text-sm font-semibold text-gray-700">Prescription (Rx) Numbers</label>
            <textarea name="rxNumbers" id="rxNumbers" value={formData.rxNumbers} onChange={handleChange} rows={3} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal" placeholder="Enter each Rx number on a new line"></textarea>
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <div>
            <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-brand-teal hover:bg-brand-teal-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-teal disabled:bg-gray-400 transition-colors">
              {loading ? 'Submitting...' : 'Request Refill'}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default RefillForm;
