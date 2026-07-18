import { cn } from "@/lib/utils";

export function HeroContainer({ children, className }) {
  return (
    <section
      className={cn(
        "relative w-full pt-28 pb-16 md:pt-32 md:pb-24 lg:pt-32 lg:pb-0",
        "lg:h-screen lg:min-h-[850px]",
        className
      )}
    >
      <div className="container mx-auto px-4 md:px-8 max-w-[1440px] h-full">
        <div className="max-w-[1280px] mx-auto h-full relative">
          {children}
        </div>
      </div>
    </section>
  );
}
