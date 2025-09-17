
import React from 'react';
import type { StartupIdea } from '../types';
import { CheckCircleIcon, XCircleIcon, UsersIcon, LightBulbIcon, ChevronLeftIcon } from './IconComponents';

interface IdeaDetailProps {
  idea: StartupIdea;
  onBack: () => void;
}

const AIAnalysisSection: React.FC<{ title: string; items: string[]; icon: React.ReactNode }> = ({ title, items, icon }) => (
    <div className="bg-slate-800 p-4 rounded-lg">
        <h4 className="text-lg font-semibold text-slate-200 flex items-center mb-3">
            {icon}
            <span className="ml-2">{title}</span>
        </h4>
        <ul className="space-y-2">
            {items.map((item, index) => (
                <li key={index} className="flex items-start text-slate-300">
                    <span className="text-indigo-400 mr-2 mt-1">&#8227;</span>
                    <span>{item}</span>
                </li>
            ))}
        </ul>
    </div>
);

export const IdeaDetail: React.FC<IdeaDetailProps> = ({ idea, onBack }) => {
  const { startupName, pitch, problem, targetAudience, fundingGoal, contactEmail, aiAnalysis } = idea;

  return (
    <div className="max-w-4xl mx-auto">
        <button onClick={onBack} className="flex items-center text-indigo-400 hover:text-indigo-300 mb-6 font-semibold transition-colors">
            <ChevronLeftIcon className="w-5 h-5 mr-1" />
            Back to Ideas
        </button>

        <div className="bg-slate-800/50 border border-slate-700 shadow-2xl rounded-lg p-6 sm:p-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                <div>
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-white">{startupName}</h2>
                    <p className="mt-2 text-lg text-indigo-300 italic">{pitch}</p>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 flex-shrink-0 text-center bg-green-500/10 border border-green-500/30 rounded-lg px-4 py-2">
                    <p className="text-sm font-medium text-green-300">Funding Goal</p>
                    <p className="text-2xl font-bold text-green-400">${fundingGoal.toLocaleString()}</p>
                </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-slate-300">
                <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 border-b-2 border-slate-600 pb-2">The Problem</h3>
                    <p>{problem}</p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-slate-100 mb-3 border-b-2 border-slate-600 pb-2">Target Audience</h3>
                    <p>{targetAudience}</p>
                </div>
            </div>
            <div className="mt-6 text-center">
                <a href={`mailto:${contactEmail}`} className="inline-block bg-indigo-600 text-white font-bold py-2 px-6 rounded-md hover:bg-indigo-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:ring-offset-slate-800">
                    Contact Entrepreneur
                </a>
            </div>
        </div>

        {aiAnalysis && (
            <div className="mt-10">
                <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">VC AI Analysis</h3>
                <div className="bg-slate-800/50 border border-slate-700 shadow-2xl rounded-lg p-6 sm:p-8">
                    <p className="text-slate-300 italic mb-6">
                        {aiAnalysis.summary}
                    </p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <AIAnalysisSection title="Strengths" items={aiAnalysis.strengths} icon={<CheckCircleIcon className="w-5 h-5 text-green-400" />} />
                        <AIAnalysisSection title="Weaknesses" items={aiAnalysis.weaknesses} icon={<XCircleIcon className="w-5 h-5 text-red-400" />} />
                        <AIAnalysisSection title="Target Markets" items={aiAnalysis.targetMarkets} icon={<UsersIcon className="w-5 h-5 text-cyan-400" />} />
                    </div>
                </div>
            </div>
        )}
    </div>
  );
};
