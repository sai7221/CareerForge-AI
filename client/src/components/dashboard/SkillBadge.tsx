interface Props {
  text: string;
  positive?: boolean;
}

export default function SkillBadge({
  text,
  positive = false,
}: Props) {
  return (
    <span
      className={`px-4 py-2 rounded-full text-sm font-semibold ${
        positive
          ? "bg-green-100 text-green-700"
          : "bg-red-100 text-red-700"
      }`}
    >
      {text}
    </span>
  );
}