import React from 'react';
import { Instagram } from 'lucide-react';

interface HeaderProps {
  onNavigateHome?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigateHome }) => {
  return (
    <header className="fixed w-full bg-white/95 backdrop-blur-md z-50 border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-center h-20 md:h-28">
          {/* Centered Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={onNavigateHome}>
            <img 
              src="https://pub-35faf01d0bac49249f374189fd3a24d9.r2.dev/images/1766527091344-3a83e96d-6e6e-4d35-af77-4b997b9c0138.png" 
              alt="The Access Pathway Logo" 
              className="h-14 md:h-24 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Right-aligned Instagram Icon */}
          <div className="absolute right-0 flex items-center top-0 bottom-0">
            <a 
              href="https://instagram.com/theaccesspathway" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-black transition-colors duration-300 p-2"
              aria-label="Follow us on Instagram"
            >
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;