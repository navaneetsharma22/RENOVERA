import { Hero } from "@/components/hero";
import { TransformationSection } from "@/components/transformation";
import { ServicesSection } from "@/components/services";
import { ProjectsSection } from "@/components/projects";
import { ProcessSection } from "@/components/process";
import { WhyChooseSection } from "@/components/why-choose";
import { QualitySection } from "@/components/quality";
import { TeamSection } from "@/components/team";
import { TestimonialsSection } from "@/components/testimonials";
import { JournalSection } from "@/components/journal";
import { FAQSection } from "@/components/faq";
import { ConsultationCTA } from "@/components/cta";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col w-full">
      <Hero />
      <TransformationSection />
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <WhyChooseSection />
      <QualitySection />
      <TeamSection />
      <TestimonialsSection />
      <JournalSection />
      <FAQSection />
      <ConsultationCTA />
    </main>
  );
}
