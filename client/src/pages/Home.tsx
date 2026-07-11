import Logo from "../components/common/Logo";
import Container from "../components/ui/Container";
import CareerHealthCard from "../components/dashboard/CareerHealthCard";
import DailyMission from "../components/dashboard/DailyMission";
import StatCard from "../components/dashboard/StatCard";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Container>
        <nav className="flex items-center justify-between py-6">
          <Logo />

          <div className="text-sm text-slate-400">
            Welcome back 👋
          </div>
        </nav>

        <section className="mt-10">
          <h1 className="text-5xl font-bold">
            Career Dashboard
          </h1>

          <p className="mt-3 text-slate-400">
            Everything you need to land your next job.
          </p>
        </section>

        <section className="mt-10 grid gap-6 lg:grid-cols-2">
          <CareerHealthCard />
          <DailyMission />
        </section>

        <section className="mt-8 grid gap-6 md:grid-cols-3">
          <StatCard title="Resume Score" value="85%" />
          <StatCard title="ATS Score" value="91%" />
          <StatCard title="Applications" value="12" />
        </section>
      </Container>
    </main>
  );
}