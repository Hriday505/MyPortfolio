import { DebugResponse, InputType } from "../types/debug";

export function ParseModelResponse(
  rawText: string,
  detectedType: InputType
): DebugResponse {
  try {
    const cleanedText = rawText
      .trim()
      .replace(/^```json\s*/i, "")
      .replace(/^```\s*/i, "")
      .replace(/```$/i, "")
      .trim();

    const parsed = JSON.parse(cleanedText);

    return {
      detectedType,
      success: true,
      issueSummary: parsed.issueSummary ?? "No summary available",
      stepByStepFix: Array.isArray(parsed.stepByStepFix)
        ? parsed.stepByStepFix
        : typeof parsed.stepByStepFix === "string"
        ? [parsed.stepByStepFix]
        : [],
      correctedCode: parsed.correctedCode ?? "",
      extraNotes: parsed.extraNotes ?? "",
    };
  } catch {
    return {
      detectedType,
      success: true,
      issueSummary: rawText || "No summary available",
      stepByStepFix: [],
      correctedCode: "",
      extraNotes: "Model response was not valid JSON.",
    };
  }
}