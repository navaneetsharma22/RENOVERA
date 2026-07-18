export function HeroContent() {
  return (
    <div className="flex flex-col max-w-2xl lg:max-w-xl">
      {/* Eyebrow Label */}
      <div className="flex items-center gap-4 mb-4 md:mb-6">
        <span className="w-8 h-px bg-border"></span>
        <span className="text-[11px] md:text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Premium Design & Build Studio
        </span>
      </div>

      {/* Main Heading */}
      <h1 className="text-4xl md:text-6xl lg:text-[4.5rem] font-heading font-bold tracking-tighter text-foreground leading-[1.05] mb-6">
        Transforming Spaces.<br />
        Elevating Living.
      </h1>

      {/* Supporting Description */}
      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
        We design and renovate exceptional homes through thoughtful architecture, premium craftsmanship, and personalized project management—creating spaces that are beautiful, functional, and built to last.
      </p>
    </div>
  );
}
