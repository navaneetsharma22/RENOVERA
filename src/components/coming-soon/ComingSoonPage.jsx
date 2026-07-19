"use client";

import { useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowLeft, Compass } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP, ScrollTrigger);
}

/* ─── Sub-Components ─── */

function ComingSoonBadge({ text = "Currently in Development" }) {
  return (
    <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#C7A76C] border border-[#C7A76C]/30 px-4 py-2 rounded-full">
      <span className="w-1.5 h-1.5 rounded-full bg-[#C7A76C] animate-pulse" />
      {text}
    </span>
  );
}

function ComingSoonIllustration({ className }) {
  return (
    <div className={cn("relative w-64 h-64 md:w-80 md:h-80", className)}>
      {/* Architectural Blueprint SVG */}
      <svg
        viewBox="0 0 320 320"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {/* Outer frame */}
        <rect x="40" y="60" width="240" height="200" stroke="#C7A76C" strokeWidth="0.5" strokeDasharray="4 4" opacity="0.3" />
        
        {/* Building outline */}
        <path d="M80 260 L80 140 L160 100 L240 140 L240 260" stroke="#FAFAFA" strokeWidth="0.8" opacity="0.25" />
        
        {/* Roof peak */}
        <path d="M80 140 L160 100 L240 140" stroke="#C7A76C" strokeWidth="0.8" opacity="0.4" />
        
        {/* Windows */}
        <rect x="100" y="160" width="30" height="35" stroke="#FAFAFA" strokeWidth="0.5" opacity="0.2" />
        <rect x="145" y="160" width="30" height="35" stroke="#FAFAFA" strokeWidth="0.5" opacity="0.2" />
        <rect x="190" y="160" width="30" height="35" stroke="#FAFAFA" strokeWidth="0.5" opacity="0.2" />
        
        {/* Door */}
        <rect x="140" y="215" width="40" height="45" stroke="#C7A76C" strokeWidth="0.6" opacity="0.35" />
        <circle cx="174" cy="238" r="2" fill="#C7A76C" opacity="0.3" />
        
        {/* Floor line */}
        <line x1="40" y1="260" x2="280" y2="260" stroke="#FAFAFA" strokeWidth="0.5" opacity="0.15" />
        
        {/* Dimension lines */}
        <line x1="80" y1="275" x2="240" y2="275" stroke="#C7A76C" strokeWidth="0.3" opacity="0.25" />
        <line x1="80" y1="272" x2="80" y2="278" stroke="#C7A76C" strokeWidth="0.3" opacity="0.25" />
        <line x1="240" y1="272" x2="240" y2="278" stroke="#C7A76C" strokeWidth="0.3" opacity="0.25" />
        <text x="155" y="285" fontSize="6" fill="#C7A76C" opacity="0.3" textAnchor="middle" fontFamily="monospace">24.0m</text>
        
        {/* Cross markers */}
        <line x1="155" y1="95" x2="165" y2="105" stroke="#C7A76C" strokeWidth="0.3" opacity="0.2" />
        <line x1="165" y1="95" x2="155" y2="105" stroke="#C7A76C" strokeWidth="0.3" opacity="0.2" />
        
        {/* Grid dots */}
        {[80, 120, 160, 200, 240].map((x) =>
          [100, 140, 180, 220, 260].map((y) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="0.8" fill="#C7A76C" opacity="0.12" />
          ))
        )}
      </svg>
    </div>
  );
}

function DevelopmentStatus() {
  const statuses = [
    { label: "Design", progress: 100 },
    { label: "Development", progress: 60 },
    { label: "Quality Assurance", progress: 20 },
  ];

  return (
    <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-6 md:p-8 w-full max-w-xs backdrop-blur-sm">
      <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50 mb-6">
        Project Status
      </h3>
      <div className="flex flex-col gap-5">
        {statuses.map((status) => (
          <div key={status.label} className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-white/80 font-medium">{status.label}</span>
              <span className="text-xs text-white/40 font-mono">{status.progress}%</span>
            </div>
            <div className="w-full h-[2px] bg-white/[0.06] rounded-full overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-1000"
                style={{
                  width: `${status.progress}%`,
                  backgroundColor: status.progress === 100 ? "#C7A76C" : "#FAFAFA",
                  opacity: status.progress === 100 ? 0.8 : 0.4,
                }}
              />
            </div>
          </div>
        ))}
      </div>
      <p className="text-[11px] text-[#C7A76C]/60 mt-6 tracking-wider uppercase">Available Soon</p>
    </div>
  );
}

