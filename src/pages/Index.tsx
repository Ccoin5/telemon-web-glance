
import React from 'react';
import ProductSlider from '@/components/ProductSlider';
import InfoBlock from '@/components/InfoBlock';
import ContactButton from '@/components/ContactButton';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto py-4 px-4">
          <h1 className="text-2xl font-bold text-blue-700">Monoptica</h1>
        </div>
      </header>
      
      <main>
        {/* Block 1: Slider */}
        <section className="max-w-6xl mx-auto px-4 pt-6 pb-12">
          <ProductSlider />
        </section>
        
        {/* Block 2: Short Info */}
        <section className="bg-white">
          <InfoBlock />
        </section>
        
        {/* Block 3: Contact Info Button */}
        <section>
          <ContactButton />
        </section>
      </main>
      
      <footer className="bg-gray-800 text-white py-6">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Monoptica. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
