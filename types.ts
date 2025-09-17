
export interface StartupIdea {
  id: number;
  startupName: string;
  pitch: string;
  problem: string;
  targetAudience: string;
  fundingGoal: number;
  contactEmail: string;
  aiAnalysis: AIAnalysis | null;
}

export interface AIAnalysis {
  summary: string;
  strengths: string[];
  weaknesses: string[];
  targetMarkets: string[];
}

export type View = 'home' | 'submitIdea' | 'browseIdeas' | 'ideaDetail' | 'loading';
