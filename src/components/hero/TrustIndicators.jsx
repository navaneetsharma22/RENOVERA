import { cn } from "@/lib/utils";
import { Building, ShieldCheck, Star, Trophy } from "lucide-react";

export function TrustIndicators({ items = [], className }) {
  if (!items.length) return null;

  // Map values to specific icons based on the design
  const getIcon = (value) => {
    switch(value) {
      case "500+": return <Building className="size-5 text-[#C5A059] stroke-[1.5]" />;
      case "15+": return <ShieldCheck className="size-5 text-[#C5A059] stroke-[1.5]" />;
      case "98%": return <Star className="size-5 text-[#C5A059] stroke-[1.5]" />;
      case "Award": return <Trophy className="size-5 text-[#C5A059] stroke-[1.5]" />;
      default: return <ShieldCheck className="size-5 text-[#C5A059] stroke-[1.5]" />;
    }
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-10 md:gap-14 lg:gap-16 mt-12", className)}>
      {items.map((item, idx) => (
        <div key={idx} className="flex flex-col items-start gap-2 relative">
          {getIcon(item.value)}
          <div>
            <div className="text-white font-bold text-xl md:text-2xl font-heading tracking-tight mb-1">{item.value}</div>
            <div className="text-white/60 text-xs uppercase tracking-widest max-w-[80px] leading-[1.3]">{item.label}</div>
          </div>
          {idx !== items.length - 1 && (
            <div className="absolute -right-5 md:-right-7 lg:-right-8 top-1/2 -translate-y-1/2 w-[1px] h-12 bg-white/10 hidden sm:block" />
          )}
        </div>
      ))}
    </div>
  );
}
