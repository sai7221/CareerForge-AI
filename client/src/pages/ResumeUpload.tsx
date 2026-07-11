import ResumeUploader from "../components/resume/ResumeUploader";

export default function ResumeUpload() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <h1 className="text-5xl font-bold">
          Upload Your Resume
        </h1>

        <p className="mt-4 text-slate-400">
          Upload your latest resume to receive an AI-powered resume score,
          ATS analysis, and personalized career recommendations.
        </p>

        <div className="mt-12">
          <ResumeUploader />
        </div>
      </div>
    </main>
  );
}