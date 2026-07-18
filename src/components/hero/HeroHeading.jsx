import { cn } from "@/lib/utils";

/**
 * Renders the main Hero heading.
 * Optionally highlights specific words by splitting the title on the highlight string.
 */
export function HeroHeading({ title, highlight, className }) {
  const renderTitle = () => {
    if (!highlight || !title.includes(highlight)) {
      return title;
    }
    
    const parts = title.split(highlight);
    return (
      <>
        {parts[0]}
        <span className="text-primary/70">{highlight}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <h1 className={cn(
      "text-4xl md:text-6xl lg:text-[4.5rem] font-heading font-bold tracking-tighter text-foreground leading-[1.05] mb-6",
      className
    )}>
      {renderTitle()}
    </h1>
  );
}
