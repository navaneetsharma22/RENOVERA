export function HeroStatistics() {
  const stats = [
    { label: "Projects Completed", value: "500+" },
    { label: "Years Experience", value: "15+" },
    { label: "Client Satisfaction", value: "98%" },
    { label: "Studio", value: "Award Winning" },
  ];

  return (
    <div className="flex flex-wrap items-center gap-y-8 pt-8">
      {stats.map((stat, idx) => (
        <div 
          key={idx} 
          className={`flex flex-col gap-1.5 w-1/2 sm:w-auto sm:flex-1 ${
            idx !== 0 ? "sm:border-l sm:border-border/60 sm:pl-8" : ""
          } ${
            idx % 2 !== 0 ? "pl-8 border-l border-border/60 sm:border-0 sm:pl-0" : ""
          } ${
            idx > 0 && idx % 2 !== 0 && "sm:pl-8 sm:border-l sm:border-border/60"
          }`}
        >
          <span className="text-xl md:text-2xl font-heading font-bold text-foreground tracking-tight">
            {stat.value}
          </span>
          <span className="text-[11px] md:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {stat.label}
          </span>
        </div>
      ))}
    </div>
  );
}
