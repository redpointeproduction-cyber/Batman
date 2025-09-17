
import React from 'react';
import { AILoaderIcon } from './IconComponents';

interface LoaderProps {
  message: string;
}

export const Loader: React.FC<LoaderProps> = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center h-full py-20 text-center">
      <AILoaderIcon className="w-16 h-16 text-indigo-400 animate-spin" />
      <p className="mt-4 text-xl font-semibold text-slate-200">{message}</p>
      <p className="text-slate-400 mt-2">This may take a few moments...</p>
    </div>
  );
};
