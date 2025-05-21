import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-bold text-xl text-purple-400 mb-2">Punithan J</h3>
            <p className="text-gray-300 text-sm">Computer Science & Business Systems Student</p>
          </div>
          
          <div className="flex flex-col space-y-2 mb-6 md:mb-0 items-center md:items-end">
            <div className="flex items-center text-gray-300">
              <Mail size={16} className="mr-2 text-purple-400" />
              <a href="mailto:punithan06232005@gmail.com" className="hover:text-purple-400 transition-colors">
                punithan06232005@gmail.com
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <Phone size={16} className="mr-2 text-purple-400" />
              <a href="tel:9845423514" className="hover:text-purple-400 transition-colors">
                9845423514
              </a>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin size={16} className="mr-2 text-purple-400" />
              <span>Bangalore, Karnataka</span>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 my-6"></div>
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2025 Punithan J. All rights reserved.
          </p>
          
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Github size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;