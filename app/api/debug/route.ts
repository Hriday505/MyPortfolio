import { NextResponse } from "next/server";
import CheckInputType from "@/lib/classifyinput";
import PromptBuilder from "@/lib/BuildPrompt";
import { generateDebugResponse } from "@/lib/gemini";
import { ParseModelResponse } from "@/lib/parseModelResponse";

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const input = payload?.input;

    if (!input || typeof input !== "string" || input.trim() === "") {
      return NextResponse.json(
        { success: false, message: "Input is required." },
        { status: 400 },
      );
    }

    const inputText = input.trim();
    const inputType = CheckInputType(inputText);
    const prompt = PromptBuilder(inputText, inputType);
    const gemini = await generateDebugResponse(prompt);
    const parseResult = ParseModelResponse(gemini, inputType);

    return NextResponse.json(parseResult);
  } catch (error) {
    console.error("Debug API Error:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong while generating the debug response.",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    );
  }
}
