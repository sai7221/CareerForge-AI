import ScoreCard from "./ScoreCard";
import SectionCard from "./SectionCard";
import SkillBadge from "./SkillBadge";
import RecommendationCard from "./RecommendationCard";

interface DashboardProps {
  data: any;
}

export default function AnalysisDashboard({ data }: DashboardProps) {
  if (!data) return null;

  return (
    <div className="max-w-7xl mx-auto p-8 space-y-8">

      <div className="grid md:grid-cols-2 gap-6">
        <ScoreCard
          title="Resume Score"
          score={data.resume_score}
        />

        <ScoreCard
          title="ATS Score"
          score={data.ats_score}
        />
      </div>

      <SectionCard
        title="Executive Summary"
      >
        <p>{data.summary}</p>
      </SectionCard>

      <div className="grid md:grid-cols-2 gap-6">

        <SectionCard title="Strengths">
          {data.strengths.map((item: string) => (
            <SkillBadge
              key={item}
              text={item}
              positive
            />
          ))}
        </SectionCard>

        <SectionCard title="Weaknesses">
          {data.weaknesses.map((item: string) => (
            <SkillBadge
              key={item}
              text={item}
            />
          ))}
        </SectionCard>

      </div>

      <SectionCard title="Technical Skills">
        <div className="flex flex-wrap gap-3">
          {data.technical_skills.map((item: string) => (
            <SkillBadge
              key={item}
              text={item}
              positive
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Missing Skills">
        <div className="flex flex-wrap gap-3">
          {data.missing_skills.map((item: string) => (
            <SkillBadge
              key={item}
              text={item}
            />
          ))}
        </div>
      </SectionCard>

      <SectionCard title="Recommended Roles">
        <div className="grid md:grid-cols-2 gap-4">
          {data.recommended_roles.map((role: string) => (
            <RecommendationCard
              key={role}
              title={role}
            />
          ))}
        </div>
      </SectionCard>

    </div>
  );
}