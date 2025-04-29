
import React, { useState, useEffect } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Product {
  id: number;
  name: string;
  image: string;
  price: string;
  description: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Frame",
    image: "https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=1470&auto=format&fit=crop",
    price: "$150",
    description: "Timeless design with premium materials"
  },
  {
    id: 2,
    name: "Modern Sunglasses",
    image: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?q=80&w=1580&auto=format&fit=crop",
    price: "$195",
    description: "UV protection with style"
  },
  {
    id: 3,
    name: "Lightweight Titanium",
    image: "https://images.unsplash.com/photo-1574258495973-f010dfbb5371?q=80&w=1470&auto=format&fit=crop",
    price: "$220",
    description: "Durable and comfortable all day"
  },
];

const ProductSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };
  
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="w-full relative overflow-hidden rounded-xl shadow-lg">
      <div className="relative h-[400px] md:h-[500px]">
        {products.map((product, index) => (
          <div
            key={product.id}
            className={cn(
              "absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out",
              currentIndex === index ? "opacity-100" : "opacity-0 pointer-events-none"
            )}
          >
            <div className="relative w-full h-full">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-30" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h2 className="text-2xl md:text-3xl font-bold mb-2">{product.name}</h2>
                <p className="text-lg md:text-xl mb-1">{product.price}</p>
                <p className="text-sm md:text-base opacity-80">{product.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <button 
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        onClick={prevSlide}
      >
        <ArrowLeft className="w-5 h-5" />
      </button>
      
      <button 
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 shadow-md hover:bg-white transition-colors"
        onClick={nextSlide}
      >
        <ArrowRight className="w-5 h-5" />
      </button>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        {products.map((_, index) => (
          <button
            key={index}
            className={cn(
              "slider-dot",
              currentIndex === index ? "active" : ""
            )}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductSlider;
