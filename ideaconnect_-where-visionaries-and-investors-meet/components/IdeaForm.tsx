
import React, { useState } from 'react';
import type { StartupIdea } from '../types';
import { enhancePitch } from '../services/geminiService';
import { MagicWandIcon } from './IconComponents';

interface IdeaFormProps {
  onSubmit: (idea: Omit<StartupIdea, 'id' | 'aiAnalysis'>) => void;
}

export const IdeaForm: React.FC<IdeaFormProps> = ({ onSubmit }) => {
  const [startupName, setStartupName] = useState('');
  const [pitch, setPitch] = useState('');
  const [problem, setProblem] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [fundingGoal, setFundingGoal] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [isEnhancing, setIsEnhancing] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!startupName || !pitch || !problem || !targetAudience || !fundingGoal || !contactEmail) {
      alert('Please fill out all fields.');
      return;
    }
    onSubmit({
      startupName,
      pitch,
      problem,
      targetAudience,
      fundingGoal: parseInt(fundingGoal, 10),
      contactEmail,
    });
  };

  const handleEnhancePitch = async () => {
    if (!pitch) {
      alert('Please write a pitch first.');
      return;
    }
    setIsEnhancing(true);
    try {
      const newPitch = await enhancePitch(pitch);
      setPitch(newPitch);
    } catch (error) {
      console.error("Failed to enhance pitch", error);
      alert("Could not enhance pitch at this time.");
    } finally {
      setIsEnhancing(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-slate-800/50 p-8 rounded-lg shadow-2xl border border-slate-700">
      <h2 className="text-3xl font-bold text-center mb-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Share Your Vision</h2>
      <p className="text-center text-slate-400 mb-8">Fill out the details below to get your idea in front of investors.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="startupName" className="block text-sm font-medium text-slate-300">Startup Name</label>
          <input type="text" id="startupName" value={startupName} onChange={e => setStartupName(e.target.value)} required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        <div>
          <label htmlFor="pitch" className="block text-sm font-medium text-slate-300">One-Liner Pitch</label>
          <div className="relative">
            <input type="text" id="pitch" value={pitch} onChange={e => setPitch(e.target.value)} required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm pr-28"/>
            <button type="button" onClick={handleEnhancePitch} disabled={isEnhancing} className="absolute inset-y-0 right-0 top-1 mr-1 flex items-center px-3 py-1.5 text-xs font-semibold bg-indigo-600 text-white rounded-md hover:bg-indigo-700 disabled:bg-slate-500 disabled:cursor-not-allowed transition-colors">
              <MagicWandIcon className={`w-4 h-4 mr-1 ${isEnhancing ? 'animate-spin' : ''}`} />
              {isEnhancing ? 'Enhancing...' : 'Enhance with AI'}
            </button>
          </div>
        </div>

        <div>
          <label htmlFor="problem" className="block text-sm font-medium text-slate-300">Problem It Solves</label>
          <textarea id="problem" value={problem} onChange={e => setProblem(e.target.value)} rows={4} required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"></textarea>
        </div>

        <div>
          <label htmlFor="targetAudience" className="block text-sm font-medium text-slate-300">Target Audience</label>
          <input type="text" id="targetAudience" value={targetAudience} onChange={e => setTargetAudience(e.target.value)} required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        <div>
          <label htmlFor="fundingGoal" className="block text-sm font-medium text-slate-300">Funding Goal ($)</label>
          <input type="number" id="fundingGoal" value={fundingGoal} onChange={e => setFundingGoal(e.target.value)} required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        <div>
          <label htmlFor="contactEmail" className="block text-sm font-medium text-slate-300">Contact Email</label>
          <input type="email" id="contactEmail" value={contactEmail} onChange={e => setContactEmail(e.target.value)} required className="mt-1 block w-full bg-slate-900 border border-slate-600 rounded-md shadow-sm py-2 px-3 text-white focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
        </div>

        <div>
          <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-lg text-sm font-bold text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-900 transition-transform hover:scale-105">
            Submit Idea for AI Analysis
          </button>
        </div>
      </form>
    </div>
  );
};
