interface ScoreCardProps {
  title: string;
  score: number;
}

export default function ScoreCard({
  title,
  score,
}: ScoreCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border">

      <h3 className="text-gray-500 text-lg">
        {title}
      </h3>

      <div className="text-5xl font-bold mt-4 text-indigo-600">
        {score}
      </div>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-6">
        <div
          className="bg-indigo-600 h-3 rounded-full"
          style={{
            width: `${score}%`,
          }}
        />
      </div>

    </div>
  );
}