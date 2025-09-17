
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-12">
      <div className="container mx-auto py-6 px-4 sm:px-6 lg:px-8 text-center text-slate-400">
        <p>&copy; {new Date().getFullYear()} IdeaConnect. All rights reserved. Connecting innovators with capital.</p>
      </div>
    </footer>
  );
};
