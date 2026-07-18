import Image from "next/image";
import { cn } from "@/lib/utils";

export function HeroImage({ 
  src, 
  alt, 
  priority = true, 
  fill = true, 
  overlay = true, 
  className 
}) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        priority={priority}
        className={cn("object-cover object-center transition-transform duration-[1.5s] ease-out group-hover:scale-[1.02]", className)}
        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 60vw"
      />
      
      {overlay && (
        <div className="absolute inset-0 bg-black/5 pointer-events-none transition-opacity duration-700 group-hover:opacity-0" />
      )}
    </>
  );
}
