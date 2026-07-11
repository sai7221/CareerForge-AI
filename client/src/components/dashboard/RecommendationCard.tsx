interface Props {
  title: string;
}

export default function RecommendationCard({
  title,
}: Props) {
  return (
    <div className="border rounded-xl p-5 hover:shadow-lg transition">

      <h3 className="text-lg font-semibold">
        {title}
      </h3>

    </div>
  );
}