import { cn } from "@/lib/utils";
import { ArrowDown, Mouse } from "lucide-react";

export function ScrollIndicator({ variant = "line", label = "Scroll", className }) {
  return (
    <div className={cn("flex flex-col items-center gap-3", className)}>
      {label && (
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
          {label}
        </span>
      )}
      
      {variant === "line" && (
        <div className="w-[1px] h-16 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground/30" />
        </div>
      )}

      {variant === "mouse" && (
        <Mouse className="size-5 text-muted-foreground" />
      )}

      {variant === "arrow" && (
        <ArrowDown className="size-4 text-muted-foreground animate-bounce" />
      )}
    </div>
  );
}
