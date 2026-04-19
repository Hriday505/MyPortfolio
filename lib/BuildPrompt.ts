import { InputType } from "../types/debug";

const baseInstruction =
  "You are an AI coding assistant. Be clear, practical, and concise, with a strong focus on debugging and code correction.";

const responseFormatInstruction =
  'Respond in strict JSON with exactly these keys: {"issueSummary":"short description here","stepByStepFix":["step 1","step 2"],"correctedCode":"fixed code here","extraNotes":"extra note here"}. Always include all four keys.';

const errorPrompt = `
Follow these steps:
1. Identify the likely cause.
2. Explain the error simply.
3. Suggest the most reliable fix.
4. Return a step-by-step fix sequence.
`;

const codeGeneratePrompt = `
Follow these steps:
1. Inspect the code.
2. Identify mistakes, bugs, or weak structure.
3. Provide corrected code.
4. Explain what changed.
5. Mention it clearly if no obvious bug is found.
`;

const mixedPrompt = `
Follow these steps:
1. Analyze the code and error together.
2. Find the root cause.
3. Explain why the error happens in that code.
4. Return corrected code.
5. Give the fix order step by step.
`;

const unknownPrompt = `
Follow these steps:
1. Do a best-effort analysis.
2. Explain what you can infer.
3. Ask for more details only if necessary.
4. Still try to help instead of refusing.
`;

export default function PromptBuilder(inputText: string, inputType: InputType) {
  let typeInstruction = unknownPrompt;

  if (inputType === "error") {
    typeInstruction = errorPrompt;
  } else if (inputType === "code") {
    typeInstruction = codeGeneratePrompt;
  } else if (inputType === "mixed") {
    typeInstruction = mixedPrompt;
  }

  return `${baseInstruction}\n${responseFormatInstruction}\n${typeInstruction}\nUser input:\n${inputText}`;
}
