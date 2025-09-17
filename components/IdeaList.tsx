
import React from 'react';
import type { StartupIdea } from '../types';
import { IdeaCard } from './IdeaCard';

interface IdeaListProps {
  ideas: StartupIdea[];
  onSelectIdea: (idea: StartupIdea) => void;
}

export const IdeaList: React.FC<IdeaListProps> = ({ ideas, onSelectIdea }) => {
  return (
    <div>
       <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Discover Opportunities</h2>
      <p className="text-center text-slate-400 mb-10">Browse through the latest and most innovative startup ideas.</p>
      
      {ideas.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ideas.map(idea => (
            <IdeaCard key={idea.id} idea={idea} onSelect={onSelectIdea} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-slate-800 rounded-lg border border-slate-700">
          <p className="text-slate-400">No startup ideas have been submitted yet.</p>
          <p className="text-slate-500 mt-2">Be the first to share a vision!</p>
        </div>
      )}
    </div>
  );
};
