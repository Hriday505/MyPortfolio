"use client";

type DebugType = {
  input: string;
  setInput: (value: string) => void;
  onsubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
};

export default function DebugForm({
  input,
  setInput,
  onsubmit,
  loading,
}: DebugType) {
  return (
    <form onSubmit={onsubmit} className="space-y-3">
      <label className="block text-[0.9rem] uppercase tracking-[0.28em] text-stone-500">
       Ask Me
      </label>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste code, error logs, or ask a question..."
        className="min-h-[140px] w-full resize-y rounded-xl border border-stone-800 bg-[#0a0a0a] px-4 py-3 font-mono text-[1rem] text-stone-100 outline-none transition placeholder:text-stone-500 focus:border-emerald-500/70 focus:ring-2 focus:ring-emerald-500/20"
      />

      <div className="flex items-center justify-between gap-3">
        <p className="text-[0.8rem] text-stone-500 lg:block md:block hidden ">
          Press Enter on the button to run. Multi-line paste is supported.
        </p>

        <button
          type="submit"
          disabled={loading || !input.trim()}
          className="rounded-lg border border-emerald-500/40 bg-emerald-500/10 px-4 py-2 font-mono text-[0.9rem] text-emerald-300 transition hover:bg-emerald-500/20 disabled:cursor-not-allowed disabled:border-stone-700 disabled:bg-stone-900 disabled:text-stone-500"
        >
          {loading ? "running..." : "run"}
        </button>
      </div>
    </form>
  );
}
