
import { GoogleGenAI, Type } from "@google/genai";
import type { StartupIdea, AIAnalysis } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

export const analyzeStartupIdea = async (idea: Omit<StartupIdea, 'id' | 'aiAnalysis'>): Promise<AIAnalysis | null> => {
  const prompt = `
    Analyze the following startup idea from the perspective of a seasoned venture capitalist.
    Provide a concise summary, identify key strengths and weaknesses, and suggest potential target markets.

    Startup Name: ${idea.startupName}
    One-Liner Pitch: ${idea.pitch}
    Problem it Solves: ${idea.problem}
    Target Audience: ${idea.targetAudience}

    Please provide a structured analysis.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: {
              type: Type.STRING,
              description: "A concise, one-paragraph summary of the business idea and its potential."
            },
            strengths: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of 3-4 key strengths of the business idea."
            },
            weaknesses: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of 3-4 potential weaknesses or risks."
            },
            targetMarkets: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "A list of 3-4 specific target market segments."
            }
          },
          required: ["summary", "strengths", "weaknesses", "targetMarkets"]
        },
      },
    });

    const jsonText = response.text.trim();
    if (!jsonText) {
       console.error("Gemini API returned an empty response.");
       return null;
    }

    return JSON.parse(jsonText) as AIAnalysis;

  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return null;
  }
};


export const enhancePitch = async (pitch: string): Promise<string> => {
    const prompt = `
        Enhance the following startup pitch to be more compelling, concise, and impactful for an investor audience.
        Original pitch: "${pitch}"
        Return only the revised pitch as a single string.
    `;

    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        const enhancedPitch = response.text.trim().replace(/^"|"$/g, ''); // Remove quotes if AI adds them
        return enhancedPitch || pitch; // Fallback to original pitch

    } catch (error) {
        console.error("Error enhancing pitch with Gemini API:", error);
        return pitch; // Return original pitch on error
    }
};
