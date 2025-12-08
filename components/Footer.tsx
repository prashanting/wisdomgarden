import React from 'react';
import { Page } from '../types';
import { Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

interface FooterProps {
    setPage?: (page: Page) => void;
}

export const Footer: React.FC<FooterProps> = ({ setPage }) => {
  return (
    <footer className="bg-[#e8dec8] pt-12 pb-6 mt-auto border-t border-earth-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-serif font-bold text-sage-900 mb-4">Vedic Garden Essentials</h3>
            <p className="text-earth-900 text-sm leading-relaxed max-w-md font-medium">
              Reconnect with the earth through ancient wisdom and modern organic practices. 
              We believe every kitchen scrap holds the potential for new life.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-sage-900 mb-4 uppercase text-xs tracking-wider">Legal & Help</h4>
            <ul className="space-y-2 text-sm text-earth-800">
              <li>
                  <button 
                    onClick={() => setPage && setPage(Page.DISCLAIMER)} 
                    className="hover:text-sage-700 hover:underline transition-colors"
                  >
                    Privacy Policy
                  </button>
              </li>
              <li>
                  <button 
                    onClick={() => setPage && setPage(Page.DISCLAIMER)} 
                    className="hover:text-sage-700 hover:underline transition-colors"
                  >
                      Terms & Disclaimer
                  </button>
              </li>
              <li><button onClick={() => setPage && setPage(Page.CONTACT)} className="hover:text-sage-700 hover:underline transition-colors">Contact Support</button></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-sage-900 mb-4 uppercase text-xs tracking-wider">Join the Community</h4>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-earth-800 hover:text-blue-600 cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-earth-800 hover:text-sky-500 cursor-pointer transition-colors" />
              <Instagram className="h-5 w-5 text-earth-800 hover:text-pink-600 cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-earth-800 hover:text-blue-700 cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
        <div className="border-t border-earth-400/30 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-earth-800 font-medium">
          <p>© 2024 Vedic Garden Essentials. All rights reserved.</p>
          <div className="flex items-center mt-2 md:mt-0">
             <span>Made with</span>
             <Heart className="h-3 w-3 mx-1 text-red-600 fill-current animate-pulse" />
             <span>for nature lovers.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};