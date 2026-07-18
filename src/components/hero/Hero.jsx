import { HeroContainer } from "./HeroContainer";
import { HeroContent } from "./HeroContent";
import { HeroMedia } from "./HeroMedia";
import { HeroButtons } from "./HeroButtons";
import { HeroStatistics } from "./HeroStatistics";

export function Hero() {
  return (
    <HeroContainer>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-y-10 lg:gap-x-12 h-full w-full">
        {/*
          Responsive Ordering Strategy:
          Desktop (lg): 12 columns. Left Col spans 5, Right Col spans 7.
          Tablet (md): Content -> Image -> Buttons -> Stats.
          Mobile (base): Content -> Buttons -> Stats -> Image.
        */}

        {/* Content */}
        <div className="order-1 lg:col-span-5 lg:col-start-1 lg:row-start-1 flex flex-col justify-end lg:justify-center pb-2 lg:pb-0">
          <HeroContent />
        </div>

        {/* Media */}
        <div className="order-4 md:order-2 lg:order-none lg:col-span-7 lg:col-start-6 lg:row-span-3 lg:row-start-1 h-[50vh] md:h-[60vh] lg:h-full lg:ml-8 mt-4 lg:mt-0">
          <HeroMedia />
        </div>

        {/* Buttons */}
        <div className="order-2 md:order-3 lg:order-none lg:col-span-5 lg:col-start-1 lg:row-start-2 pt-2 lg:pt-8">
          <HeroButtons />
        </div>

        {/* Trust Indicators */}
        <div className="order-3 md:order-4 lg:order-none lg:col-span-5 lg:col-start-1 lg:row-start-3 pb-8 lg:mt-auto pt-6 lg:pt-0">
          <HeroStatistics />
        </div>
      </div>
      
      {/* Scroll Indicator Placeholder */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden lg:flex flex-col items-center gap-3">
        <span className="text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">
          Scroll
        </span>
        <div className="w-[1px] h-16 bg-border relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-foreground/30" />
        </div>
      </div>
    </HeroContainer>
  );
}
