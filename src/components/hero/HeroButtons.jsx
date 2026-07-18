import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroButtons() {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
      {/* Primary CTA */}
      <Button size="lg" className="w-full sm:w-auto min-w-[200px] group">
        Book a Consultation
        <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
      </Button>

      {/* Secondary CTA */}
      <Button variant="outline" size="lg" className="w-full sm:w-auto min-w-[200px]">
        Explore Projects
      </Button>
    </div>
  );
}
