import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, MapPin, Ruler, Wallet, Home } from "lucide-react";
import { cn } from "@/lib/utils";

export function FloatingConsultationPanel({ className }) {
  return (
    <div className={cn(
      "bg-[#111111]/90 backdrop-blur-md border border-white/10 shadow-2xl rounded-2xl w-full transition-all duration-500 overflow-hidden",
      className
    )}>
      <div className="flex flex-col lg:flex-row w-full divide-y lg:divide-y-0 lg:divide-x divide-white/10">
        {/* Project Type */}
        <div className="flex flex-1 items-center px-6 py-4 lg:py-6 group transition-colors hover:bg-white/5">
          <Home className="size-5 text-white/50 mr-4 flex-shrink-0 group-hover:text-white transition-colors" />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1">Project Type</span>
            <Input 
              type="text" 
              placeholder="e.g. Full Renovation" 
              className="h-auto p-0 border-0 bg-transparent dark:bg-transparent shadow-none focus-visible:ring-0 text-sm font-medium text-white placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-1 items-center px-6 py-4 lg:py-6 group transition-colors hover:bg-white/5">
          <MapPin className="size-5 text-white/50 mr-4 flex-shrink-0 group-hover:text-white transition-colors" />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1">Location</span>
            <Input 
              type="text" 
              placeholder="City or ZIP code" 
              className="h-auto p-0 border-0 bg-transparent dark:bg-transparent shadow-none focus-visible:ring-0 text-sm font-medium text-white placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Property Size */}
        <div className="flex flex-1 items-center px-6 py-4 lg:py-6 group transition-colors hover:bg-white/5">
          <Ruler className="size-5 text-white/50 mr-4 flex-shrink-0 group-hover:text-white transition-colors" />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1">Property Size</span>
            <Input 
              type="text" 
              placeholder="Approx. Sq Ft" 
              className="h-auto p-0 border-0 bg-transparent dark:bg-transparent shadow-none focus-visible:ring-0 text-sm font-medium text-white placeholder:text-white/30"
            />
          </div>
        </div>

        {/* Estimated Budget */}
        <div className="flex flex-1 items-center px-6 py-4 lg:py-6 group transition-colors hover:bg-white/5">
          <Wallet className="size-5 text-white/50 mr-4 flex-shrink-0 group-hover:text-white transition-colors" />
          <div className="flex flex-col w-full">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-white/50 mb-1">Est. Budget</span>
            <Input 
              type="text" 
              placeholder="$150k - $300k" 
              className="h-auto p-0 border-0 bg-transparent dark:bg-transparent shadow-none focus-visible:ring-0 text-sm font-medium text-white placeholder:text-white/30"
            />
          </div>
        </div>

        {/* CTA */}
        <div className="flex items-center lg:w-[220px] p-2 lg:p-3">
          <Button size="lg" className="w-full h-full min-h-[56px] rounded-xl group bg-white text-black hover:bg-white/90">
            Book Consultation
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </div>
  );
}
