import { NextResponse } from "next/server";
import CheckInputType from "@/lib/classifyinput";
import PromptBuilder from "@/lib/BuildPrompt";
import { generateDebugResponse } from "@/lib/gemini";
import { ParseModelResponse } from "@/lib/parseModelResponse";
import { enforceRateLimit, getClientIp } from "@/lib/rate-limit";

export async function POST(req: Request) {
  try {
    const ip = getClientIp(req);
    const rateLimit = enforceRateLimit(`debug:${ip}`, 10, 60_000);

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { success: false, message: "Too many requests. Please try again later." },
        {
          status: 429,
          headers: { "Retry-After": String(rateLimit.retryAfterSeconds) },
        },
      );
    }

    const payload = await req.json();
    const input = payload?.input;

    if (!input || typeof input !== "string" || input.trim() === "") {
      return NextResponse.json(
        { success: false, message: "Input is required." },
        { status: 400 },
      );
    }

    const inputText = input.trim();
    if (inputText.length > 8000) {
      return NextResponse.json(
        { success: false, message: "Input is too long." },
        { status: 400 },
      );
    }

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
      },
      { status: 500 },
    );
  }
}
