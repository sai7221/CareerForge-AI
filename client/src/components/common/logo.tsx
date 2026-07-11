export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-xl font-bold text-white">
        CF
      </div>

      <div>
        <h2 className="text-lg font-bold text-white">
          CareerForge AI
        </h2>

        <p className="text-xs text-slate-400">
          Forge Your Future
        </p>
      </div>
    </div>
  );
}