
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Phone, Instagram } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const MobileNavigation: React.FC = () => {
  const isMobile = useIsMobile();
  const location = useLocation();
  
  if (!isMobile) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center w-full py-2 ${
            location.pathname === '/' 
              ? 'text-blue-700 dark:text-blue-400' 
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Home className="w-6 h-6" />
          <span className="text-xs mt-1">Home</span>
        </Link>
        
        <Link 
          to="/contact" 
          className={`flex flex-col items-center justify-center w-full py-2 ${
            location.pathname === '/contact' 
              ? 'text-blue-700 dark:text-blue-400' 
              : 'text-gray-600 dark:text-gray-400'
          }`}
        >
          <Phone className="w-6 h-6" />
          <span className="text-xs mt-1">Contact</span>
        </Link>
        
        <a 
          href="https://instagram.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center w-full py-2 text-gray-600 dark:text-gray-400"
        >
          <Instagram className="w-6 h-6" />
          <span className="text-xs mt-1">Instagram</span>
        </a>
      </div>
    </div>
  );
};

export default MobileNavigation;
