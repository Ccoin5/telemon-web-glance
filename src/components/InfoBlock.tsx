
import React from 'react';

const InfoBlock: React.FC = () => {
  return (
    <div className="py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Monoptica Eyewear</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Premium Quality</h3>
            <p className="text-gray-600">
              At Monoptica, we bring you the highest quality frames and lenses created with precision and care. 
              Our collection is curated from the finest materials to ensure durability, comfort, and style.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Expert Service</h3>
            <p className="text-gray-600">
              Our team of experienced opticians provides personalized consultations to help you find the perfect 
              eyewear that suits your face shape, lifestyle, and prescription needs.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Latest Trends</h3>
            <p className="text-gray-600">
              Stay up-to-date with the latest eyewear trends. We regularly update our collection with 
              contemporary designs from top brands and independent designers around the world.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-xl font-semibold mb-3">Complete Care</h3>
            <p className="text-gray-600">
              Beyond selling eyewear, we provide comprehensive after-sales service including adjustments, 
              repairs, and maintenance advice to ensure your glasses remain perfect for years to come.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBlock;
