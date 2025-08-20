import React from 'react';
import { Search, Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900/95 backdrop-blur-md text-white border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Search className="w-8 h-8 text-teal-400" />
              <span className="text-xl font-bold">
                <span className="text-white">Domain </span>
                <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
                  Insights
                </span>
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
              The most comprehensive domain analysis platform. Get deep
              insights into any domain's performance, security, and
              infrastructure.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Product links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  API
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Documentation
                </a>
              </li>
            </ul>
          </div>

          {/* Support links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-4">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Status
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © 2025 Domain Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;