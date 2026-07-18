import { cn } from "@/lib/utils";

export function HeroContainer({ children, background, className, variant = "default" }) {
  const variants = {
    default: "bg-background",
    muted: "bg-muted",
    transparent: "bg-transparent",
  };

  return (
    <section
      className={cn(
        "relative w-full pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-32 lg:pb-0 overflow-hidden",
        "lg:h-screen lg:min-h-[850px]",
        variants[variant],
        className
      )}
    >
      {/* Absolute Background Layer */}
      {background && (
        <div className="absolute inset-0 w-full h-full z-0">
          {background}
        </div>
      )}

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full z-10 relative pointer-events-none">
        <div className="max-w-[1280px] mx-auto h-full relative pointer-events-auto">
          {children}
        </div>
      </div>
    </section>
  );
}
