import { GoogleGenAI } from "@google/genai";
const apiKey = process.env.GEMINI_API_KEY;
const model = process.env.GEMINI_MODEL || "gemini-2.0-flash";

export async function generateDebugResponse(prompt: string): Promise<string> {
  if (!apiKey) {
    throw new Error("GEMINI_API_KEY is missing. Add it to your environment variables.");
  }

  const ai = new GoogleGenAI({ apiKey });

  const response = await ai.models.generateContent({
    model,
    contents: prompt,
  });

  return response.text ?? "";

}
