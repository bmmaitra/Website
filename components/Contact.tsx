
import React, { useState } from 'react';
import type { QuestionFormData } from '../types';
import { submitMedicalQuestion } from '../services/geminiService';
import { BotIcon } from './icons/BotIcon';

const Contact: React.FC = () => {
    const [formData, setFormData] = useState<QuestionFormData>({
        fullName: '',
        contactInfo: '',
        question: '',
    });
    const [loading, setLoading] = useState(false);
    const [response, setResponse] = useState('');
    const [error, setError] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!formData.fullName || !formData.contactInfo || !formData.question) {
            setError('Please fill out all fields.');
            return;
        }
        setError('');
        setLoading(true);
        setResponse('');

        const aiResponse = await submitMedicalQuestion(formData);
        setResponse(aiResponse);
        setLoading(false);

        if (aiResponse && !aiResponse.toLowerCase().includes('error')) {
            setFormData({ fullName: '', contactInfo: '', question: '' });
        }
    };


  return (
    <section id="contact" className="py-20 bg-brand-light">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-4xl font-extrabold text-brand-blue">Have a Question?</h2>
        <p className="mt-2 text-lg text-gray-600 mb-8">
            Our AI assistant can forward your medical questions directly to our pharmacists.
        </p>
        
        <div className="bg-white p-8 rounded-2xl shadow-xl text-left">
            {response ? (
                <div className="bg-blue-50 border-l-4 border-blue-500 text-blue-900 p-4 rounded-r-lg flex items-start space-x-4">
                    <BotIcon className="h-8 w-8 text-blue-500 flex-shrink-0 mt-1"/>
                    <div>
                        <p className="font-bold">AI Assistant</p>
                        <p className="whitespace-pre-wrap">{response}</p>
                    </div>
                </div>
            ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label htmlFor="q_fullName" className="block text-sm font-semibold text-gray-700">Full Name</label>
                            <input type="text" name="fullName" id="q_fullName" value={formData.fullName} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal" />
                        </div>
                        <div>
                            <label htmlFor="contactInfo" className="block text-sm font-semibold text-gray-700">Email or Phone</label>
                            <input type="text" name="contactInfo" id="contactInfo" value={formData.contactInfo} onChange={handleChange} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal" />
                        </div>
                    </div>
                    <div>
                        <label htmlFor="question" className="block text-sm font-semibold text-gray-700">Your Question</label>
                        <textarea name="question" id="question" value={formData.question} onChange={handleChange} rows={4} required className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-teal focus:border-brand-teal" placeholder="Please do not include sensitive personal information."></textarea>
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <div>
                        <button type="submit" disabled={loading} className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-brand-coral hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-coral disabled:bg-gray-400 transition-colors">
                            {loading ? 'Sending...' : 'Forward to Pharmacist'}
                        </button>
                    </div>
                </form>
            )}
        </div>

      </div>
    </section>
  );
};

export default Contact;
