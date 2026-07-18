import { Hero } from "@/components/hero";
import { TransformationSection } from "@/components/transformation";
import { ServicesSection } from "@/components/services";
import { ProjectsSection } from "@/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <TransformationSection />
      <ServicesSection />
      <ProjectsSection />
    </main>
  );
}
