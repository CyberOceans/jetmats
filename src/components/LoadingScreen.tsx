import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
  minDuration?: number;
}

const LoadingScreen = ({ onLoadingComplete, minDuration = 2500 }: LoadingScreenProps) => {
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onLoadingComplete, 800);
    }, minDuration);

    return () => clearTimeout(timer);
  }, [onLoadingComplete, minDuration]);

  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] flex items-center justify-center bg-background transition-all duration-800',
        isExiting && 'opacity-0 scale-105'
      )}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '500ms' }} />
      </div>

      {/* Logo container */}
      <div className="relative flex flex-col items-center gap-8">
        {/* Animated rings */}
        <div className="relative">
          <div className="absolute inset-0 w-40 h-40 border border-gold/20 rounded-full animate-[spin_8s_linear_infinite]" />
          <div className="absolute inset-2 w-36 h-36 border border-gold/30 rounded-full animate-[spin_6s_linear_infinite_reverse]" />
          <div className="absolute inset-4 w-32 h-32 border border-gold/40 rounded-full animate-[spin_4s_linear_infinite]" />
          
          {/* Center logo */}
          <div className="w-40 h-40 flex items-center justify-center">
            <div className="relative">
              {/* Jet icon with glow */}
              <div className="absolute inset-0 blur-xl bg-gold/30 animate-pulse" />
              <svg
                viewBox="0 0 100 100"
                className="w-20 h-20 text-gold animate-logo-reveal"
                fill="currentColor"
              >
                <path d="M50 10L85 50L50 90L15 50L50 10Z" opacity="0.1" />
                <path d="M50 20L75 50L50 80L25 50L50 20Z" opacity="0.2" />
                <path d="M50 30L65 50L50 70L35 50L50 30Z" opacity="0.4" />
                <circle cx="50" cy="50" r="8" className="animate-pulse" />
              </svg>
            </div>
          </div>
        </div>

        {/* Logo text */}
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-4xl md:text-5xl font-heading font-bold tracking-[0.3em] text-foreground animate-text-reveal">
            JETMATAS
          </h1>
          <div className="h-px w-0 bg-gradient-to-r from-transparent via-gold to-transparent animate-line-expand" />
          <p className="text-gold/80 text-sm tracking-[0.5em] uppercase animate-text-reveal-delayed">
            Private Aviation
          </p>
        </div>

        {/* Loading indicator */}
        <div className="flex gap-1 mt-4">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full bg-gold/60 animate-bounce"
              style={{ animationDelay: `${i * 150}ms` }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
