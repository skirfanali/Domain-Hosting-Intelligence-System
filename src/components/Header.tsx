import React, { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinkClasses =
    "font-bold text-lg bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent relative transition-all duration-300 before:absolute before:inset-0 before:bg-gradient-to-r before:from-orange-400 before:to-pink-500 before:opacity-0 hover:before:opacity-20 before:rounded-md";

  return (
    <header className="bg-slate-900/90 backdrop-blur-md text-white relative z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Search className="w-8 h-8 text-teal-400" />
            <span className="text-xl font-bold">
              <span className="text-white">Domain </span>
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                Insights
              </span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className={`${navLinkClasses}`}>Home</a>
            <a href="#" className={`${navLinkClasses}`}>Features</a>
            <a href="#" className={`${navLinkClasses}`}>Pricing</a>
            <a href="#" className={`${navLinkClasses}`}>Support</a>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
            />
            <button className="text-white hover:text-teal-400 transition-colors">
              Log In
            </button>
            <button className="bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200">
              Sign Up
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-md border-t border-slate-700">
            <div className="px-4 py-4 space-y-4">
              <a href="#" className={`${navLinkClasses}`}>Home</a>
              <a href="#" className={`${navLinkClasses}`}>Features</a>
              <a href="#" className={`${navLinkClasses}`}>Pricing</a>
              <a href="#" className={`${navLinkClasses}`}>Support</a>
              <div className="pt-4 border-t border-slate-700 space-y-4">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-400"
                />
                <button className="block w-full text-left text-white hover:text-teal-400 transition-colors">
                  Log In
                </button>
                <button className="w-full bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-200">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
