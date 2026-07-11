import { useRef, useState } from "react";

export default function ResumeUploader() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  function handleFile(selected: File | null) {
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
  }

  return (
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
          <p className="text-green-400 font-semibold">
            ✓ Resume Selected
          </p>

          <p className="mt-2 text-slate-300">
            {file.name}
          </p>
        </div>
      )}
    </div>
  );
}