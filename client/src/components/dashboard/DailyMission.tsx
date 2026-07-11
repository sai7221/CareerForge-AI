export default function DailyMission() {
  const tasks = [
    "Improve Resume",
    "Practice SQL",
    "Apply to 2 Jobs",
  ];

  return (
    <div className="rounded-2xl bg-slate-900 p-6 border border-slate-800">
      <h2 className="text-xl font-semibold">
        Today's Mission
      </h2>

      <ul className="mt-4 space-y-3">
        {tasks.map((task) => (
          <li key={task}>✅ {task}</li>
        ))}
      </ul>
    </div>
  );
}