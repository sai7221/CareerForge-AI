import { useRef, useState } from "react";
import { analyzeResume } from "../../services/api";
import AnalysisDashboard from "../dashboard/AnalysisDashboard";

export default function ResumeUploader() {
  const inputRef = useRef<HTMLInputElement>(null);

  const [file, setFile] = useState<File | null>(null);
  const [analysis, setAnalysis] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleFile(selected: File | null) {
    if (!selected) return;

    const allowed = [
      "application/pdf",
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];

    if (!allowed.includes(selected.type)) {
      alert("Please upload a PDF or DOCX file.");
      return;
    }

    setFile(selected);
    setLoading(true);
    setError("");
    setAnalysis(null);

    try {
      const result = await analyzeResume(selected);

      // Backend should return analysis as an object.
      // If it returns a string, parse it.
      const parsedAnalysis =
        typeof result.analysis === "string"
          ? JSON.parse(result.analysis)
          : result.analysis;

      setAnalysis(parsedAnalysis);
    } catch (err) {
      console.error(err);
      setError("Failed to analyze resume.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-8">
      <div className="rounded-3xl border-2 border-dashed border-slate-700 bg-slate-900 p-12 text-center">

        <div className="text-6xl">📄</div>

        <h2 className="mt-6 text-2xl font-semibold">
          Drag & Drop Your Resume
        </h2>

        <p className="mt-3 text-slate-400">
          PDF and DOCX files are supported.
        </p>

        <input
          ref={inputRef}
          type="file"
          accept=".pdf,.docx"
          className="hidden"
          onChange={(e) =>
            handleFile(e.target.files?.[0] ?? null)
          }
        />

        <button
          onClick={() => inputRef.current?.click()}
          className="mt-8 rounded-xl bg-indigo-600 px-6 py-3 font-semibold hover:bg-indigo-500"
        >
          Choose Resume
        </button>

        {file && (
          <div className="mt-6 rounded-xl bg-slate-800 p-4">
            <p className="font-semibold text-green-400">
              ✓ Resume Selected
            </p>

            <p className="mt-2 text-slate-300">
              {file.name}
            </p>
          </div>
        )}

        {loading && (
          <div className="mt-6 text-blue-400 font-semibold">
            🤖 AI is analyzing your resume...
          </div>
        )}

        {error && (
          <div className="mt-6 text-red-500">
            {error}
          </div>
        )}
      </div>

      {analysis && (
        <AnalysisDashboard data={analysis} />
      )}
    </div>
  );
}