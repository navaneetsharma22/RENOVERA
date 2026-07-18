import Image from "next/image";

export function HeroMedia() {
  return (
    <div className="relative w-full h-full min-h-[400px] md:min-h-[500px] lg:min-h-0 bg-muted overflow-hidden rounded-sm">
      {/* Background Image */}
      <Image
        src="/images/hero-architecture.png"
        alt="Premium modern architectural villa exterior at dusk"
        fill
        priority
        className="object-cover object-center"
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 60vw"
      />

      {/* Subtle Dark Overlay */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none" />

      {/* Floating Card */}
      <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 bg-background/95 backdrop-blur-sm p-6 rounded-sm shadow-sm border border-border w-[calc(100%-3rem)] max-w-[260px]">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-5 flex items-center gap-2">
          <span className="w-4 h-px bg-muted-foreground/50"></span>
          Global Reach
        </div>
        
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-end border-b border-border/50 pb-2">
            <span className="text-sm font-medium text-muted-foreground">Projects Completed</span>
            <span className="text-lg font-heading font-bold text-foreground leading-none">520+</span>
          </div>
          <div className="flex justify-between items-end border-b border-border/50 pb-2">
            <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
            <span className="text-lg font-heading font-bold text-foreground leading-none">15+</span>
          </div>
          <div className="flex justify-between items-end">
            <span className="text-sm font-medium text-muted-foreground">Cities Served</span>
            <span className="text-lg font-heading font-bold text-foreground leading-none">25+</span>
          </div>
        </div>
      </div>
    </div>
  );
}
