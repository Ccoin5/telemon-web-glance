
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThemeToggle } from '@/components/ThemeToggle';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Monoptica</h1>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Button variant="ghost" asChild className="dark:text-white">
              <Link to="/" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
            </Button>
          </div>
        </div>
      </header>
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center text-blue-800 dark:text-blue-400">Contact Us</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Address Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-blue-100 dark:border-blue-900">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-blue-700 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-800 dark:text-blue-400">Our Location</h3>
                  <p className="text-gray-600 dark:text-gray-300">Monoptica</p>
                  <p className="text-gray-600 dark:text-gray-300">123 Eyewear Street, Fashion District</p>
                  <p className="text-gray-600 dark:text-gray-300">New York, NY 10001</p>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-blue-700 dark:text-blue-400 hover:underline mt-2 inline-block"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Phone Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-blue-100 dark:border-blue-900">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-700 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-800 dark:text-blue-400">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-300">Customer Service: (123) 456-7890</p>
                  <p className="text-gray-600 dark:text-gray-300">Appointments: (123) 456-7891</p>
                  <a 
                    href="tel:+11234567890" 
                    className="text-blue-700 dark:text-blue-400 hover:underline mt-2 inline-block"
                  >
                    Call Now
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Working Hours Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-blue-100 dark:border-blue-900">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-blue-700 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-800 dark:text-blue-400">Business Hours</h3>
                  <p className="text-gray-600 dark:text-gray-300">Monday - Friday: 9:00 AM - 7:00 PM</p>
                  <p className="text-gray-600 dark:text-gray-300">Saturday: 10:00 AM - 5:00 PM</p>
                  <p className="text-gray-600 dark:text-gray-300">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Viber Contact Section */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-blue-100 dark:border-blue-900">
            <div className="p-6">
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-blue-700 dark:text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-blue-800 dark:text-blue-400">Contact via Viber</h3>
                  <p className="text-gray-600 dark:text-gray-300">Quick response on Viber: (123) 456-7890</p>
                  <a 
                    href="viber://chat?number=+11234567890" 
                    className="mt-3 inline-flex items-center gap-2 bg-[#7360f2] text-white px-4 py-2 rounded-lg hover:bg-[#5b4bc4] transition-colors"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Contact via Viber</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8">
          <div className="h-64 bg-gray-300 dark:bg-gray-700 rounded-xl overflow-hidden border border-blue-100 dark:border-blue-900">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970702!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1682645227452!5m2!1sen!2s" 
              className="w-full h-full border-0" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Monoptica Location"
            />
          </div>
        </div>
      </main>
      
      <footer className="bg-blue-800 dark:bg-blue-900 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Monoptica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
