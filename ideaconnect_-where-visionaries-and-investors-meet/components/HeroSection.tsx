
import React from 'react';
import type { View } from '../types';
import { InvestorIcon, EntrepreneurIcon } from './IconComponents';

interface HeroSectionProps {
  onNavigate: (view: View) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  return (
    <div className="text-center py-16 sm:py-24">
      <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500 tracking-tight">
        The Nexus of Innovation and Investment
      </h1>
      <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300">
        IdeaConnect is the premier platform where groundbreaking startups meet visionary investors. Share your dream, discover the next unicorn, and build the future together.
      </p>
      <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center space-y-4 sm:space-y-0 sm:space-x-4">
        <button
          onClick={() => onNavigate('submitIdea')}
          className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-transform hover:scale-105 shadow-lg"
        >
          <EntrepreneurIcon className="w-5 h-5 mr-2" />
          I'm an Entrepreneur
        </button>
        <button
          onClick={() => onNavigate('browseIdeas')}
          className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-slate-600 text-base font-medium rounded-md text-slate-100 bg-slate-800 hover:bg-slate-700 transition-transform hover:scale-105 shadow-lg"
        >
          <InvestorIcon className="w-5 h-5 mr-2" />
          I'm an Investor
        </button>
      </div>
    </div>
  );
};
