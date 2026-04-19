"use client";
import React, { useRef, useState } from "react";
import DebugForm from "../../components/ui/DebugForm";
import ResultPanel from "../../components/ui/ResultPanel";
import {motion} from 'framer-motion'

type DebugResult = {
  detectedType: string;
  issueSummary: string;
  stepByStepFix: string[];
  correctedCode?: string;
  extraNotes?: string;
} | null;

function TrafficLight({ color }: { color: string }) {
  return <span className={`h-3.5 w-3.5 rounded-full ${color} shadow-sm`} />;
}

function Prompt({ username = "DevHriday" }: { username?: string }) {
  return (
    <span className="shrink-0 whitespace-nowrap">
      <span className="font-medium text-sky-400">{username}</span>
      <span className="text-emerald-400">:</span>
      <span className="text-cyan-400">~</span>
      <span className="text-stone-300">$ </span>
    </span>
  );
}

export default function TerminalCloneResponsive() {
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<DebugResult>(null);
  const [history, setHistory] = useState<string[]>([]);
  const inputRef = useRef<HTMLDivElement | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const trimmedInput = input.trim();
    if (!trimmedInput) {
      setError("Please enter a prompt first.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setResult(null);
      setHistory((prev) => [...prev, trimmedInput]);
      setInput("");

      const res = await fetch("/api/debug", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: trimmedInput }),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setError(data.message || "Something went wrong.");
        return;
      }

      setResult(data);
    } catch {
      setError("Request failed.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div  initial={{opacity:0,y:-50}} whileInView={{opacity:1,y:0}} transition={{delay:0.6,duration:0.8,ease:'easeIn'}}  className="flex items-center justify-center  px-3 py-6 sm:px-5 md:px-8 lg:px-10">
      <div className="w-full max-w-5xl">
        <div className="overflow-hidden rounded-2xl border border-stone-700/70 bg-[#111111]  shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
          <div className="flex items-center justify-between bg-[#2a2a2a] px-4 py-3 sm:px-5 md:px-6">
            <div className="flex shrink-0 items-center gap-2 sm:gap-3">
              <TrafficLight color="bg-red-500" />
              <TrafficLight color="bg-yellow-400" />
              <TrafficLight color="bg-green-500" />
            </div>

            <div className="mx-3 min-w-0 flex-1 text-[1.2rem] truncate text-center font-medium tracking-wide text-[#b9b0a2]">
              DevHriday - agent terminal
            </div>

            <div className="w-10 sm:w-14" />
          </div>

          <div
            ref={inputRef}
            className="max-h-[75vh]  overflow-y-auto px-4 py-5 font-mono text-[clamp(14px,2vw,18px)] sm:px-5 sm:py-6 md:px-6 md:py-7"
          >
            <div className="space-y-5">
              <div className="space-y-2 text-sm text-stone-400">
                <p>Welcome to the debugging terminal.</p>
                <p>Paste code, errors, or ask a question and the DevHriday will answer It.</p>
              </div>

              {history.map((command, index) => (
                <div key={`${command}-${index}`} className="space-y-3">
                  <div className="flex items-start break-words leading-relaxed">
                    <Prompt username="DevHriday" />
                    <span className="whitespace-pre-wrap break-all text-white">
                      {command}
                    </span>
                  </div>

                  {index === history.length - 1 ? (
                    <div className="pl-0 sm:pl-2">
                      <div className="mb-2 text-[0.8rem] uppercase tracking-[0.28em] text-stone-500">
                        agent response
                      </div>
                      <ResultPanel loading={loading} error={error} result={result} />
                    </div>
                  ) : null}
                </div>
              ))}

              <div className="rounded-2xl border border-stone-800 bg-[#0d0d0d] p-4 sm:p-5">
                <div className="mb-3 flex items-start gap-2">
                  <Prompt username="DevHriday" />
                  <span className="pt-[2px] text-sm text-stone-500">
                    enter your next prompt
                  </span>
                </div>
                <DebugForm
                  input={input}
                  setInput={setInput}
                  loading={loading}
                  onsubmit={handleSubmit}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
