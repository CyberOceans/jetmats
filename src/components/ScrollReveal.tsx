import { ReactNode } from 'react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { cn } from '@/lib/utils';

type AnimationVariant = 
  | 'fade-up' 
  | 'fade-down' 
  | 'fade-left' 
  | 'fade-right' 
  | 'zoom-in' 
  | 'zoom-out'
  | 'flip-up'
  | 'slide-up';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: AnimationVariant;
  delay?: number;
  duration?: number;
  className?: string;
  threshold?: number;
}

const variantStyles: Record<AnimationVariant, { hidden: string; visible: string }> = {
  'fade-up': {
    hidden: 'opacity-0 translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-down': {
    hidden: 'opacity-0 -translate-y-12',
    visible: 'opacity-100 translate-y-0',
  },
  'fade-left': {
    hidden: 'opacity-0 translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'fade-right': {
    hidden: 'opacity-0 -translate-x-12',
    visible: 'opacity-100 translate-x-0',
  },
  'zoom-in': {
    hidden: 'opacity-0 scale-90',
    visible: 'opacity-100 scale-100',
  },
  'zoom-out': {
    hidden: 'opacity-0 scale-110',
    visible: 'opacity-100 scale-100',
  },
  'flip-up': {
    hidden: 'opacity-0 rotateX-90',
    visible: 'opacity-100 rotateX-0',
  },
  'slide-up': {
    hidden: 'opacity-0 translate-y-20',
    visible: 'opacity-100 translate-y-0',
  },
};

const ScrollReveal = ({
  children,
  variant = 'fade-up',
  delay = 0,
  duration = 700,
  className,
  threshold = 0.1,
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollReveal({ threshold });
  const styles = variantStyles[variant];

  return (
    <div
      ref={ref}
      className={cn(
        'transition-all ease-out',
        isVisible ? styles.visible : styles.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
