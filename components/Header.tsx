
import React from 'react';
import type { View } from '../types';
import { LogoIcon } from './IconComponents';

interface HeaderProps {
  onNavigate: (view: View) => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div 
            className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('home')}
          >
            <LogoIcon className="h-8 w-8 text-indigo-400" />
            <span className="text-2xl font-bold text-white tracking-tight">IdeaConnect</span>
          </div>
          <div className="hidden md:flex md:items-center md:space-x-4">
            <button 
              onClick={() => onNavigate('browseIdeas')}
              className="text-slate-300 hover:bg-slate-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Discover Startups
            </button>
            <button 
              onClick={() => onNavigate('submitIdea')}
              className="bg-indigo-500 text-white hover:bg-indigo-600 px-4 py-2 rounded-md text-sm font-bold shadow-lg transition-transform hover:scale-105"
            >
              Share Your Idea
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};
