import React from 'react';
import { Page } from '../types';
import { Menu, Leaf } from 'lucide-react';

interface HeaderProps {
  currentPage: Page;
  setCurrentPage: (page: Page) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, setCurrentPage }) => {
  const navItems = [
    { label: 'Home', value: Page.HOME },
    { label: 'Daily Tips', value: Page.TIPS },
    { label: 'Organic Methods', value: Page.ARTICLE }, // Using Article as a placeholder for methods
    { label: 'About', value: Page.ABOUT },
    { label: 'Contact', value: Page.CONTACT },
  ];

  return (
    <header className="sticky top-0 z-50 bg-earth-50/95 backdrop-blur-sm border-b border-earth-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setCurrentPage(Page.HOME)}
          >
            <div className="p-2 bg-sage-100 rounded-full group-hover:bg-sage-200 transition-colors">
              <Leaf className="h-6 w-6 text-sage-700" />
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-serif font-bold text-sage-900 leading-tight">Vedic Garden</h1>
              <p className="text-xs text-earth-700 font-medium tracking-wide">ESSENTIALS</p>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.value}
                onClick={() => setCurrentPage(item.value)}
                className={`text-sm font-medium transition-colors duration-200 ${
                  currentPage === item.value
                    ? 'text-sage-700 border-b-2 border-sage-500'
                    : 'text-earth-800 hover:text-sage-600'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden">
            <button className="p-2 text-earth-800 hover:bg-earth-100 rounded-md">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};