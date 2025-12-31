import { useEffect, useRef, useState } from "react";

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number;
  className?: string;
  overlayClassName?: string;
}

const ParallaxImage = ({
  src,
  alt,
  speed = 0.5,
  className = "",
  overlayClassName = "",
}: ParallaxImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const rect = containerRef.current.getBoundingClientRect();
      const scrollProgress = (window.innerHeight - rect.top) / (window.innerHeight + rect.height);
      const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
      const parallaxOffset = (clampedProgress - 0.5) * speed * 200;
      
      setOffset(parallaxOffset);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return (
    <div ref={containerRef} className="absolute inset-0 overflow-hidden">
      <img
        src={src}
        alt={alt}
        className={`w-full h-[120%] object-cover transition-transform duration-100 ease-out ${className}`}
        style={{ transform: `translateY(${offset}px)` }}
      />
      {overlayClassName && <div className={`absolute inset-0 ${overlayClassName}`} />}
    </div>
  );
};

export default ParallaxImage;
