import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroCTAGroup({ 
  primaryButton, 
  secondaryButton, 
  className 
}) {
  return (
    <div className={cn("flex flex-wrap items-center gap-4 mt-8", className)}>
      {primaryButton && (
        <Button 
          size="lg" 
          asChild 
          className="group relative h-14 bg-white text-black hover:bg-white/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
        >
          <Link href={primaryButton.href}>
            {primaryButton.label}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      )}
      
      {secondaryButton && (
        <Button 
          variant="outline" 
          size="lg" 
          asChild 
          className="group h-14 bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white transition-all duration-300"
        >
          <Link href={secondaryButton.href}>
            {secondaryButton.label}
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      )}
    </div>
  );
}
