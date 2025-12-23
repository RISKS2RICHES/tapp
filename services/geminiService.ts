import { GoogleGenAI } from "@google/genai";
import { PropertyDetails } from "../types";

export const analyzePropertySuitability = async (details: PropertyDetails): Promise<string> => {
  // Initialize AI client inside the function to prevent load-time crashes if process.env is missing
  // This allows the app to load even if the key isn't configured yet
  const apiKey = process.env.API_KEY;
  
  if (!apiKey) {
    console.warn("API_KEY is missing from process.env");
    return "Demo Result: System in preview mode. Please configure API_KEY in environment variables for live analysis.";
  }

  const ai = new GoogleGenAI({ apiKey });
  const model = "gemini-3-flash-preview";
  
  const prompt = `
    Act as a senior property investment analyst for "The Access Pathway", a UK company providing social housing solutions backed by local councils.
    
    A landlord has submitted the following property for consideration:
    - Location: ${details.location}
    - Type: ${details.type}
    - Bedrooms: ${details.bedrooms}
    - Condition: ${details.condition}

    Please provide a professional, concise assessment (max 150 words) addressing:
    1. The likely demand for this type of property for social/emergency housing in the UK context.
    2. An estimated monthly guaranteed rent range (in GBP, be realistic for social housing rates in that general area - use broad UK averages if specific location data is vague).
    3. A clear "Suitability Verdict" (High, Medium, Low).

    Tone: Professional, encouraging, and authoritative.
    Format: Pure text with markdown for bolding key figures.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: prompt,
    });
    return response.text || "Unable to generate assessment at this time.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "We are currently experiencing high traffic on our AI analyzer. Please contact our team directly for a valuation.";
  }
};