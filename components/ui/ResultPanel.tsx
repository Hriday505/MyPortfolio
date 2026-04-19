"use client";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type ResultData = {
  detectedType: string;
  issueSummary: string;
  correctedCode?: string;
  extraNotes?: string;
};

type ResultPanelProps = {
  error: string;
  loading: boolean;
  result: ResultData | null;
};

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        color: "#67e8f9",
        fontSize: "0.95rem",
        fontWeight: 700,
        marginBottom: "0.45rem",
        textTransform: "lowercase",
        letterSpacing: "0.04em",
      }}
    >
      {children}
    </div>
  );
}

export default function ResultPanel({
  error,
  loading,
  result,
}: ResultPanelProps) {
  if (loading) {
    return (
      <div
        style={{
          color: "#60a5fa",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          lineHeight: "1.8",
        }}
      >
        Fetching result...
      </div>
    );
  }

  if (error) {
    return (
      <div
        style={{
          color: "#f87171",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          lineHeight: "1.8",
          whiteSpace: "pre-wrap",
          wordBreak: "break-word",
        }}
      >
        [ERROR] {error}
      </div>
    );
  }

  if (!result) {
    return (
      <div
        style={{
          color: "#a1a1aa",
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          lineHeight: "1.8",
        }}
      >
        No result yet.
      </div>
    );
  }

  return (
    <div
      style={{
        color: "#e5e7eb",
        fontFamily:
          'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
        lineHeight: "1.9",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
      }}
    >
      <div>
        <Label>summary</Label>
        <div
          style={{
            color: "#d6d3d1",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          {result.issueSummary}
        </div>
      </div>

      <div>
        <Label>Result</Label>

        <div
          style={{
            borderRadius: "10px",
            overflow: "hidden",
            border: "1px solid #1f2937",
          }}
        >
          <SyntaxHighlighter
            language="tsx"
            style={vscDarkPlus}
            wrapLongLines
            showLineNumbers
            customStyle={{
              margin: 0,
              padding: "1rem",
              background: "#1e1e1e",
              fontSize: "0.93rem",
              lineHeight: "1.7",
            }}
            codeTagProps={{
              style: {
                fontFamily:
                  'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Courier New", monospace',
              },
            }}
          >
            {result.correctedCode || "// No corrected code provided."}
          </SyntaxHighlighter>
        </div>
      </div>

      <div>
        <Label>extra_notes</Label>
        <div
          style={{
            color: "#d6d3d1",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
          }}
        >
          <p className="text-[0.9rem]">{result.extraNotes || "None"}</p> 
        </div>
      </div>
    </div>
  );
}