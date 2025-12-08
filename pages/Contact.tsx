import React from 'react';
import { Mail } from 'lucide-react';

export const Contact: React.FC = () => {
  return (
    <div className="bg-earth-50 min-h-screen py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-sage-900 mb-2">Connect with Garden Gurus</h1>
            <p className="text-earth-700 mb-4">Organic & Vedic Wisdom for Your Garden</p>
            <a href="mailto:info@depor.garden" className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full text-sage-700 text-sm font-medium shadow-sm hover:shadow-md transition-all border border-sage-100">
              <Mail className="h-4 w-4" />
              info@depor.garden
            </a>
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
            {/* Form Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 bg-[#fdfbf7]">
                <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-bold text-earth-800 mb-2">Your Name</label>
                            <input type="text" placeholder="e.g., Jane Doe" className="w-full px-4 py-3 rounded-lg border border-earth-200 bg-white focus:ring-2 focus:ring-sage-400 outline-none" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-earth-800 mb-2">Email Address</label>
                            <input type="email" placeholder="e.g., jane@example.com" className="w-full px-4 py-3 rounded-lg border border-earth-200 bg-white focus:ring-2 focus:ring-sage-400 outline-none" />
                        </div>
                    </div>
                    
                    <div>
                        <label className="block text-sm font-bold text-earth-800 mb-2">Subject</label>
                        <select className="w-full px-4 py-3 rounded-lg border border-earth-200 bg-white focus:ring-2 focus:ring-sage-400 outline-none text-earth-600">
                            <option>General Inquiry</option>
                            <option>Composting Help</option>
                            <option>Vedic Consultation</option>
                        </select>
                    </div>

                    <div>
                        <label className="block text-sm font-bold text-earth-800 mb-2">Message</label>
                        <textarea rows={5} placeholder="How can we help you grow?" className="w-full px-4 py-3 rounded-lg border border-earth-200 bg-white focus:ring-2 focus:ring-sage-400 outline-none"></textarea>
                    </div>

                    <button className="w-full py-4 bg-sage-700 hover:bg-sage-600 text-white font-bold rounded-xl transition-colors shadow-lg">
                        Send Message
                    </button>
                </form>
            </div>

            {/* Illustration Section */}
            <div className="w-full md:w-1/2 bg-sage-100 relative min-h-[400px]">
                <img 
                    src="https://images.unsplash.com/photo-1599687267812-35c05ff70ee9?q=80&w=2070&auto=format&fit=crop" 
                    alt="Community Gardening" 
                    className="absolute inset-0 w-full h-full object-cover opacity-90 mix-blend-overlay"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sage-200/50 to-amber-100/50 flex items-center justify-center p-8">
                </div>
            </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-16 max-w-3xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-center text-earth-900 mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
                {[
                    "How do I start composting kitchen waste?",
                    "Can I share my own gardening tips?",
                    "What are natural alternatives for common pests?",
                    "How do I access the premium Vedic methods?"
                ].map((q, i) => (
                    <div key={i} className="bg-white border border-earth-200 rounded-lg p-5 flex justify-between items-center cursor-pointer hover:bg-earth-50 transition-colors">
                        <span className="font-semibold text-earth-800">{q}</span>
                        <span className="text-sage-600">v</span>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};