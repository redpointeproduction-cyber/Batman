
import React, { useState, useCallback, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HeroSection } from './components/HeroSection';
import { IdeaForm } from './components/IdeaForm';
import { IdeaList } from './components/IdeaList';
import { IdeaDetail } from './components/IdeaDetail';
import { Loader } from './components/Loader';
import { analyzeStartupIdea } from './services/geminiService';
import type { StartupIdea, AIAnalysis, View } from './types';
import { MOCK_IDEAS } from './constants';


const App: React.FC = () => {
  const [view, setView] = useState<View>('home');
  const [ideas, setIdeas] = useState<StartupIdea[]>([]);
  const [selectedIdea, setSelectedIdea] = useState<StartupIdea | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [loadingMessage, setLoadingMessage] = useState<string>('Bootstrapping the future of investment...');

  useEffect(() => {
    // Simulate fetching initial data and giving it a pre-canned AI analysis
    const initialIdeas = MOCK_IDEAS.map(idea => ({
      ...idea,
      aiAnalysis: {
        summary: "This is a promising venture with a clear value proposition in a growing market. The team's vision is well-articulated.",
        strengths: ["Innovative technology stack.", "Strong potential for virality.", "Addresses a clear market need."],
        weaknesses: ["High competition in the sector.", "Requires significant initial capital.", "Scalability challenges ahead."],
        targetMarkets: ["Early adopters in tech.", "Small to medium-sized businesses.", "Gen Z consumers."]
      }
    }));
    setIdeas(initialIdeas);
    setIsLoading(false);
  }, []);

  const handleSelectIdea = useCallback((idea: StartupIdea) => {
    setSelectedIdea(idea);
    setView('ideaDetail');
  }, []);

  const handleNavigate = (newView: View) => {
    setSelectedIdea(null);
    setView(newView);
  };

  const handleIdeaSubmit = async (idea: Omit<StartupIdea, 'id' | 'aiAnalysis'>) => {
    setIsLoading(true);
    setLoadingMessage('Our AI is analyzing the next unicorn... Hold tight!');
    setView('loading');
    
    try {
      const analysis: AIAnalysis | null = await analyzeStartupIdea(idea);
      const newIdea: StartupIdea = {
        ...idea,
        id: Date.now(),
        aiAnalysis: analysis || { summary: 'AI analysis could not be generated.', strengths: [], weaknesses: [], targetMarkets: [] },
      };
      setIdeas(prevIdeas => [newIdea, ...prevIdeas]);
      setSelectedIdea(newIdea);
      setView('ideaDetail');
    } catch (error) {
      console.error("Error analyzing idea:", error);
      const newIdea: StartupIdea = {
        ...idea,
        id: Date.now(),
        aiAnalysis: { summary: 'An error occurred during AI analysis. Please try again.', strengths: [], weaknesses: [], targetMarkets: [] },
      };
      setIdeas(prevIdeas => [newIdea, ...prevIdeas]);
      setSelectedIdea(newIdea);
      setView('ideaDetail');
    } finally {
      setIsLoading(false);
    }
  };

  const renderContent = () => {
    if (isLoading && view === 'loading') {
      return <Loader message={loadingMessage} />;
    }

    switch (view) {
      case 'home':
        return <HeroSection onNavigate={handleNavigate} />;
      case 'submitIdea':
        return <IdeaForm onSubmit={handleIdeaSubmit} />;
      case 'browseIdeas':
        return <IdeaList ideas={ideas} onSelectIdea={handleSelectIdea} />;
      case 'ideaDetail':
        if (selectedIdea) {
          return <IdeaDetail idea={selectedIdea} onBack={() => handleNavigate('browseIdeas')} />;
        }
        return <IdeaList ideas={ideas} onSelectIdea={handleSelectIdea} />; // Fallback
      case 'loading':
         return <Loader message={loadingMessage} />;
      default:
        return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans flex flex-col">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