function ComingSoonActions() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <Button size="lg" asChild className="group h-12 px-8 bg-white text-black hover:bg-white/90 active:scale-[0.98] transition-all duration-300">
        <Link href="/projects">
          <span className="font-semibold">View Projects</span>
          <ArrowRight className="ml-3 size-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </Button>
      <Button variant="outline" size="lg" asChild className="group h-12 px-8 bg-transparent border-white/30 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-500">
        <Link href="/">
          <ArrowLeft className="mr-2 size-4 transition-transform duration-300 group-hover:-translate-x-1" />
          <span className="font-semibold">Back to Home</span>
        </Link>
      </Button>
    </div>
  );
}

/* ─── Main Component ─── */

export function ComingSoonPage({ className }) {
  const sectionRef = useRef(null);
  const badgeRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const illustrationRef = useRef(null);
  const actionsRef = useRef(null);
  const statusRef = useRef(null);
  const microcopyRef = useRef(null);

  useGSAP(() => {
    const mm = gsap.matchMedia();

    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.set([badgeRef.current, headingRef.current, descRef.current, actionsRef.current, statusRef.current, microcopyRef.current], {
        y: 30, opacity: 0,
      });
      gsap.set(illustrationRef.current, { y: 20, opacity: 0 });

      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.to(badgeRef.current, { y: 0, opacity: 1, duration: 0.7 }, 0.2)
        .to(headingRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.4)
        .to(descRef.current, { y: 0, opacity: 1, duration: 0.7 }, 0.6)
        .to(illustrationRef.current, { y: 0, opacity: 1, duration: 0.8 }, 0.5)
        .to(actionsRef.current, { y: 0, opacity: 1, duration: 0.7 }, 0.9)
        .to(statusRef.current, { y: 0, opacity: 1, duration: 0.7 }, 1.0)
        .to(microcopyRef.current, { y: 0, opacity: 1, duration: 0.7 }, 1.2);

      // Subtle illustration float
      gsap.to(illustrationRef.current, {
        y: -8,
        duration: 3,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        delay: 1.5,
      });
    });

    mm.add("(prefers-reduced-motion: reduce)", () => {
      gsap.set([badgeRef.current, headingRef.current, descRef.current, illustrationRef.current, actionsRef.current, statusRef.current, microcopyRef.current], {
        y: 0, opacity: 1,
      });
    });

    return () => mm.revert();
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className={cn("relative min-h-screen flex items-center justify-center overflow-hidden", className)}
      style={{ backgroundColor: "#09090B" }}
    >
      {/* Architectural Grid Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.02,
          backgroundImage: `linear-gradient(to right, #FAFAFA 1px, transparent 1px), linear-gradient(to bottom, #FAFAFA 1px, transparent 1px)`,
          backgroundSize: "4rem 4rem",
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_rgba(0,0,0,0.5)_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 max-w-[1200px] relative z-10 py-24 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left Column — Content */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
            <div ref={badgeRef} className="mb-8">
              <ComingSoonBadge />
            </div>

            <h1
              ref={headingRef}
              className="text-4xl md:text-5xl lg:text-[56px] font-bold tracking-tight leading-[1.1] mb-6 max-w-[600px]"
              style={{ color: "#FAFAFA", fontFamily: "var(--font-sans)" }}
            >
              We're Crafting Something{" "}
              <span
                className="italic font-normal block mt-2"
                style={{ color: "#C7A76C", fontFamily: "var(--font-serif), serif" }}
              >
                Exceptional.
              </span>
            </h1>

            <p
              ref={descRef}
              className="text-base md:text-lg leading-loose max-w-[520px] mb-10"
              style={{ color: "rgba(250,250,250,0.6)" }}
            >
              This page is currently under development as we carefully refine every detail
              to deliver the premium experience Renovera is known for. Please check back soon
              or explore our completed work in the meantime.
            </p>

            <div ref={actionsRef} className="mb-12 lg:mb-0">
              <ComingSoonActions />
            </div>
          </div>

          {/* Right Column — Illustration + Status */}
          <div className="flex flex-col items-center gap-10">
            <div ref={illustrationRef}>
              <ComingSoonIllustration />
            </div>
            <div ref={statusRef}>
              <DevelopmentStatus />
            </div>
          </div>
        </div>

        {/* Microcopy */}
        <div ref={microcopyRef} className="mt-16 md:mt-24 text-center">
          <p className="text-xs tracking-[0.2em] uppercase italic" style={{ color: "rgba(199,167,108,0.4)", fontFamily: "var(--font-serif), serif" }}>
            "Great spaces take time. We're putting the finishing touches on this experience."
          </p>
        </div>
      </div>
    </section>
  );
}
