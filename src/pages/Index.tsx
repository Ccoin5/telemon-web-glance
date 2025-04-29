
import React from 'react';
import ProductSlider from '@/components/ProductSlider';
import InfoBlock from '@/components/InfoBlock';
import ContactButton from '@/components/ContactButton';
import { ThemeToggle } from '@/components/ThemeToggle';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-blue-700 dark:text-blue-400">Monoptica</h1>
          <ThemeToggle />
        </div>
      </header>
      
      <main>
        {/* Block 1: Slider */}
        <section className="max-w-6xl mx-auto px-4 pt-6 pb-12">
          <ProductSlider />
        </section>
        
        {/* Block 2: Short Info */}
        <section className="bg-white dark:bg-gray-800">
          <InfoBlock />
        </section>
        
        {/* Block 3: Contact Info Button */}
        <section className="dark:bg-gray-900">
          <ContactButton />
        </section>
      </main>
      
      <footer className="bg-gray-800 dark:bg-gray-900 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Monoptica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
