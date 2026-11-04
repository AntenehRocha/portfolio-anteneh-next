import Hero from "@/components/hero";
import ProjectsGrid from "@/components/projects-grid";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Hero />
      <ProjectsGrid />
    </div>
  );
}
