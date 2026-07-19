"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { animateCinematicHero } from "@/utils/animations";

import { 
  HeroContainer, 
  HeroContent, 
  HeroImage,
  HeroBadge,
  HeroHeading,
  HeroDescription,
  HeroCTAGroup,
  HeroStatistics,
  TrustIndicators,
  FloatingInfoCard,
  FloatingConsultationPanel,
  ScrollIndicator
} from "./index";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

export function Hero() {
  const containerRef = useRef(null);
  const backgroundRef = useRef(null);
  const contentRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descriptionRef = useRef(null);
  const buttonsRef = useRef(null);
  const statsRef = useRef(null);
  const floatingCardRef = useRef(null);
  const panelRef = useRef(null);
  const scrollIndicatorRef = useRef(null);

  useGSAP(() => {
    animateCinematicHero({
      container: containerRef.current,
      background: backgroundRef.current,
      content: contentRef.current,
      badge: badgeRef.current,
      heading: headingRef.current,
      description: descriptionRef.current,
      buttons: buttonsRef.current,
      statistics: statsRef.current,
      floatingCard: floatingCardRef.current,
      panel: panelRef.current,
      scrollIndicator: scrollIndicatorRef.current,
    });

    // Scroll Exit Animation (Parallax / Fade)
    gsap.to(containerRef.current, {
      y: -100,
      opacity: 0.1,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="dark w-full h-full relative">
      <HeroContainer 
        variant="transparent"
        background={
          <div ref={backgroundRef} className="absolute inset-0 w-full h-full">
            <HeroImage 
              src="/images/home_hero_premium.png" 
              alt="Premium modern architectural villa exterior at dusk"
              overlay={false}
            />
            {/* Gradient overlay for readability (dark left, clear right) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent pointer-events-none" />
          </div>
        }
      >
        <div ref={contentRef} className="flex flex-col h-full justify-center pb-24 relative z-10 w-full lg:w-[45%]">
          <HeroContent
            badge={<div ref={badgeRef}><HeroBadge text="Premium Design & Build Studio" variant="primary" className="text-white" /></div>}
            title={<div ref={headingRef}><HeroHeading title="Transforming Spaces. Elevating Living." highlight="Elevating Living." className="text-white" /></div>}
            description={<div ref={descriptionRef}><HeroDescription description="We design and renovate exceptional homes through thoughtful architecture, premium craftsmanship, and personalized project management." className="text-white/80" /></div>}
            buttons={
              <div ref={buttonsRef}>
                <HeroCTAGroup 
                  primaryButton={{ label: "Book a Consultation", href: "/contact" }} 
                  secondaryButton={{ label: "Explore Projects", href: "/projects" }} 
                />
              </div>
            }
            statistics={
              <div ref={statsRef}>
                <TrustIndicators 
                  className="mt-12"
                  items={[
                    { value: "500+", label: "Projects Completed" },
                    { value: "15+", label: "Years Experience" },
                    { value: "98%", label: "Client Satisfaction" },
                    { value: "Award", label: "Winning Studio" },
                  ]}
                />
              </div>
            }
          />
        </div>
        
        {/* Floating Statistics Card */}
        <div ref={floatingCardRef} className="hidden lg:block absolute top-1/2 right-12 -translate-y-1/2 z-10 w-full max-w-[320px]">
          <FloatingInfoCard 
            title="Global Reach"
            className="rounded-xl shadow-sm border-border/50 p-8"
            items={[
              { label: "Projects Completed", value: "520+" },
              { label: "Cities Served", value: "25+" },
              { label: "Client Satisfaction", value: "98%" },
            ]}
          />
        </div>

        {/* Floating Consultation Panel */}
        <div ref={panelRef} className="absolute bottom-6 left-4 right-4 lg:left-1/2 lg:-translate-x-1/2 lg:w-full lg:max-w-5xl z-20">
          <FloatingConsultationPanel />
        </div>

        {/* Scroll Indicator */}
        <div ref={scrollIndicatorRef} className="absolute bottom-1/2 right-8 hidden lg:flex z-10">
          <ScrollIndicator variant="line" className="text-white" />
        </div>
      </HeroContainer>
    </div>
  );
}
