
import React from 'react';
import type { StartupIdea } from '../types';
import { DollarSignIcon, TargetIcon } from './IconComponents';

interface IdeaCardProps {
  idea: StartupIdea;
  onSelect: (idea: StartupIdea) => void;
}

export const IdeaCard: React.FC<IdeaCardProps> = ({ idea, onSelect }) => {
  return (
    <div className="bg-slate-800 rounded-lg shadow-lg overflow-hidden border border-slate-700 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-indigo-500/20 hover:border-indigo-500/50">
      <div className="h-32 sm:h-40 bg-cover bg-center" style={{backgroundImage: `url(https://picsum.photos/seed/${idea.id}/600/400)`}}></div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-white">{idea.startupName}</h3>
        <p className="mt-2 text-sm text-slate-300 h-10 overflow-hidden">{idea.pitch}</p>
        
        <div className="mt-4 space-y-3 text-sm">
          <div className="flex items-center text-slate-400">
            <DollarSignIcon className="w-4 h-4 mr-2 text-green-400" />
            <span>Funding Goal: <span className="font-semibold text-green-400">${idea.fundingGoal.toLocaleString()}</span></span>
          </div>
          <div className="flex items-start text-slate-400">
            <TargetIcon className="w-4 h-4 mr-2 text-cyan-400 flex-shrink-0 mt-0.5" />
            <span>Target: <span className="font-medium text-slate-200">{idea.targetAudience}</span></span>
          </div>
        </div>

        <div className="mt-6">
          <button 
            onClick={() => onSelect(idea)}
            className="w-full bg-indigo-600 text-white font-bold py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-800"
          >
            View Details & AI Analysis
          </button>
        </div>
      </div>
    </div>
  );
};
