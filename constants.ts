
import type { StartupIdea } from './types';

export const MOCK_IDEAS: Omit<StartupIdea, 'aiAnalysis'>[] = [
  {
    id: 1,
    startupName: 'EcoRoute',
    pitch: 'AI-powered logistics platform for optimizing last-mile delivery with electric vehicles.',
    problem: 'High carbon emissions and operational costs in urban delivery logistics. Existing solutions dont prioritize sustainability or EV-specific challenges like charging.',
    targetAudience: 'E-commerce companies, local delivery services, and large retail chains with delivery fleets.',
    fundingGoal: 500000,
    contactEmail: 'contact@ecoroute.com',
  },
  {
    id: 2,
    startupName: 'HealthSync',
    pitch: 'A decentralized health record platform using blockchain for ultimate patient data security and portability.',
    problem: 'Patient health records are fragmented across different providers, making it difficult for individuals to manage their own health data and for doctors to get a complete picture. Data breaches are also a major concern.',
    targetAudience: 'Hospitals, clinics, insurance companies, and individual patients seeking control over their health data.',
    fundingGoal: 1200000,
    contactEmail: 'jane.doe@healthsync.io',
  },
  {
    id: 3,
    startupName: 'CodeCollab AI',
    pitch: 'An AI pair programmer that integrates into your IDE to provide real-time feedback, bug detection, and code optimization.',
    problem: 'Developers spend a significant amount of time debugging and reviewing code. Existing linters and tools are reactive, not proactive. This slows down development cycles.',
    targetAudience: 'Software development teams, individual freelance developers, and students learning to code.',
    fundingGoal: 750000,
    contactEmail: 'support@codecollabai.dev',
  },
   {
    id: 4,
    startupName: 'AgriGrow',
    pitch: 'IoT sensors and AI analytics for precision agriculture, maximizing crop yield while minimizing water and fertilizer usage.',
    problem: 'Traditional farming methods are inefficient, leading to resource wastage and lower yields. Climate change adds further uncertainty for farmers.',
    targetAudience: 'Large-scale farms, independent farmers, and agricultural cooperatives.',
    fundingGoal: 900000,
    contactEmail: 'info@agrigrow.tech',
  },
];
