import { GoogleGenAI, Type } from "@google/genai";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getSmartGardeningTip = async (query: string): Promise<string> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      You are a wise Vedic gardening expert. 
      The user is searching for: "${query}".
      Provide a short, 2-sentence engaging tip about this topic using organic or Vedic methods. 
      Focus on kitchen waste or natural remedies.
      Tone: Warm, encouraging, slightly mystical but practical.
    `;

    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });

    return response.text || "Nature has a rhythm; observe your garden and it will teach you.";
  } catch (error) {
    console.error("Error fetching tip:", error);
    return "Remember, even crushed eggshells can bring life to your tomatoes. Simplicity is key.";
  }
};

export const generateMoreTips = async (category: string): Promise<any[]> => {
  try {
    const model = 'gemini-2.5-flash';
    const prompt = `
      Generate 3 unique, practical gardening tips related to "${category}".
      Focus on organic, Vedic, or kitchen-scrap methods.
      Return the response in JSON format.
    `;
    
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              description: { type: Type.STRING },
              category: { type: Type.STRING }
            }
          }
        }
      }
    });

    const jsonStr = response.text.trim();
    return JSON.parse(jsonStr);
  } catch (error) {
    console.error("Error generating tips:", error);
    return [];
  }
};
