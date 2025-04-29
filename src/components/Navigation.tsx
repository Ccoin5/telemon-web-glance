
import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeToggle } from './ThemeToggle';
import { Button } from '@/components/ui/button';

const Navigation: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-4 px-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold text-blue-700 dark:text-blue-400">Monoptica</Link>
      <div className="flex items-center gap-4">
        <Button variant="ghost" asChild className="text-blue-700 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20">
          <Link to="/contact">Contact</Link>
        </Button>
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Navigation;
