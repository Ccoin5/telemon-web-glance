
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactButton: React.FC = () => {
  return (
    <div className="w-full py-8 bg-blue-50 dark:bg-blue-900/20">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4 text-blue-800 dark:text-blue-400">Need assistance?</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Our team is ready to help with any questions about our products, services, or scheduling an appointment.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-3">
          <Button asChild className="bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 text-white py-2 px-6 rounded-lg inline-flex items-center gap-2">
            <Link to="/contact">
              <Phone className="w-5 h-5" />
              <span>Contact Us</span>
            </Link>
          </Button>
          <a 
            href="viber://chat?number=+11234567890"
            className="inline-flex items-center gap-2 bg-[#7360f2] hover:bg-[#5b4bc4] text-white py-2 px-6 rounded-lg transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>Viber</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactButton;
