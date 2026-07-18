import { cn } from "@/lib/utils";
import { Building, ShieldCheck, MapPin } from "lucide-react";

export function FloatingInfoCard({ className, items = [] }) {
  if (!items.length) return null;

  const getIcon = (value) => {
    switch(value) {
      case "520+": return <Building className="size-7 text-zinc-800 stroke-[1.5]" />;
      case "15+": return <ShieldCheck className="size-7 text-zinc-800 stroke-[1.5]" />;
      case "25+": return <MapPin className="size-7 text-zinc-800 stroke-[1.5]" />;
      default: return <ShieldCheck className="size-7 text-zinc-800 stroke-[1.5]" />;
    }
  };

  return (
    <div className={cn("bg-white text-zinc-900 p-7 lg:p-8 rounded-[12px] shadow-[0_15px_40px_rgb(0,0,0,0.12)] flex flex-col divide-y divide-zinc-200", className)}>
      {items.map((item, idx) => (
        <div key={idx} className="flex items-center gap-5 py-5 first:pt-0 last:pb-0 group">
          <div className="flex-shrink-0 transition-transform group-hover:scale-110 duration-300">
            {getIcon(item.value)}
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-2xl text-zinc-900 mb-0.5">{item.value}</span>
            <span className="text-[13px] text-zinc-500 font-medium">{item.label}</span>
          </div>
        </div>
      ))}
    </div>
  );
}
