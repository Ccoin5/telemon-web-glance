
import React from 'react';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactButton: React.FC = () => {
  return (
    <div className="w-full py-8 bg-blue-50">
      <div className="max-w-md mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Need assistance?</h2>
        <p className="text-gray-600 mb-6">
          Our team is ready to help with any questions about our products, services, or scheduling an appointment.
        </p>
        <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg inline-flex items-center gap-2">
          <Link to="/contact">
            <Phone className="w-5 h-5" />
            <span>Contact Us</span>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default ContactButton;
